// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

// Once you have grabbed the favorite foods. Deconstruct the food array to grab only the first 2 values.

user.favoriteThings.food//?
user.favoriteThings.food.slice(0,2)//?