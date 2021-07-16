import React, {useCallback, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";

export const Messages = () => {

    const {request, loading} = useHttp()
    const [messages, setMessages] = useState([])
    const [deleted, setDeleted] = useState(null)

    const fetchMessages = useCallback(async () => {
        try {
            const fetched = await request('/admin/allmessages', 'GET', null)
            setMessages(fetched)
        } catch (e) {
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchMessages()
    }, [])

    const deleteMessage = async (msg) => {
        try {
            const deletedMessage = await request(`/admin/allmessages`, 'DELETE', {msg})

            console.log('removed')
        } catch (e) {
            console.log(e.message)
        }
        const remove = document.getElementById(`${msg}`)
        remove.parentNode.removeChild(remove)
        console.log(msg)
        setDeleted(prev => !prev)
    }

    return (
        <div className="messages">
            <div className="title">
                Contacted People
            </div>
            <div className="content">
                <div className="all-messages">
                    {messages.map((message, index) => {
                        return (
                            <div key={message._id} className="message" id={message._id}>
                                <div>Name: <h3>{message.name}</h3></div>
                                <div>Email: <h3>{message.email}</h3></div>
                                <div>Phone number: <h3>{message.phone}</h3></div>
                                <div>Sent message: <h3>{message.message}</h3></div>
                                <div>Date: <h3>{new Date(message.date).toLocaleString()}</h3></div>
                                {/*<button onClick={() => deleteMessage(message._id)}>Delete</button>*/}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}