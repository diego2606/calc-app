// importation
import React, { useState } from "react";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";


import './App.css'



// generation de la function del component
const App = () => {

    // 1er position: valor (que inicialmente es el valor por defect)
    // 2da position: function que me va a permitir modificar el valor por defecto
    // [xxx], [setxxxx]
    const [stack, setStack] = useState('')


    // Lo que ejecuta la funcion
    console.log('Render App')
    return (<main className="react-calculator">
        <Result value={stack}/>
        <Numbers onClickNumber={number => {
                console.log('Click en number', number)
                setStack(number)
            }}
        />
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