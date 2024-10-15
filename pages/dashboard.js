// MUI Imports
import DashboardLayout from './pages/dashboard/DashboardLayout'
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import Facebook from 'mdi-material-ui/Facebook'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import Linkedin from 'mdi-material-ui/Linkedin'
import Instagram from 'mdi-material-ui/Instagram'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// Import the getKindeServerSession function
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const { isLoading, isAuthenticated, getUser } = useKindeAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('/images/avatars/1.png');

  useEffect(() => {
    console.log('Auth state:', { isLoading, isAuthenticated });

    const checkAuth = async () => {
      if (!isLoading) {
        if (!isAuthenticated) {
          console.log('User not authenticated, redirecting to login');
          router.push('/login');
        } else {
          try {
            const user = await getUser();
            console.log('Authenticated user:', user);
            setUserName(user.given_name || user.family_name || 'User');
            if (user.picture) {
              setUserAvatar(user.picture);
            }
          } catch (err) {
            console.error('Error fetching user:', err);
            setError('Failed to fetch user data');
          }
        }
      }
    };

    checkAuth();
  }, [isLoading, isAuthenticated, getUser, router]);

  if (isLoading) {
    return <div>Loading... (isLoading: {isLoading.toString()})</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!isAuthenticated) {
    return <div>Not authenticated. Redirecting...</div>;
  }

  return (
    <ApexChartWrapper>
      <DashboardLayout>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy userName={userName} userAvatar={userAvatar} />
          </Grid>
          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='25.5k'
                  icon={<Facebook />}
                  color='info'
                  trendNumber='+43%'
                  title='Facebook Page'
                  subtitle='Weekly followers'
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='78'
                  title='LinkedIn'
                  trend='negative'
                  color='info'
                  trendNumber='-15%'
                  subtitle='Weekly followers'
                  icon={<Linkedin />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='862'
                  trend='negative'
                  trendNumber='-18%'
                  title='Instagram'
                  subtitle='Weekly followers'
                  icon={<Instagram />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='15'
                  color='warning'
                  trend='negative'
                  trendNumber='-18%'
                  subtitle='Weekly followers'
                  title='Tiktok'
                  icon={<HelpCircleOutline />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SalesByCountries />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <DepositWithdraw />
          </Grid>
        </Grid>
      </DashboardLayout>
    </ApexChartWrapper>
  )
}

export default Dashboard;
