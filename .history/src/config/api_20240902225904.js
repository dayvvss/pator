import axios from 'axios';

const API_BASE_URL = 'https://pator-2c7e229d56e1.herokuapp.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;

export const endpoints = {
  // Authentication
  login: '/auth/login/',
  register: '/auth/register/',
  googleLogin: '/auth/google/',
  refreshToken: '/auth/token/refresh/',

  // Onboarding (login_required)
  userIdentity: '/auth/userIdentity/',
  industry: '/auth/industry/',
  subscription: '/auth/subscription/',

  // Socials (login_required)
  facebookLogin: '/socialApps/facebook/login/',
  instagramLogin: '/socialApps/instagram/login/',
  xLogin: '/socialApps/X/login/',
  linkedinLogin: '/socialApps/linkedin/login/',
  linkedinCallback: '/socialApps/linkedIn/callback/',
  postToSocials: '/socialApps/post/',

  // AI
  generatePost: '/AI/generatePost/',

  // Bing API
  newsFeed: '/AI/newsfeed/',
  newsContent: '/AI/news/',
  webContent: '/AI/web/',
  imageContent: '/AI/image/',
  autoSuggest: '/AI/autosuggest/',


};