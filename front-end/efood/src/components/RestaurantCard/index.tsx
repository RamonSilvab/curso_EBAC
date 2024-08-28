import { Link } from 'react-router-dom'

import Tag from '../Tag'
import Estrela from '../../assets/images/starFavorite.png'

import * as S from './styles'

type Props = {
  title: string
  infos: string[]
  avaliacao: number
  description: string
  image: string
}

export const RestaurantCard = ({
  title,
  infos,
  avaliacao,
  description,
  image
}: Props) => (
  <S.Card>
    <S.Img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.Container>
      <S.TituloContainer>
        <h3>{title}</h3>
        <S.AvaliacaoContainer>
          <S.Avaliacao>{avaliacao}</S.Avaliacao>
          <img src={Estrela} alt="estrela" />
        </S.AvaliacaoContainer>
      </S.TituloContainer>
      <S.Descricao>{description}</S.Descricao>
      <Link to="/menu">
        <Tag type="buttom">Saiba mais</Tag>
      </Link>
    </S.Container>
  </S.Card>
)
