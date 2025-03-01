// blog-page <> main page navigation

function goTo(address) {
  window.location.href = address;
}
//--------------------------------

// background-color-changing script
const bgColorChanger = document.getElementById("bg-color-changer");
const body = document.querySelector("body");

const bgColors = [
  "bg-gray-200",
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];
let bgColorClickNumber = 0;
bgColorChanger.addEventListener("click", function (event) {
  console.log(event.target);

  body.classList.remove(bgColors[bgColorClickNumber]);
  bgColorClickNumber += 1;
  if (bgColorClickNumber === 7) {
    bgColorClickNumber = 0;
  }
  body.classList.add(bgColors[bgColorClickNumber]);
});

// ---------------------------------------------

let dueTask = parseInt(document.getElementById("due-task").innerText); //6
let totalFinishedTask = parseInt(
  document.getElementById("total-finished-task").innerText
);
function statusChange(state) {
  const button = document.getElementById(`completed-btn-${state}`);

  if (!button.disabled) {
    alert("Board updated Successfully");
    dueTask -= 1;
    if (dueTask === 0) {
      alert("Congrats, you have completed all the current task");
    }
    totalFinishedTask += 1;
    button.classList.remove("bg-[#3752FD]");
    button.classList.add("bg-gray-300");
    document.getElementById("due-task").innerText = dueTask;
    document.getElementById("total-finished-task").innerText =
      totalFinishedTask;
    button.disabled = true;
  }
}
