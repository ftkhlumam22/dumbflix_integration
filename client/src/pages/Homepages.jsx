import React from "react";
import Ads from "../component/Ads";
import Cards from "../component/Card";
import { BsFillArrowRightCircleFill as Arrow } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";

function Homepages() {
  const title = "Home";
  document.title = "Dumbflix | " + title;

  let { data: movies } = useQuery("moviesCache", async () => {
    const response = await API.get(`/category/1`);
    return response.data.data.films;
  });

  let { data: series } = useQuery("seriesCache", async () => {
    const response = await API.get(`/category/2`);
    return response.data.data.films;
  });

  return (
    <div style={{ background: "black" }}>
      <Ads />
      <div style={{ background: "black", padding: "20px" }}>
        <div className="mx-4 gap-5">
          <p className="fs-6 fw-semibold text-white">Movies</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {movies?.slice(0, 6).map((data) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  poster={data.thumbnailfilm}
                />
              );
            })}
            <Link
              to="/movies"
              className="text-decoration-none d-flex flex-column h-full justify-content-center gap-2">
              <div className="text-white">
                <Arrow />
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>See More</p>
              </div>
            </Link>
          </div>
          <p className="fs-6 fw-semibold text-white mt-5">TV Series</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {series?.slice(0, 6).map((data) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  poster={data.thumbnailfilm}
                />
              );
            })}
            <Link
              to="/series"
              className="text-decoration-none d-flex flex-column h-full justify-content-center gap-2">
              <div className="text-white">
                <Arrow />
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>See More</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepages;
