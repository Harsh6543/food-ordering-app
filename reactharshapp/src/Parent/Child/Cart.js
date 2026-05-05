import React from 'react' 

const Cart = ({cart, addToCart, decrease, handleOrder}) => { 

  const totalAmount = cart.reduce((acc, current) => acc + current.price * current.quantity, 0);

  return (
    <>
      <div className="cart-container"> 

        <div className="cart-summary">
            <h3>Total: ₹{totalAmount}</h3>
            <button className="order-btn" onClick={() => handleOrder(totalAmount)}> 
                Place Order Now
            </button>
        </div>

        <h2 className="cart-title">🛒 My Cart</h2>
        {cart.length === 0 && <p className="empty-msg">Cart is empty</p>}

        <div className="cart-items-list">



        {cart.map((val) => (
          <div key={val.id} className="cart-item-card">

            <p><strong>{val.elementName}</strong></p>

            <div className="qty-control">
              <button className='qty-btn' onClick={() => decrease(val.id)}>-</button>
              <span className='qty-value'>{val.quantity}</span>
              <button className='qty-btn' onClick={() => addToCart(val)}>+</button>
            </div>

            <p className="cart-item-price">
              ₹{val.price * val.quantity}
            </p>

          </div>
        ))}


        </div>

      </div>



    </>
  )
}

export default Cart
