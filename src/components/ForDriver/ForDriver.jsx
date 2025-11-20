import React from 'react'
import './ForDriver.css'
import SummaryImg1 from '../../assets/summary1.png'
import SummaryImg2 from '../../assets/summary2.png'
import SummaryImg3 from '../../assets/summary3.png'

const rides = [
  {
    id: 1,
    date: { month: "OCT", day: "24", label: "Today" },
    status: "● Live • Accepting Bookings",
    code:"#HR-8293",
    start: {
      time: "10:00 AM",
      city: "Mumbai",
      place: "Gateway of India Point",
    },
    end: {
      time: "02:30 PM",
      city: "Pune",
      place: "Phoenix Market City",
    },
    price: "₹450",
    available: "3 / 4",
    passengers: "1 passenger booked recently",
    showAvatar: true,
     buttonText: "Manage Bookings",
  },
  {
    id: 2,
    date: { month: "OCT", day: "27", label: "Sunday" },
    status: "Scheduled",
    code:"#HR-8293",
    start: {
      time: "10:00 AM",
      city: "Mumbai",
      place: "Gateway of India Point",
    },
    end: {
      time: "02:30 PM",
      city: "Pune",
      place: "Phoenix Market City",
    },
    price: "₹450",
    available: "4 / 4",
    passengers: "No booking Yet",
    showAvatar: false,
    buttonText: "View Details",
  },
];
const summary=[
    {
      img:SummaryImg1,
     title:"Total earnings",
     desc:'₹12,2450'   
    },
    {
      img:SummaryImg2,
     title:"Rides completed",
     desc:'₹12,2450'   
    },
    {
      img:SummaryImg3,
     title:"Driver Rating",
     desc:'₹12,2450'   
    },
]
const ForDriver = () => {
  return (
     <section className="rides-section">
      <div className="container">
        <div className="my-rides-title">
          <div>
            <h1>My Rides</h1>
            <p>Manage your upcoming trips and bookings.</p>
          </div>
          <div className="post-btn">
          <button className="btn btn-primary post-btn">
            <span className='post-plusbtn'>+</span>
            Post a Ride</button>
          </div>
        </div>

        <div className="summary-grid">
           {summary.map((card,i)=>(
            <div className="summary-card" key={i}>
              <div className="summary-card-img">
              <img src={card.img} alt="" className={`summary-img ${card.img===SummaryImg1?"bg-orange":"bg-gray"}`}/>
              </div>
              <div className="summary-card-content">
                <p>{card.title}</p>
                <h2>{card.desc}</h2>
                </div>
            </div>
        ))}
        </div>

        <div className="tabs-container">
          <li className="tab active">Upcoming (2)</li>
          <li className="tab">Completed</li>
          <li className="tab">Cancelled</li>
        </div>

        <div className="ride-grid">
          {rides.map((ride) => (
            <div className="ride-card" key={ride.id}>
              <div className="ride-date">
                <span className="month">{ride.date.month}</span>
                <span className="day">{ride.date.day}</span>
                <span className="label">{ride.date.label}</span>
              </div>

              <div className="ride-content">
                <div className="status-btn">
                <button className={`status-badge ${ride.status==="Scheduled"?"status-gray":"status-green"}`}>{ride.status}</button>
                <p className='code-id'>{ride.code}</p>
                </div>
                <div className="route-row">
                  <div className="route">
                    <div className="time-entry">
                      <span className={`dot ${ride.status==="Scheduled"? "gray":"orange"}`}></span>
                      <span className="time">{ride.start.time}</span>
                      <div className="city">{ride.start.city}</div>
                      <div className="place">{ride.start.place}</div>
                    </div>

                    <div className="time-entry">
                      <span className={`dot ${ride.status==="Scheduled"? "gray":"yellow"}`}></span>
                      <span className="time">{ride.end.time}</span>
                      <div className="city">{ride.end.city}</div>
                      <div className="place">{ride.end.place}</div>
                    </div>
                  </div>

                  <div className="price-box">
                    <div>
                      <div className="label-small">Price / Seat</div>
                      <div className="price">{ride.price}</div>
                    </div>
                      <span className='divider'></span>
                    <div>
                      <div className="label-small">Available</div>
                      <div className="availability">{ride.available.split('/')[0]}/<span className='available-gray'>{ride.available.split('/')[1]}</span></div>
                    </div>
                  </div>
                </div>

                <div className="ride-footer">
                  <div className="passenger-info">
                    {ride.showAvatar && <div className="avatar"><img src="https://i.pravatar.cc/300/" alt="" /></div>}
                    <span>{ride.passengers}</span>
                  </div>

                  <div className="actions">
                    <button className="btn actions-btn">Edit Details</button>
                    <button className={`btn ${ride.status==="Scheduled"?"actions-btn":"btn-primary"}`}>{ride.buttonText}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForDriver