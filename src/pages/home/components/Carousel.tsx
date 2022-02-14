import { Swiper } from "antd-mobile";

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const Carousel = () => {
  return (
    <Swiper slideSize={90} trackOffset={5.5} stuckAtBoundary={false} loop indicator={() => null}>
      {colors.map((color, index) => {
        return (
          <Swiper.Item
            key={index}
            className="w-full flex items-center p-2"
          >
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/assets.segari.id/banners/it-promosunpride-kwotlwal-kyu4qmby.webp"
              alt=""
              className="rounded-lg pointer-events-none select-none"
            />
          </Swiper.Item>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
