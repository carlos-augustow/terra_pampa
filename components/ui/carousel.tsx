import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const arrayImages = [{ img: "/imgs/banner-desktop.webp" }, { img: "/imgs/full-banner-desktop-1.avif" }, { img: "/imgs/full-banner-desktop.avif" }];

const CarouselComponent = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      {arrayImages.map((item, index) => {
        return (
          <div key={index}>
            <Image src={item.img} width={1920} height={745} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
