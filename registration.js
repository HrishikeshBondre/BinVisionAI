function toggleCaptcha(element) {
  element.classList.toggle("checked");
}

function handleSubmit(event) {
  event.preventDefault();
  const captcha = document.querySelector(".captcha-checkbox");
  if (!captcha.classList.contains("checked")) {
    alert("Please complete the captcha verification");
    return;
  }
  const formData = new FormData(event.target);
  console.log("Form submitted with data:", Object.fromEntries(formData));
  alert("Registration submitted successfully!");
}

function toggleForm() {
  alert("Sign in functionality would be implemented here");
}

document.querySelector(".theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
});

document.querySelector(".search-icon").addEventListener("click", function () {
  console.log("Search clicked");
});

document.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
});
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
