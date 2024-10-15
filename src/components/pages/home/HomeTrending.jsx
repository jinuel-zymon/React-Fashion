import React from "react";
import Wrapper from "../../partials/Wrapper";
import { fashionBlog } from "../../data/dataFashion";
import { imgUrlPath } from "../../helpers/functions-general";
import PartHeader from "./part/PartHeader";

const HomeTrending = () => {

  const trendingPost = fashionBlog.filter((item) => item.fashion_is_trending === 1);

  return (
    <section className='py-24'>
      <Wrapper>
      <PartHeader title="Trending Posts"/>
        <div className='grid grid-cols-4 gap-5'>

        {trendingPost.slice(0,4).map((item,key)=>{
          return(

          <div className='card text-center' key={key}>
            <img
              src={`${imgUrlPath}${item.fashion_img}`}
              className='w-full h-[190px] object-top object-cover mb-5'
            />
            <small className='text-xs uppercase text-accent'>{item.fashion_category}</small>
            <h6 className='mt-6 mb-0'>{item.fashion_title}</h6>
            <p className='text-xs mt-3 mb-1 uppercase'>{item.fashion_published}</p>
          </div>
          )
        })}


        </div>
      </Wrapper>
    </section>
  );
};

export default HomeTrending;
