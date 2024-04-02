const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "14",
    month: "04",
    year: "1985",
  },
};

function isTodayUserBirthday(user = {}) {
  const todayDate = new Date().toLocaleDateString();

  const userBirthdayDate = user.born.day + "." + user.born.month;

  if (todayDate.slice(0, -5) === userBirthdayDate) {
    console.log("Happy birthday!!!");
    return;
  }

  console.log("No birthday today, sorry...");
}

isTodayUserBirthday(user);
