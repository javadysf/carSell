import CarCards from "../modules/CarCards"
import Styles from "./CarsPage.module.css"

const CarsPage = ({data}) => {
  return (
    <div className={Styles.container}>
         {data?.map(car => <CarCards {...car}/>)}
    </div>
  )
}

export default CarsPage