import { FaStar } from "react-icons/fa";

function Review({comment,name,work,rating}){
    const stars = Array.from({ length:5}, (_,index) => (
        <FaStar key={index} color={rating > index ? 'red': '#e4e5e9'} />
    ));
return (
    <div className="col-md-4" id="review-item">
        <div className="review-item-content">
        <h2>{comment}</h2>
        <h4>{name}</h4>
        <h4 id="review-work">{work}</h4><br />
        <div className="rating">{stars}</div>
        </div>
    </div>
);
}
export default Review;