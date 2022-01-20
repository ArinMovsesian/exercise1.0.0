import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import Nav from "../../components/Header/Nav/Nav";
import Items from "../../components/Items/Items";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";

const Main = () => {
  return (
    <Layout>
      <Header />
      <Search />
      <Filter />
      <Nav />
      <Items />
    </Layout>
  );
};
export default Main;
