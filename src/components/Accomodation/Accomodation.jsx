/*useParams in order to extract parameters from URL*/ 
import { useParams } from 'react-router-dom';
import accommodationData from '../../data/data.json';

export default function AccomodationDetails() {
  const { id } = useParams();
  const accommodationDetails = accommodationData.find(accommodation => accommodation.id === id);

  return (
    <div>
      <img src={accommodationDetails.cover} alt={accommodationDetails.title} />
      <h1>{accommodationDetails.title}</h1>
      <ul>
        {accommodationDetails.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <p>{accommodationDetails.description}</p>
      <div className="host_info">
        <img src={accommodationDetails.host.picture} alt={accommodationDetails.host.name} />
        <p> {accommodationDetails.host.name}</p>
      </div>
    </div>
    
  );
}
