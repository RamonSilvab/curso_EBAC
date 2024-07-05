function App() {
  const nome = 'Ramon'

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = true;

  return (
    <>
    <h1> Olá, {pessoa.nome}</h1>
    <h2>Subtitle</h2>
    {estaDeDia ? 'Boa dia!' : 'Boa tarde!'}
    </> 
  )
}

export default App
