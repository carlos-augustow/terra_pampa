const Div_Video = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <video autoPlay loop muted className="w-[70%]">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Div_Video;
