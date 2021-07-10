import React, {useEffect, useState} from "react"
import {useHttp} from "../hooks/http.hook"
import Aos from 'aos'
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

export const Contact = () => {

    const { t } = useTranslation()

    useEffect(() => {
        Aos.init({
            duration: 1500,
            offset: 100
        })
    }, [])

    const {request, loading, error} = useHttp()
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChanges = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const formHandler = async () => {
        try {
            const data = await request('/contact', 'POST', {...form})
            if (!error) {
                alert('Sent successfully')
            }
        } catch (e) {}

        setForm({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    return (
        <>
            <div className="contact-banner">
                <div className="content">
                    <div className="title">{t('contact_us')}</div>
                </div>
            </div>
            <div className="container contact">
                <div className="content">
                    <div className="contact-form">
                        <div className="drop drop-1"></div>
                        <div className="drop drop-2"></div>
                        <div className="drop drop-3"></div>
                        <div className="drop drop-4"></div>
                        <div className="drop drop-5"></div>
                        <div className="form" data-aos="fadeIn">
                            <div className="left">
                                <input
                                    type="text"
                                    placeholder={t('full_name')}
                                    required={true}
                                    name="name"
                                    value={form.name}
                                    onChange={handleChanges}
                                /><br/>
                                <input
                                    type="email"
                                    placeholder={t('email')}
                                    name="email"
                                    value={form.email}
                                    onChange={handleChanges}
                                /><br/>
                                <input
                                    type="text"
                                    placeholder={t('phone_number')}
                                    required={true}
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChanges}
                                /><br/>
                                <textarea
                                    placeholder={t('message')}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChanges}
                                />
                            </div>
                            <div className="right">
                                <input
                                    className="button"
                                    type="button"
                                    value={t('send')}
                                    disabled={loading}
                                    onClick={formHandler}
                                /><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}