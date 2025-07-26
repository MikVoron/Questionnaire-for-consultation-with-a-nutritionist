document.addEventListener('DOMContentLoaded', () => {
  // Кнопка печати
  const printButton = document.getElementById("print-button");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  // === Стресс ===
  const stressRange = document.getElementById('stress_level');
  const stressDisplay = document.getElementById('valueDisplay');

  const stressStates = {
    1: { text: "😌 Минимальный уровень стресса", color: "#74c69d" },
    2: { text: "🙂 Низкий стресс", color: "#a5c974" },
    3: { text: "😐 Умеренный стресс", color: "#f5c542" },
    4: { text: "😟 Высокий стресс", color: "#f28e2b" },
    5: { text: "😣 Постоянный ежедневный стресс", color: "#e76f51" }
  };

  const updateStress = (value) => {
    const numeric = parseInt(value);
    const percent = ((numeric - parseInt(stressRange.min)) /
                    (parseInt(stressRange.max) - parseInt(stressRange.min))) * 100;

    const state = stressStates[numeric];
    if (state) {
      stressRange.style.background = `linear-gradient(to right, ${state.color} ${percent}%, #ccc ${percent}%)`;
      stressDisplay.textContent = state.text;
      stressDisplay.style.color = state.color;
    }
  };

  if (stressRange && stressDisplay) {
    updateStress(stressRange.value);
    stressRange.addEventListener('input', e => updateStress(e.target.value));
  }

  // === Энергия ===
  const energyRange = document.getElementById('energy_level');
  const energyDisplay = document.getElementById('energyDisplay');

  const energyStates = {
    1: { text: '🙁 Низкий — требуется отдых', color: '#e76f51' },
    2: { text: '😕 Пониженный — ограниченная активность', color: '#f28482' },
    3: { text: '😐 Средний — стабильное состояние', color: '#f5c542' },
    4: { text: '🙂 Повышенный — продуктивность возрастает', color: '#a8dadc' },
    5: { text: '😄 Высокий — высокая вовлечённость и эффективность', color: '#74c69d' }
  };

 const updateEnergy = (value) => {
  const numericValue = parseInt(value);
  const percent = ((numericValue - parseInt(energyRange.min)) /
                   (parseInt(energyRange.max) - parseInt(energyRange.min))) * 100;

  const state = energyStates[numericValue];
  if (state) {
    // Цвет слайдера — градиент
    energyRange.style.background = `linear-gradient(to right, ${state.color} ${percent}%, #ccc ${percent}%)`;

    // Только текст и цвет текста
    energyDisplay.textContent = state.text;
    energyDisplay.style.color = state.color;

    // Без фонов, без анимаций
    energyDisplay.style.backgroundColor = 'transparent';
  }
};


  if (energyRange && energyDisplay) {
    updateEnergy(energyRange.value);
    energyRange.addEventListener('input', e => updateEnergy(e.target.value));
  }
});
