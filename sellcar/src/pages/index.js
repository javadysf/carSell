import carsData from "../../data/CarsData.js";
import CarsPage from "../../components/templates/CarsPage.js";
import Categories from "../../components/modules/Categories.js";
import SearchBar from "../../components/modules/SearchBar.js";
import AllButton from "../../components/modules/AllButton.js";
export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <>
    <SearchBar/>
    <Categories/>
    <AllButton/>
      <CarsPage data={cars} />
    </>
  );
}
