import "../components/popup.css";

const PopupWindow = ({ title, tech, description, screenshot, github, onClick }) => {
  return (
    <div className="popup-window">
      <div className="popup">
        <button onClick={onClick} className="close-button">×</button>
        <h3>{title}</h3>
        <p>{tech}</p>
        <p>{description}</p>
        <img src={screenshot} alt={`${title} screenshot`} />
        <a href={github} target="_blank">View On GitHub!</a>
      </div>
    </div>
  );
};

export default PopupWindow;
