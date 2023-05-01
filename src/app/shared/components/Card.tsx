import React from 'react'

interface CardInterface {
  title?: string
  buttonWarning?: string
  buttonLight?: string
  className?: string
  subtitle?: string
  content?: string
}

const Card = ({
  subtitle,
  title,
  content,
  buttonWarning,
  buttonLight,
  className
}: CardInterface) => {
  return (
    <div className={className}>
      {title && <h2 className='text-bold card-hero-subtitle'>{title}</h2>}
      {subtitle && <span className='card-hero-subtitle'>{subtitle}</span>}
      {content && <p className='card-hero-subtitle'>{content}</p>}
      <div className='d-flex justify-content-end gap-2'>
        {buttonWarning && (
          <button className='btn btn-warning'>{buttonWarning}</button>
        )}
        {buttonLight && (
          <button className='btn btn-light'>{buttonLight}</button>
        )}
      </div>
    </div>
  )
}

export default Card
