import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import './licenses.css'

const Licenses = (props) => {
    useEffect(() => {
        const modal = document.getElementById('licenses-modal')
        const modalImg = document.getElementById('licenses-modal-img')

        const images = document.querySelectorAll('.licenses-item img')
        images.forEach((img) => {
            img.addEventListener('click', () => {
                modalImg.src = img.src
                modal.classList.add('show')
                document.body.style.overflow = 'hidden'
            })
        })

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show')
                    document.body.style.overflow = ''
                }
            })
        }

        return () => {
            images.forEach((img) => {
                img.replaceWith(img.cloneNode(true))
            })
        }
    }, [])

    return (
        <div id="licenses">
            <div className={`licenses-container10 ${props.rootClassName}`}>
                <div>
                    <div className="licenses-container12">
                    </div>
                </div>
                <div id="licenses-scroll" className="licenses-section">
                    <h2 className="licenses-title">
                        {props.heading ?? (
                            <Fragment>
                                <span className="licenses-text16">Лицензии</span>
                            </Fragment>
                        )}
                    </h2>
                    <div className="licenses-grid">
                        <div className="licenses-item">
                            <img alt={props.imageAlt} src={props.imageSrc}/>
                            <p>
                                {props.text1 ?? (
                                    <Fragment>
                    <span className="licenses-text17">
                      Лицензия на ведение деятельности A
                    </span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                        <div className="licenses-item">
                            <img alt={props.imageAlt1} src={props.imageSrc1}/>
                            <p>
                                {props.text2 ?? (
                                    <Fragment>
                    <span className="licenses-text19">
                      Разрешение от организации B
                    </span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                        <div className="licenses-item">
                            <img alt={props.imageAlt2} src={props.imageSrc2}/>
                            <p>
                                {props.text3 ?? (
                                    <Fragment>
                                        <span className="licenses-text20">Лицензия C</span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                        <div className="licenses-item">
                            <img alt={props.imageAlt3} src={props.imageSrc3}/>
                            <p>
                                {props.text4 ?? (
                                    <Fragment>
                                        <span className="licenses-text21">Сертификация D</span>
                                    </Fragment>
                                )}
                            </p>
                        </div>
                    </div>
                    <div id="licenses-modal" className="modal-licenses">
            <span className="modal-close-licenses">
              {props.text ?? (
                  <Fragment>
                      <span className="licenses-text18">×</span>
                  </Fragment>
              )}
            </span>
                        <img id="licenses-modal-img" className="modal-content-licenses"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Licenses.defaultProps = {
    heading: undefined,
    imageAlt: 'Лицензия 1',
    imageAlt1: 'Лицензия 2',
    imageAlt2: 'Лицензия 3',
    imageAlt3: 'Лицензия 4',
    imageSrc:
        'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.1.0&q=80&w=1000',
    imageSrc1:
        'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.1.0&q=80&w=1000',
    imageSrc2:
        'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.1.0&q=80&w=1000',
    imageSrc3:
        'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.1.0&q=80&w=1000',
    rootClassName: '',
    text: undefined,
    text1: undefined,
    text2: undefined,
    text3: undefined,
    text4: undefined,
}

Licenses.propTypes = {
    heading: PropTypes.element,
    imageAlt: PropTypes.string,
    imageAlt1: PropTypes.string,
    imageAlt2: PropTypes.string,
    imageAlt3: PropTypes.string,
    imageSrc: PropTypes.string,
    imageSrc1: PropTypes.string,
    imageSrc2: PropTypes.string,
    imageSrc3: PropTypes.string,
    rootClassName: PropTypes.string,
    text: PropTypes.element,
    text1: PropTypes.element,
    text2: PropTypes.element,
    text3: PropTypes.element,
    text4: PropTypes.element,
}

export default Licenses
