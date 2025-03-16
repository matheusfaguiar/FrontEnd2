import { Link } from 'react-router-dom'

function Home(){
    return (
        <div>
            <h2>Sistema de Compras</h2>
            <div>
                <Link to="produtos/novo"> Produtos</Link>
                <Link to="botao"> Botão</Link>
            </div>
        </div>
    )
}


export default Home