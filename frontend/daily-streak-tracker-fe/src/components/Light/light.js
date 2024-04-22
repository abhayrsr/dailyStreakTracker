import LightIcon from '../../assets/images/light.svg'
import './light.css'

export default function Light(){
    return (
        <div className="button-light">
            <button className="light"> <img className="lightIcon" src={LightIcon} alt="light-icon"/> </button>
            
        </div>
    )
}