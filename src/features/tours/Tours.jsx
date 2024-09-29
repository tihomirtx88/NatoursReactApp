import TourCard from "../../features/tours/TourCard";
import { useTours } from "../../features/tours/useTours";

const Tours = () => {
  const { tours } = useTours();
  const readingData = tours?.data?.tours || [];

 
  return (
    <div className="card-container">
      {readingData.length > 0 ? (
        readingData.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))
      ) : (
        <div className="TODO">
          {/* TODO */}
        </div>
      )}
    </div>
  );
};

export default Tours;
