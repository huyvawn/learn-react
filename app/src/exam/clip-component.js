function Clip({title,description, star, source_clip}){
return (
    <div className="col-md-5 video-item">
        <div className="row video" >
        <video width="320" height="240" controls>
  <source src={source_clip}/>
  
Your browser does not support the video tag.
</video>
        </div>
        <div className="row title">
            <div className="col"><h4>{title}</h4></div>
            <div className="col"><img src={star} alt="stars" /></div>
        </div>
        <div className="row description">
            <p>{description}</p>
        </div>
    </div>
);
}

export default Clip;