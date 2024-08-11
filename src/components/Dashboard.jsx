import TourCard from "../features/tours/tourCard";
import { useTours } from "../features/tours/useTours";

const Dashboard = () => {
  const { tours, error } = useTours();
  const readingData = tours?.data?.tours || [];
 console.log(readingData, 'from data');
 
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
