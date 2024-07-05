import './perfil.css'

const Perfil = () => {

    const usuario = {
        nome: 'Ramon Silva',
        avatar: 'https://github.com/RamonSilvab.png'
    }

    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} />
            <h3>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;