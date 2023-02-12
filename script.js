const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("#form");

const url =
  "https://ksomncus27.execute-api.us-east-1.amazonaws.com/dev/contact";

form.addEventListener("submit", function (event) {
  //preventing default submit
  event.preventDefault();

  //defining the request body
  var request_body = {
    name: nameInput.value,
    email: email.value,
    message: message.value,
  };

  //fetching the request
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request_body),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
    if (response.status === 200) {
      document.getElementById("final-message").style.display = "block";
      document.getElementById("form").style.display = "none";
      document.getElementById("final-message-h3").innerHTML =
        "Form filled successfully";
    } else {
      document.getElementById("form").reset();
      document.getElementById("final-message-h3").innerHTML =
        "Error Occured while submitting the form. Please Try again";
      document.getElementById("final-message").style.display = "block";
      document.getElementById("final-message").style.margin = "20px auto";
      document.getElementById("form").style.margin = "3vh auto 3vh auto";
      document.getElementById("form").style.padding = "20px 30px";
    }
  });

  //
});
