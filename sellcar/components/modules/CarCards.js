import Styles from "./CarCards.module.css";
import Location from "../icons/Location";

const CarCard = (props) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.image} src={props.image} />
      <h4 className={Styles.title}>{`${props.name} ${props.model}`}</h4>
      <p className={Styles.details}>{`${props.year} ${props.distance} km`}</p>
      <div className={Styles.footer}>
        <p> $ {props.price}</p>
        <div className={Styles.location}>
          <p>{props.location}</p>
          <Location/>

        </div>
      </div>
    </div>
  );
};

export default CarCard;
