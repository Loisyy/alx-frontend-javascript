const getGroceryMap = () => {
  const groceryMap = new Map();
  const groceryItems = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const item of Object.keys(groceryItems)) {
    groceryMap.set(item, groceryItems[item]);
  }
  return groceryMap;
};

export default getGroceryMap;
