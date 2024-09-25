import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import CalenderStickyHeader from 'src/views/tables/CalenderStickyHeader'

const Calendar = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // Fetch data from API
  //   axios.get('https:'//api.example.com/events')
  //     .then(response => {
  //       setEvents(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // const renderEvents = (date) => {
  //   return events.filter(event => new Date(event.date).toDateString() === date.toDateString())
  //     .map((event, index) => (
  //       <div key={index} className={`event ${event.tag}`}>
  //         {event.name}
  //       </div>
  //     ));
  // };

  // const renderCalendar = () => {
  //   const dates = [];
  //   const startDate = new Date(2024, 4, 1); // May 1, 2024
  //   const endDate = new Date(2024, 4, 31); // May 31, 2024

  //   for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
  //     dates.push(new Date(date));
  //   }

  //   return dates.map((date, index) => (
  //     <div key={index} className="calendar-day">
  //       <div className="date">{date.getDate()}</div>
  //       <div className="events">
  //         {renderEvents(date)}
  //       </div>
  //     </div>
  //   ));
  // };

  return (
    <div>
   
      <CalenderStickyHeader/>
    </div>

  //   <div className="calendar">
  //     {renderCalendar()}
  //   </div>
  );
};

export default Calendar;