import s from "./device-card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";

function DeviceCard(props) {
  return (
    <div className={s.device_card}>
      <img className={s.device_card_img} src={props.image} alt="" />
      <div className={s.device_card_info}>
        <div className={s.device_card_info_container}>
          <h3 className={s.device_card_text}>{props.name}</h3>
          <h3>{0}</h3>
          <button
            type="button"
            // onClick={handleClick}
            className={s.device_card_icon}
          >
            <PowerIcon width={36} height={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

DeviceCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default DeviceCard;
