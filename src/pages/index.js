const buttonsSubmit = document.querySelectorAll(".button-submit");
const inputElements = document.querySelectorAll(".form__item");

//установление текста на кнопку в зависимости от ширины экрана
function setTextOfButton(text) {
  const viewport_width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (viewport_width < 496) {
    buttonsSubmit.forEach((btn) => {
      const arr = btn.textContent.trim().split(" ");
      const icon = arr.slice(arr.length - 1).join();
      btn.textContent = icon;
    });
  } else {
    buttonsSubmit.forEach((btn) => {
      btn.textContent = text;
    });
  }
}

// слушаем изменение размеров экрана
function addEventListenerWindow(text) {
  window.addEventListener("resize", () => setTextOfButton(text));
}

//проверка валидности инпута
function checkInputValidity(input) {
  const isInputValid = input.validity.valid;

  if (isInputValid) {
    input.nextElementSibling.textContent = "Круто, спасибо за доверие! 💪";
    setTextOfButton("Круто, спасибо за доверие! 💪");
    addEventListenerWindow("Круто, спасибо за доверие! 💪");
  } else {
    input.nextElementSibling.textContent = "Отремонтируйте камеру ✌️";
    setTextOfButton("Отремонтируйте камеру ✌️");
    addEventListenerWindow("Отремонтируйте камеру ✌️");
  }
}

// текст кнопки при загрузке страницы
setTextOfButton("Отремонтируйте камеру ✌️");
addEventListenerWindow("Отремонтируйте камеру ✌️");

inputElements.forEach((input) => {
  input.addEventListener("input", () => checkInputValidity(input));
});
