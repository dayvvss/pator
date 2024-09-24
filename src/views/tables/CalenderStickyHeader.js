// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Select from '@mui/material/Select' // {{ edit_1 }}
import MenuItem from '@mui/material/MenuItem' // {{ edit_2 }}
import InputLabel from '@mui/material/InputLabel' // {{ edit_3 }}
import FormControl from '@mui/material/FormControl' // {{ edit_4 }}

const columns = [
  { id: 'monday', label: 'Monday', minWidth: 100 },  // {{ edit_1 }}
  { id: 'tuesday', label: 'Tuesday', minWidth: 100 }, // {{ edit_2 }}
  { id: 'wednesday', label: 'Wednesday', minWidth: 100 }, // {{ edit_3 }}
  { id: 'thursday', label: 'Thursday', minWidth: 100 }, // {{ edit_4 }}
  { id: 'friday', label: 'Friday', minWidth: 100 }, // {{ edit_5 }}
  { id: 'saturday', label: 'Saturday', minWidth: 100 }, // {{ edit_6 }}
  { id: 'sunday', label: 'Sunday', minWidth: 100 } // {{ edit_7 }}
]



const daysInMonth = 31; // Change to 30 for months with 30 days

const rows = Array.from({ length: Math.ceil(daysInMonth / 7) }, (_, weekIndex) => {
  const week = {};
  const startDay = weekIndex * 7 + 1;
  for (let i = 0; i < 7; i++) {
    const day = startDay + i;
    if (day <= daysInMonth) {
      week[columns[i].id] = `Post ${day}`; // Assigning tasks based on the day
    } else {
      week[columns[i].id] = ''; // Empty cell for days not in the month
    }
  }
  
  return week;
}); // {{ edit_1 }}

const CalenderStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // {{ edit_5 }}

  const handleMonthChange = (event) => { // {{ edit_6 }}
    setSelectedMonth(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <FormControl variant="outlined" sx={{ m: 2, minWidth: 120 }}> 
        {/* // {{ edit_7 }} */}
        <InputLabel>Month</InputLabel>
        <Select value={selectedMonth} onChange={handleMonthChange} label="Month"> 
          {/* // {{ edit_8 }} */}
          {Array.from({ length: 12 }, (_, index) => ( // {{ edit_9 }}
            <MenuItem key={index} value={index}>{new Date(0, index).toLocaleString('default', { month: 'long' })}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer sx={{ minHeight: 740 }}>
        <Table  aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: 150, width: 150, borderRight: '1px solid #ccc' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow  role='checkbox' tabIndex={-1} key={row.code} sx={{ borderRight: '1px solid #ccc' }}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell hover key={column.id} align={column.align} sx={{ minWidth: 150, width: 150, height: 150, borderRight: '1px solid #ccc' }}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
  )
}

export default CalenderStickyHeader
