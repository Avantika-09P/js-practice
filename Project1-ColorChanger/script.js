const buttonCode = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttonCode.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);

        const color = e.target.id;
        body.style.backgroundColor = color;
    });
});
