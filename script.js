const printButton = document.getElementById("print-button");
document.addEventListener("DOMContentLoaded", function () {

  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  // Кнопка печати (если используешь)
  const printButton = document.getElementById("print-button");
  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }

  // Ползунок уровня стресса
  const range = document.getElementById('stress_level');
  const valueDisplay = document.getElementById('valueDisplay');

  // Статусы стрессовых состояний
  const stressStates = {
    1: { text: "😌 Минимальный уровень стресса", color: "#74c69d" },
    2: { text: "🙂 Низкий стресс", color: "#a5c974" },
    3: { text: "😐 Умеренный стресс", color: "#f5c542" },
    4: { text: "😟 Высокий стресс", color: "#f28e2b" },
    5: { text: "😣 Постоянный ежедневный стресс", color: "#e76f51" }
  };

  function updateRange(value) {
  const numericValue = parseInt(value);
  const percent = ((numericValue - range.min) / (range.max - range.min)) * 100;

  // Обновляем цвет заливки через CSS-переменную
  const state = stressStates[numericValue];
  if (state) {
    range.style.setProperty('--range-fill', state.color);
    range.style.background = `linear-gradient(to right, ${state.color} ${percent}%, #ccc ${percent}%)`;
    valueDisplay.textContent = state.text;
    valueDisplay.style.color = state.color;
  }
}

  // Инициализация при загрузке
  updateRange(range.value);

  // Обновление при изменении
  range.addEventListener('input', function () {
    updateRange(this.value);
  });
});

// Позунок энергии

const energySlider = document.getElementById('energy-level');
const energyDisplay = document.getElementById('energy-display');

const colors = ['#e76f51', '#f28482', '#f5c542', '#a8dadc', '#74c69d'];

energySlider.addEventListener('input', () => {
  const val = energySlider.value;
  energyDisplay.textContent = val;
  energyDisplay.style.backgroundColor = colors[val - 1];

  const percent = ((val - 1) / 4) * 100;
  energySlider.style.background = `linear-gradient(to right, ${colors[val - 1]} 0%, #ccc ${percent}%)`;

  energyDisplay.style.animation = 'pop 0.3s ease';
  setTimeout(() => energyDisplay.style.animation = '', 300);
});
