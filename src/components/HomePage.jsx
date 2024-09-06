import Button from 'react-bootstrap/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity } from '../redux/ProductsSlice';

function HomePage() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const increaseQuantit = (productId) => {
    dispatch(updateQuantity({ productId, quantity: 1}))
  };

  const decreaseQuantity = (productId) =>{
    dispatch(updateQuantity({ productId, quantity: -1 }))
  };

  return <>
      <div className='container'>
        {
          products.map((e)=>{
            let price = (e.price)

            const discountPrice = Math.round(e.price * (e.discountPercentage/100))

            return <React.Fragment  key={e.id}>
            <div className='card mb-5 border-dark' style={{backgroundColor:'#F5F5DC', minWidth:'100%', maxWidth:'540px'}}>
              <div className="row g-0">
                <div className="col-md-3">
                    <img src={e.image} className='w-100 p-2 cardImage' alt="..."/>
                </div>
                <div className='col-md-9'>
                  <div className="card-body px-3">
                    <div className="top">
                      <div className='top-header d-flex justify-content-between align-items-center'>
                        <h3>{e.title}</h3>
                        <h4><del>${e.price}</del></h4>
                      </div>

                      <div className='d-flex justify-content-between align-items-center'>
                        <p className="h4">Brand : {e.brand}</p>
                        <p className="text-warning h4">Discount : {e.discountPercentage}%</p>
                      </div>

                      <p className="text-muted h6">{e.description}</p>
                      <p className="text-primary h4">Ratings : {e.rating}/5</p>

                      <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='text-danger'>Items left : {e.stock}</h5>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h4 style={{marginRight:'10px'}}>Quantity :</h4>
                          <Button variant="outline-danger" onClick={() => {
                            decreaseQuantity(e.id)}}>
                            <strong> - </strong>
                          </Button>
                          <div style={{marginRight:'5px', marginLeft:'5px'}}>{e.quantity}</div>
                          <Button variant="outline-success" onClick={() => {
                            increaseQuantit(e.id)
                          }}>
                            <b> + </b>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="bottom">
                    <div className='d-flex justify-content-between align-items-center'> 
                      Original amount ({e.quantity} Quantity) :
                      <div className='d-flex justify-content-between align-items-center'>
                        <p className='p-2'>{e.quantity} * ${e.price} = </p>
                        <p>${e.quantity*price}</p>
                      </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                      Discount Amount ({e.quantity} Quantity) :
                      <div className='d-flex justify-content-between align-items-center'>
                        <p className='p-2'>{e.quantity} * ${discountPrice} = </p>
                        <p>${e.quantity*discountPrice}</p>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <b>Total Amount :</b>
                      <h5 className='card-text'>
                        <strong>${e.quantity*price - e.quantity*discountPrice}</strong>
                      </h5>
                    </div>
                    </div>
                    <Button variant="outline-success" className='float-end my-3'>Buy Now
                          </Button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        })
        }
      </div>
  </>
}

export default HomePage
