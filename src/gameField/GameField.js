import React from "react";


const GameField = ({numQuantityFirst, changeField, array}) => {

  return (
    <div className={"game-field"}>
      {makeBlocks(numQuantityFirst, changeField, array)}
    </div>
  );
}


function makeBlocks(numQuantityFirst, changeField, array) {

  let components = array.map((value,index) => {
    const conditionOne = String(value)[0] === "1" || String(value)[0] === "2" || String(value)[0] === "3";
    const conditionTwo = String(value)[0] === "4" || String(value)[0] === "5";
    const conditionThree = String(value)[0] === "6" || String(value)[0] === "7";

    return (
      <div key={index} className={`game-field__box`}
           onClick={() => changeField(index)}
           style={{background:`${(conditionOne) ? "#f28e37" : `${(conditionTwo) ? "#94c94d" : `${(conditionThree) ? "#fc73b0" : "transparent"}`}`}`,
           animationName: `${(conditionOne) ? "anim-one" : `${(conditionTwo) ? "anim-two" : `${(conditionThree) ? "anim-three": "anim-four"}`}`}`,
           animationDuration: `${(conditionOne) ? ".7s" : `${(conditionTwo) ? ".8s" : `${(conditionThree) ? ".9s": "1.1s"}`}`}`}}>
        <div key={index} className={"game-field__box-num"}>{value}</div>
      </div>
    );
  });
  return (
    components
  );
}

export default GameField;

