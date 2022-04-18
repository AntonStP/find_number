import React, {useState} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import GameField from "../gameField/GameField";


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}


const GameP = ({title}) => {

  let numQuantityFirst = 3;

  const [numQuantity, setNumQuantity] = useState(3);
  const [array, setArray] = useState(buildArray(numQuantity));
  const [rightChoice, setRightChoice] = useState(randomInteger(0, numQuantity));

  function buildArray(numQuantity) {
    let array = [];
    for (let i = 0; i < numQuantity; i++) {
      array.push(randomInteger(0, 10000))
    }
    return array;
  }


  function changeField(fieldId) {
    /*
     setArray(buildArray(numQuantity + numQuantityFirst));
     setRightChoice(randomInteger(0, numQuantity + numQuantityFirst));
     -----------------------------------------------------------------
     (numQuantity + numQuantityFirst) используется потому что стейт изменится на следующий рендеринг. если использовать (numQuantity), то при (numQuantity === 3) будет запланирована
     смена стейта setNumQuantity(numQuantity + numQuantityFirst), но это будет в следующий рендер, а в setArray(buildArray( тут придет 3)). Таким образом они будут создаваться 3,3,6,9,12,3,6,...
     Тут (setRightChoice(randomInteger(0, numQuantity + numQuantityFirst))) добавляется (numQuantityFirst), чтобы при (numQuantity === 0) был нормальный диапазон setRightChoice(randomInteger(0, 0 + 3));
     */
    (numQuantity === 9) ? setNumQuantity(0) : setNumQuantity(numQuantity + numQuantityFirst);
    setArray(buildArray(numQuantity + numQuantityFirst));
    setRightChoice(randomInteger(0, numQuantity + numQuantityFirst));
    (fieldId === rightChoice) ?
    console.log("правильно") :
    console.log("нет");
    console.log(fieldId);
    console.log(rightChoice);
  }

  return (
    <div className={"game-p"}>
      <div className={"game-p__content"}>
        <div className={"game-p__title"}>
          <div className={"game-p__title-text"}>{title}</div>
          <div className={"game-p__title-number"}>{array[rightChoice]}</div>
        </div>
        <TransitionGroup component={null}>
          <CSSTransition key={numQuantity} timeout={1500} classNames={"game-field"}>
            <GameField numQuantityFirst={numQuantityFirst} changeField={changeField} array={array}/>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}


export default GameP;

