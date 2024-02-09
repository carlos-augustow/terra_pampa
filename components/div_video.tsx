const Div_Video = () => {
  return (
    <div className="video">
      <video autoPlay loop muted>
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Div_Video;
