// add js here

const terms = document.getElementById("#terms");
const form = document.getElementById("form");

form.addEventListener("submit", checkValidations);

function checkValidations(event) {
  // Password validation
  let errorPlaceholder = document.getElementById("pwdError");
  let errorDisplay = document.querySelector(".error-msg");
  let pwdStr = document.getElementById("pwd").value;
  let pwd = document.getElementById("pwd");
  let confirmPwd = document.getElementById("confirmPwd");
  let pwdConfirmStr = document.getElementById("confirmPwd").value;

  if (pwdStr.length < 10) {
    errorPlaceholder.innerText =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
    pwd.classList.add("pink-outline");
    pwd.focus();
    errorDisplay.style.display = "block";
  } else if (pwdStr != pwdConfirmStr) {
    errorPlaceholder.innerText =
      "Your password and confirmation password do not match.";
    confirmPwd.classList.add("pink-outline");
    confirmPwd.focus();
    errorDisplay.style.display = "block";
  } else if (!document.getElementById("termbox").checked) {
    // Terms validation
    alert("You have to agree to the terms of service to continue!");
  } else if (document.getElementById("termbox").checked) {
    alert("Success!");
    clearErrors();
    return true;
  }

  event.preventDefault();
}

function clearErrors() {
  document.getElementById("pwd").classList.remove("pink-outline");
  document.getElementById("confirmPwd").classList.remove("pink-outline");
}
