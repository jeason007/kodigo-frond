import React, { useState } from "react";
import Cabeza from "./Cabeza";
import Estudiantes from "./Estudiantes";

const Home = () => {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="App">
      <Cabeza refresh={refresh} setRefresh={setRefresh} />
      <div className="conta">
        <div className="">
          <Estudiantes refresh={refresh} setRefresh={setRefresh} />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
