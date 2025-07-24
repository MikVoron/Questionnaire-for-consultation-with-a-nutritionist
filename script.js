const printButton = document.getElementById("print-button");
document.addEventListener("DOMContentLoaded", function () {

  if (printButton) {
    printButton.addEventListener("click", function () {
      window.print();
    });
  }
});
