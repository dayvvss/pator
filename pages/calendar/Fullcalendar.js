import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Fullcalendar() {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      weekends={false}
      events={[
        { title: 'event 1', date: '2024-10-01' },
        { title: 'event 2', date: '2024-09-10' },
        { title: 'event 3', date: '2024-09-05' },
        { title: 'event 4', date: '2024-09-12' },
        { title: 'event 5', date: '2024-09-15' },
        { title: 'event 6', date: '2024-09-20' },
        { title: 'event 7', date: '2024-09-25' },
        { title: 'event 8', date: '2024-09-30' },
        { title: 'event 9', date: '2024-10-05' },
        { title: 'event 10', date: '2024-10-10' },
        { title: 'event 11', date: '2024-10-15' },
        { title: 'event 12', date: '2024-10-20' },
        { title: 'event 13', date: '2024-10-25' },
       
      ]}
    />
  )
}