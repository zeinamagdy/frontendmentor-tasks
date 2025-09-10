import bannerImg from "../assets/images/bannerImg.svg";
import avater from "../assets/images/image-avatar.webp";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <img src={bannerImg} className="card-img" alt="Banner img" />
        <div className="card-text">
          <div className="card-badge">Learning</div>
          <div className="card-date">Published 21 Dec 2023</div>
          <h1 className="card-title"> HTML & CSS foundations</h1>
          <div className="card-content">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </div>
        </div>
        <div className="user">
          <img src={avater} className="user-img" alt="user-image" />
          <div className="user-name"> Greg Hooper</div>
        </div>
      </div>
    </>
  );
}
export default Card;
