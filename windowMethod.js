console.log(`innerHeight: ${window.innerHeight}`);

console.log(`innerWidth: ${window.innerWidth}`);

console.log(`location: ${window.location}`);

console.log(`location.host: ${window.location.host}`);

console.log(`location.hostname: ${window.location.hostname}`);

console.log(`location.hostname: ${window.location.protocol}`);

const showConfirm = document.querySelector("#showConfirm");

showConfirm.addEventListener("click", () => {
  const wantTo = confirm("Are you sure you want to");
  console.log(wantTo);
  if (wantTo === true) {
    alert("Thanks");
  }
});

const showPrompt = document.querySelector("#showPrompt");

showPrompt.addEventListener("click", () => {
  prompt("Enter Your Name");
});

const closeWindow = document.querySelector("#closeWindow");

window.close();
closeWindow.addEventListener("click", () => {});

setTimeout(function () {
  console.log("I came after 1 seconds later");
}, 1000);

// let count = 0;
// setInterval(function () {
//   console.log(count++);
// }, 1000);

window.addEventListener("scroll", function () {
  if (window.scrollY === 50) {
    console.log("window scroll to top 50 px");
  }
});

window.localStorage.setItem("name", "Borhan");

console.log("From local storage:", window.localStorage.getItem("name"));

// window.localStorage.removeItem("name");

console.log(`Title: ${window.document.title}`);

// window.history.back();

// window.history.forward();

// window.history.go(-1);

console.log(window.history);

console.log(window.navigator.clipboard);

// window.print();

const openGitHub = document.querySelector("#openGitHub");
openGitHub.addEventListener("click", function () {
  window.open(
    "https://github.com/Md-Borhan/basic-js-problem-solving/blob/main/windowMethod.js"
  );
});
