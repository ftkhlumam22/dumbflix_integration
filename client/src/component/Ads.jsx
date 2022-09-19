import React from "react";
import { Button, Carousel } from "react-bootstrap";
import ads from "../assets/img_1.png";
import title from "../assets/title_1.png";
import style from "../assets/css/gradient.module.css";
import ads2 from "../assets/img_2.png";
import title2 from "../assets/title_2.png";
import ads3 from "../assets/img_3.png";
import title3 from "../assets/title_3.png";
import { Link } from "react-router-dom";

function Ads() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={ads} alt="First slide" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center w-100 h-100">
          <img
            className="mb-2"
            style={{ width: "auto", maxWidth: "500px" }}
            src={title}
            alt="title"
          />
          <div>
            <p
              className="my-2"
              style={{
                width: "450px",
                fontSize: "15px",
                textAlign: "justify",
                textShadow: "0px 2px 3px gray",
              }}>
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beast
            </p>
            <div className="d-flex align-items-center gap-3">
              <p
                style={{
                  fontSize: "14px",
                  textShadow: "0px 2px 3px gray",
                }}>
                2019
              </p>
              <p
                className="border border-1 px-2 rounded shadow-sm"
                style={{
                  fontSize: "14px",
                  textShadow: "0px 2px 3px gray",
                }}>
                TV Series
              </p>
            </div>
          </div>
          <Link to="/play/1">
            <Button className="px-5 fw-semibold shadow-sm" variant="danger">
              WATCH NOW!
            </Button>
          </Link>
        </Carousel.Caption>
        <div className={style.gradient}></div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ads2} alt="First slide" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center w-100 h-100">
          <img
            className="mb-2"
            style={{ width: "auto", maxWidth: "500px" }}
            src={title2}
            alt="title"
          />
          <div>
            <p
              className="my-2"
              style={{
                width: "450px",
                fontSize: "15px",
                textAlign: "justify",
                textShadow: "0px 2px 3px gray",
              }}>
              Money Heist is a crime drama on Netflix - originally called La
              Casa de Papel. Money Heist season 3 has just been released by the
              streaming service. The plot reads: "Eight thieves take hostages
              and lock themselves in the Royal Mint of Spain as a criminal
              mastermind manipulates the police to carry out his plan."
            </p>
            <div className="d-flex align-items-center gap-3">
              <p
                style={{
                  fontSize: "14px",
                  textShadow: "0px 2px 3px gray",
                }}>
                2017
              </p>
              <p
                className="border border-1 px-2 rounded shadow-sm"
                style={{
                  fontSize: "14px",
                  textShadow: "0px 2px 3px gray",
                }}>
                TV Series
              </p>
            </div>
          </div>
          <Button className="px-5 fw-semibold shadow-sm" variant="danger">
            WATCH NOW!
          </Button>
        </Carousel.Caption>
        <div className={style.gradient}></div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={ads3} alt="First slide" />
        <Carousel.Caption className="d-flex flex-column align-items-start justify-content-center w-100 h-100">
          <img
            className="mb-2"
            style={{ width: "auto", maxWidth: "500px" }}
            src={title3}
            alt="title"
          />
          <div>
            <p
              className="my-2"
              style={{
                width: "450px",
                fontSize: "15px",
                textAlign: "justify",
                textShadow: "0px 2px 3px gray",
              }}>
              In Gotham City, mentally troubled comedian Arthur Fleck is
              disregarded and mistreated by society. He then embarks on a
              downward spiral of revolution and bloody crime. This path brings
              him face-to-face with his alter-ego: the Joker.
            </p>
            <div className="d-flex align-items-center gap-3">
              <p
                style={{
                  fontSize: "14px",
                  textShadow: "0px 2px 3px gray",
                }}>
                2019
              </p>
              <p
                className="border border-1 px-2 rounded shadow-sm"
                style={{
                  fontSize: "14px",
                  textShadow: "0px 2px 3px gray",
                }}>
                Movies
              </p>
            </div>
          </div>
          <Button className="px-5 fw-semibold shadow-sm" variant="danger">
            WATCH NOW!
          </Button>
        </Carousel.Caption>
        <div className={style.gradient}></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Ads;
