import { passThroughSymbol } from "next/dist/server/web/spec-compliant/fetch-event"
import { embaralhar } from "../functions/arrays"
import ModelAnswer from "./answer"

export default class ModelQuestion{
    #id: number
    #enunciado: string
    #respostas: ModelAnswer[]
    #acertou: boolean
    // #respondida: boolean


    constructor(id: number, enunciado:string, respostas: ModelAnswer[], acertou = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }


    get id(){
        return this.#id
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#id
    }

    get respondida(){
        for(let resp of this.#respostas){
            if(resp.revelada) return true
        }

        return false;
    }

    answerWith(indice: number): ModelQuestion{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta,i)=>{
            const respostaSelecionada = indice === i;
            const deveMostrar = respostaSelecionada || resposta.certa
            return deveMostrar ? resposta.showAnswer() : resposta
        })

        return new ModelQuestion(this.#id,this.#enunciado,respostas,acertou)
    }

    embaralharRespostas(): ModelQuestion{
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new ModelQuestion(this.#id,this.#enunciado, respostasEmbaralhadas,this.#acertou)
    }

    toObject(){
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respostas: this.#respostas.map(resp => resp.toObject()),
            respondida: this.respondida,
            acertou: this.#acertou
        }
    }
}