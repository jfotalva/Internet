const formElement = document.getElementById("saveTransaction");
const port = 3000;
const pathPost = "/transactions";

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); //Cancelar comportamiento que tiene por defecto(Recargar)
  let transactionDescription = document.getElementById(
    "transactionDescription"
  ).value;
  let transactionPrice = document.getElementById("transactionPrice").value;
  let transaction = {
    transactionDescription: transactionDescription,
    transactionPrice: transactionPrice,
  };
  let transactionJson = JSON.stringify(transaction);
  //console.log(transactionJson);

  //Mandar los datos al backend
  fetch("http://localhost:" + port + pathPost, {
    method: "Post",
    body: transactionJson,
  }).then((x) => console.log(port + pathPost))
})

fetch("http://localhost:" + port + pathPost).then(x=> x.json()).then(console.log)
