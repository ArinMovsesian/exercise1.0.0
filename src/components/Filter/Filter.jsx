import { useState } from "react";
import classes from "./Filter.module.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { itemsActions } from "../../store/items-slice";
const Filter = () => {
  const items = useSelector((state) => state.items.copyItem);
  const loadingStatus = useSelector((state) => state.items.loading);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const dispatch = useDispatch();

  const changeH = (e) => {
    console.log(e.currentTarget.value);
    dispatch(itemsActions.filterItem({value: e.currentTarget.value}));
    setRadioValue(e.currentTarget.value);
  };
  return (
    <Row>
      <Col>
        <div className={classes.container}>
          {items.length == 0 && <p>loading filter...</p>}
          {items.length !== 0 &&
            items.map((item, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-dark"
                name="radio"
                value={item.title}
                checked={radioValue === item.title}
                // onChange={(e) => setRadioValue(e.currentTarget.value)}
                onChange={changeH}
                className={classes.radio}
              >
                {item.title}
              </ToggleButton>
            ))}
          {items.length !== 0 && (
            <ToggleButton
              id={`radio-all`}
              type="radio"
              variant="outline-dark"
              name="radio"
              value={"all"}
              checked={radioValue === "all"}
              // onChange={(e) => setRadioValue(e.currentTarget.value)}
              onChange={changeH}
              className={classes.radio}
            >
              all
            </ToggleButton>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default Filter;
