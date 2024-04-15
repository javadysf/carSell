import carsData from "../../../data/CarsData.js";
import CarsPage from "../../../components/templates/CarsPage.js";
import Categories from "../../../components/modules/Categories.js";
import SearchBar from "../../../components/modules/SearchBar.js";
import AllButton from "../../../components/modules/AllButton.js";


const index = () => {
  return (
    <>
    <SearchBar/>
    <Categories/>
    <CarsPage data={carsData} />
    </>
  )
}

export default index