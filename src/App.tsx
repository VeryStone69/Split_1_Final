import React, {MouseEvent, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import {Button} from "./components/Button";


function App() {
    const startCount= 0
    const [count, setCount] = useState<number>(startCount)

    const buttonClick = (name:string)=>{
        (name === "inc" && count < 5) ? setCount(count+1) : setCount(0)
    }

    return (
        <div className={"counterWrap"}>
            <Counter count={count}/>
            <div className={"buttons"}>
                <Button name={"inc"} buttonClick={buttonClick} disable={count === 5}/>
                <Button name={"reset"} buttonClick={buttonClick} disable={count === 0}/>
            </div>
        </div>
    );
}

export default App;
