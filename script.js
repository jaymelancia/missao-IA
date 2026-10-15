const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com duas escolhas de futuro. O que pode ser sua escolha?",
        alternativas: [
            {
                texto: "Faculdade!",
                afirmacao: "Você confia no potencial dos estudos e o que isso agregará no futuro. Com formação, você terá mais oportunidades no mercado de trabalho."
            },
            {
                texto: "Trabalho!",
                afirmacao: "É uma boa escolha, é interessante pensar no financeiro, principalmente da família. Vocẽ pode se especializar depois!"
            }           
            
        ]
    },
    {
        enunciado: "Se você pretende cursar faculdade, já sabe qual área escolherá? Se pretende Trabalhar, já fez algum curso?",
        alternativas: [
            {
                texto:"Sim, já sei qual faculdade quero cursar.",
                afirmacao:"Excelente, se conhecer é essencial! Mas pense, se você não se localizar dentro do curso depois, sempre dá pra mudar!"
            },
            {
                texto: "Sim, já fiz um curso.",
                afirmacao:"Que ótimo, assim você pode ter mais ioportunidades e um trabalho mais valorizado!"
            }
        ]
    },
    {
        enunciado: "Em relação ao seu futuro, você sente que ele será promissor?",
        alternativas: [
            {
                texto:"Sim, estou confiante que passarei no vestibular!",
                afirmacao:"Que bom! Isso significa que você se esforçou bastante!"
            },
            {
                texto:"Sim, estou confiante que encontrarei um novo emprego logo!",
                afirmacao:"Que bom! Isso demonstra que você confia em si mesmo e é essencial para a vida."
            }
            
        ]
    },
    {
        enunciado: "Você já planeja o que vai fazer depois da faculdade ou do primeiro emprego?",
        alternativas: [
            {
                texto:"Sim, desejo trabalhar na área de atuação da minha faculdade.",
                afirmacao:"Incrível! Você terá muito sucesso."
            },
            {
                texto:"Sim, desejo trabalhar em um emprego num lugar maior e com melhores condições.",
                afirmacao:"Ótimo, está no caminho certo!"
            }
            
        ]
    },
    {
        enunciado: "Você está pronto(a) para finalizar o ensino médio?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao:"Parabéns! Aproveite os últimos momentos no ensino médio!"
            },
            {
                texto: "Não.",
                afirmacao:"Poxa, o que te faz estar assim? Mas não tem problema, é normal não estar pronto. Aproveite os últimos momentos no ensino médio!"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Ano que vem...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();