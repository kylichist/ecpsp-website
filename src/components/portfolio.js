import React, {useEffect, useRef, useState} from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import {AnimatePresence, motion} from 'framer-motion'
import './portfolio.css'

const CATEGORY_MAP = {
    1: 'Обследование и мониторинг',
    2: 'Проектирование',
    3: 'Капитальный ремонт',
    4: 'Строительный контроль',
    5: 'Технический и авторский надзоры',
    6: 'Объекты культурного наследия',
}

const CATEGORIES = [{id: 'all', label: 'Все'}, ...Object.entries(CATEGORY_MAP).map(([id, label]) => ({
    id: Number(id), label
}))]

const projects = [{
    id: 1,
    title: 'Здания бывшей электростанции «Общество электрического освещения 1886 года»',
    categories: [1, 6],
    description: `г. Санкт-Петербург, набережная Обводного канала, дом 76\n\n
Реставрация и приспособление для современного использования объекта культурного наследия «Электростанция Общества электрического освещения 1886 года»\n\n
Вид работ: визуально-инструментальное обследование`
}, {
    id: 2, title: 'ТРЦ «Галерея»', categories: [1, 2, 4], description: `г. Санкт-Петербург, Лиговский проспект, дом 30, литера А\n\n
Виды работ: строительный контроль, обследование целостности и надежности фасадов, обследование строительных конструкций в ТРЦ «ГАЛЕРЕЯ» для дальнейшего проектирования возможности устройства мезонинов, лестничных клеток и эскалатора, обследование строительных конструкций, расчет нагрузок и разработка проектной документации по организации строительства, обследование лестничных маршей и шахты лифта на объекте МТС для определения конструктивной прочности, пожарной безопасности и техническому соответствию нормативным требованиям к лестницам для путей эвакуации, разработка технических решений по устройству проема в стене и выдача рекомендаций по демонтажу`
}, {
    id: 3, title: 'Комплекс зданий гостиницы «Россиянка»', categories: [1], description: `Комплекс зданий по адресу: Краснодарский край, г-к Анапа, пр. Пионерский, д. 20, Литера А, Литера Б, Литера В, Литера Ж, Литера Е\n\n
Виды работ: Визуально-инструментальное обследование конструкций`
}, {
    id: 4, title: 'Октябрьский электровагоноремонтный завод', categories: [1, 2], description: `Октябрьский электровагоноремонтный завод, здание Заводоуправления по адресу: г. Санкт-Петербург, д. 45, лит. Э\n\n
Виды работ: визуально-инструментальное обследование несущих и ограждающих конструкций, разработка технических решений по усилению конструкций кровли`
}, {
    id: 5, title: 'Новая сцена Академического малого драматического театра Европы', categories: [1], description: `Новая сцена Академического малого драматического театра Европы по адресу: г. Санкт-Петербург, Звенигородская улица, д.7, литер А\n\n
Виды работ: освидетельствование уплотнения песчаной засыпки пазух между шпунтовым ограждением и ж/б стеной`
}, {
    id: 6, title: 'Склады OZON и Wildberries', categories: [1], description: `Индустриальные парки «PNK парк Шушары-3», Универсальные индустриальные здания №№1-7\n\n
Виды работ: технический надзор, визуально-инструментальное обследование технического состояния несущих и ограждающих строительных конструкций`
}, {
    id: 7, title: 'ТРК «Сити Молл»', categories: [1], description: `Адрес: Санкт-Петербург, пр. Коломяжский, д.17, корп. 2, лит. А\n\n
Виды работ: комплексное обследование несущих и ограждающих конструкций здания для выявления их действующего технического состояния, технический надзор`
}, {
    id: 8, title: 'ТК «Академический»', categories: [1, 2, 5], description: `Адрес: г. Санкт-Петербург, Гражданский пр., д.41\n\n
Виды работ: визуально-инструментальное обследование элементов каркаса здания, визуально-инструментальное обследование плиты перекрытия, визуально-инструментальное обследование шахты лифта, разработка конструкции опорной рамы видеоэкрана на фасада здания, проектирования усиления участка плиты перекрытия, проемов под вентиляцию, авторский надзор за проведением работ по усилению участков перекрытия, геодезический мониторинг за объектом строительства (реконструкции)`
}, {
    id: 9, title: 'ТРК «Меркурий»', categories: [1], description: `Адрес: г. Санкт-Петербург, ул. Савушкина, д. 141\n\n
Виды работ: визуально-инструментальное обследование строительных конструкций покрытия`
}, {
    id: 10, title: 'Культурно-коммерческий комплекс «Французский Бульвар»', categories: [1], description: `Адрес: г. Санкт-Петербург, Бульвар Новаторов 11, корп. 2, лит. А\n\n
Виды работ: Комплексное обследование несущих и ограждающих конструкций здания`
}, {
    id: 11, title: 'ТЦ « Метрополис»', categories: [1], description: `Адрес: г. Москва, Ленинградское ш., д. 16А, стр. 4\n\n
Виды работ: визуально-инструментальное обследование строительных конструкций для целей реконструкции`
}, {
    id: 12, title: 'Здание многофункционального ТРК в Екатеринбурге', categories: [1], description: `Адрес Свердловская область, г. Екатеринбург, ул. Тверитина, д. 45\n\n
Виды работ: визуально-инструментальное обследование многофункционального ТРК`
},]

