const { olderPeople, people } = require("../exercise-4");

test("Exercise 4", () => {
  expect(olderPeople(people, 30)).toStrictEqual([
    { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
    { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
    { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  ]);
  expect(olderPeople(people, 50)).toStrictEqual([]);
});
