// importation
import React from "react";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import Functions from "./components/Functions";
import Button from "./components/Button";

import './App.css'


// generation de la function del component
const App = () => {

    const clickHandlerFunction = (text) => {
        console.log(text)
    }

    // Lo que ejecuta la funcion
    console.log('Render App')
    return (<main className="react-calculator">
        <Result/>
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            
        </div>
        <Functions
            onContentClear={() => console.log('Content clear')}
            onDelete={() => console.log('Delete')}
        
        />
        <MathOperations 
            onClickOperation={operation => console.log('Operation:', operation)}
            onClickEqual={equal => console.log('Equal:', equal)}
        />
    </main>)
}

// exportation
export default App