import { embaralhar } from "../../../functions/arrays";
import questions from "../dataBaseQuestions";

export default (req,res) => {

    const ids = questions.map(question => question.id)

    res.status(200).json(embaralhar(ids))
}