import React, {useEffect, useRef, useState} from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import {AnimatePresence, motion} from 'framer-motion'
import './portfolio.css'

const preloadImages = (srcs) =>
    Promise.all(
        srcs.map(
            (src) =>
                new Promise((resolve) => {
                    const img = new Image()
                    img.src = src
                    img.onload = resolve
                })
        )
    )

const Portfolio = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const [itemsPerRow] = useState(3)
    const [imagesLoaded, setImagesLoaded] = useState(true)
    const [headings, setHeadings] = useState({})
    const [details, setDetails] = useState({})
    const detailRef = useRef(null)
    const total = 12 // Общее количество проектов

    const fetchText = async (path) => {
        const res = await fetch(path)
        if (res.ok) return res.text()
        return 'Ошибка загрузки...'
    }

    const loadTexts = async (index) => {
        const headingPath = `/text/projects/${index + 1}/heading.txt`
        const detailsPath = `/text/projects/${index + 1}/details.txt`
        const [heading, detail] = await Promise.all([
            fetchText(headingPath),
            fetchText(detailsPath),
        ])
        setHeadings((prev) => ({...prev, [index]: heading}))
        setDetails((prev) => ({...prev, [index]: detail}))
    }

    const handleClick = async (index) => {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setImagesLoaded(false)
            await Promise.all([
                preloadImages([
                    `/images/projects/${index + 1}/detail1.jpg`,
                    `/images/projects/${index + 1}/detail2.jpg`,
                ]),
                loadTexts(index),
            ])
            setImagesLoaded(true)
            setOpenIndex(index)
        }
    }

    useEffect(() => {
        if (detailRef.current && openIndex !== null) {
            detailRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }, [openIndex])

    useEffect(() => {
        const loadAllHeadings = async () => {
            const newHeadings = {}
            for (let i = 0; i < total; i++) {
                const headingPath = `/text/projects/${i + 1}/heading.txt`
                try {
                    const text = await fetchText(headingPath)
                    newHeadings[i] = text
                } catch (e) {
                    newHeadings[i] = 'Ошибка загрузки...'
                }
            }
            setHeadings(newHeadings)
        }

        loadAllHeadings()
    }, [])

    const renderDetails = (index) => (
        <Collapsible.Root open={openIndex === index}>
            <AnimatePresence mode="wait">
                {openIndex === index && imagesLoaded && (
                    <Collapsible.Content forceMount asChild>
                        <motion.div
                            className="portfolio-details-row"
                            key={`details-${index}`}
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.4}}
                            ref={detailRef}
                        >
                            <div className="portfolio-detail-content">
                                <div className="portfolio-detail-images">
                                    <img
                                        src={`/images/projects/${index + 1}/detail1.jpg`}
                                        alt="detail 1"
                                    />
                                    <img
                                        src={`/images/projects/${index + 1}/detail2.jpg`}
                                        alt="detail 2"
                                    />
                                </div>
                                <pre
                                    style={{
                                        whiteSpace: 'pre-wrap',
                                        fontFamily: 'inherit',
                                        textAlign: 'left',
                                    }}
                                >
                                    {details[index] ?? 'Загрузка...'}
                                </pre>
                            </div>
                        </motion.div>
                    </Collapsible.Content>
                )}
            </AnimatePresence>
        </Collapsible.Root>
    )

    const cards = []
    for (let i = 0; i < total; i += itemsPerRow) {
        const row = []
        for (let j = 0; j < itemsPerRow && i + j < total; j++) {
            const index = i + j
            const isActive = openIndex === index
            row.push(
                <div
                    className={`portfolio-item ${isActive ? 'active' : ''}`}
                    key={`item-${index}`}
                    onClick={() => handleClick(index)}
                >
                    <img
                        src={`/images/projects/${index + 1}/detail2.jpg`}
                        alt={`Проект ${index + 1}`}
                        className="portfolio-image"
                    />
                    <div className="caption">
                        {headings[index] ?? `Проект ${index + 1}`}
                    </div>
                </div>
            )
        }

        const lastInRowIndex = i + itemsPerRow - 1
        const shouldRenderDetails =
            openIndex !== null && openIndex >= i && openIndex <= lastInRowIndex

        cards.push(...row)
        if (shouldRenderDetails) {
            cards.push(
                <div className="portfolio-detail-wrapper" key={`details-${i}`}>
                    {renderDetails(openIndex)}
                </div>
            )
        }
    }

    return (
        <div className="portfolio-wrapper" id="portfolio">
            <section className="portfolio-section">
                <h2 className="portfolio-title">Портфолио</h2>
                <div className="portfolio-grid">{cards}</div>
            </section>
        </div>
    )
}

export default Portfolio
