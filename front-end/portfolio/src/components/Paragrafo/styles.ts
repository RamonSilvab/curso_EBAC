import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-heigth: 22px;
  margin-bottom: ${(props) => (props.tipo === 'principal' ? '8px' : '4px')};
`
