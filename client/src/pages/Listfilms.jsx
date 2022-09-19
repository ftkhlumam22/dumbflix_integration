import React from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Cards from "../component/Card";
import { API } from "../config/api";

function Listfilms() {
  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get(`/films`);
    return response.data.data;
  });
  return (
    <div style={{ background: "black" }}>
      <div className="px-5 py-5">
        <div className="mx-4 gap-5">
          <div className="d-flex flex row-cols-2 mb-3">
            <p className="fs-6 fw-semibold text-white">List Film</p>
            <Link
              to="/add-film"
              className="d-flex justify-content-end text-decoration-none">
              <Button variant="danger" size="sm" className="px-4 py-1 fw-bold">
                Add Film
              </Button>
            </Link>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {films?.map((data) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  poster={data.thumbnailfilm}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listfilms;
