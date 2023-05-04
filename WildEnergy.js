// Definição das variáveis
let velocidadeVento = 0; // em m/s
let direcaoVento = 0; // em graus
let temperaturaExterna = 0; // em graus Celsius
let umidadeRelativa = 0; // em %
let consumoEnergia = 0; // em kWh

// Função para calcular a velocidade do vento em km/h
function calcularVelocidadeKmH(velocidade) {
  return velocidade * 3.6;
}

// Função para converter a direção do vento em pontos cardeais
function converterDirecaoVento(direcao) {
  let pontosCardeais = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  let index = Math.floor((direcao / 45) + 0.5);
  return pontosCardeais[index];
}

// Função para calcular a sensação térmica
function calcularSensacaoTermica(temp, umidade, vento) {
  let temperatura = temp;
  let v = Math.pow(vento, 0.16);
  let t = temperatura;
  let h = umidade;

  let index = (13.12 + (0.6215 * t) - (11.37 * v) + (0.3965 * t * v));
  let wc = index.toFixed(2);

  if (temp < 10) {
    let wcIndex = (13.12 + (0.6215 * t) - (11.37 * v) + (0.3965 * t * v));
    wc = (wcIndex - ((wcIndex - t) / ((0.83 - 0.005 * Math.sqrt(h)) - 1.4))) .toFixed(2);
  }

  return wc;
}

// Função para calcular o consumo de energia
function calcularConsumoEnergia(temp, umidade, vento) {
  let consumo = 0;

  if (temp >= 22 && temp <= 25) {
    consumo += 2;
  } else if (temp >= 26 && temp <= 29) {
    consumo += 4;
  } else if (temp >= 30) {
    consumo += 6;
  }

  if (umidade >= 40 && umidade <= 60) {
    consumo += 1;
  } else if (umidade > 60) {
    consumo += 2;
  }

  if (vento >= 5 && vento <= 10) {
    consumo += 1;
  } else if (vento > 10) {
    consumo += 2;
  }

  return consumo;
}

// Código principal
console.log("Previsibilidade de Vento e Consumo de Energia Residencial\n");

// Simulação para 24 horas
for (let hora = 0; hora < 24; hora++) {
  console.log("Hora: " + hora + ":00");

  // Geração de valores aleatórios para as variáveis
  velocidadeVento = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
  direcaoVento = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
  temperaturaExterna = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
  umidade
