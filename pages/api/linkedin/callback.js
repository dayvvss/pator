import axios from 'axios';
import qs from 'querystring';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ error: 'Missing authorization code' });
    }

    try {
      const tokenResponse = await axios.post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        qs.stringify({
          grant_type: 'authorization_code',
          code,
          client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
          redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { access_token, expires_in } = tokenResponse.data;

      // Here you can fetch the user's LinkedIn profile if needed
      // For now, we'll just return the access token and expiration

      res.status(200).json({ success: true, access_token, expires_in });
    } catch (error) {
      console.error('LinkedIn Auth Error:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Failed to authenticate with LinkedIn' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}