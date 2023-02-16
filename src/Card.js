import React from 'react';


function Card({ movies,addToCart,cartItems}) {
  
  return (
    
    <div className='col-lg-2 border flex-grow-1 ms-5 mt-5 mb-3 bg-dark text-white-50'>
      <div className='row'>
        <div className='col-lg-12'>
          <img  src={movies.poster} alt="" height={'350px'} width={'260px'}  />

        </div>
        <div className='col-lg-12'>
          <h3>{movies.name}</h3>
          <div></div>
          <details>  
            <summary><b>Summary</b></summary>
            <p>{movies.summary}</p>
          </details>
          <h6><b>Rating:</b>{movies.rating} </h6>
          <h6><b>Price:</b>{movies.price}</h6>
          
          <button disabled={cartItems.some(obj => obj.id === movies.id)} onClick={()=>{addToCart(movies)}}
            className='btn btn-sm btn-primary mb-2'  >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card