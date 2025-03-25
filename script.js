let display = document.getElementById('display');

// Adiciona um valor ao visor
function appendToDisplay(value) {
  display.value += value;
}

// Limpa o visor
function clearDisplay() {
  display.value = '';
}

// Calcula o resultado
function calculate() {
  try {
    display.value = eval(display.value); // Usa eval() para calcular (cuidado em produção!)
  } catch (error) {
    display.value = 'Erro';
  }
}