const path = require ("path");

const express = require ("express");
const app = express();

  app.use(express.static(path.join(__dirname, "public")));

  /*const PORT= process.env.PORT || 3001;


  app.listen(PORT, () =>{
    console.log("El servidor prendió");
  });
*/


  const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

  

//VERBO "GET" HTTP (ruta principal raíz)mando archivo html al navegador con sendFile --> path)
 app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/home.html"));
});
app.get("/register", (req, res) =>{
  res.sendFile(path.join(__dirname,"views/register.html"));
});
app.get("/login", (req, res) =>{
  res.sendFile(path.join(__dirname,"views/login.html"));
});
// /images/logo-mercado-liebre
