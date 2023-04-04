var { kedi, kopek, ek1, ek2 } = require("./hayvanlar.js");

let scotish = new kedi(5, "scotish", "gri");
let ekke = new ek1("","","","sertifikalı","3 ödül","jane doe");
//scotish.mew();



let doberman = new kopek(3, "doberman", "kızıl");
let ekko = new ek2("","","","sertifikasız","1 ödül","james");
//doberman.whof();

scotish.ozellik();
ekke.ozellik();
doberman.ozellik();
ekko.ozellik();
