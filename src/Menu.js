import Pizza from "./Pizza";
import "./index.css";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingrediens="Tomato, mozarela, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingrediens="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
    </main>
  );
}

export default Menu;
