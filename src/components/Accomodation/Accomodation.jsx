/*useParams in order to extract parameters from URL*/ 
import Carousel from 'components/Carousel/Carousel';
import { useParams } from 'react-router-dom';
import { getAccomodation } from 'services/dataManager';

export default function AccomodationDetails() {
  const { id } = useParams();
  const accommodationDetails = getAccomodation(id);

  return (
    <div>
      <Carousel images={accommodationDetails.pictures} />
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
