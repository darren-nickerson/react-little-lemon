import Lemopndessert from "../assets/images/lemon-dessert.jpg";
import Bruschetta from "../assets/images/bruschetta.png";
import FishTacos from "../assets/images/fishtacos.jpeg";

export const menuItems = [
  {
    id: 1,
    name: "Bruschetta",
    price: "£12.99",
    image: Bruschetta,
    description:
      "Bruschetta is a classic Italian appetizer, featuring toasted bread topped with diced tomatoes, garlic, basil, and olive oil—a delightful combination of crunch and freshness.",
    category: "specials",
  },
  {
    id: 2,
    name: "Fish Tacos",
    price: "£9.99",
    image: FishTacos,
    description:
      "Fish tacos bring coastal bliss—crispy fish, shredded cabbage, and zesty toppings deliver a delectable symphony of flavors wrapped in a soft tortilla.",
    category: "specials",
  },

  {
    id: 3,
    name: "Lemon Dessert",
    price: "£8.99",
    image: Lemopndessert,
    description:
      "A zesty lemon dessert offers a delightful treat, harmonizing the tangy essence of lemons with a perfect blend of sweetness, creating a symphony of flavors.",
    category: "specials",
  }
];
