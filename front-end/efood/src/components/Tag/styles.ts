import styled from 'styled-components'
import { cores } from '../../syles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelhoRosado};
  color: ${cores.laranjaClaro};
  padding: ${(props) => (props.type === 'stack' ? '6px 4px' : '4px 6px')};
  font-size: ${(props) => (props.type === 'stack' ? '12px' : '14px')};
  font-weight: bold;
  text-align: center;
  display: inline-block;
`
