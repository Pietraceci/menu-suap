import HelloWorld from "./HelloWorld"
import Button from "./Button"
import SayName from "./SayName";
import Perfil from "./Perfil";

function App() {
  const lista_pessoas =[{
    nome:"albedo",
    idade: 20,
    foto: "https://upload-os-bbs.hoyolab.com/upload/2022/04/24/204423427/0ec7153b71450ca49e01413426957c84_5936149566386166944.jpg"
  }];

  return (
    <div>
      <HelloWorld/>
      <Button cor="#00ff00" frase="teste1"/>
      <Button cor="#ff0000" frase="teste2"/>
      <SayName nome="cepi"/>
      <Perfil foto="https://i.pinimg.com/236x/61/da/68/61da684d3ba419ab74fb90346cceebbb.jpg" nome="cepi" idade={17} />
      {
        lista_pessoas.map( (pessoa) =>{
          return <Perfil foto ={pessoa.foto} idade ={pessoa.idade} nome ={pessoa.nome}/>
        } )
      }
    </div>
  );

}

export default App;