import Icon from '../Icon/Icon'
import './Card.css';
 function Card({player ,onPlay ,index }){ //need to pass props
    let icon = <Icon />
    if (player =='X'){
        icon = <Icon name= "cross" />
    } else if (player =='O'){
        icon = <Icon name="circle" />
    }
    return(
        <div className='card' onClick={() =>  player =="" &&onPlay(index)}>  
            {icon}
        </div>
    )
//game End nhi hai toh onPlay 
}
export default Card;