import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});

 app.use(express.static("public"));

 // "About" sahifasi uchun route
app.get("/about", (req, res) => {
	res.render("about");
  });
  
  // "Contact" sahifasi uchun route
  app.get("/contact", (req, res) => {   
	res.render("contact");
  });
/* Write your code here:
1-qadam: Bosh sahifani (index.ejs) "/" yo‘nalishida render qiling.
2-qadam: Statik fayllar bog‘langanligiga ishonch hosil qiling va CSS ko‘rinishini tekshiring.
3-qadam: "About" va "Contact" sahifalarini render qilish uchun route qo‘shing.
Maslahat: "header.ejs" dagi navbar tugmalarining href qiymatlarini tekshiring.
4-qadam: "About" va "Contact" sahifalariga header va footer qismlarini qo‘shish uchun partiallardan foydalaning. */

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});