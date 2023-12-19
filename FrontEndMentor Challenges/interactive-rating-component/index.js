const submitBtn = document.getElementById("submit");
const numbers = document.getElementsByClassName("number");
const numbers_array = Array.from(numbers);

numbers_array.forEach((number) => {
    number.addEventListener("click", () => {
        localStorage.setItem("variable1", number.textContent);
    });
});

submitBtn.addEventListener("click", () => {
    window.location.href = "./thankyou.html";
});