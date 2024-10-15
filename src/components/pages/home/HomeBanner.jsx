import React from "react";
import Wrapper from "../../partials/Wrapper";
import Slider from "react-slick/lib/slider";
import { fashionBlog } from "../../data/dataFashion";
import { imgUrlPath } from "../../helpers/functions-general";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeBanner = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className='absolute right-0.5 bottom-1/2 -translate-y-1/2 size-[50px] flex justify-center items-center bg-dark hover:bg-accent z-40 group-hover:opacity-100 opacity-0 transition-opacity'
        onClick={onClick}
      >
        <ChevronRight stroke={"#fff"} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className='absolute left-1 bottom-1/2 -translate-y-1/2 size-[50px] flex justify-center items-center bg-dark hover:bg-accent z-40 group-hover:opacity-100 opacity-0 transition-opacity'
        onClick={onClick}
      >
        <ChevronLeft stroke={"#fff"} />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    gutter: 10,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <section>
        <Wrapper>
          <div className='group'>
            <Slider {...settings}>
              {fashionBlog.slice(0, 4).map((item, key) => {
                return (
                  <div
                    className='banner-card relative px-1 outline-none'
                    key={key}
                  >
                    <div className='bg-black'>
                      <img
                        src={`${imgUrlPath}${item.fashion_img}`}
                        className='w-full h-[746px] object-cover object-center'
                      />
                    </div>
                    <div className='absolute bottom-2 text-center left-1/2 -translate-x-1/2 w-[330px] text-light'>
                      <small className='text-xs uppercase'>
                        {item.fashion_category}
                      </small>
                      <p className='text-xs mt-3 mb-1 uppercase'>
                        {item.fashion_published}
                      </p>
                      <h4>{item.fashion_title}</h4>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Wrapper>
      </section>
    </div>
  );
  
};

export default HomeBanner;
