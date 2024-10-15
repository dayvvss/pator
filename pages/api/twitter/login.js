import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
import axios from 'axios';

export default async function handler(req, res) {
  const oauth = OAuth({
    consumer: {
      key: process.env.TWITTER_API_KEY,
      secret: process.env.TWITTER_API_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    },
  });

  const request_data = {
    url: 'https://api.twitter.com/oauth/request_token',
    method: 'POST',
    data: { oauth_callback: process.env.TWITTER_CALLBACK_URL },
  };

  try {
    const response = await axios.post(request_data.url, null, {
      headers: oauth.toHeader(oauth.authorize(request_data)),
    });

    // Twitter returns data in query-string format, so we parse it
    const params = new URLSearchParams(response.data);
    const oauth_token = params.get('oauth_token');
    const oauth_token_secret = params.get('oauth_token_secret');

    // Save tokens in session (or cookies)
    res.setHeader('Set-Cookie', [
      `oauth_token=${oauth_token}; Path=/; HttpOnly`,
      `oauth_token_secret=${oauth_token_secret}; Path=/; HttpOnly`,
    ]);

    // Redirect user to Twitter for authorization
    res.redirect(`https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`);
  } catch (error) {
    console.error('Error fetching request token:', error);
    res.status(500).json({ error: 'Failed to get request token from Twitter' });
  }
}
