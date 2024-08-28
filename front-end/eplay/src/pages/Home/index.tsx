import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'
import residentevil4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação, Suspense',
    description:
      'Resident Eveil 4, conhecido no Japão como Bioharzard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residentevil4
  },
  {
    id: 1,
    category: 'Ação, Aventura',
    description:
      'O último jogo de Star Wars, intitulado Star Wars Jedi: Survivor, é uma sequência direta de Star Wars Jedi: Fallen Order...',
    title: 'Star Wars',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: starWars
  },
  {
    id: 1,
    category: 'MMO RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo',
    system: 'Windows, PS5, X-box Series',
    infos: ['50%', 'R$ 150,00'],
    image: diablo
  },
  {
    id: 1,
    category: 'Aventura, RPG',
    description:
      'Esta sequência de Breath of the Wild expande o vasto mundo aberto de Hyrul...',
    title: 'Zelda',
    system: 'Nitendo',
    infos: ['90%', 'R$ 30,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'O último jogo de Star Wars, intitulado Star Wars Jedi: Survivor, é uma sequência direta de Star Wars Jedi: Fallen Order...',
    title: 'Star Wars',
    system: 'X-box',
    infos: ['24/12'],
    image: starWars
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['31/09'],
    image: diablo
  },
  {
    id: 7,
    category: 'Terror',
    description:
      'Resident Eveil 4, conhecido no Japão como Bioharzard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS2',
    infos: ['27/10'],
    image: residentevil4
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Esta sequência de Breath of the Wild expande o vasto mundo aberto de Hyrul...',
    title: 'Zelda',
    system: 'Nitendo Switch',
    infos: ['19/08'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
