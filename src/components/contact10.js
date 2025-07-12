import React from 'react'
import './contact10.css'

const Contact10 = () => {
  return (
      <div id="contacts" className="contact10-container thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content1">
            <div className="contact10-text-block">
              <h2 className="contact10-heading">Контакты</h2>

              <div className="contact10-section">
                <h3>Технический директор</h3>
                <p>Иванов Иван Иванович</p>
                <p><a href="tel:+79111234567">+7 (911) 123-45-67</a></p>
                <p><a href="mailto:tech@example.com">tech@example.com</a></p>
              </div>

              <div className="contact10-section">
                <h3>Генеральный директор</h3>
                <p>Петров Пётр Петрович</p>
                <p><a href="tel:+79219876543">+7 (921) 987-65-43</a></p>
                <p><a href="mailto:ceo@example.com">ceo@example.com</a></p>
              </div>

              <div className="contact10-section">
                <h3>Офисы</h3>
                <p>Санкт-Петербург, улица Пушкина, дом 1 — <em>как добраться</em></p>
                <p>Москва, проспект Ленина, дом 10 — <em>как добраться</em></p>
              </div>
            </div>

            <div className="contact10-map">
              <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb0c1f92e9806c90ac97f8c42b093c63d94c4cd19ba1a43909972758a07b0bf4&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта офисов"
                  style={{ borderRadius: '12px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact10
