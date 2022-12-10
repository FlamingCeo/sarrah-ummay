
import { useEffect, useState } from "react";
import  Common  from "./reusable/common";


function Sarah() {
 var [myVariable, setMyVariable] = useState("Sarah");

    return (
      <div>
        <Common/>
        {myVariable}
      </div>
    );
  }
  
  export default Sarah;
  