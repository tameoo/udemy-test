import React from 'react'
import './Promotion.css'

const Promotion = () => {
    return (
        <section>
            <div className="promo">
                <div className="promo-container">
                    <h1 className="promo-header">Учитесь где угодно с Udemy для iOS и Android</h1>
                    <p className="promo-subheader">Ваши возможности с приложением Udemy:</p>
                    <ul className="promo-list">
                        <li className="promo-item">
                            Смотрите более 130 000 курсов
                        </li>
                        <li className="promo-item">
                            Скачивайте курсы для просмотра офлайн
                        </li>   <li className="promo-item">
                            Слушайте курсы как подкасты, только со <br/> звуком
                        </li>   <li className="promo-item">
                            Смотрите курсы через Chromecast или <br/> Apple TV
                        </li>
                    </ul>
                    <div className="promo-wrapper">
                        <a href="/#" className="promo-link">
                            <img className="google-play" src="https://img-a.udemycdn.com/app_store_logos/ru_ru/google-btn.png?CQhx6y_0MAcQFlsXhV3BdHUxJ-IFcc0ZIy7jFeE2ykb4MMx7WAYatMtKi4YSfNuv2P7f04jUSKyHkQkbS3e8lBvDvKWOLbApLIvr5yEEekSF5sZ1g0D_C5TPoM41VJ4n2rmW" alt="googleplay"/>
                        </a>
                        <a href="/#" className="promo-link">
                            <img className="app-store" src="https://img-a.udemycdn.com/app_store_logos/ru_ru/apple-btn.svg?ZiV8rKdM4hF14AG0uYcbUpxrJzCdVVtGy8-BIuYSLHinSeiwNY0ZLHx7pCh-ej_c0gWsFUJBZjt4q132tDXYmzXBuvv-ujydT_gA2ZpvZ1nBv6qaJHTQ5n9bvdUFSehWnKo" alt="app-store"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Promotion }