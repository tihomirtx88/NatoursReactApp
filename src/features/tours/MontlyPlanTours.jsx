
import { useParams } from "react-router";
import { useMontlyTours } from "../tours/useMontlyTours";
const MontlyPlanTours = () => {
    const year = useParams();
    
    const { montlyTours } = useMontlyTours(year);
    // console.log(montlyTours);
    
    
  return <div className="card-container">

  </div>;
};

export default MontlyPlanTours;
