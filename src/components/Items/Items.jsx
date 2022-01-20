import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../store/items-actions";
import Loading from "../Loading/Loading";
import Item from "./Item/Item";
import classes from "./Items.module.css";
const Items = () => {
  const items = useSelector((state) => state.items.items);
  const loadingStatus = useSelector((state) => state.items.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <main className={classes.container}>
      <div className={classes.loadingContainer}>
        {loadingStatus && <Loading />}
      </div>
      {items.length == 0 && <h1 className={classes.noItemMessage}>No Items</h1>}
      {items.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </main>
  );
};
export default Items;
