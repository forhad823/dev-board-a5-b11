// blog-page <> main page navigation

function goTo(address) {
  window.location.href = address;
}
//--------------------------------

// background-color-changing script---------

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
//----------------------------

// ---------Code to set Current local Day and Date
const options = {
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric",
};
const formattedDate = new Date().toLocaleDateString("en-US", options);
const finalDate = formattedDate.replace(",", "").replace(",", "");
const spaceIndex = finalDate.indexOf(" ");
const localDay = finalDate.slice(0, spaceIndex);
const localDate = finalDate.slice(spaceIndex + 1);

const calender = document.getElementById("calender");
const today = document.createElement("div");
today.innerHTML = `<p class="text-sm text-gray-600 font-medium">
  ${localDay} ,<br />
  <span class="font-bold text-sm">${localDate}</span>
</p>`;
calender.appendChild(today);
//---------------------------------------

//-----------function to get current local time-----------//
function localTime() {
  const now = new Date();

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return now.toLocaleTimeString("en-US", options);
}

// --Chain of Reaction after clicking Completed button---------//

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
    // history relavent code-below
    const TaskTitle = document.getElementById(`task-title-${state}`).innerText;
    const historyBox = document.getElementById("history");
    const history = document.createElement("div");
    history.classList.add("bg-[#F4F7FF]", "px-2", "py-1", "my-3");
    history.innerHTML = `<p class="text-xs font-semibold opacity-60 text-left">
    You have completed the task  <span class="font-bold bg-opacity-100 text-blue-800">${TaskTitle}</span> <br> at ${localTime()}
  </p>`;
    historyBox.appendChild(history);

    // disabling the completed btn
    button.disabled = true;
  }
}

//----------Code for Clear-History button----//

function clearHistory() {
  document.getElementById("history").innerHTML = "";
}
