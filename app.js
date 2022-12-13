const path = require ("path");

const express = require ("express");
const app = express();

  app.use(express.static(path.join(__dirname, "public")));


  app.listen(3000, () =>{
    console.log("El servidor prendió");
  });
  

//VERBO "GET" HTTP (ruta principal raíz)mando archivo html al navegador con sendFile --> path)
 app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/home.html"));
});

// /images/logo-mercado-liebre
