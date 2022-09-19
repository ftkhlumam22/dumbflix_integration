package main

import (
	"fmt"
	"net/http"
	"testdumpflix/database"
	"testdumpflix/pkg/mysql"
	"testdumpflix/routes"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {

	mysql.DatabaseInit()

	// run migration
	database.RunMigration()

	r := mux.NewRouter()

	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	routes.RouteInit(r.PathPrefix("/api/v1/").Subrouter())

	var AllowedHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	var AllowedMethods = handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS", "PATCH", "DELETE"})
	var AllowedOrigins = handlers.AllowedOrigins([]string{"*"})

	var port = "5000"
	fmt.Println("server running localhost:" + port)

	http.ListenAndServe("localhost:"+port, handlers.CORS(AllowedHeaders, AllowedMethods, AllowedOrigins)(r))
}
