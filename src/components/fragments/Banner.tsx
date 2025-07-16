import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../css/Banner.css";

type BannerItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const Banner = ({ banners }: { banners: BannerItem[] }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {banners.map((item) => (
          <div key={item.id} className="banner-slide">
            <div
              className="banner-image"
              style={{
                backgroundImage: `url(${item.image})`,
                transform: `translateY(${offsetY * 0.3}px)`,
              }}
            >
              <div
                className="banner-content w-full h-full flex flex-col justify-center items-center font-poppins"
                style={{
                  transform: `translateY(${offsetY * 0.6}px)`,
                }}
              >
                <h2 className="banner-title">{item.title}</h2>
                <p className="banner-subtitle">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;