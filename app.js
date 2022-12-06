const path = require ("path");

const express = require ("express");
const app = express();

app.listen(3001, () =>{
    console.log("El servidor prendió");
  });
  
  app.use(express.static(path.join(__dirname, "public")));

//VERBO "GET" HTTP
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/home.html"));
});

// /images/logo-mercado-liebre
