import React, {useEffect, useState} from 'react'
import './laboratory.css'

const Laboratory = () => {
    const images = Array.from({length: 13}, (_, i) => `/images/laboratory/${i + 1}.jpg`)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let loadedCount = 0
        images.forEach((src) => {
            const img = new Image()
            img.src = src
            img.onload = () => {
                loadedCount++
                if (loadedCount === images.length) setLoaded(true)
            }
        })
    }, [images])

    if (!loaded) return null
    return (
        <div className="laboratory-wrapper" id="laboratory">
            <section className="laboratory-section">
                <h2 className="laboratory-title">Лаборатория</h2>
                <div className="laboratory-slider">
                    <div className="laboratory-track">
                        {images.concat(images).map((src, index) => (
                            <div className="laboratory-slide" key={index}>
                                <img src={src} alt={`Лаборатория ${index + 1}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Laboratory
