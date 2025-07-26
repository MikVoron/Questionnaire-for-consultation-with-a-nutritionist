document.addEventListener('DOMContentLoaded', function () {
  const range = document.getElementById('stress_level');
  const valueDisplay = document.getElementById('valueDisplay');

  function updateRange(value) {
    const percent = ((value - range.min) / (range.max - range.min)) * 100;
    range.style.background = `linear-gradient(to right, #74c69d ${percent}%, #ccc ${percent}%)`;
    valueDisplay.textContent = value;
  }

  // Инициализация
  updateRange(range.value);

  // Обновление при изменении
  range.addEventListener('input', function () {
    updateRange(this.value);
  });
});
