import React from 'react'
import './testimonials.css'

const TOTAL_PARTNERS = 6

const Testimonials = () => {
  return (
      <div className="testimonials-container10" id="partners">
        <h2 className="testimonials-title">Партнеры</h2>
        <div className="testimonials-grid">
          {Array.from({ length: TOTAL_PARTNERS }).map((_, index) => (
              <div key={index} className="testimonials-item">
                <img
                    src={`/images/partners/${index + 1}.png`}
                    alt={`Партнёр ${index + 1}`}
                    className="testimonials-logo"
                />
              </div>
          ))}
        </div>
      </div>
  )
}

export default Testimonials
