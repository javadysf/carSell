import carsData from "../../data/CarsData.js";
import CarsPage from "../../components/templates/CarsPage.js";
export default function Home() {
  return (
    <>
      <CarsPage data={carsData} />
    </>
  );
}
