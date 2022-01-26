import ModelQuestion from "../model/question";
import styles from '../styles/Question.module.css'
import Answer from "./Answer";
import Countdown from "./Countdown";
import Enunciation from "./Enunciation";

const letters = [
    {value: 'A',color: '#F2C866'},
    {value: 'B',color: '#F266BA'},
    {value: 'C',color: '#85D4F2'},
    {value: 'D',color: '#BCE596'}
]

interface QuestionProps{
    value: ModelQuestion,
    timeForAnswer?: number
    proviededAnswer: (indice:number) => void
    tempoEsgotado: () => void
}

export default function Question(props: QuestionProps){

    const question = props.value;
    // console.log(question);

    function renderAnswers(){
        return question.respostas.map((resposta, i) => {
            return <Answer 
                key={`${question.id}-${i}`}
                value={resposta}
                indice={i}
                letter={letters[i].value}
                backgroundColorLetter={letters[i].color}
                proviededAnswer={props.proviededAnswer}
            />
        })
    }
    
    return (
        <div className={styles.question}>
            <Enunciation text={question.enunciado}/>
            <Countdown key={question.id} duration={props.timeForAnswer ?? 10} tempoEsgotado={props.tempoEsgotado}/>
            {renderAnswers()}
        </div>
    )
}