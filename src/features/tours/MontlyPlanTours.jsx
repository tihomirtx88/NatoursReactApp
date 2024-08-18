import { useParams } from "react-router";
import { useMontlyTours } from "../tours/useMontlyTours";
import { useEffect, useState } from "react";
import MontlyToursCard from "./MontlyToursCard";

const MontlyPlanTours = () => {
  const { year } = useParams();
  const { montlyTours, error } = useMontlyTours(); // Use the custom hook
  const [displayedTours, setDisplayedTours] = useState([]);

  useEffect(() => {
    if (montlyTours && montlyTours.data && montlyTours.data.plan) {
      setDisplayedTours(montlyTours.data.plan);
    }
  }, [montlyTours]);

  if (error) {
    return <div>Error loading tours for {year}</div>;
  }

  return (
    <div className="card-container">
      {displayedTours.length > 0 ? (
        displayedTours.map((tour, index) => (
          <MontlyToursCard key={index} tour={tour} />
        ))
      ) : (
        <div>No tours available for {year}</div>
      )}
    </div>
  );
};

export default MontlyPlanTours;
