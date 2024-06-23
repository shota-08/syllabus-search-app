import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Kokubun from "./components/pages/Kokubun";
import Eibun from "./components/pages/Eibun";
import Tetsugaku from "./components/pages/Tetsugaku";
import Bunkashi from "./components/pages/Bunkashi";
import Bijyutsu from "./components/pages/Bijyutsu";

export const App = () => {
  return (
    <Router>
      <div class="flex h-screen justify-center items-center">
        <div className="h-full flex" style={{ width: "1536px" }}>
          <div className="w-1/5 h-full border-r bg-gray-300">
            <Sidebar />
          </div>
          <div className="w-4/5 h-full">
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route path="/kokubun" Component={Kokubun} />
              <Route path="/eibun" Component={Eibun} />
              <Route path="/tetsugaku" Component={Tetsugaku} />
              <Route path="/bunkashi" Component={Bunkashi} />
              <Route path="/bijyutsu" Component={Bijyutsu} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};
