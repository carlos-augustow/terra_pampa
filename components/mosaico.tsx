import Image from "next/image";

const Mosaico = () => {
  return (
    <section className="flex flex-row gap-4 mt-4">
      <Image src={"/imgs/mosaico/novo/1.jpg"} width={540} height={560} alt="1" />
      <div className="flex flex-col gap-3">
        <Image src={"/imgs/mosaico/novo/2.jpg"} width={647} height={332} alt="2" />
        <Image src={"/imgs/mosaico/novo/3.jpg"} width={647} height={332} alt="3" />
      </div>
    </section>
  );
};

export default Mosaico;
