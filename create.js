const { Article } = require("./models");

Article.create({
  tittle: "Hai",
  body: "Ini body",
  approved: false,
}).then((article) => {
  console.log(article);
});
