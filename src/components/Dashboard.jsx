import TourCard from "../features/tours/tourCard";
import { useTours } from "../features/tours/useTours";

const Dashboard = () => {
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

export default Dashboard;
