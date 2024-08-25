interface Resposta {
    texto: string;
    correta: boolean;
}

interface Pergunta {
    pergunta: string;
    respostas: Resposta[];
}

const perguntas: Pergunta[] = [
    {
        pergunta: "Quem foi o primeiro imperador romano?",
        respostas: [
            { texto: "Júlio César", correta: false },
            { texto: "Augusto", correta: true },
            { texto: "Nero", correta: false },
            { texto: "Constantino", correta: false }
        ]
    },
    {
        pergunta: "Em que ano caiu o Império Romano do Ocidente?",
        respostas: [
            { texto: "410 d.C.", correta: false },
            { texto: "476 d.C.", correta: true },
            { texto: "395 d.C.", correta: false },
            { texto: "509 d.C.", correta: false }
        ]
    },
    {
        pergunta: "Qual era o nome da principal praça pública na Roma Antiga?",
        respostas: [
            { texto: "Ágora", correta: false },
            { texto: "Foro Romano", correta: true },
            { texto: "Coliseu", correta: false },
            { texto: "Panteão", correta: false }
        ]
    },
    {
        pergunta: "Qual era a cidade-estado rival de Roma durante as Guerras Púnicas?",
        respostas: [
            { texto: "Corinto", correta: false },
            { texto: "Cartago", correta: true },
            { texto: "Atenas", correta: false },
            { texto: "Esparta", correta: false }
        ]
    },
    {
        pergunta: "Quem foi o líder cartaginês que cruzou os Alpes para lutar contra Roma?",
        respostas: [
            { texto: "Escipião", correta: false },
            { texto: "Hannibal", correta: true },
            { texto: "Sertório", correta: false },
            { texto: "Marco Aurélio", correta: false }
        ]
    },
    {
        pergunta: "Qual foi o principal conflito entre Esparta e Atenas?",
        respostas: [
            { texto: "Guerra do Peloponeso", correta: true },
            { texto: "Guerras Púnicas", correta: false },
            { texto: "Guerra de Troia", correta: false },
            { texto: "Guerras Médicas", correta: false }
        ]
    },
    {
        pergunta: "Quem foi o filósofo grego condenado a tomar cicuta?",
        respostas: [
            { texto: "Aristóteles", correta: false },
            { texto: "Platão", correta: false },
            { texto: "Sócrates", correta: true },
            { texto: "Pitágoras", correta: false }
        ]
    },
    {
        pergunta: "Quem é o autor da obra 'A República'?",
        respostas: [
            { texto: "Aristóteles", correta: false },
            { texto: "Homero", correta: false },
            { texto: "Platão", correta: true },
            { texto: "Heródoto", correta: false }
        ]
    },
    {
        pergunta: "Qual civilização antiga é famosa por suas pirâmides?",
        respostas: [
            { texto: "Inca", correta: false },
            { texto: "Egípcia", correta: true },
            { texto: "Grega", correta: false },
            { texto: "Romana", correta: false }
        ]
    },
    {
        pergunta: "Qual das seguintes é considerada uma das Sete Maravilhas do Mundo Antigo?",
        respostas: [
            { texto: "Torre Eiffel", correta: false },
            { texto: "Muralha da China", correta: true },
            { texto: "Torre de Pisa", correta: false },
            { texto: "Basílica de São Pedro", correta: false }
        ]
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        respostas: [
            { texto: "Michelangelo", correta: false },
            { texto: "Leonardo da Vinci", correta: true },
            { texto: "Raphael", correta: false },
            { texto: "Donatello", correta: false }
        ]
    },
    {
        pergunta: "Qual foi o nome do período de grande avanço artístico e cultural na Europa durante os séculos XV e XVI?",
        respostas: [
            { texto: "Barroco", correta: false },
            { texto: "Renascimento", correta: true },
            { texto: "Romantismo", correta: false },
            { texto: "Idade Média", correta: false }
        ]
    },
    {
        pergunta: "Qual foi a principal causa da Peste Negra no século XIV?",
        respostas: [
            { texto: "Bactéria Yersinia pestis", correta: true },
            { texto: "Vírus da varíola", correta: false },
            { texto: "Bactéria de tuberculose", correta: false },
            { texto: "Protozoário da malária", correta: false }
        ]
    },
    {
        pergunta: "Qual era o nome da doença que causou a pandemia conhecida como Peste Negra?",
        respostas: [
            { texto: "Peste Bubônica", correta: true },
            { texto: "Gripe Espanhola", correta: false },
            { texto: "Cólera", correta: false },
            { texto: "Febre Tifoide", correta: false }
        ]
    },
    {
        pergunta: "O que era um feudo durante a Idade Média?",
        respostas: [
            { texto: "Uma grande cidade comercial", correta: false },
            { texto: "Uma área de terra concedida por um senhor feudal", correta: true },
            { texto: "Uma universidade medieval", correta: false },
            { texto: "Um convento monástico", correta: false }
        ]
    },
    {
        pergunta: "Quem foi o líder dos mongóis que fundou o Império Mongol no século XIII?",
        respostas: [
            { texto: "Kublai Khan", correta: false },
            { texto: "Genghis Khan", correta: true },
            { texto: "Tamerlão", correta: false },
            { texto: "Khan de Volga", correta: false }
        ]
    }
];

const pergunta = document.getElementById("pergunta") as HTMLDivElement;
const botaoResposta = document.getElementById("botaoresposta") as HTMLDivElement;
const botaoProxima = document.getElementById("proximaQ") as HTMLButtonElement;

let indiceQuestaoAtual: number = 0;
let pontuacao: number = 0;

function iniciarQuiz(): void {
    indiceQuestaoAtual = 0;
    pontuacao = 0;
    botaoProxima.innerHTML = "Próxima questão";
    mostrarQuestao();
}

function mostrarQuestao(): void {
    resetState();
    const questaoAtual = perguntas[indiceQuestaoAtual];
    const numeroQuestao = indiceQuestaoAtual + 1;
    pergunta.innerHTML = `${numeroQuestao}. ${questaoAtual.pergunta}`;

    questaoAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.innerHTML = resposta.texto;
        botao.classList.add("botao");
        botaoResposta.appendChild(botao);

        if (resposta.correta) {
            botao.dataset.correta = String(resposta.correta);
        }
        botao.addEventListener("click", selecionarResposta);
    });
}

function resetState(): void {
    botaoProxima.style.display = "none";
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild);
    }
}

function selecionarResposta(e: MouseEvent): void {
    const botaoSelecionado = e.target as HTMLButtonElement;
    const estaCorreta = botaoSelecionado.dataset.correta === "true";

    if (estaCorreta) {
        botaoSelecionado.classList.add("correta");
        pontuacao++;
    } else {
        botaoSelecionado.classList.add("incorreta");
    }

    Array.from(botaoResposta.children).forEach(botao => {
        const b = botao as HTMLButtonElement;
        if (b.dataset.correta === "true") {
            b.classList.add("correta");
        }
        b.disabled = true;
    });

    botaoProxima.style.display = "block";
}

function mostrarPontuacao(): void {
    resetState();
    pergunta.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}!`;
    botaoProxima.innerHTML = "Jogar novamente";
    botaoProxima.style.display = "block";
}

function mostraBotaoProxima(): void {
    indiceQuestaoAtual++;
    if (indiceQuestaoAtual < perguntas.length) {
        mostrarQuestao();
    } else {
        mostrarPontuacao();
    }
}

botaoProxima.addEventListener("click", () => {
    if (indiceQuestaoAtual < perguntas.length) {
        mostraBotaoProxima();
    } else {
        iniciarQuiz();
    }
});

iniciarQuiz();
