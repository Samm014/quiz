import questions from "../dataBaseQuestions";

export default (req, res) => {
    const idURL = +req.query.id;

    const questionsSeletedbyURL =  questions.filter(question => question.id === idURL)

    if(questionsSeletedbyURL.length === 1){
        const questionSelected = questionsSeletedbyURL[0].embaralharRespostas();
        res.status(200).json(questionSelected.toObject())
    }else{
        res.status(204).send();
    }

    
}  