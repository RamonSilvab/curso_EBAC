import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eee',
  vermelhoRosado: '#E66767',
  laranjaClaro: '#FFEBD9',
  pessegoClaro: '#FFF8F2'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    color: ${cores.vermelhoRosado};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
