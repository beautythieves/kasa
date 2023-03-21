/*useParams in order to extract parameters from URL*/
import Carousel from "components/Carousel/Carousel";
import { useParams, useNavigate } from "react-router-dom";
import { getAccomodation } from "services/dataManager";
import Rating from "components/Rating/Rating";
import Collapse from "components/Collapse/Collapse";
import "./Accomodation.scss";
import { useEffect, useState } from "react";
export default function AccomodationDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [accommodationDetails, setAccommodationDetails] = useState(false);
  useEffect(() => {
    const result = getAccomodation(id);
    if (!result) {
      navigate("/error404");
    } else setAccommodationDetails(result);
  }, [id, navigate]);

  return (
    accommodationDetails && (
      <div className="accomodation_details_container">
        <Carousel images={accommodationDetails.pictures} />
        <div className="wrapper_different_device">
          <div className="accomodation_titleAndLocation">
            <h1 className="accomodation_details_title">
              {accommodationDetails.title}
            </h1>
            <h2 className="accomodation_details_location">
              {accommodationDetails.location}
            </h2>
          </div>
          <div className="host_details">
            <div className="host_name_container">
              <p className="host_id"> {accommodationDetails.host.name}</p>
            </div>
            <img
              className="host_name_picture"
              src={accommodationDetails.host.picture}
              alt={accommodationDetails.host.name}
            />
          </div>
          <div className="tags_and_rating">
            <ul className="tags">
              {accommodationDetails.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
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
    )
  );
}
