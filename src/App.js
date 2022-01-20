import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="main" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
