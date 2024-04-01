export function apiResponse(url, valueShouldToUpdate) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Щось з інтернетом");
      }
      return res.json();
    })
    .then((data) => {
      valueShouldToUpdate(data);
    })
    .catch((error) => {
      console.error("Помилка в отниманні даних: ", error);
    });
}

