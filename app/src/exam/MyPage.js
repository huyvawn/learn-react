import Header from "./Header";
import './style.css';
import hochiminh2 from './HoChiMinh2.mp4';
import Clip from "./clip-component";
import { clips } from "./MyClip";
import Footer from "./footer";
function MyPage(){
    return(
        <>
        <Header />
        <div className="container" id="Body">
        <div className="text-center" id="first-clip">
            <h4>My Studio</h4>
        <video width="480" height="340" controls>
  <source src={hochiminh2}/>
  
Your browser does not support the video tag.
</video>
        </div>
        <div className="row video-section">
        {clips.map((clip) => (
                    <Clip {...clip} />
                ))}
                </div>
                </div>
        <Footer />
        </>
    );
}
export default MyPage;