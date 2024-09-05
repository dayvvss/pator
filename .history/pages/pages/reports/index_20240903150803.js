import React from 'react'
import { Typography, Card, CardContent, Grid } from '@mui/material'

const ReportsPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Reports
            </Typography>
            <Typography variant="body2">
              This is the Reports page. Add your reports content here
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ReportsPage