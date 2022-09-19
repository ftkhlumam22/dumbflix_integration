import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Homepages from "./pages/Homepages";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import DetailAccount from "./pages/detail-account";
import AddPlan from "./pages/add-Plan";
import AdminPanel from "./pages/admin-panel";
import Listfilms from "./pages/Listfilms";
import AddFilm from "./pages/add-film";
import * as jose from "jose";
import ProtectedRoute from "./component/ProtectedRoute";
import Landing from "./pages/Landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [claim, setClaim] = useState({});
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    try {
      const akun = localStorage.getItem("token");
      if (akun) {
        setClaim(jose.decodeJwt(akun));
        setAdmin(claim.isAdmin);
      } else {
        setClaim({});
        setAdmin(null);
      }
    } catch (e) {
      console.log(e);
    }
  }, [claim]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/play/:id" element={<Details />} />
        <Route path="/account/:id" element={<DetailAccount />} />
        <Route path="/payment" element={<AddPlan />} />
        <Route path="/list-transaction" element={<AdminPanel />} />
        <Route
          path="/list-film"
          element={
            <ProtectedRoute admin={admin}>
              <Listfilms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-film"
          element={
            <ProtectedRoute admin={admin}>
              <AddFilm />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
