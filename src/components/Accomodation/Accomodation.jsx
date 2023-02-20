/*useParams in order to extract parameters from URL*/ 
import { useParams } from 'react-router-dom';
import accomodation from '../../data/data.json';

export default function AccomodationDetails() {
  const { id } = useParams();
  console.log(id);
    const accomodationDetails = accomodation.find(
        (accomodation) => accomodation.id === id
    );
    return (
        <div>
            <h1>{accomodationDetails.title}</h1>
            <p>{accomodationDetails.description}</p>
        </div>
    );


}