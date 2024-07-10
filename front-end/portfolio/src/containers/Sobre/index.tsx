import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      👋 Olá, eu sou o Ramon, trabalho como técnico em manutenção de
      equipamentos de informática na FDCI.
    </Paragrafo>
    <Paragrafo tipo="principal">
      👀 Tenho interesses pelas áreas de front-end, ecossistema JavaScript e
      Java. Também gosto muito de robótica.
    </Paragrafo>
    <Paragrafo tipo="principal">
      🌱 Atualmente estou cursando Desenvolvedor Full Stack Java na EBAC (Escola
      Britânica de Artes Criativas). Sou formado em Análise e Desenvolvimento de
      Sistemas e possuo um curso de Programador Web pelo SENAI.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=RamonSilvaB&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RamonSilvaB&layout=compact&langs_count=6&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
