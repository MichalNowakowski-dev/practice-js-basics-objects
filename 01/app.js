const user = {
  firstName: "Adam",
  lastNAme: "Gutkowski",
  sex: "male",
  age: 19,
};

for (const key in user) {
  const element = user[key];
  console.log(element);
}
