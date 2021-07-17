import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

const Cart = ({
  cart,
  handleDecrementItem,
  handleIncrementItem,
  handleValidateCart,
  popUp,
}) => {
  return (
    <div className="cart">
      <div
        className="validate-cart"
        style={{
          backgroundColor: cart.length === 0 && "#BAC3C3",
          cursor: (cart.length === 0 || popUp) && "not-allowed",
          transform: (cart.length === 0 || popUp) && "none",
        }}
        onClick={handleValidateCart}
      >
        <p style={{ color: cart.length === 0 && "#8B9A9B" }}>
          Valider mon panier
        </p>{" "}
      </div>
      <div
        className="cart-content"
        style={{
          display: cart.length === 0 && "flex",
          justifyContent: cart.length === 0 && "center",
          alignItems: cart.length === 0 && "center",
          height: cart.length === 0 && "10rem",
        }}
      >
        {cart.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <>
            <div className="cart-choice">
              {cart.map((element) => {
                return (
                  element.counter >= 1 && (
                    <div className="cart-item" key={element.id}>
                      <div className="cart-choice-div">
                        <div className="cart-btn">
                          <FontAwesomeIcon
                            icon="minus-circle"
                            onClick={() => handleDecrementItem(element.id)}
                            className="plus-minus"
                          />
                          <span className="cart-counters">
                            {element.counter}
                          </span>
                          <FontAwesomeIcon
                            icon="plus-circle"
                            onClick={() => handleIncrementItem(element.id)}
                            className="plus-minus"
                          />
                        </div>
                        <div className="cart-itemTitle">{element.title}</div>
                      </div>
                      <span className="cart-item-price">
                        {new Intl.NumberFormat("fr-FR", {
                          style: "currency",
                          currency: "EUR",
                        }).format(element.totalPrice)}{" "}
                      </span>
                    </div>
                  )
                );
              })}
            </div>
            {cart.length !== 0 && (
              <div className="cart-subtotal-deliveryFees">
                <div className="cart-subtotal">
                  <div>Sous-total</div>
                  <div className="cart-price-subtotal">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    }).format(
                      cart.reduce((sum, e) => (sum += e.totalPrice), 0)
                    )}
                  </div>
                </div>
                <div className="cart-deliveryFees">
                  <div>Frais de livraison</div>
                  <div className="cart-price-deliveryFees">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    }).format(2.5)}
                  </div>
                </div>
              </div>
            )}
            {cart.length !== 0 && (
              <div className="cart-total">
                <div>Total</div>
                <div className="cart-price-total">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                  }).format(
                    cart.reduce((sum, e) => (sum += e.totalPrice), 2.5)
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
