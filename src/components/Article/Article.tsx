import React from 'react'
import { Link } from 'react-router-dom'
interface IArticle {
    path: string
    imageUrl : string;
    type: string;
    title: string;
    author: string;
    date: string;
}
function Article({path,imageUrl,type,title,author,date}:IArticle) {
  return (
    <Link className='flex flex-col' to={path}>
      <img src={imageUrl} alt="" />
      <p className='text-[#ff8f9c] pt-3'>{type}</p>
      <h3 className='font-bold line-clamp-2'>{title}</h3>
      <div className='text-gray-500'>
        <span>{author} / </span>
        <span>{date}</span>
      </div>
    </Link>
  )
}

export default Article
