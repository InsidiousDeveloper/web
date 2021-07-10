import React, {useEffect} from 'react'
import Aos from 'aos'
import Logo from '../images/logo.jpg'
import {NavLink} from 'react-router-dom'
import i18n from "i18next"
import { initReactI18next, useTranslation } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: 'en',
    detection: {
        order: ['htmlTag', 'cookie', 'localstorage', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    react: {useSuspense: false},
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  })

export const Footer = () => {

    const { t } = useTranslation()

    const facebook = <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
    const instagram = <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
    const phone = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="mobile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V48z"></path></svg>
    const telegram = <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
    const tiktok = <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg>

    useEffect(() => {
        Aos.init({
            duration: 1500,
            offset: 100
        })
    }, [])

    return (
        <footer>
            <div className="content">
                <div data-aos="zoom-in-up" className="info-section">
                    <div className="contact-info">
                        <div className="logo">
                            <img src={Logo} alt="Company Logo"/>
                        </div>
                        <p className="description">Western America Express</p>
                        <div className="contacts">
                            <div className="phone">
                                {phone}
                            </div>
                            <div className="info">
                                <a href="tel:+998712428939" className="mobile">+998 71 242 8939</a><br/>
                                <a href="mailto:example@gmail.com" className="email">example@gmail.com</a>
                            </div>
                        </div>
                        <ul className="social">
                            <li className="media"><a className="facebook" href="https://www.facebook.com/wae.logistics" target="_blank" rel="noreferrer">{facebook}</a></li>
                            <li className="media"><a className="telegram" href="https://t.me/wae_logistics" target="_blank" rel="noreferrer">{telegram}</a></li>
                            <li className="media"><a className="instagram" href="https://www.instagram.com/wae_logistics/" target="_blank" rel="noreferrer">{instagram}</a></li>
                            <li className="media"><a className="tiktok" href="https://vm.tiktok.com/ZSJX3fFNh/" target="_blank" rel="noreferrer">{tiktok}</a></li>
                        </ul>
                    </div>
                    <div className="services">
                        <h3>{t('our_services')}</h3>
                        <ul>
                            <li><NavLink to="/">{t('home')}</NavLink></li>
                            <li><NavLink to="/contact">{t('contact')}</NavLink></li>
                            <li><NavLink to="/faq">FAQs</NavLink></li>
                        </ul>
                    </div>
                    <div className="working-hours">
                        <h3>{t('working_hours')}</h3>
                        <ul>
                            <li>{t('mon_sat')}:09:00 - 18:00</li>
                            <li>{t('fri')}:09:00 - 21:00</li>
                            <li>{t('sun')}:09:00 - 20:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}