import React, {useEffect, useState} from 'react'
import './testimonials.css'

const TOTAL_PARTNERS = 7

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

    const rows = [[0, 1], [2, 3, 4], [5, 6]]

    return (
        <div className="testimonials-container10" id="partners">
            <h2 className="testimonials-title">Партнеры</h2>
            <div className="testimonials-custom-grid">
                {rows.map((row, rowIndex) => (
                    <div className="testimonials-row" key={rowIndex}>
                        {row.map((index) => (
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
                ))}
            </div>
        </div>
    )
}

export default Testimonials
