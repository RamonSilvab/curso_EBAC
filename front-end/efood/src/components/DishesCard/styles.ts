import styled from 'styled-components'
import { cores } from '../../syles'

export const CardDishes = styled.div`
  background-color: ${cores.vermelhoRosado};
  color: ${cores.branco};
  width: 320px;
  padding: 8px;

  img {
    width: 100%;
  }

  h4 {
    font-size: 16px;
    padding: 8px 0;
  }

  p {
    font-size: 14px;
    padding-bottom: 8px;
    line-height: 22px;
  }
`
export const BtnDishe = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: ${cores.laranjaClaro};
  color: ${cores.vermelhoRosado};
  padding: 4px 0;
`
