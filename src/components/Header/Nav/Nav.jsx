import classes from "./Nav.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartIcon from "../../../assets/images/cartIcon.png";
import HeartIcon from "../../../assets/images/heartIcon.png";
import SaveIcon from "../../../assets/images/saveIcon.png";
import HomeIcon from "../../../assets/images/homeIcon.png";
const Nav = () => {
  return (
    <>
      <nav className={classes.container}>
        <Row>
          <Col>
            <div className={classes.iconContainer}>
              <img src={HomeIcon} />
            </div>
          </Col>
          <Col>
            <div className={classes.iconContainer}>
              <img src={CartIcon} />
            </div>
          </Col>
          <Col>
            <div className={classes.iconContainer}>
              <img src={SaveIcon} />
            </div>
          </Col>
          <Col>
            <div className={classes.iconContainer}>
              <img src={HeartIcon} />
            </div>
          </Col>
        </Row>
      </nav>
    </>
  );
};
export default Nav;
