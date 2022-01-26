import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import ModelQuestion from '../model/question'

const BASE_URL = 'https://quiz-nine-theta.vercel.app/api'

export default function Home() {

  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([])
  const [question,setQuestion] = useState<ModelQuestion>();
  const [respostasCertas,setRespostasCertas] = useState<number>(0);

  async function loadQuestionsId() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionsId = await resp.json();
    setQuestionsIds(questionsId)
  }

  async function loadQuestions(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await resp.json();
    const newQuestion = ModelQuestion.criarUsandoJSON(json);
    setQuestion(newQuestion)
  }

  useEffect(()=>{
    loadQuestionsId();
  },[])

  useEffect(()=>{
    questionsIds.length > 0 && loadQuestions(questionsIds[0])
  },[questionsIds])

  function onResponse(indice: number){
    setQuestion(question.answerWith(indice))
    // console.log(indice);
  }

  function tempoEsgotado(){
    question.naoRespondida? setQuestion(question.answerWith(-1)) : false
  }

  function questionAnswered(questionAnswered: ModelQuestion){
    setQuestion(questionAnswered)
    const acertou = questionAnswered.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    // console.log(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta(){
    const proximoIndice = questionsIds.indexOf(question.id) + 1;
    return questionsIds[proximoIndice]
  }

  function goToNextStep(){
    const proximoId = idProximaPergunta();
    proximoId ? irParaProximaQuestão(proximoId) : finalizar()
  }

  function irParaProximaQuestão(proximoId: number){
    loadQuestions(proximoId)
  }

  function finalizar(){
    router.push({
      pathname: '/result',
      query: {
        latot: questionsIds.length, //total
        satrec: respostasCertas //acertos
      }
    })
  }

  return question ? (
        <Quiz 
          question={question}
          last={idProximaPergunta() === undefined}
          questionAnswered={questionAnswered}
          goToNextStep={goToNextStep}/>
  ) : false
}
