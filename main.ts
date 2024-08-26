
//define interface Resposta(a alternativa selecionada pelo usuario), que contem o texto da resposta e ela é correta ou não//
interface Resposta {
    texto: string;
    correta: boolean;
}
//define interface Pergunta, que contem a questão e suas alternativas
interface Pergunta {
    pergunta: string;
    respostas: Resposta[];
}
//vetor de objetos com as questões
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
//referencia aos elementos DOM, que vão ser manipulados posteriormente
const pergunta = document.getElementById("pergunta") as HTMLDivElement;
const botaoResposta = document.getElementById("botaoresposta") as HTMLDivElement;
const botaoProxima = document.getElementById("proximaQ") as HTMLButtonElement;
//indice da questao atual e a pontução do usuário
let indiceQuestaoAtual: number = 0;
let pontuacao: number = 0;

//função para inicializar/reinciar o quiz, zera a pontuação e o indice da questão atual
function iniciarQuiz(): void {
    indiceQuestaoAtual = 0;
    pontuacao = 0;
    botaoProxima.innerHTML = "Próxima questão";
    mostrarQuestao();
}
//função para mostrar a questão  atual e suas alternativas
function mostrarQuestao(): void {
    resetState();
    const questaoAtual = perguntas[indiceQuestaoAtual];
    const numeroQuestao = indiceQuestaoAtual + 1;
    pergunta.innerHTML = `${numeroQuestao}. ${questaoAtual.pergunta}`;
    // Para cada resposta da questão atual, cria um botão e adiciona ao DOM

    questaoAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.innerHTML = resposta.texto;
        botao.classList.add("botao");
        botaoResposta.appendChild(botao);
        // Se a resposta é correta, adiciona um atributo customizado 'data-correta'

        if (resposta.correta) {
            botao.dataset.correta = String(resposta.correta);
        }
         // Adiciona um listener para quando o botão for clicado
        botao.addEventListener("click", selecionarResposta);
    });
}
// função para resetar o estado da questão anterior (remover botões, esconder o botão "Próxima")
function resetState(): void {
    botaoProxima.style.display = "none"; //esconde o botão "próxima"
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild);// Remove todas as respostas anteriores
    }
}

// Função chamada ao clicar em uma resposta
function selecionarResposta(e: MouseEvent): void {
    const botaoSelecionado = e.target as HTMLButtonElement;
    const estaCorreta = botaoSelecionado.dataset.correta === "true";//verifica se a resposta esta correta

    if (estaCorreta) {
        botaoSelecionado.classList.add("correta");//adiciona a classe "correta" se a resposta for correta
        pontuacao++; //aumenta a pontuação do usuario
    } else {
        botaoSelecionado.classList.add("incorreta");//adiciona a classe "incorreta" se a resposta for incorreta
    }
    // Itera por todos os botões e desabilita-os, mostrando qual é a resposta correta
    Array.from(botaoResposta.children).forEach(botao => {
        const b = botao as HTMLButtonElement;
        if (b.dataset.correta === "true") {
            b.classList.add("correta");
        }
        b.disabled = true;// Desabilita os botões após a seleção

    });

    botaoProxima.style.display = "block";
}
// Função para mostrar a pontuação final após responder todas as perguntas
function mostrarPontuacao(): void {
    resetState();
    pergunta.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}!`;
    botaoProxima.innerHTML = "Jogar novamente";
    botaoProxima.style.display = "block";
}
// Função para mostrar a próxima questão ou finalizar o quiz
function mostraBotaoProxima(): void {
    indiceQuestaoAtual++;
    if (indiceQuestaoAtual < perguntas.length) {
        mostrarQuestao();
    } else {
        mostrarPontuacao();
    }
}
// Listener para o botão "Próxima", que mostra a próxima questão ou reinicia o quiz
botaoProxima.addEventListener("click", () => {
    if (indiceQuestaoAtual < perguntas.length) {
        mostraBotaoProxima();
    } else {
        iniciarQuiz();
    }
});
// Inicializa o quiz assim que a página carrega
iniciarQuiz();
