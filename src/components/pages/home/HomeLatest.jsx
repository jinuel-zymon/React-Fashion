import React from "react";
import PartHeader from "./part/PartHeader";
import { imgUrlPath } from "../../helpers/functions-general";
import { fashionBlog } from "../../data/dataFashion";

const HomeLatest = () => {
  const latestPost = fashionBlog.filter((item) => {
    return (
      Math.floor(
        Math.abs(new Date(item.fashion_published) - new Date()) /
          (1000 * 60 * 60 * 24)
      ) < 10
    );
  });

  return (
    <div className='latest'>
      <PartHeader title='Latest Blog Posts' />

      {latestPost.slice(0, 5).map((item, key) => {
        return (
          <div
            className='md:flex gap-5 pb-8 mb-8 border-b border-gray-200 items-center'
            key={key}
          >
            <img
              src={`${imgUrlPath}${item.fashion_img}`}
              alt=''
              className='w-full md:w-[390px] h-[274px] object-cover'
            />
            <div className='text-center m-auto'>
              <small className='text-xs uppercase text-accent'>
                {item.fashion_category}
              </small>
              <h3 className='mt-6 mb-3'>{item.fashion_title}</h3>
              <p className='text-xs mt-3 mb-1 uppercase'>
                {item.fashion_published}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeLatest;
