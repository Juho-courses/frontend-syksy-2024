function f1(p1) {
  console.log(p1);
}

f1("aksjdaksdj");

const f2 = (p1, p2) => {
  console.log(`${p1}: ${p2}`);
};

f2("B1", "B2");

const f3 = () => {
  return [1, 2, 3, 16];
};

let [eka, toka, ...loput] = f3();
console.log({ eka, toka, loput });

const f4 = ({ sana }) => {
  console.log(sana);
};
const f4_2 = (p1) => {
  console.log(p1.sana);
};

f4({ kirjain: "a", numero: 123, sana: "SANA" });
f4_2({ kirjain: "a", numero: 123, sana: "SANA" });
