import Check from '../img/check.png';
import Retention from '../img/retention.png';
import Points from '../img/dew-point.png';
import Frequency from '../img/5g.png';
import Clock from '../img/clock.png';
import './card.css';

function Card() {
        
    return (
        <div className="card-container">
        <div className="Card">
        <span><img src={Check}/></span> 
            <p>3,594<br/>Active Users</p>
        </div>

        <div className="Card">
        <span><img src={Retention}/></span> 
            <p>30%<br/>Retention rate</p>
        </div>

        <div className="Card">
        <span><img src={Points}/></span> 
            <p>234<br/>Points drop</p>
        </div>

        <div className="Card">
        <span><img src={Frequency}/></span> 
            <p>21 per day<br/>Use frequency</p>
        </div>

        <div className="Card">
        <span><img src={Clock}/></span> 
            <p>15 min<br/>session length</p>
        </div>
    </div>
    )
}

export default Card;