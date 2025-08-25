import React, {useEffect, useState} from 'react'
import './testimonials.css'

const TOTAL_PARTNERS = 17

const Testimonials = () => {
    const [captions, setCaptions] = useState([])

    useEffect(() => {
        const fetchCaptions = async () => {
            const texts = await Promise.all(
                Array.from({length: TOTAL_PARTNERS}).map(async (_, i) => {
                    try {
                        const res = await fetch(`/text/partners/${i + 1}.txt`)
                        const text = await res.text()
                        return text.trim()
                    } catch {
                        return ''
                    }
                })
            )
            setCaptions(texts)
        }

        fetchCaptions()
    }, [])

    return (
        <div className="testimonials-container10" id="partners">
            <h2 className="testimonials-title">Партнеры</h2>
            <div className="testimonials-grid">
                {Array.from({length: TOTAL_PARTNERS}).map((_, index) => (
                    <div className="testimonials-item" key={index}>
                        <div className="testimonials-wrapper">
                            <img
                                src={`/images/partners/${index + 1}.png`}
                                alt={`Партнёр ${index + 1}`}
                                className="testimonials-logo"
                            />
                            {captions[index] && (
                                <div className="testimonials-caption">{captions[index]}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
