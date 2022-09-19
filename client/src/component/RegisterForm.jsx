import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form, CloseButton, Alert } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { useMutation } from "react-query";
import { API } from "../config/api";

function RegisterForm({ register, closeRegister, openLogin }) {
  let navigate = useNavigate();
  let initialState = {
    email: "",
    password: "",
    full_name: "",
    phone: "",
    gender: "",
    address: "",
  };

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState(initialState);

  const { email, password, full_name, phone, gender, address } = form;

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
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);
      console.log(response);
      if (response.data.code === 200) {
        const alert = (
          <Alert variant="success" className="py-1">
            Register Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          email: "",
          password: "",
          full_name: "",
          phone: "",
          gender: "",
          address: "",
        });
        gotoLogin();
      }
    } catch (error) {
      if (error.response.data.code === 409) {
        const alert = (
          <Alert variant="warning" className="py-1">
            Email was Registered
          </Alert>
        );
        setMessage(alert);
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Register Failed
          </Alert>
        );
        setMessage(alert);
        console.log(error);
      }
      setForm({
        email: "",
        password: "",
        full_name: "",
        phone: "",
        gender: "",
        address: "",
      });
    }
  });

  const gotoLogin = () => {
    closeRegister();
    openLogin();
  };
  return (
    <Modal
      show={register}
      onHide={closeRegister}
      animation={true}
      centered
      size="sm">
      <div className="text-white rounded" style={{ background: "#141414" }}>
        <Modal.Header className="border-0" style={{ marginBottom: "-10px" }}>
          <Modal.Title className="fs-5 fw-semibold">Register</Modal.Title>
          <CloseButton variant="white" onClick={closeRegister} />
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
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="full_name"
                value={full_name}
                onChange={handleChange}
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="gender"
                value={gender}
                onChange={handleChange}
                placeholder="Gender"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                placeholder="Address"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Button
              size="md"
              className="px-4 py-2 fw-bold bg-white text-danger"
              style={{ width: "250px" }}
              type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Don't have an account ? Klik{" "}
            <a
              onClick={gotoLogin}
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

export default RegisterForm;
