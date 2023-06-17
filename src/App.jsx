import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import { Success } from "./pages/Success/Success";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
