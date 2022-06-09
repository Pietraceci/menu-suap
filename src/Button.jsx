function Button ({cor,frase, contador, atualizaContador}){
    function clickMouse(){
        atualizaContador(contador+1);
    }
    return(
        <button style={{backgroundColor: cor}}onClick ={clickMouse}>
            {frase} {contador}
        </button>
    );

}
export default Button;