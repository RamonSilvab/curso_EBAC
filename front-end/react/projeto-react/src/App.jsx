import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
    <Perfil nome='Ramon' endereco='https://github.com/RamonSilvab.png'/>
    {formularioEstaVisivel && (
      <Formulario />
    )};
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>toggle form</button>
    </> 
  )
}

export default App

