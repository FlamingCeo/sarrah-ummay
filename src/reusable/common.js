
import { useEffect, useState } from "react";

function Common() {
    const [style, setStyle] = useState("changeStyle");
    const changeColor = (e) => {
        setStyle( style =="changeStyle2"?"changeStyle3": "changeStyle2");
    }

  return (
    <div>
        <div  className = {style} onClick = {changeColor}> Hiiiiiiiiiiiiiiiiiii</div>
    </div>
  );
}

export default Common;
