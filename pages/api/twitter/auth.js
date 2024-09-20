import { OAuth } from 'oauth';

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
  oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret, results) => {
    if (error) {
      console.error('Error getting OAuth request token:', error);
      return res.status(500).json({ error: 'Failed to get OAuth request token' });
    }

    // Store oauthTokenSecret in session or database
    // For this example, we'll use a cookie, but in production, you should use a more secure method
    res.setHeader('Set-Cookie', `oauthTokenSecret=${oauthTokenSecret}; HttpOnly; Path=/; Max-Age=3600`);

    const authUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`;
    res.status(200).json({ authUrl });
  });
}