import ModelQuestion from "../model/question";
import Question from './Question';
import Button from './Button';
import styles from '../styles/Quiz.module.css'

interface QuizProps{
    question: ModelQuestion
    last: boolean
    questionAnswered: (question: ModelQuestion) => void
    goToNextStep: () => void
}

export default function Quiz(props: QuizProps){

    function proviededAnswer(indice: number){
        if(props.question.naoRespondida){
            props.questionAnswered(props.question.answerWith(indice))
        }
    }

    return (
        <div className={styles.quiz}>
            {props.question ?
                <Question 
                value={props.question}
                timeForAnswer={6}
                proviededAnswer={proviededAnswer}
                tempoEsgotado={props.goToNextStep}/>
            :false
            }
           

            <Button onClick={props.goToNextStep} 
            text={props.last? 'Finalizar' : 'Próxima'}/>
        </div>
    )
}