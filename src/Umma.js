
import { useEffect, useState } from "react";
import  Common  from "./reusable/common";

function Umma() {
    var [myVariable, setMyVariable] = useState("Ummay");

    return (
      <div>
            {myVariable}
            <Common/>


      </div>
    );
  }
  
  export default Umma;
  