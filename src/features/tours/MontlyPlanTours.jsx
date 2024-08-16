import { useParams } from "react-router";
import { useMontlyTours } from "../tours/useMontlyTours";
import TourCard from "../tours/TourCard";
import { useEffect, useState } from "react";
const MontlyPlanTours = () => {
  const year = useParams();
  const [montlyTours, setMontlyTours] = useState([]);

  // Fetch tours for the month using the custom hook
  const fetchedData = useMontlyTours(year);

  useEffect(() => {
    if (
      fetchedData &&
      fetchedData.montlyTours &&
      fetchedData.montlyTours.data
    ) {
      setMontlyTours(fetchedData.montlyTours.data.plan);
    }
  }, [fetchedData]);

  return (
    <div className="card-container">
      {montlyTours.length > 0 ? (
        montlyTours.map((tour, index) =>  <TourCard key={index} tour={tour} />)
      ) : (
        <div className="TODO">{/* TODO */}</div>
      )}
    </div>
  );
};

export default MontlyPlanTours;
