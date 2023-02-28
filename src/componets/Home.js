import React, { useState } from "react";
import '../../src/App.css';
import Estudiantes from "./Estudiantes";
import Headboard from "./HeadBoard";


const Home = () => {
  const [refresh, setRefresh] = useState(true);
  
   return (
    <div className="App">
    <Headboard refresh={refresh} setRefresh={setRefresh}/>
    <div className="conta">
    <div className="">
    <Estudiantes refresh={refresh} setRefresh={setRefresh}/>
   
    </div>
    </div>
    <div className="footer"></div>
    </div>
  );
};

export default Home;
