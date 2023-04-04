class kedi{
    constructor(y, t, r) {
    this.yas = y;
    this.tur = t;
    this.renk = r;

    console.log("kediler hazır...");
  }

  mir() {
    console.log("mır mır mır...");
  }

  mew() {
    console.log("mew mew mew...");
  }

  miov() {
    console.log("miv miov miv...");
  }
  

  ozellik() {
    console.log(
      `Yaşı : ${this.yas} \n Türü : ${this.tur}\n Renk : ${this.renk}`
    );
  }

}

module.exports = { kedi };