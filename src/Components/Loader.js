import React from 'react';
import './Loader.css'

const Loader = () => (
    <div style={{ minHeight: "95vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <div className="loader"></div>
      </div>
    </div>

);
export default Loader;