const imgById = (id, file) => `/images/projects/${id}/${file}`

const preloadImages = (srcs) => Promise.all(srcs.map((src) => new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = resolve
})))

const Portfolio = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const [itemsPerRow, setItemsPerRow] = useState(3)
    const [imagesLoaded, setImagesLoaded] = useState(true)
    const [activeCategory, setActiveCategory] = useState('all')
    const detailRef = useRef(null)
    const gridRef = useRef(null)

    const countsByCategory = Object.fromEntries(Object.keys(CATEGORY_MAP).map((k) => [Number(k), projects.filter((p) => p.categories.includes(Number(k))).length]))

    const filteredProjects = activeCategory === 'all' ? projects : projects.filter((p) => p.categories.includes(activeCategory))

    const handleFilter = (cat) => {
        setActiveCategory(cat)
        setOpenIndex(null)
    }

    const handleClick = async (index) => {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setImagesLoaded(false)
            const proj = filteredProjects[index]
            await preloadImages([imgById(proj.id, 'detail1.jpg'), imgById(proj.id, 'detail2.jpg')])
            setImagesLoaded(true)
            setOpenIndex(index)
        }
    }

    useEffect(() => {
        const updateItemsPerRow = () => {
            if (gridRef.current) {
                const style = getComputedStyle(gridRef.current)
                const perRow = parseInt(style.getPropertyValue('--items-per-row'), 10)
                if (!isNaN(perRow) && perRow > 0) setItemsPerRow(perRow)
            }
        }
        updateItemsPerRow()
        window.addEventListener('resize', updateItemsPerRow)
        return () => window.removeEventListener('resize', updateItemsPerRow)
    }, [])

    useEffect(() => {
        if (detailRef.current && openIndex !== null) {
            const top = detailRef.current.getBoundingClientRect().top + window.scrollY
            window.scrollTo({top: top - 100, behavior: 'smooth'})
        }
    }, [openIndex])

    const renderDetails = (index) => {
        const proj = filteredProjects[index]
        return (<Collapsible.Root open={openIndex === index}>
            <AnimatePresence mode="wait">
                {openIndex === index && imagesLoaded && (<Collapsible.Content forceMount asChild>
                    <motion.div
                        className="portfolio-details-row"
                        key={`details-${proj.id}`}
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.25}}
                        ref={detailRef}
                    >
                        <div className="portfolio-detail-content">
                            <div className="portfolio-detail-images">
                                <img src={imgById(proj.id, 'detail1.jpg')} alt="detail 1"/>
                                <img src={imgById(proj.id, 'detail2.jpg')} alt="detail 2"/>
                            </div>
                            <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'inherit', textAlign: 'left'}}>
                    {proj.description}
                  </pre>
                        </div>
                    </motion.div>
                </Collapsible.Content>)}
            </AnimatePresence>
        </Collapsible.Root>)
    }

    const cards = []
    for (let i = 0; i < filteredProjects.length; i += itemsPerRow) {
        const row = []
        for (let j = 0; j < itemsPerRow && i + j < filteredProjects.length; j++) {
            const index = i + j
            const proj = filteredProjects[index]
            const isActive = openIndex === index
            row.push(<motion.div
                className={`portfolio-item ${isActive ? 'active' : ''}`}
                key={`item-${proj.id}`}
                onClick={() => handleClick(index)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.25}}
            >
                <img src={imgById(proj.id, 'detail2.jpg')} alt={`Проект ${proj.id}`} className="portfolio-image"/>
                <div className="caption">{proj.title}</div>
            </motion.div>)
        }

        const lastInRowIndex = i + itemsPerRow - 1
        const shouldRenderDetails = openIndex !== null && openIndex >= i && openIndex <= lastInRowIndex

        cards.push(...row)
        if (shouldRenderDetails) {
            cards.push(<div className="portfolio-detail-wrapper" key={`details-${i}`}>
                {renderDetails(openIndex)}
            </div>)
        }
    }

    return (<div className="portfolio-wrapper" id="portfolio">
        <section className="portfolio-section">
            <h2 className="portfolio-title">Портфолио</h2>

            <div className="portfolio-filters">
                {CATEGORIES.map((c) => {
                    const count = c.id === 'all' ? projects.length : countsByCategory[c.id] ?? 0
                    const active = activeCategory === c.id
                    return (<button
                        key={String(c.id)}
                        className={`chip ${active ? 'active' : ''}`}
                        onClick={() => handleFilter(c.id)}
                        type="button"
                    >
                        <span className="chip-label">{c.label}</span>
                        <span className="chip-count">{count}</span>
                    </button>)
                })}
            </div>

            <div className="portfolio-grid" ref={gridRef}>{cards}</div>
        </section>
    </div>)
}

export default Portfolio
