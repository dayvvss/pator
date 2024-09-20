// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import Compass from 'mdi-material-ui/CompassOutline'
import ChartBar from 'mdi-material-ui/ChartBar'
import AccountGroup from 'mdi-material-ui/AccountGroup'
import CalendarMonth from 'mdi-material-ui/CalendarMonth'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
  
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Create Post',
      icon: PencilOutline,
      path: '/pages/createpost',
      openInNewTab: true
    },
    {
      title: 'Connect Socials',
      icon: AccountGroup,
      path: '/connect-socials'
    },
    {
      title: 'Discover',
      icon: Compass,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Reports',
      icon: ChartBar,
      path: '/pages/reports',
      openInNewTab: true
    },
    
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'User Settings'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Billing',
      icon: CreditCardOutline,
      path: '/account-settings#billing'
    }
  ]
}

export default navigation
