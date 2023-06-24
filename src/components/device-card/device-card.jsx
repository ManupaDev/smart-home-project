import s from "./device-card.module.css";

function DeviceCard(props) {
  return (
    <div className={s.device_card}>
      <img
        className={s.device_card_img}
        src={props.image}
        alt=""
      />
      <div className={s.device_card_info}>
        <h1 className={s.device_card_text}>{props.name}</h1>
      </div>
    </div>
  );
}

export default DeviceCard;
