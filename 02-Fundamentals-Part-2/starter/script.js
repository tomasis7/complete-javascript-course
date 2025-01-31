const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYeah;
  },
};
console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));
