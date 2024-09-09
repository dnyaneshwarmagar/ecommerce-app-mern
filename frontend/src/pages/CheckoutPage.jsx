import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CheckoutPage = () => {
  const [address,setAddress] = useState({});
  const dispatch = useDispatch();
  const order = useSelector((state=>state.order));
  const user = useSelector((state)=>state.user)

  const addAddress = (address) =>{
    e.preventDefault();
    disp
  }
  return (
    <div class="container mb-5">
        <main>
          <div class="py-5 text-center">
            <h2>Checkout</h2>
          </div>
      
          <div class="row g-3">
            <div class="col-md-5 col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Your cart</span>
                <span class="badge bg-secondary rounded-pill">{order.total_items}</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">Total</h6>
                    <small class="text-muted">Cart Items</small>
                  </div>
                  <span class="text-muted">{order.total_items}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">Total</h6>
                    <small class="text-muted">Shipping Charges</small>
                  </div>
                  <span class="text-muted">${order.shipping_charges}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0">Total</h6>
                    <small class="text-muted">Discount({order.discount_in_percent}%)</small>
                  </div>
                  <span class="text-muted">-${order.discount_in_percent * order.total_cost /100}</span>
                </li>
               
                {/* <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">−$5</span>
                </li> */}
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${order.total_cost + order.shipping_charges - order.total_cost * order.discount_in_percent / 100}</strong>
                </li>
              </ul>

      
            </div>
            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Shipping address</h4>

              {user?.addresses?.map((address)=><div class="card">
                <div class="card-body">
                  <h5 class="card-title">{address.first_name + " " + address.last_name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted ">{address.address1}, {address.address2}, {address.state}, {address.country},{address.pincode}</h6>
                  <p class="card-text">{address.phone}</p>
                  <input type="radio" name="address" id=""/> Use this Address
                </div>
              </div>)}

              <hr class="my-4" />
              <h5>OR</h5>

              <h4 class="mb-3">Add New Address</h4>

              <form class="needs-validation" novalidate="" onSubmit={()=>addAddress(address)}>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
      
                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
      
      
                  <div class="col-12">
                    <label for="phone" class="form-label">Phone <span class="text-muted"></span></label>
                    <input type="tel" class="form-control" id="phone" placeholder="+91-1111111111" value="" required="" />
                    <div class="invalid-feedback">
                      Please enter a valid phone for shipping updates.
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                  </div>
      
                  <div class="col-md-5">
                    <label for="country" class="form-label">Country</label>
                    <select class="form-select" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
      
                  <div class="col-md-4">
                    <label for="state" class="form-label">State</label>
                    <select class="form-select" id="state" required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
      
                  <div class="col-md-3">
                    <label for="zip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required="" />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
      
                <hr class="my-4" />
  
      
                <button class="w-100 btn btn-success btn-lg" type="submit">Add Address</button>
              </form>
              <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </div>
          </div>
        </main>
    
      </div>
  )
}

export default CheckoutPage