import classes from './Search.module.css';
import SearchIcon from '../../assets/images/searchIcon.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { itemsActions } from '../../store/items-slice';
const Search = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const searchHandler = () => {
    console.log(searchRef.current.value);
    dispatch(itemsActions.searchItem({value: searchRef.current.value}))
  }
  return (
    <>
      <Row>
        <Col xs={9}>
          <div className={classes.searchBoxContainer}>
              <input type="text" placeholder="search Diwali lamps" ref={searchRef}/>
          </div>
        </Col>
        <Col xs={3}>
          <div className={classes.searchBtnContainer}>
              <button onClick={searchHandler}><img src={SearchIcon} /></button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Search;
