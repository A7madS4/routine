const doneInputs = document.querySelectorAll(".done-input")
const allInputs = document.querySelectorAll(".task-input");
const saveData = document.getElementById("submit");
localStorage.setItem("listCount", 30)

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

