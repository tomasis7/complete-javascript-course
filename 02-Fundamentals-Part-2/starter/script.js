// const bill = 100;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// function calcTip(bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// }

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  },
};
console.log(jonas.calcAge(1991));
