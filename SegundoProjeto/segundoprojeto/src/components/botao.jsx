import { useState } from "react"

var numero = 0;
function Botao(){
    const [mensagem, setMensagem] = useState("");

    function handleClick() {
        numero++;
        if (numero == 5 ){
            setMensagem("Bugou!")
        }else{
            setMensagem("Você clicou no botão " +  numero + " vezes!");
        }
    }
    return (
        <>
            <button onClick={handleClick}>Botão</button>
            <p>{mensagem}</p>
        </>
    )
}

export default Botao