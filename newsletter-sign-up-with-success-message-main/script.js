let emailInputFlag = false;
let inputElement = document.getElementById("email-input");
inputElement.addEventListener("input", function () {
  const emailValue = this.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    emailInputFlag = false;
    inputElement.classList.add("error");
    console.log("Invalid email format", inputElement);
    document.getElementById("error-message").style.display = "block";
  } else {
    emailInputFlag = true;
    inputElement.classList.remove("error");
    document.getElementById("error-message").style.display = "none";
  }
});

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    document.querySelector(".container").style.display = "none";
    document.querySelector(".attribution").style.display = "none";
    console.log("Form submitted", emailInputFlag);
    if (emailInputFlag) {
      document.getElementById("success-message").style.display = "block";
      return;
    } else {
      inputElement.classList.add("error");
      console.log("Invalid email format", inputElement);
      document.getElementById("error-message").style.display = "block";
      return;
    }
  });
