import s from "./device-card.module.css";
import PropTypes from "prop-types";

function DeviceCard(props) {
  return (
    <div className={s.device_card}>
      <img className={s.device_card_img} src={props.image} alt="" />
      <div className={s.device_card_info}>
        <h1 className={s.device_card_text}>{props.name}</h1>
      </div>
    </div>
  );
}

DeviceCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default DeviceCard;
