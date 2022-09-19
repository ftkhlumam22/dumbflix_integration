import { React, useState, forwardRef, useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Figure,
  Dropdown,
} from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Logo from "../assets/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CgProfile, CgFilm } from "react-icons/cg";
import { MdPayment, MdLogout } from "react-icons/md";
import { useEffect } from "react";
import { UserContext } from "../context/userContext";
import * as jose from "jose";
import { generateFromString } from "generate-avatar";

function Navbars() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  //validasi Login
  const [validlogin, setValidlogin] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  const [claims, setClaims] = useState({});

  let navigate = useNavigate();

  let user = localStorage.getItem("token");

  //Active Pages
  let activeStyle = {
    textDecoration: "none",
    fontWeight: "10px",
    color: "white",
  };

  let nonActive = {
    textDecoration: "none",
    color: "grey",
  };

  //Dropdown Custom
  const customDropdown = forwardRef(({ onClick }, ref) => (
    <Figure
      style={{
        paddingLeft: "150px",
        marginBottom: "35px",
        paddingRight: "30px",
        cursor: "pointer",
      }}
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      <Figure.Image
        style={{
          position: "absolute",
          maxWidth: "45px",
          height: "45px",
          borderRadius: "100%",
        }}
        alt="Profile"
        src={`data:image/svg+xml;utf8,${generateFromString(claims.email)}`}
      />
    </Figure>
  ));

  // Logout
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  //   handle login form
  const openLogin = () => {
    setLogin(true);
  };
  const closeLogin = () => {
    setLogin(false);
  };

  //   handle register form
  const openRegister = () => {
    setRegister(true);
  };
  const closeRegister = () => {
    setRegister(false);
  };

  useEffect(() => {
    if (user) {
      setValidlogin(true);
      setClaims(jose.decodeJwt(user));
    } else {
      setValidlogin(false);
    }
  }, [user]);

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container className="d-flex align-items-center">
          <Nav className="fw-semibold">
            <Nav.Link>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : nonActive)}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/series"
                style={({ isActive }) => (isActive ? activeStyle : nonActive)}>
                Tv Show
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/movies"
                style={({ isActive }) => (isActive ? activeStyle : nonActive)}>
                Movies
              </NavLink>
            </Nav.Link>
          </Nav>
          <Navbar.Brand>
            <img src={Logo} alt="dumbflix" />
          </Navbar.Brand>
          <Nav className="gap-3">
            {validlogin ? (
              <Dropdown>
                <Dropdown.Toggle as={customDropdown}></Dropdown.Toggle>
                <Dropdown.Menu className="bg-dark mt-4 ms-4">
                  <div
                    style={{
                      position: "absolute",
                      width: 0,
                      height: 0,
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderBottom: "20px solid #212529",
                      marginLeft: "130px",
                      marginTop: "-25px",
                    }}></div>
                  {claims.isAdmin === false ? (
                    <>
                      <Dropdown.Item className="d-flex align-items-center">
                        <Link
                          to={`/account/${claims.id}`}
                          className="text-white fw-semibold text-decoration-none">
                          <CgProfile
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex align-items-center gap-2 text-white fw-semibold fs-6 pb-2 border-bottom border-white">
                        <Link
                          to="/payment"
                          className="text-white fw-semibold text-decoration-none">
                          <MdPayment
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Pay
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="d-flex align-items-center gap-2 text-white fw-semibold"
                        onClick={logout}>
                        <MdLogout color="red" style={{ fontSize: "20px" }} />
                        Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item className="d-flex align-items-center">
                        <Link
                          to={`/account/${claims.id}`}
                          className="text-white fw-semibold text-decoration-none">
                          <CgProfile
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex align-items-center">
                        <Link
                          to="/list-film"
                          className="text-white fw-semibold text-decoration-none">
                          <CgFilm
                            color="red"
                            style={{ fontSize: "20px" }}
                            className="me-2"
                          />
                          Film
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="d-flex align-items-center gap-2 text-white fw-semibold"
                        onClick={logout}>
                        <MdLogout color="red" style={{ fontSize: "20px" }} />
                        Logout
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <RegisterForm
                  register={register}
                  closeRegister={closeRegister}
                  openLogin={openLogin}
                />
                <Button
                  size="sm"
                  className="px-4 py-1 fw-bold bg-white text-danger"
                  onClick={openRegister}>
                  Register
                </Button>
                <LoginForm
                  login={login}
                  closeLogin={closeLogin}
                  openRegister={openRegister}
                  setValidlogin={setValidlogin}
                />
                <Button
                  variant="danger"
                  size="sm"
                  className="px-4 py-1 fw-bold"
                  onClick={openLogin}>
                  Login
                </Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
