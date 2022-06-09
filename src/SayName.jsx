import { useState } from "react";

function SayName(props){
    const [nome, setNome] = useState ("");

    function alteraNome(event){
        setNome(event.target.value);
    }

    return (
        <div>
            <input type="text" onChange={alteraNome}/>
            
            {nome && (
                <div>
            <p>Bom dia {nome}</p>
            <p>Outro paragrafo</p>
            </div>)}
        </div>

    );

};
export default SayName;