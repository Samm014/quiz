import ModelAnswer from "../../model/answer";
import ModelQuestion from "../../model/question";

const questions: ModelQuestion[]=[
    new ModelQuestion(305, "Qual bicho transmite a doença de Chagas?",[
        ModelAnswer.errada("Abelha"),
        ModelAnswer.errada("Barata"),
        ModelAnswer.errada("Pulga"),
        ModelAnswer.certa("Barbeiro")
    ]),
    new ModelQuestion(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ModelAnswer.errada('Caju'),
        ModelAnswer.errada('Côco'),
        ModelAnswer.errada('Chuchu'),
        ModelAnswer.certa('Abóbora'),
    ]),
    new ModelQuestion(203, 'Qual é o coletivo de cães?', [
        ModelAnswer.errada('Manada'),
        ModelAnswer.errada('Alcateia'),
        ModelAnswer.errada('Rebanho'),
        ModelAnswer.certa('Matilha'),
    ]),
    new ModelQuestion(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ModelAnswer.errada('Equilátero'),
        ModelAnswer.errada('Isóceles'),
        ModelAnswer.errada('Trapézio'),
        ModelAnswer.certa('Escaleno'),
    ]),
    new ModelQuestion(205, 'Quem compôs o Hino da Independência?', [
        ModelAnswer.errada('Castro Alves'),
        ModelAnswer.errada('Manuel Bandeira'),
        ModelAnswer.errada('Carlos Gomes'),
        ModelAnswer.certa('Dom Pedro I'),
    ]),
    new ModelQuestion(206, 'Qual é o antônimo de "malograr"?', [
        ModelAnswer.errada('Perder'),
        ModelAnswer.errada('Fracassar'),
        ModelAnswer.errada('Desprezar'),
        ModelAnswer.certa('Conseguir'),
    ]),
    new ModelQuestion(207, 'Em que país nasceu Carmen Miranda?', [
        ModelAnswer.errada('Argentina'),
        ModelAnswer.errada('Espanha'),
        ModelAnswer.errada('Brasil'),
        ModelAnswer.certa('Portugal'),
    ]),
    new ModelQuestion(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        ModelAnswer.errada('Costa e Silva'),
        ModelAnswer.errada('Emílio Médici'),
        ModelAnswer.errada('Ernesto Geisel'),
        ModelAnswer.certa('João Figueiredo'),
    ]),
    new ModelQuestion(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        ModelAnswer.errada('Ás'),
        ModelAnswer.errada('Nove'),
        ModelAnswer.errada('Rei'),
        ModelAnswer.certa('Valete'),
    ]),
    new ModelQuestion(210, 'O adjetivo "venoso" está relacionado a:', [
        ModelAnswer.errada('Vela'),
        ModelAnswer.errada('Vento'),
        ModelAnswer.errada('Vênia'),
        ModelAnswer.certa('Veia'),
    ]),
    new ModelQuestion(211, 'Que nome se dá à purificação por meio da água?', [
        ModelAnswer.errada('Abrupção'),
        ModelAnswer.errada('Abolição'),
        ModelAnswer.errada('Abnegação'),
        ModelAnswer.certa('Ablução'),
    ]),
    new ModelQuestion(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        ModelAnswer.errada('Monte Branco'),
        ModelAnswer.errada('Monte Fuji'),
        ModelAnswer.errada('Monte Carlo'),
        ModelAnswer.certa('Monte Everest'),
    ]),
    new ModelQuestion(213, 'Em que parte do corpo se encontra a epiglote?', [
        ModelAnswer.errada('Estômago'),
        ModelAnswer.errada('Pâncreas'),
        ModelAnswer.errada('Rim'),
        ModelAnswer.certa('Pescoço'),
    ]),
    new ModelQuestion(214, 'A compensação por perda é chamada de...', [
        ModelAnswer.errada('Déficit'),
        ModelAnswer.errada('Indexação'),
        ModelAnswer.errada('Indébito'),
        ModelAnswer.certa('Indenização'),
    ]),
    new ModelQuestion(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        ModelAnswer.errada('Cuca'),
        ModelAnswer.errada('Curupira'),
        ModelAnswer.errada('Boitatá'),
        ModelAnswer.certa('Saci-pererê'),
    ]),
    new ModelQuestion(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        ModelAnswer.errada('Marechal Deodoro'),
        ModelAnswer.errada('Barão de Mauá'),
        ModelAnswer.errada('Marquês de Pombal'),
        ModelAnswer.certa('Duque de Caxias'),
    ]),
]

export default questions