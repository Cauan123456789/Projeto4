const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha do avanço da tecnologia em relação a inteligência artificial?",
        alternativas: [
            {
                texto: "Isso é preocupante.",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial pode ser desenvolvida para tomar decisões de combate avançadas?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: "Não acho que é possivel que uma inteligência artificial possa tomar esse tipo decisões."
            },
            {
                texto: "Sim.",
                afirmacao: "Acho que é possivel criar uma inteligência artificial especializada em combate."
            }
        ]
    },
    {
        enunciado: "Se chegar a acontecer, você acredita que uma inteligência artificial possa substituir completamenteos soldados humanos no futuro?",
        alternativas: [
            {
                texto: "Com certeza, isso pode ser muito bom.",
                afirmacao: "Se acontecer, no fututo robos seriam mandados para guerras ou então pederiam agir como policiais, assim nãoprecisando colocar tantas pessoas em risco."
            },
            {
                texto: "Talvez.",
                afirmacao: "Em uma suposição hipotética talvez seja possível, mas seria um pouco preocupante ter robos com inteligência artificial para substituir um soldado humano."
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial possa um dia se rebelar contra a humanidade?",
        alternativas: [
            {
                texto: "Não.",
                afirmacao: "Acredito que quem projeta esse tipo de inteligência tenha as coisas sob controle."
            },
            {
                texto: "Sim.",
                afirmacao: "Uma inteligência artificial muito avançada possivelmente poderia adquirir uma consciência autônoma e se descordar de algo que fazemos, vão agir contra nós."
            }
        ]
    },
    {
        enunciado: "Você tem medo de robôs assassinos autônomos? ",
        alternativas: [
            {
                texto: "Sim, mas não acho que seja possível ter um algum dia.",
                afirmacao: "Não acredito que um dia possa surgir um robô assassino."
            },
            {
                texto: "Sim, se robos forem projetados para serem soldados, deviamos ter alguma medida para lidar com um possível ataque.",
                afirmacao: "Um robô com capacidade de matar um homem não é uma boa ideia, então é melhor não fazer. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
