import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useHistory} from 'react-router-dom'
import {Context} from "../context/admincontext";

export const Modify = () => {

    const {request} = useHttp()
    const {setLinkId} = useContext(Context)
    const history = useHistory()
    const [course, setCourse] = useState([])

    const fetchCourses = useCallback(async () => {
        try {
            const courses = await request('/adminpanel/modify', 'GET', null)
            setCourse(courses)
        } catch (e) {
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {

        fetchCourses()
    }, [fetchCourses])

    const redirect = (id) => {
        setLinkId(id)
        history.push(`/adminpanel/modify/${id}`)

    }

    return (
        <div className="container">
            <h1 className="adminpanel courses">List of all Courses</h1>
            <div className="content">
                <div className="popular">
                    <div className="courses">
                        {course.map((cours, index) => {
                            return (
                                <div key={index} className="course">
                                    <div className="upper">
                                        <img src={`https://mytrialweb.herokuapp.com/${cours.image}`} alt="Course card"/>
                                    </div>
                                    <div className="lower">
                                        <div className="price">$ {cours.price}</div>
                                        <button>Design</button>
                                        <div className="card-title">{cours.title}</div>
                                        <p>{cours.description}</p>
                                        <button onClick={() => redirect(cours._id)} className="modify-btn">Edit the course</button>
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