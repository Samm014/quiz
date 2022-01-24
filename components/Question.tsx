import ModelQuestion from "../src/model/question";
import styles from '../src/styles/Question.module.css'

interface QuestionProps{
    value: ModelQuestion,
}

export default function Question(props: QuestionProps){

    const question = props.value;
    

    return (
        <div className={styles.question}>
            <h1>Questão</h1>
        </div>
    )
}