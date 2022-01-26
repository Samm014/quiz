import { embaralhar } from "../../../functions/arrays";
import questions from "../dataBaseQuestions";

export default function quiz(req,res) {

    const ids = questions.map(question => question.id)

    res.status(200).json(embaralhar(ids))
}