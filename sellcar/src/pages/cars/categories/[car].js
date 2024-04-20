import { useRouter } from 'next/router'
import React from 'react'
import carsData from "../../../../data/CarsData.js";
import CarsList from '../../../../components/templates/CarsList.js';

const carCategories = () => {
    const router = useRouter();
    const car = router.query.car;
    const selectedCars =  carsData.filter(item => item.category === car)
  return (
    <CarsList data={selectedCars} />
  )
}

export default carCategories