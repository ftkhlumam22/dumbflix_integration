import React from "react";
import { useQuery } from "react-query";
import Ads from "../component/Ads";
import Cards from "../component/Card";
import { API } from "../config/api";

function Movies() {
  let { data: movies } = useQuery("moviesCache", async () => {
    const response = await API.get(`/category/1`);
    return response.data.data.films;
  });
  return (
    <div style={{ background: "black" }}>
      <Ads />
      <div style={{ background: "black", padding: "20px" }}>
        <div className="mx-4 gap-5">
          <p className="fs-6 fw-semibold text-white">Movies</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {movies?.map((data) => {
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

export default Movies;
