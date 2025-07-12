import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './services.css'

const Services = (props) => {
  return (
      <div
          id="services"
          className={`services-container1 ${props.rootClassName}`}
      >
        <div id="services-scroll" className="services-container">
          <h2>
            {props.heading ?? (
                <Fragment>
                  <span className="services-text18">Услуги</span>
                </Fragment>
            )}
          </h2>

          <div
              className="service-card"
          >
            <h3>
              {props.heading1 ?? (
                  <Fragment>
                    <span className="services-text19">Услуга 1</span>
                  </Fragment>
              )}
            </h3>
            <p>
              {props.text ?? (
                  <Fragment>
                <span className="services-text17">
                  Описание услуги 1
                </span>
                  </Fragment>
              )}
            </p>
          </div>

          <div
              className="service-card"
          >
            <h3>
              {props.heading2 ?? (
                  <Fragment>
                    <span className="services-text23">Услуга 2</span>
                  </Fragment>
              )}
            </h3>
            <p>
              {props.text1 ?? (
                  <Fragment>
                <span className="services-text22">
                  Описание услуги 2
                </span>
                  </Fragment>
              )}
            </p>
          </div>

          <div
              className="service-card"
          >
            <h3>
              {props.heading3 ?? (
                  <Fragment>
                    <span className="services-text20">Услуга 3</span>
                  </Fragment>
              )}
            </h3>
            <p>
              {props.text2 ?? (
                  <Fragment>
                <span className="services-text21">
                  Описание услуги 3
                </span>
                  </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
  )
}

Services.defaultProps = {
  rootClassName: '',
  text: undefined,
  heading: undefined,
  heading1: undefined,
  heading3: undefined,
  text2: undefined,
  text1: undefined,
  heading2: undefined,
}

Services.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  heading: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  text2: PropTypes.element,
  text1: PropTypes.element,
  heading2: PropTypes.element,
}

export default Services
