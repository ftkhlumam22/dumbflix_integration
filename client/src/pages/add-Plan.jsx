import React, { useContext, useEffect } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/add-plan.css";
import Form from "react-bootstrap/Form";
import { IoMdAttach } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import * as jose from "jose";

function AddPlan() {
  const [state] = useContext(UserContext);
  let navigate = useNavigate();
  let user = localStorage.getItem("token");
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-DDtfPItsQbv_cvb1";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  const handleBuy = useMutation(async (e) => {
    try {
      e.preventDefault();
      let tokens = localStorage.getItem("token");
      console.log(tokens);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + tokens,
        },
      };

      let claims = jose.decodeJwt(user);

      console.log(claims);

      const data = {
        user_id: claims.id,
      };

      const body = JSON.stringify(data);

      console.log(body);

      const response = await API.post("/transaction", body, config);
      console.log(response);

      // Create variabel for store token payment from response here ...
      const token = response.data.data.token;

      // Init Snap for display payment page with token here ...
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          navigate("/");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          navigate("/");
        },
        onError: function (result) {
          /* You may add your own implementation here */
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("You closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
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
        <>
          <Button
            className="w-100 mt-3"
            style={{ background: "red", border: "1px solid red" }}
            onClick={(e) => handleBuy.mutate(e)}>
            Berlangganan
          </Button>{" "}
        </>
      </div>
    </div>
  );
}

export default AddPlan;
