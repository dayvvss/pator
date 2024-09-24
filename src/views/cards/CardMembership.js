

const CardMembership = ({ data }) => {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center',  marginTop: '16px'  }}> 
      <img src={data.image} alt={data.name} style={{ maxHeight: '200px', maxWidth: '200px', marginRight: '20px' }} /> 
      <div> 
        <h3>{data.name}</h3>
        <p>{data.snippet}</p>
        <a href={data.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
}

export default CardMembership;
