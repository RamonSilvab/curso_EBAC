import { TagContainer } from './styles'

export type Props = {
  type?: 'stack' | 'buttom'
  children: string
}

const Tag = ({ children, type = 'stack' }: Props) => (
  <TagContainer type={type}>{children}</TagContainer>
)

export default Tag
