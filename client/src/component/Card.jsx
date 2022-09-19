import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { API } from "../config/api";

function Card({ id, title, year, poster }) {
  return (
    <>
      <Link to={`/play/${id}`} className="text-decoration-none">
        <div className="text-white">
          <img src={poster} alt="Card" style={{ width: "150px" }} />
          <h1 className="fw-semibold mt-2" style={{ fontSize: "14px" }}>
            {title}
          </h1>
          <p
            className="fw-light text-muted"
            style={{ fontSize: "13px", marginTop: "-7px" }}>
            {year}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
