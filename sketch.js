let campoIdade;
let campoTerror;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoTerror = createCheckbox("Gosta de terror?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeAventura);

  fill(color(0, 0, 1));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeterror, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Jogos mortais";
    } else {
      if (idade >= 12) {
        if(gostaDeterror || gostaDeAventura) {
          return "O exorcismo do papa"
        } else{
         return "Mad max";
        }
      } else {
        if (gostaDeterror) {
          return "The monkey"
        } else {
          return "O senhor dos aneis";
        }
      }
    }
  } else {
    if (gostaDeterror) {
      return "Olhos famintos";
    } else {
      return "Jumanji";
    }
  }
}
