/*useParams in order to extract parameters from URL*/
import Carousel from "components/Carousel/Carousel";
import { useParams } from "react-router-dom";
import { getAccomodation } from "services/dataManager";
import Rating from "components/Rating/Rating";
import Collapse from "components/Collapse/Collapse";
import "./Accomodation.scss";
export default function AccomodationDetails() {
  const { id } = useParams();
  const accommodationDetails = getAccomodation(id);

  return (
    <div className="accomodation_details_container">
      <Carousel images={accommodationDetails.pictures} />
      <div className="accomodation_details">
        <h1 className="accomodation_details_title">
          {accommodationDetails.title}
        </h1>
        <h2 className="accomodation_details_location">
          {accommodationDetails.location}
        </h2>
        <ul className="tags">
          {accommodationDetails.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="host_info">
        <div className="host_name_picture">
          <img
            src={accommodationDetails.host.picture}
            alt={accommodationDetails.host.name}
          />
          <p> {accommodationDetails.host.name}</p>
        </div>
        <Rating rating={accommodationDetails.rating} />
      </div>
      <div className="accomodation_details_collapse">
        <Collapse
          title="Description"
          content={accommodationDetails.description}
        />
        <Collapse
          title="&#xC9;quipement"
          content={accommodationDetails.equipments}
        />
      </div>
    </div>
  );
}
