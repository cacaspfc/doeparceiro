var baseUrl = "http://localhost:8000";

function sendAnswer(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;
  fetch(baseUrl + "/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).then(function (response) {
    if (response != null) {
      alert("Tudo certo");
      return;
    } else {
      alert("Resposta Errada!");
    }
  });
}
