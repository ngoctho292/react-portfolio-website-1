import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore aperiam quibusdam in sint dolor aliquid ratione ullam, veniam at quos, suscipit quod pariatur. Repellat ut voluptatum voluptatibus itaque molestias.",
  },
  {
    avatar: AVT2,
    name: "Taylor Swipt",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore aperiam quibusdam in sint dolor aliquid ratione ullam, veniam at quos, suscipit quod pariatur. Repellat ut voluptatum voluptatibus itaque molestias.",
  },
  {
    avatar: AVT3,
    name: "Snoop Dog",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore aperiam quibusdam in sint dolor aliquid ratione ullam, veniam at quos, suscipit quod pariatur. Repellat ut voluptatum voluptatibus itaque molestias.",
  },
  {
    avatar: AVT4,
    name: "Roobin Hood",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus inventore aperiam quibusdam in sint dolor aliquid ratione ullam, veniam at quos, suscipit quod pariatur. Repellat ut voluptatum voluptatibus itaque molestias.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        autoplay={true}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
