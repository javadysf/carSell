import { useRouter } from "next/router"
import carsData from "../../../data/CarsData.js";
import CarsDetail from "../../../components/templates/CarDetails.js";



const detailPage = () => {
     const router = useRouter();
    const {carId} = router.query;
    const car = carsData[carId-1];

  return (
    <CarsDetail {...car}/>
  )
}

export default detailPage