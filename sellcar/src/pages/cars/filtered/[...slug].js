import { useRouter } from "next/router"
import carsData from "../../../../data/CarsData"
import CarsList from "../../../../components/templates/CarsList";

const filtredCar = () => {
    const router = useRouter();
    const [min,max] = router.query.slug || [];
    const cars = carsData.filter(item=> item.price<=max && item.price>=min);
    if(!cars.length)
    return <h3>Not Found !</h3>
  return (
    <CarsList data={cars}/>
  )
}

export default filtredCar