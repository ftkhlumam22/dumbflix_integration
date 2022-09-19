import React from "react";
import { Col, Row } from "react-bootstrap";
import Image1 from "../assets/img_1.png";
import style from "../assets/css/blur.module.css";

function DetailsDescription({
  title,
  year,
  poster,
  desc,
  thumbnail,
  title_episode,
}) {
  return (
    <>
      <Row className="w-100 my-5">
        <Col lg={7}>
          <div className="d-flex gap-4">
            <img src={poster} alt="" style={{ width: "230px" }} />
            <div className="my-3">
              <h1 className="fs-2">{title}</h1>
              <div className="d-flex gap-4 my-2 mt-4">
                <p style={{ color: "#929292", fontSize: "12px" }}>{year}</p>
                <p
                  className="border border-1 border-secondary px-2 rounded shadow-sm"
                  style={{
                    fontSize: "12px",
                    color: "#929292",
                  }}>
                  TV Series
                </p>
              </div>
              <p style={{ textAlign: "justify" }}>{desc}</p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <img
              src={thumbnail}
              alt="Episode1"
              width="440px"
              className={style.blur}
            />
            <p className="align-self-start">{title_episode}</p>
          </div>
          <div>
            <p
              className="fw-semibold"
              style={{
                fontSize: "18px",
                position: "sticky",
                marginTop: "-165px",
                marginLeft: "165px",
                textShadow: "0px 2px 3px #0019",
              }}>
              In Play Now
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DetailsDescription;
