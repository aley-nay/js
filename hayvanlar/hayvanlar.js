class kedi{
    constructor(y, t, r) {
    this.yas = y;
    this.tur = t;
    this.renk = r;
    //console.log("kediler yaratılıyor...\n bip\n\tbep\n\t\tbop");
  }


  mew() {
    console.log("\t\tmew\n\tmew\nmew");
  }
  

  ozellik() {
    console.log(
      `Yaşı : ${this.yas} \n Türü : ${this.tur}\n Renk : ${this.renk}`
    );
  }

}

////////////////////////////////////////////////////////////////////////////////

class kopek{
    constructor(y, t, r) {
    this.yas = y;
    this.tur = t;
    this.renk = r;
    //console.log("köpekler yaratılıyor...\n bip\n\tbep\n\t\tbop");
  }


  whof() {
    console.log("\t\twhof\n\twhof\nwhof");
  }
  

  ozellik() {
    console.log(
      `Yaşı : ${this.yas} \n Türü : ${this.tur}\n Renk : ${this.renk}`
    );
  }

}

////////////////////////////////////////////////////////////////////////////////


class ek1 extends kedi {
    constructor(y, t, r, _sertifika, _odul, _sahip) {
        super(y,t,r);
        this.sertifika = _sertifika;
        this.odul = _odul;
        this.sahip = _sahip;

      }
      ozellik() {
        console.log(
          `Sertifika : ${this.sertifika} \n Ödül : ${this.odul} \n Sahip : ${this.sahip}`

        );
      }
}

////////////////////////////////////////////////////////////////////////////////

class ek2 extends kopek {
    constructor(y, t, r, _sertifika, _odul, _sahip) {
        super(y,t,r);
        this.sertifika = _sertifika;
        this.odul = _odul;
        this.sahip = _sahip;

      }
      ozellik() {
        console.log(
          `Sertifika : ${this.sertifika} \n Ödül : ${this.odul} \n Sahip : ${this.sahip}`

        );
      }
}

module.exports = { kedi,kopek, ek1, ek2 };