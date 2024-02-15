import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const arrayImages = [{ img: "/carroussel/imgs/img.jpeg" }, { img: "/carroussel/imgs/img1.jpeg" }];

const arrayVideos = [{ img: "/carroussel/video/video.mp4" }, { img: "/carroussel/video/video1.mp4" }, { img: "/carroussel/imgs/img.jpeg" }, { img: "/carroussel/imgs/img1.jpeg" }];

const CarouselComponent = () => {
  return (
    <div className="h-[800px] max-h-[800px] 2xl:h-[1080px] 2xl:max-h-[1080px] overflow-hidden">
      <Carousel autoPlay interval={5000} infiniteLoop>
        <video autoPlay loop muted className="w-full">
          <source src={"/carroussel/video/video1.mp4"} type="video/mp4" />
        </video>
        <Image src={"/carroussel/imgs/img.jpeg"} alt="img" width={1920} height={1080}></Image>
        <Image src={"/carroussel/imgs/img1.jpeg"} alt="img" width={1920} height={1080}></Image>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
