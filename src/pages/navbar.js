import React, { useEffect, useState } from 'react'
import Logo from './../images/logo.jpg'
import {NavLink} from 'react-router-dom'
import i18n from "i18next"
import i18next from 'i18next'
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


export const Navbar = () => {

    const [lang, setLang] = useState('en')
    const [toggle, setToggle] = useState(false)

    const menuToggle = () => {
        if (toggle === false) {
            document.querySelector('.links-wrapper').classList.add('menu')
            document.querySelector('.hamburger').classList.add('open')
            setToggle(true)
        } else {
            document.querySelector('.hamburger').classList.remove('open')
            document.querySelector('.links-wrapper').classList.remove('menu')
            setToggle(false)
        }
    }

    const languageToggle = () => {
        if (lang === 'en') {
            setLang('uz')
        } else {
            setLang('en')
        }
    }

    useEffect(() => {
        i18next.changeLanguage(lang)
    }, [lang])

    const { t } = useTranslation()

    return (
        <nav>
            <div className="elements-wrapper">
                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <ul className="tools">
                    <div className="hamburger" onClick={menuToggle}></div>
                    <div className="links-wrapper">
                        <div className="hamburger" onClick={menuToggle}></div>
                        <li>
                            <button className="toggler" onClick={languageToggle}>{lang}</button>
                        </li>
                        <li>
                            <NavLink to="/" activeClassName='current' exact>{t('home')}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName='current' exact>{t('contact')}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq" activeClassName='current' exact>FAQ</NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}