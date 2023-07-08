const doneInputs = document.querySelectorAll(".done-input")
const allInputs = document.querySelectorAll(".do-input");
const timeInputs = document.querySelectorAll(".time-input");
const startT = document.getElementById("startT");
const saveData = document.getElementById("submit");
localStorage.setItem("listCount", 24)

saveData.addEventListener("click", () => {
    allInputs.forEach((input) => {
        localStorage.setItem(input.getAttribute("id"), input.value)
    })
    doneInputs.forEach((input) => {
        localStorage.setItem(input.getAttribute("id"), input.checked)
    })
});

allInputs.forEach((input) => {
    input.value = localStorage.getItem(input.getAttribute("id"))
})

doneInputs.forEach((input) => {
    let isTrueSet = (localStorage.getItem(input.getAttribute("id")) === 'true')
    input.checked = isTrueSet;
})

timeInputs.forEach(function callback(value, index) {
    value.valueAsNumber = (startT.valueAsNumber) + (index * 3600000)
})
