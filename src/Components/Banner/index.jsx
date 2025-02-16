import React from "react";
import "./style.scss";
import Ring from "../../Assets/Images/rings.jpg";
import Necklace from "../../Assets/Images/necklace.jpg";
import Earrings from "../../Assets/Images/Earrings.webp";
import { Carousel } from "antd";
import PrimaryButton from "../Common/Button";

const Banner = () => {
  const bannerContent = [
    {
      id: 1,
      ornament: "Ring",
      quote: "A ring is more than just a piece of jewelry; it's a promise, a symbol of love, a reflection of your journey. Whether marking a new beginning, celebrating a milestone, or simply embracing elegance, let your ring tell a story as timeless as you✨💎",
      image: Ring
    },
    {
      id: 2,
      ornament: "Necklace",
      quote: "✨ A haar isn’t just an ornament; it’s a statement of grace, a reflection of heritage, and a symbol of timeless elegance. Adorn yourself in tradition, shine with royalty, and let every strand tell a story of beauty and legacy 💛💎",
      image: Necklace
    },
    {
      id: 3,
      ornament: "Ear Rings",
      quote: "✨ Earrings are more than just accessories; they frame your face, elevate your style, and whisper elegance with every turn. From timeless classics to modern masterpieces, let your sparkle shine through every detail 💎💛",
      image: Earrings
    }
  ]

  return (
    <div className="banner">
      <Carousel autoplay className="banner-slider" swipeToSlide arrows>
        {bannerContent?.map(({ id, image, quote }) => (
         <div gutter={16} className="carousel-row" key={id}>
        
          <div className="slider-col-1">
            <img src={image} alt="ring" />
          </div>
          <div className="slider-col-2">
            <p>{quote}</p>
            <div className="btn">
            <PrimaryButton name={'Explore'} key={id} className={'explore'} />
            </div>
           </div>
         </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
