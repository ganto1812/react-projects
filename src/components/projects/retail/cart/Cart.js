import React from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart(props) {
  return (
    <section className="text-white">
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <div className="p-5">
                  <h1>Your Cart</h1>
                  <div className="border border-light">
                    <h5>For the Paypal transaction</h5>
                    <p>Username: sb-enk243937121@personal.example.com</p>
                    <p>Password: '-?F;2Qe</p>
                  </div>
                </div>
                <CartColumns></CartColumns>
                <CartList value={value}></CartList>
                <CartTotals value={value} history={props.history}></CartTotals>
              </React.Fragment>
            );
          } else {
            return <EmptyCart></EmptyCart>;
          }
        }}
      </ProductConsumer>
    </section>
  );
}
