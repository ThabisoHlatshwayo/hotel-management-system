import React from "react";

import City from "./combobox/final";
import Hotel from "./combobox/hotel";
import Rooms from "./combobox/rooms";
import Nights from "./combobox/nights";

function MainContent(){
  return (
    <div className="main">
      <City />
      <Hotel />
      <Rooms />
      <Nights />
    </div>
  );
}

export default MainContent;