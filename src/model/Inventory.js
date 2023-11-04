import { useState } from "react";

export const Inventory = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Tomato",
      quantity: 10,
      defquantity: 10,
      imgSrc: require("./../images/toamto.jpg"),
      expiryDate: Date("11-10-2023"),
    },
    {
      id: 2,
      name: "Onion",
      quantity: 6,
      defquantity: 10,
      imgSrc: require("./../images/onion.jpeg"),
      expiryDate: Date("11-15-2023"),
    },
    {
      id: 3,
      name: "Eggs",
      quantity: 18,
      defquantity: 10,
      imgSrc: require("./../images/egg.png"),
      expiryDate: Date("11-11-2023"),
    },
    {
      id: 4,
      name: "Bread",
      quantity: 10,
      defquantity: 10,
      imgSrc: require("./../images/bread.jpeg"),
      expiryDate: Date("11-01-2023"),
    },
    {
      id: 5,
      name: "Garlic",
      quantity: 2,
      defquantity: 10,
      imgSrc: require("./../images/garlic.jpg"),
      expiryDate: Date("12-12-2023"),
    },
    // Add more items as needed
  ]);

  const updateInventory = (id, newQuantity) => {
    const updatedInventory = inventory.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    // Set the state with the updated inventory
    setInventory(updatedInventory);
    console.log("Triggered," + id + " set to " + inventory[0].quantity);
  };

  const updatedefInventory = (id, newQuantity) => {
    const updatedInventory = inventory.map((item) => {
      if (item.id === id) {
        return { ...item, defquantity: newQuantity };
      }
      return item;
    });
    // Set the state with the updated inventory
    setInventory(updatedInventory);
    console.log("Triggered def," + id + " set to " + newQuantity);
  };

  const updateExpiryDate = (id, newExpiryDate) => {
    const updatedInventory = inventory.map((item) => {
      if (item.id === id) {
        return { ...item, expiryDate: Date(newExpiryDate) };
      }
      return item;
    });
    setInventory(updatedInventory);
    console.log("New Expiry date for" + id + " is " + newExpiryDate);
  };

  const addNewItem = (newItem) => {
    const lastItemId =
      inventory.length > 0 ? inventory[inventory.length - 1].id : 0;
    const newItemWithId = { ...newItem, id: lastItemId + 1 };
    setInventory([...inventory, newItemWithId]);
  };

  const deleteItem = (id) => {
    const updatedInventory = inventory.filter((item) => item.id !== id);
    setInventory(updatedInventory);
  };

  return {
    inventory,
    updateInventory,
    updatedefInventory,
    updateExpiryDate,
    addNewItem,
    deleteItem,
  };
};
