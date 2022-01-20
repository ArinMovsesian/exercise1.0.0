import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  }, [navigate]);
  const loginH = () => {
    localStorage.setItem("token", "123");
    navigate("/main");
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.imgContainer}></div>
        <div className={classes.btnContainer}>
          <Button size="lg" variant="light" onClick={loginH}>
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};
export default Login;
