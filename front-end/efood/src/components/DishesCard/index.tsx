import { CardDishes, BtnDishe } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const DishesCard = ({ image, title, description }: Props) => (
  <CardDishes>
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>{description}</p>
    <BtnDishe>Adicionar ao carrinho</BtnDishe>
  </CardDishes>
)

export default DishesCard
