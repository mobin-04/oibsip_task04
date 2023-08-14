document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Successfully logged in!");
  });

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const signupUsername = document.getElementById("signupUsername").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const signupPasswordConfirm = document.getElementById(
      "signupPasswordConfirm"
    ).value;

    if (signupPassword !== signupPasswordConfirm) {
        alert("Passwords do not match!");
    } else {
      alert("Successfully registered!");
    }
  });
