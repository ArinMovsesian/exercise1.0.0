import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Item.module.css";
const Item = (props) => {
console.log(props)
  return (
    <div className={classes.container}>
      <Row>
        <Col>
          <Row>
            <Col>
              <div className={classes.imageContainer}>
                <img src={props.source} />
              </div>
            </Col>
            <Col>
              <div className={classes.textContainer}>
                <h1>{props.title}</h1>
                <h2>{props.desc}</h2>
                <h3>{props.price}$</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Item;
