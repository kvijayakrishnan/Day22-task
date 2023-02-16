import React from 'react'

function Cart({ cartItems, removeFromCart }) {
  //Fragment
  return (
    <>
      {
        cartItems.length === 0 ? <div>No items in Cart</div> :
          <>
          <h1>Add To Cart</h1>
            <ol class="list-group list-group-numbered">
              {

                cartItems.map((items) => {
                  return <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{items.name}</div>

                      RS.{items.price}
                    </div>
                    <button onClick={() => {
                      removeFromCart(items)
                    }} class="badge bg-danger rounded-pill">-</button>
                  </li>
                })
              }
            </ol>
            <h3>Total : RS.{
              cartItems.reduce((prev, curr) => {
                return prev = Number(prev) + Number(curr.price)
              }, 0)

            }</h3>
          </>
      }
    </>
  )
}

export default Cart