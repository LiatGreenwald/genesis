// import React, { useState } from 'react';
// import './Booking.css'; 

// interface BookingProps {
//   movieTitle: string;
// }

// interface Ticket {
//   seatNumber: number;
//   price: number;
// }

// const Booking: React.FC<BookingProps> = ({ movieTitle }) => {
//   const [selectedSeats, setSelectedSeats] = useState<Ticket[]>([]);
//   const [screeningTime, setScreeningTime] = useState('16:00');
//   const seatPrice = 10;

//   const handleSeatClick = (seatNumber: number) => {
//     const seatIndex = selectedSeats.findIndex((seat) => seat.seatNumber === seatNumber);

//     if (seatIndex === -1) {
//       setSelectedSeats([...selectedSeats, { seatNumber, price: seatPrice }]);
//     } else {
//       const updatedSelectedSeats = [...selectedSeats];
//       updatedSelectedSeats.splice(seatIndex, 1);
//       setSelectedSeats(updatedSelectedSeats);
//     }
//   };

//   const calculateTotalPrice = () => {
//     return selectedSeats.reduce((total, seat) => total + seat.price, 0);
//   };

//   const handleScreeningTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setScreeningTime(event.target.value);
//   };

//   return (
//     <div className="booking-container">
//       <h2>{movieTitle}</h2>
//       <div className="screening-time-container">
//         <label htmlFor="screening-time-select">Select screening time:</label>
//         <select id="screening-time-select" value={screeningTime} onChange={handleScreeningTimeChange}>
//           <option value="16:00">16:00</option>
//           <option value="18:00">18:00</option>
//           <option value="20:00">20:00</option>
//           <option value="22:00">22:00</option>
//         </select>
//       </div>
//       <p>Select your seats:</p>
//       <div className="seat-container">
//         {[...Array(30)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleSeatClick(index + 1)}
//             className={`seat ${selectedSeats.some((seat) => seat.seatNumber === index + 1) ? 'selected' : ''}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <p className="price-container">Total price: ${calculateTotalPrice()}</p>
//       <button disabled={selectedSeats.length === 0} className="buy-now-button">
//         Buy now
//       </button>
//     </div>
//   );
// };

// export default Booking;



import React, { useState } from 'react';
import './Booking.css'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


interface BookingProps {
  movieTitle: string;
}

interface Ticket {
  seatNumber: number;
  price: number;
}

const Booking: React.FC<BookingProps> = ({ movieTitle }) => {
  const [selectedSeats, setSelectedSeats] = useState<Ticket[]>([]);
  const [screeningTime, setScreeningTime] = useState('16:00');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const seatPrice = 30;

  const handleSeatClick = (seatNumber: number) => {
    const seatIndex = selectedSeats.findIndex((seat) => seat.seatNumber === seatNumber);

    if (seatIndex === -1) {
      setSelectedSeats([...selectedSeats, { seatNumber, price: seatPrice }]);
    } else {
      const updatedSelectedSeats = [...selectedSeats];
      updatedSelectedSeats.splice(seatIndex, 1);
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  const handleScreeningTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setScreeningTime(event.target.value);
  };

  return (
//     <div className="booking-container">
//       <h2>{movieTitle}</h2>
      


      

//       <div className="date-picker-container">
//   <label htmlFor="date-picker">Select date:</label>
//   <DatePicker
//     id="date-picker"
//     selected={selectedDate}
//     onChange={handleDateChange}
//     dateFormat="dd/MM/yyyy"
//   />
// </div>
//       <div className="screening-time-container">
//         <label htmlFor="screening-time-select">Select screening time:</label>
//         <select id="screening-time-select" value={screeningTime} onChange={handleScreeningTimeChange}>
//           <option value="16:00">16:00</option>
//           <option value="18:00">18:00</option>
//           <option value="20:00">20:00</option>
//           <option value="22:00">22:00</option>
//         </select>
//       </div>
     
//       <p>Select your seats:</p>
//       <div className="seat-container">
//         {[...Array(88)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleSeatClick(index + 1)}
//             className={`seat ${selectedSeats.some((seat) => seat.seatNumber === index + 1) ? 'selected' : ''}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <p className="price-container">Total price: ${calculateTotalPrice()}</p>
//       <button disabled={selectedSeats.length === 0} className="buy-now-button">
//         Buy now
//       </button>
//     </div>
//   );
// };

// export default Booking;


<div className="booking-container">
  <h2>{movieTitle}</h2>
  <div className="row">
    <div className="date-picker-container">
      <label htmlFor="date-picker">Select date:</label>
      <DatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
    </div>
    <div className="screening-time-container">
      <label htmlFor="screening-time-select">Select screening time:</label>
      <select id="screening-time-select" value={screeningTime} onChange={handleScreeningTimeChange}>
        <option value="16:00">16:00</option>
        <option value="18:00">18:00</option>
        <option value="20:00">20:00</option>
        <option value="22:00">22:00</option>
      </select>
    </div>
  </div>
  <p>Select your seats:</p>
  <div className="seat-container">
    {[...Array(88)].map((_, index) => (
      <button
        key={index}
        onClick={() => handleSeatClick(index + 1)}
        className={`seat ${selectedSeats.some((seat) => seat.seatNumber === index + 1) ? 'selected' : ''}`}
      >
        {index + 1}
      </button>
    ))}
  </div>
  <p className="price-container">Total price: ${calculateTotalPrice()}</p>
  <button disabled={selectedSeats.length === 0} className="buy-now-button">
    Buy now
  </button>
</div>
);
 };
 
export default Booking;
