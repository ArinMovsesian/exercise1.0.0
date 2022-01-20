import { itemsActions } from "./items-slice";
const fetchData = () => {
  return async (dispatch) => {
    dispatch(itemsActions.loading({ status: true }));
    setTimeout(() => {
      dispatch(
        itemsActions.fetchItems({
          items: [
            {
              source: "https://picsum.photos/139/137",
              title: "title1",
              desc: "desc1",
              price: "50.00",
            },
            {
              source: "https://picsum.photos/139/137",
              title: "title2",
              desc: "desc2",
              price: "30.00",
            },
            {
              source: "https://picsum.photos/139/137",
              title: "title3",
              desc: "desc3",
              price: "10.00",
            },
            {
              source: "https://picsum.photos/139/137",
              title: "title4",
              desc: "desc4",
              price: "5.00",
            },
          ],
        })
      );
      dispatch(itemsActions.loading({ status: false }));
    }, 3000);
  };
};
export default fetchData;
