import Image from 'next/image'
import React from 'react'
import style from './styles.module.css'
import { FaStar } from 'react-icons/fa'

const comments = [
  {
    title: 'create your website with Next Framework',
    rating: 5,
    comment: 'Always a delight',
    image: '',
    sourceImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png'
  },
  {
    title: 'create a translate language app',
    rating: 5,
    comment:
      'permite a los usuarios escribir texto en un idioma y traducirlo a otro idioma seleccionado. Además, la aplicación tiene la funcionalidad de reproducir la pronunciación de la traducción para que los usuarios puedan escuchar cómo se pronuncia la traducción',
    image: '',
    sourceImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png'
  },
  {
    title: 'create a landing Page to CM org',
    rating: 5,
    comment: 'landing page with next and react',
    image: '',
    sourceImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png'
  }
]

export const SayAbout = () => {
  return (
    <div className='container'>
      <div className='title'>
        <h2>What client says about feha lLC</h2>
        <button className='btn btn-warning'>Contact Now</button>
      </div>
      <div className='gridComments d-flex flex-wrap justify-content-center gap-4 py-4'>
        {comments.map(comment => (
          <div
            key={comment.title}
            className={`${style.cardComment} p-2 containerComment d-flex align-items-center gap-4`}
          >
            <div className='commentText'>
              <h3>{comment.title}</h3>
              <p>{comment.comment}</p>
              <div className='starRating d-flex align-items-center '>
                {[...Array(comment.rating)].map((star, i) => (
                  <FaStar color='#ffc107' key={i} />
                ))}
                <span>{comment.rating}</span>
              </div>
            </div>
            <Image
              src={comment.sourceImage}
              alt={`image of comment  ${comment.title}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
