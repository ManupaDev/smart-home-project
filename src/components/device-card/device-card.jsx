import s from "./device-card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function DeviceCard(props) {
  const [isOn, setIsOn] = useState(false);
  // const state = isOn ? "ON" : "OFF";
  // const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOn(!isOn);
    // setCount(count + 1);
    // setCount((n) => {
    //   return n + 1;
    // });
  };

  return (
    <div className={s.device_card}>
      <img className={s.device_card_img} src={props.image} alt="" />
      <div className={s.device_card_info}>
        <div className={s.device_card_info_container}>
          <h3 className={s.device_card_text}>{props.name}</h3>
          {/* <h3 className={s.device_card_text}>{count}</h3> */}
          <button
            type="button"
            onClick={handleClick}
            className={isOn ? s.device_card_icon_on : s.device_card_icon_off}
          >
            <PowerIcon width={36} height={36} />
          </button>
          {/* <button type="button" onClick={handleClick}>
            Click Me
          </button> */}
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
