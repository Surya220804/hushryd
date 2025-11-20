import React, { use, useState } from 'react'
import mapImg from '../../assets/map.png'
import { TrendingUp } from 'lucide-react';
import './NewRide.css'
import { FaMapMarkerAlt } from "react-icons/fa";
const NewRide = () => {
    const [count,SetCount]=useState(1)
    const increase=()=>SetCount((prev)=>prev+1)
    const  decrease=()=>SetCount((prev)=>prev-1)

  return (
    <section className='new-ride'>
        <div className="container">
          <div className="publish-grid">
            <div className="publish-grid-item">
                <div className="publish-title">
                    <h1>Publish a ride</h1>
                    <p>Share your journey and save travel costs. It takes less than 2 minutes.</p>
                </div>
                <div className="card-grid">
                    <div className="card">
                        <h3 className="section-title"><span className='title1'>1</span> Route Details</h3>
                        <label className="form-label">Leaving from</label>
                        <div className="card1-input-wrapper">
                        <input type="text" className="input" placeholder="Mumbai, Maharashtra" />
                        <span className='input-icon dot-icon'>.</span>
                        </div>
                        <div className="card1-input-wrapper">
                        <label className="form-label">Going to</label>
                        <input type="text" className="input" placeholder="City, street, or station" />
                        <span className='input-icon2'><FaMapMarkerAlt/></span>
                        </div>
                        <div className="new-stop">
                            <span className="plus-icon">+</span>
                             <span>Add Stopover</span>
                        </div>
                     </div>
                     <div className="card">
                        <h3 className="section-title"><span className='title2'>2</span> Schedule</h3>

                        <div className="two-grid">
                            <div>
                            <label className="form-label">Date</label>
                            <input type="date" className="input" />
                            </div>
                            <div>
                            <label className="form-label">Time</label>
                            <input type="time" className="input" />
                            </div>
                         </div>
                     </div>
                     <div className="card">
                        <h3 className="section-title"><span className='title3'>3</span> Ride Preferences</h3>
                        <div className="card3-grid">
                        <label className="card3-title">Available Seats</label>
                        <div className="seat-selector">
                            <button onClick={decrease} disabled={count<=0}>-</button>
                            <span className='quantity'>{count}</span>
                            <button onClick={increase}>+</button>
                        </div>
                        </div>
                        <p className='card3-desc'>Max 2 passengers in the back seat recommended for comfort.</p>
                        <label className="form-label">Price per seat</label>
                        <input type="number" className="input" placeholder="450" />
                        <span>₹</span>
                        <div className="recommended-tag">
                            <span><TrendingUp/></span>
                            Recommended price for this route: ₹420 – ₹480
                        </div>
                        <div className="checkbox-group">
                            <div className="checkbox-group-item">
                                <div className="checkbox-row">
                                    <input type="checkbox" className='checkbox' />
                                <div className='checkbox-title'>
                                 <h4>Card Title</h4>
                                 <p>Accept bookings automatically</p>
                                 </div>
                              </div>
                            </div>
                            <div className="checkbox-group-item">
                                <div className="checkbox-row">
                                    <input type="checkbox" className='checkbox'/>
                                    <div className='checkbox-title'>
                                   <h4>Ladies Only</h4>
                                   <p>Only allow female passengers</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="cards-desc">
                        <label className="form-label">Ride Description (Optional)</label>
                        <textarea className="textarea" rows="6" placeholder="Add details about your ride, luggage space, pets, music, etc." />
                     </div>
                 </div>
            </div>
            <div className="publish-grid-item">
                <div className="map-img">
                    <img src={mapImg} alt="" />
                </div>
                <div className="earnings-card">
                    <h3>Estimated Earnings</h3>
                    <div className="earnings-amount">₹1,350</div>
                    <div className="earning-row-container">
                    <div className="earnings-row">
                        <span>Base fare (3 passengers)</span>
                        <span>₹1,350</span>
                    </div>
                    <div className="earnings-row">
                        <span>Service fee</span>
                        <span>-₹0</span>
                    </div>
                    <div className="earnings-total">
                        <span>Total Payout</span>
                        <span>₹1,350</span>
                    </div>
                    </div>
                      <p className="earnings-note">Earnings are transferred to your bank account 24 hours after the ride is completed.</p>
                </div>
                <div className="verification-card">
                   <strong>ID Verification Required</strong>
                   <p>To publish a ride, verify your driving license and Government ID if you haven't already.</p>
                </div>
            </div>
          </div>
          <div className="publish-footer">
              <button className="publish-btn">Publish Ride</button>
              <p className="tos-text">By publishing, you agree to our <span>Terms of Service</span></p>
          </div>
        </div>
    </section>
  )
}

export default NewRide