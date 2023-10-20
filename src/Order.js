function Order({ closedHour, openHour }) {
  return (
    <div className="order">
      <div className="order">
        <p>
          We're currently open from {openHour}:00 to {closedHour}:00. Come visit
          us or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}

export default Order;
