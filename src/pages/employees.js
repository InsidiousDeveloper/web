import React, {useContext, useEffect, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import {Context} from "../context/admincontext";

export const Employees = () => {

    const {setLinkId} = useContext(Context)
    const history = useHistory()
    const [people, setPeople] = useState([])
    const {request} = useHttp()

    const fetchPeople = useCallback(async () => {
        try {
            const person = await request('/adminpanel/employees', 'GET', null)
            setPeople(person)
        } catch (e) {
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchPeople()
    }, [fetchPeople])

    const redirect = (id) => {
        setLinkId(id)
        history.push(`/adminpanel/employees/${id}`)
    }

    return (
        <div className="container">
            <h1 className="adminpanel courses">List of all People</h1>
            <div className="content">
                <div className="people">
                    <div className="cards">
                        {people.map((pers, index) => {
                            return (
                                <div key={index} className="person">
                                    <div className="profile-photo">
                                        <img src={`https://mytrialweb.herokuapp.com/${pers.image}`} alt="Person card"/>
                                    </div>
                                    <div className="profile-info">
                                        <div className="profile-title">{pers.person}</div>
                                        <p>{pers.position}</p>
                                        <p className="description">{pers.description}</p>
                                        <button onClick={() => redirect(pers._id)} id="modify-btn">Edit the person</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}