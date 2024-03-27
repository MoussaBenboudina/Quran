/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { data } from "../Data";
import '../App.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

interface AudioProps{
  id: string;
  name: string;
  image: string;
  path: string; // Make sure each object has a path property
  singer: string;
}
const Audio:React.FC<AudioProps> = () => {
  
const [surah , setSurah] = useState(data[0])
const [activeIndex, setActiveIndex] = useState(0);
const handelClick = (item : any , index: React.SetStateAction<number>) => {
  setActiveIndex(index)
  setSurah(item)
}
  return( 
  <div className='flex justify-center items-center flex-col w-full gap-3 h-screen  py-2 bg-gray-200'>
       <div className='w-full sm:w-1/2 flex justify-center flex-col items-center gap-6 bg-white'>
        <h1 className='text-xl mainColor'>{surah.name}</h1>
        <div className='w-40 h-40 rounded-full active shadow-lg '><img src={data[0].image} alt=""  className=' w-40  h-40'/></div>
        <AudioPlayer 
        autoPlay
          src={surah.path}
          volume={0.8}
        /></div>
      <div className='w-full sm:w-1/2  flex gap-2 flex-col  overflow-y-auto h-4/6  bg-gray-100  px-2 cursor-pointer'>
        {data.map((item,index) => (
          <div
            key={index}
            className={`element ${activeIndex === index ? 'active' : ''} w-full bg-white h-16 py-10 flex items-center justify-btween shadow-lg rounded-md`}
            onClick={() => handelClick(item , index)}
          > 
            <div className='w-1/6 mr-10'><img src={item.image} alt=""  className=' w-16 h-16 ml-2 ' /></div>
            <div className='pb-2 flex flex-col gap-1'><li className='text-xl list-none' >{item.name}</li>
            <p className=' text-gray-700'>{item.singer}</p>
          </div></div>

        ))}
      </div>
  </div>)
}
export default Audio;