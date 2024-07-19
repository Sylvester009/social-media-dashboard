const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector("body");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.remove("light-body");
    body.classList.add("dark-body");
  } else {
    body.classList.remove("dark-body");
    body.classList.add("light-body");
  }
});
