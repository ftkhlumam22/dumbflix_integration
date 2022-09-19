import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/detail-account.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { RiVipFill } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../config/api";
import { generateFromString } from "generate-avatar";

function DetailAccount() {
  const params = useParams();
  let id = params.id;

  let { data: profile } = useQuery("profileCache", async () => {
    const response = await API.get(`/user/${id}`);
    return response.data.data;
  });

  const title = "Profile";
  document.title = "Dumbflix | " + title;

  return (
    <div
      style={{ background: "black", height: "90.5vh" }}
      className="d-flex align-items-center justify-content-center">
      <div
        style={{
          background: "#1f1f1f",
          padding: "25px",
          borderRadius: "5px",
          width: "40rem",
        }}>
        {profile !== undefined ? (
          <>
            <Row>
              <Col sm={6} style={{ marginTop: "-5px", paddingRight: "55px" }}>
                <>
                  <h4 className="mb-5 text-white">Personal Info</h4>
                </>
                <div className="d-flex mb-3">
                  <CgProfile className="CgProfile me-3" />
                  <span style={{ marginTop: "-3px" }}>
                    <p className="text-white" style={{ fontSize: "14px" }}>
                      {profile.profile.full_name}
                    </p>
                    <p
                      className="text-muted"
                      style={{ marginTop: "-15px", fontSize: "12px" }}>
                      Full name
                    </p>
                  </span>
                </div>

                <div className="d-flex mb-3">
                  <FiMail className="FiMail me-3" />
                  <span style={{ marginTop: "-3px" }}>
                    <p className="text-white" style={{ fontSize: "14px" }}>
                      {profile.email}
                    </p>
                    <p
                      className="text-muted"
                      style={{ marginTop: "-15px", fontSize: "12px" }}>
                      Email
                    </p>
                  </span>
                </div>

                {profile.isAdmin ? (
                  <div className="d-flex mb-3">
                    <RiVipFill className="RiVipFill me-3" />
                    <span style={{ marginTop: "-3px" }}>
                      <p className="text-white" style={{ fontSize: "14px" }}>
                        Admin
                      </p>
                      <p
                        className="text-muted"
                        style={{ marginTop: "-15px", fontSize: "12px" }}>
                        Status
                      </p>
                    </span>
                  </div>
                ) : (
                  <div className="d-flex mb-3">
                    <RiVipFill className="RiVipFill me-3" />
                    <span style={{ marginTop: "-3px" }}>
                      <p className="text-white" style={{ fontSize: "14px" }}>
                        Active
                      </p>
                      <p
                        className="text-muted"
                        style={{ marginTop: "-15px", fontSize: "12px" }}>
                        Status
                      </p>
                    </span>
                  </div>
                )}

                <div className="d-flex mb-3">
                  <TbGenderBigender className="TbGenderBigender me-3" />
                  <span style={{ marginTop: "-3px" }}>
                    <p className="text-white" style={{ fontSize: "14px" }}>
                      {profile.profile.gender}
                    </p>
                    <p
                      className="text-muted"
                      style={{ marginTop: "-15px", fontSize: "12px" }}>
                      Gender
                    </p>
                  </span>
                </div>

                <div className="d-flex mb-3">
                  <BsFillTelephoneFill className="BsFillTelephoneFill me-3" />
                  <span style={{ marginTop: "-3px" }}>
                    <p className="text-white" style={{ fontSize: "14px" }}>
                      {profile.profile.phone}
                    </p>
                    <p
                      className="text-muted"
                      style={{ marginTop: "-15px", fontSize: "12px" }}>
                      Mobile Phone
                    </p>
                  </span>
                </div>

                <div className="d-flex">
                  <SiGooglemaps className="SiGooglemaps me-3" />
                  <span style={{ marginTop: "-3px" }}>
                    <p className="text-white" style={{ fontSize: "14px" }}>
                      {profile.profile.address}
                    </p>
                    <p
                      className="text-muted"
                      style={{ marginTop: "-15px", fontSize: "12px" }}>
                      Address
                    </p>
                  </span>
                </div>
              </Col>
              <Col sm={6} style={{ paddingLeft: "55px" }}>
                <img
                  src={`data:image/svg+xml;utf8,${generateFromString(
                    profile.email
                  )}`}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "maxHeight",
                    borderRadius: "5px",
                  }}></img>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <p className="text-white">Data Tidak Ditemukan</p>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailAccount;
