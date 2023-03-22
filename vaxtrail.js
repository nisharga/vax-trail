const vaxTrail = (allPerson) => {
  const output = { A: [], B: [], C: [], D: [] };

  allPerson.forEach((data) => {
    if (data.age >= 20 && data.age <= 30 && data.temperature < 100) {
      if (data.age % 2 == 0) {
        output["A"].unshift(data);
      } else {
        output["A"].push(data);
      }
    } else if (data.age >= 31 && data.age <= 40 && data.temperature < 100) {
      if (data.age % 2 == 0) {
        output["B"].unshift(data);
      } else {
        output["B"].push(data);
      }
    } else if (data.age >= 41 && data.age <= 50 && data.temperature < 100) {
      if (data.age % 2 == 0) {
        output["C"].unshift(data);
      } else {
        output["C"].push(data);
      }
    } else if (data.temperature >= 100) {
      if (data.age % 2 == 0) {
        output["D"].unshift(data);
      } else {
        output["D"].push(data);
      }
    }
  });

  return output;
};

// const person = [
//   { name: "sunil", age: 21, temperature: 98 },
//   { name: "Biplap", age: 22, temperature: 98 },
//   { name: "Paul", age: 42, temperature: 98 },
//   { name: "Sabnaj", age: 51, temperature: 101 },
//   { name: "Rahul", age: 37, temperature: 99 },
//   { name: "Kat", age: 41, temperature: 98 },
//   { name: "Nayem", age: 50, temperature: 100 },
//   { name: "Kabir", age: 36, temperature: 99 },
// ];
// console.log(vaxTrail(person));
