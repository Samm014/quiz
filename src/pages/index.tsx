import Question from '../../components/Question'
import ModelAnswer from '../model/answer'
import ModelQuestion from '../model/question'

export default function Home() {

  const testQuestion = new ModelQuestion(1,"Melhor Cor?",[
    ModelAnswer.errada('Verde'),
    ModelAnswer.errada('Azul'),
    ModelAnswer.certa('Branco'),
    ModelAnswer.errada('Vermelho'),
  ])
  return (
    <Question value={testQuestion}/>
  )
}
