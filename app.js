const time1 = document.getElementById("time1");
const input1 = document.getElementById("inp1");
const saveData = document.getElementById("submit");
const result = document.getElementById("result");
saveData.addEventListener("click", ()=>{
    localStorage.setItem("input1", input1.value);
    localStorage.setItem("time1", time1.value)
})

input1.value = localStorage.getItem("input1");
time1.value = localStorage.getItem("time1")