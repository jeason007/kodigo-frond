import React from 'react';
import Cabeza from './Cabeza';
import Estudiantes from './Estudiantes';

const Home = () => {


  return (
    <div className="App">
      <Cabeza/>
      <div className="conta">
      <div className="">
      <Estudiantes/>
      </div>
      </div>
      <div className="footer"></div>
      
    </div>
  )
}

export default Home
