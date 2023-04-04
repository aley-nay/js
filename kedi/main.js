var { kedi } = require("./kediler.js");

let scotish = new kedi(5, "scotish", "gri");


scotish.mir();
scotish.mew();
scotish.miov();

console.log("değişmeden önce:");

scotish.ozellik();


console.log("değiştikten sonra:");

scotish.yas = "2";
scotish.tur = "iran";
scotish.renk = "kahve";
scotish.ozellik();
