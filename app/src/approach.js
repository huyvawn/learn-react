
function Approach({title,content}){
    return(
        <div className='col-md-6 text-start' id='approach-item' >
            <div id='approach-item-content'>
        <h2>{title}</h2>
        <h3>{content}</h3>
        </div>
        </div>
    );
}

export default Approach;