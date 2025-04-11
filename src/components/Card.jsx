import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({title, kpi, icon, className = ""}) => {
    return (
        <div className={`flex flex-col justify-center items-center font-semibold text-white p-2 pr-4 pl-4 rounded-md ${className}`}>
            <h3 className="heading-3 text-center">{title}</h3>
            <div className="heading-1 font-bold flex gap-2 justify-center items-center">
                {icon && <FontAwesomeIcon icon={icon} />}
                {kpi}
            </div>
        </div>
    );
}

export default Card;