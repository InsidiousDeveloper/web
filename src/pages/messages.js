import React, {useEffect, useState, useCallback} from 'react'
import {useHttp} from "../hooks/http.hook"

export const Messages = () => {

    const [messages, setMessages] = useState([])
    const {request} = useHttp()

    const fetchMessages = useCallback(async () => {
        try {
            const message = await request('/adminpanel/messages', 'GET', null)
            setMessages(message)
        } catch (e) {
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchMessages()
    }, [fetchMessages])

    return (
        <div className="container msg-wrapper">
            <h2>All messages</h2>
            <div className="content">
                <div className="all-messages">
                    {messages.map((msg, index) => {
                        return (
                            <div className="msg" key={index}>
                                <div className="message-control">
                                    <h3>Name: </h3>
                                    <span>{msg.name}</span>
                                </div>
                                <div className="message-control">
                                    <h3>Email: </h3>
                                    <span>{msg.email}</span>
                                </div>
                                <div className="message-control">
                                    <h3>Phone: </h3>
                                    <span>{msg.phone}</span>
                                </div>
                                <div className="message-control">
                                    <h3>Message: </h3>
                                    <span>{msg.message}</span>
                                </div>
                                <div className="message-control">
                                    <h3>Date & Time: </h3>
                                    <span>{new Date(msg.date).toLocaleString()}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}