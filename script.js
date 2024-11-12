function getUserInfo() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      displayUserInfo(user);
    })
    .catch((error) => {
      console.error("Помилка завантаження даних:", error);
    });
}

function displayUserInfo(user) {
  const userContainer = document.getElementById("user-container");

  const userBlock = document.createElement("div");
  userBlock.className = "user-info";
  userBlock.innerHTML = `
        <img src="${user.picture.large}" alt="Фото користувача" class="user-photo">
        <div class="user-detail"><strong>Ім'я:</strong> ${user.name.first} ${user.name.last}</div>
        <div class="user-detail"><strong>Країна:</strong> ${user.location.country}</div>
        <div class="user-detail"><strong>Поштовий індекс:</strong> ${user.location.postcode}</div>
        <div class="user-detail"><strong>Телефон:</strong> ${user.phone}</div>
    `;

  userContainer.appendChild(userBlock);
}
