import CardMembership from 'src/views/cards/CardMembership'

// Sample data
const newsData = [
  {
    "provider_name": "",
    "name": "Solved: Dropbox latest update & location - The Dropbox Community",
    "published_date": "",
    "snippet": "No data available for this provider",
    "image": "https://www.dropboxforum.com/html/assets/maroonlogo.png",
    "url": "https://www.dropboxforum.com/t5/Apps-and-Installations/Dropbox-latest-update-amp-location/td-p/686801"
  },
  {
    "provider_name": "",
    "name": "Google Maps - Apps on Google Play",
    "published_date": "",
    "snippet": "No data available for this provider",
    "image": "https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA",
    "url": "https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=en_US"
  }
];

const DiscoverPage = () => {
  return (
    <div>
      {/* ... other components ... */}
      {newsData.map((news, index) => (
        <CardMembership key={index} data={news} />
      ))}
      {/* ... other components ... */}
    </div>
  )
}


export default DiscoverPage
