import {useState} from 'react';
import Button from './Button';
import'./Perfil.css';

function Perfil({nome, foto, idade}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);
    function aumentarVisualizacoes(){

        setNumeroVisualizacoes(numeroVisualizacoes+1)
    }
    return (
        <div className='card'>
            <img className='cardImg' src={foto} alt={nome} width="480px" heigh="300px"/>
            <p className='cardTitle'> Nome: {nome}</p>
            <p className='cardSubTitle'>Idade : {idade}</p>
            <Button 
                cor="#80e6ff" 
                frase="clique aqui" 
                contador={numeroVisualizacoes}
                atualizaContador={setNumeroVisualizacoes}/>
            <p>Contador de visitas : {numeroVisualizacoes}</p>
        </div>
    );
};
export default Perfil;