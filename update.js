const { Article } = require("./models");

Article.update(
  {
    tittle: "hai hai",
  },
  {
    where: { id: 1 },
  }
).then((article) => {
  console.log(article);
});
