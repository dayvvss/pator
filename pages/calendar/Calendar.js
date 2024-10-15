import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalenderStickyHeader from 'src/views/tables/CalenderStickyHeader'
import Fullcalendar from './Fullcalendar'

const Calendar = () => {
 
  return (
    <div>
   
      {/* <CalenderStickyHeader/> */}
      <Fullcalendar/>
    </div>

 
  );
};

export default Calendar;