import TourCard from "./TourCard";
import { useMyTours } from "./useMyTours";

export default function Mytours() {
  const { myTours } = useMyTours();
  const readingData = myTours?.data?.tours || [];

  return (
    <div className="card-container">
      {readingData.length > 0 ? (
        readingData.map((tour) => <TourCard key={tour._id} tour={tour} />)
      ) : (
        <div className="TODO">{/* TODO */}</div>
      )}
    </div>
  );
}
