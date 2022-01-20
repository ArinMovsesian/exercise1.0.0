import classes from "./Header.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavIcon from "../../assets/images/navIcon.png";
import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className={classes.container}>
        <Row>
          <Col>
            <div>
              <img src={NavIcon} />
            </div>
          </Col>
          <Col>
            <div className={classes.profileImageContainer}>
              <img src={Profile} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={classes.title}>Welcome, Flightio</h1>
            <h2 className={classes.desc}>Bring Designer Lamps This Diwali</h2>
          </Col>
        </Row>
    </div>
  );
};
export default Header;
