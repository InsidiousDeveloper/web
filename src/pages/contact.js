import React, {useEffect, useState} from "react"
import {useHttp} from "../hooks/http.hook"
import Aos from 'aos'

export const Contact = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500,
            offset: 100
        })
    }, [])

    const {request, loading} = useHttp()
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
            // alert(data.message)
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
                    <div className="title">Contact Us</div>
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
                                <h3>Оставайтесь на связи</h3>
                                <input
                                    type="text"
                                    placeholder="Your Full name"
                                    required={true}
                                    name="name"
                                    value={form.name}
                                    onChange={handleChanges}
                                /><br/>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChanges}
                                /><br/>
                                <input
                                    type="text"
                                    placeholder="Your Phone number"
                                    required={true}
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChanges}
                                /><br/>
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChanges}
                                />
                            </div>
                            <div className="right">
                                <input
                                    className="button"
                                    type="button"
                                    value="Send"
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