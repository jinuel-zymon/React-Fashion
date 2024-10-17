import React from "react";
import PartHeader from "./part/PartHeader";
import { imgUrlPath } from "../../helpers/functions-general";
import { videos } from "../../data/dataVideos";

const HomeVideo = () => {
  const [code, setCode] = React.useState(
    "https://www.youtube.com/embed/6vOm3gWQinQ?si=duKr71Gn3KsMYktH"
  );

  const handleClick = (code) => setCode(code);

  return (
    <div className='videos mb-24 overflow-x-hidden'>
      <PartHeader title='Videos' />
      <div className="flex flex-col items-center">
      <iframe
        className='md:w-full md:h-[500px] aspect-video'
        src={code}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <div className='flex gap-6 max-w-[450px] md:max-w-[900px] overflow-x-auto mt-10 pb-5'>
        {videos.map((item, key) => {
          return (
            <button
              className='shrink-0 w-[170px]'
              key={key}
              onClick={() => handleClick(item.video_code)}
            >
              <img
                src={`${imgUrlPath}${item.video_thumbnail}`}
                alt=''
                className='w-[170px] h-[130px] object-cover'
              />
              <h6 className='text-[14px]'>{item.video_title}</h6>
            </button>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default HomeVideo;
