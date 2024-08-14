// ** React Imports
import { useState } from 'react'
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

// ** Icons Imports
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

const TabBilling = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit')

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Billing Info' />
      <CardContent>
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' gutterBottom>
            
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2'>Full Name:</Typography>
              <Typography>Dave</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='subtitle2'>Email Address:</Typography>
              <Typography>daviesny@outlook.com</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='subtitle2'>Selected Plan:</Typography>
              <Typography>Professional</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' gutterBottom>
            What's included with your Professional plan
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleOutline color='success' sx={{ mr: 1 }} />
              <Typography>Social profiles: 10</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleOutline color='success' sx={{ mr: 1 }} />
              <Typography>Unlimited scheduling</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleOutline color='success' sx={{ mr: 1 }} />
              <Typography>Real-time analytics</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' gutterBottom>
            Manage my subscription
          </Typography>
          <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 1 }}>
            <Typography variant='subtitle2'>Status</Typography>
            <Typography color='error'>Overdue</Typography>
            <Typography variant='subtitle2' sx={{ mt: 1 }}>Fix by</Typography>
            <Typography>Sept 9, 2024</Typography>
            <Typography sx={{ mt: 1 }}>Please update your information then re-attempt payment.</Typography>
            <Button variant='contained' color='primary' sx={{ mt: 2 }}>
              Re-attempt payment
            </Button>
          </Box>
          <Button color='primary' sx={{ mt: 2 }}>
            Cancel subscription
          </Button>
        </Box>

        <Box>
          <Typography variant='h6' gutterBottom>
            Payment Type
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="payment-method"
              name="payment-method"
              value={paymentMethod}
              onChange={handlePaymentChange}
            >
              <FormControlLabel value="credit" control={<Radio />} label="Pay by Credit Card" />
              <FormControlLabel value="paypal" control={<Radio />} label="Pay using PayPal" />
            </RadioGroup>
          </FormControl>
        </Box>

        {paymentMethod === 'credit' && (
          <Box sx={{ mt: 4 }}>
            <Typography variant='subtitle1' gutterBottom>
              Credit Card Number
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Enter your credit card number"
              InputProps={{
                endAdornment: <CreditCardOutline />,
              }}
            />
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Typography variant='subtitle1' gutterBottom>
                  Expiry Date
                </Typography>
                <TextField
                  fullWidth
                  placeholder="MM/YYYY"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1' gutterBottom>
                  Security Code
                </Typography>
                <TextField
                  fullWidth
                  placeholder="123"
                  InputProps={{
                    endAdornment: <HelpCircleOutline />,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        )}

        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Image src="/images/misc/visa-icon.png" alt="Visa" width={40} height={25} />
          <Image src="/images/misc/mastercard-icon.png" alt="Mastercard" width={40} height={25} />
          <Image src="/images/misc/amex-icon-2048x1286-jssggdy1.png" alt="American Express" width={40} height={25} />
          <Image src="/images/misc/discover.png" alt="Discover" width={40} height={25} />
          <Image src="/images/misc/jcb.png" alt="JCB" width={40} height={25} />
        </Box>

        <Typography variant='caption' sx={{ display: 'block', mt: 2 }}>
          We don't accept POs, checks, or invoices to be paid at a later date. We will email you a receipt each time your card is charged.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TabBilling