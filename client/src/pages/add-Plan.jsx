import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/add-plan.css";
import Form from "react-bootstrap/Form";
import { IoMdAttach } from "react-icons/io";
import Button from "react-bootstrap/Button";

function AddPlan() {
  return (
    <div
      style={{ background: "black", height: "90.5vh" }}
      className="d-flex align-items-center justify-content-center">
      <div>
        <h4 className="text-white text-center fw-semibold fs-1 mb-4">
          Premium
        </h4>

        <div style={{ textAlign: "center" }}>
          <p className="text-white">
            Bayar sekarang dan streaming film-film yang kekinian dari
            <strong style={{ color: "#E50914" }}> DUMBFLIX</strong>
            <br></br>
            <strong style={{ color: "#E50914" }}> DUMBFLIX</strong>: 089123412
          </p>
        </div>

        <div className="mb-3">
          <Form.Control
            placeholder="Input your account number"
            style={{ background: "#343434", color: "white" }}
          />
        </div>

        <div className="mb-5 pb-3">
          <>
            <label
              htmlFor="thumbnail"
              className="px-3 py-1 attachFile fw-semibold"
              style={{
                background: "white",
                border: "1px solid white",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}>
              Attach proof of transfer
              <IoMdAttach
                className="ms-2 attachFile"
                style={{ color: "red", fontSize: "22px" }}
              />
            </label>
            <input id="thumbnail" type="file" hidden></input>
          </>
        </div>

        <>
          <Button
            className="w-100 mt-3"
            style={{ background: "red", border: "1px solid red" }}>
            Kirim
          </Button>{" "}
        </>
      </div>
    </div>
  );
}

export default AddPlan;
