import { Header } from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import Restaurant from '../../models/Restaurant'
import japonesa from '../../assets/images/comidaJaponesa.png'
import italiana from '../../assets/images/comidaItalina.png'
import Footer from '../../components/Footer'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    avaliacao: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiana
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    avaliacao: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    avaliacao: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japonesa
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italiana
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurants={restaurantes} />
    <Footer />
  </>
)

export default Home
