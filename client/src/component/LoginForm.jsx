import React, { useContext, useState } from "react";
import { Modal, Button, Form, CloseButton, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import { useMutation } from "react-query";

function LoginForm({ login, closeLogin, openRegister, setValidlogin }) {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (response.data.data.isAdmin === true) {
          navigate("/list-film");
        } else {
          navigate("/");
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Login Success
          </Alert>
        );
        setMessage(alert);
        closeLogin();
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  //handle to register
  const gotoRegister = () => {
    closeLogin();
    openRegister();
  };

  return (
    <Modal show={login} onHide={closeLogin} animation={true} centered size="sm">
      <div className="text-white rounded" style={{ background: "#141414" }}>
        <Modal.Header className="border-0" style={{ marginBottom: "-10px" }}>
          <Modal.Title className="fs-5 fw-semibold">Login</Modal.Title>
          <CloseButton variant="white" onClick={closeLogin} />
        </Modal.Header>
        <Modal.Body className="mx-2">
          {message && message}
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </Form.Group>
            <Button
              className="fw-bold"
              style={{ width: "250px" }}
              variant="danger"
              type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Already have an account ? Klik{" "}
            <a
              onClick={gotoRegister}
              style={{
                textDecoration: "none",
                color: "gray",
                cursor: "pointer",
              }}
              className="fw-semibold">
              Here
            </a>
          </p>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default LoginForm;
