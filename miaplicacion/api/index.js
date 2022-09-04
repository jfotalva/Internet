const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
let transactionsArr=[]

//Enviar REQUEST pero codificadas
//#region USE
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    type: "*/*",
  })
);

app.use(cors());
//#endregion

app.get("/transactions", (req, res) => {
  res.status(200).json(transactionsArr);
});

app.post("/transactions", (req, res) => {
    transactionsArr.push(req.body)
    res.send(JSON.stringify("Almacenado. "))
    console.log(transactionsArr);
  });


app.listen(port, () => {
  console.log(
    `----------- Estoy ejecutándome en http://localhost:${port}` + " -----------"
  );
});
