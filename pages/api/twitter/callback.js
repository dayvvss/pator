import { OAuth } from 'oauth';
import { parse } from 'cookie';

const oauth = new OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  '1.0A',
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/twitter/callback`,
  'HMAC-SHA1'
);

export default function handler(req, res) {
  const { oauth_token, oauth_verifier } = req.query;
  const cookies = parse(req.headers.cookie || '');
  const oauthTokenSecret = cookies.oauthTokenSecret;

  if (!oauthTokenSecret) {
    return res.status(400).json({ error: 'Missing OAuth token secret' });
  }

  oauth.getOAuthAccessToken(
    oauth_token,
    oauthTokenSecret,
    oauth_verifier,
    (error, oauthAccessToken, oauthAccessTokenSecret, results) => {
      if (error) {
        console.error('Error getting OAuth access token:', error);
        return res.status(500).json({ error: 'Failed to get OAuth access token' });
      }

      // Here, you would typically store the access token and secret in your database
      // associated with the user's account. For this example, we'll just send them back to the client.
      
      // Clear the oauthTokenSecret cookie
      res.setHeader('Set-Cookie', 'oauthTokenSecret=; HttpOnly; Path=/; Max-Age=0');

      // Redirect to a page in your app, passing the tokens as query parameters
      // In a real app, you'd want to handle this more securely
      res.redirect(`/pages/connect-socials?twitterAccessToken=${oauthAccessToken}&twitterAccessTokenSecret=${oauthAccessTokenSecret}`);
    }
  );
}