console.log(`innerHeight: ${window.innerHeight}`);

console.log(`innerWidth: ${window.innerWidth}`);

console.log(`location: ${window.location}`);

console.log(`location.host: ${window.location.host}`);

console.log(`location.hostname: ${window.location.hostname}`);

console.log(`location.hostname: ${window.location.protocol}`);

// confirm("Are you sure you want to");

// prompt("What do you want to do");

// window.open("www.google.com");

// window.close();

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

window.addEventListener("click", function () {
  console.log("addEventListener: screen was clicked");
});

// window.print();
