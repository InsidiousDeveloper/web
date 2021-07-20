import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import axios from 'axios'

import banner1 from '../images/xe1.jpg.pagespeed.ic.Xjf7ZFLDLk.webp'
import banner2 from '../images/xe2.jpg.pagespeed.ic.3XyEgSPjzA.webp'

import client1 from '../images/client1.webp'
import client2 from '../images/client2.webp'

export const Main = () => {

    const [courses, setCourses] = useState([])
    const [people, setPeople] = useState([])

    useEffect(() => {

        Aos.init({
            duration: 3000,
            offset: 200
        })

        axios.get('/adminpanel/modify')
            .then((res) => setCourses(res.data))
            .catch((err) => console.log(err))

        axios.get('/adminpanel/employees')
            .then((res) => setPeople(res.data))
            .catch((err) => console.log(err))

    },[])

    useEffect(() => {

        const countDown = () => {
            const toDate = new Date("September 19, 2021 00:00:00").getTime()
            const today = new Date().getTime()
            const gap = toDate - today

            const second = 1000
            const minute = second * 60
            const hour = minute * 60
            const day = hour * 24

            const textDay = Math.floor(gap / day)
            const textHour = Math.floor((gap % day) / hour)
            const textMinute = Math.floor((gap % hour) / minute)
            const textSecond = Math.floor((gap % minute) / second)

            try {
                if (gap > 0) {
                    document.querySelector('.days').innerHTML = textDay
                    document.querySelector('.hours').innerHTML = textHour
                    document.querySelector('.minutes').innerHTML = textMinute
                    document.querySelector('.seconds').innerHTML = textSecond
                } else {
                    document.querySelector('.days').innerHTML = 0
                    document.querySelector('.hours').innerHTML = 0
                    document.querySelector('.minutes').innerHTML = 0
                    document.querySelector('.seconds').innerHTML = 0
                }
            } catch (e) {

            }

        }

        setInterval(countDown, 1000)

    }, [])


    const graduationHat = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M612.16 153.99l-265-85.68c-17.81-5.75-36.5-5.75-54.31 0l-265 85.68C10.94 159.46 0 174.38 0 192s10.94 32.54 27.84 38.01l29.71 9.6c-3.3 6.18-5.74 12.83-7.33 19.8C39.53 264.59 32 275.32 32 288c0 12.73 7.57 23.52 18.33 28.67L32.28 428.53C30.67 438.52 36.19 448 43.62 448h40.75c7.43 0 12.96-9.48 11.34-19.47L77.67 316.67C88.43 311.52 96 300.73 96 288c0-10.6-5.49-19.54-13.43-25.37 1.49-4.66 3.8-8.86 6.57-12.81l53.47 17.29L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.61-116.89L612.16 230c16.9-5.46 27.84-20.38 27.84-38s-10.94-32.54-27.84-38.01zM479.48 381.86C468.72 393.19 414.04 416 320 416c-94.04 0-148.72-22.81-159.48-34.14l13.09-104.73 119.24 38.55c2.6.84 25.72 9.23 54.31 0l119.24-38.55 13.08 104.73zm122.8-182.28l-265 85.68c-11.31 3.66-23.25 3.66-34.56 0l-175.67-56.8 195.89-36.74c8.69-1.62 14.41-9.98 12.78-18.67-1.62-8.7-10.16-14.39-18.66-12.77l-203.78 38.2c-12.4 2.32-23.51 7.65-33.08 14.83l-42.49-13.74c-7.85-2.55-7.46-12.74 0-15.15l265-85.68c15.1-4.88 27.84-2.17 34.56 0l265 85.68c7.39 2.39 7.91 12.6.01 15.16z"></path></svg>
    const book = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M356 160H188c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm12 52v-8c0-6.6-5.4-12-12-12H188c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12zm64.7 268h3.3c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h344c13.3 0 24 10.7 24 24v368c0 10-6.2 18.6-14.9 22.2-3.6 16.1-4.4 45.6-.4 65.8zM128 384h288V32H128v352zm-96 16c13.4-10 30-16 48-16h16V32H80c-26.5 0-48 21.5-48 48v320zm372.3 80c-3.1-20.4-2.9-45.2 0-64H80c-64 0-64 64 0 64h324.3z" className=""></path></svg>
    const globe = <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="globe-africa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.04 8 0 119.03 0 256s111.04 248 248 248 248-111.03 248-248S384.96 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56c10.92 0 21.55 1.12 32 2.81v21.7c0 8.56-6.94 15.5-15.5 15.5h-24.21c-5.18 0-10.02 2.59-12.89 6.9l-8.08 12.11c-2.14 3.21-5.4 5.5-9.14 6.44l-14.45 3.61a15.492 15.492 0 0 0-11.74 15.04v4.4c0 8.56 6.94 15.5 15.5 15.5h90.09c4.11 0 8.05 1.63 10.96 4.54l6.92 6.92c2.91 2.91 6.85 4.54 10.96 4.54h10.09c8.56 0 15.5 6.94 15.5 15.5 0 6.67-4.27 12.59-10.6 14.7l-47.31 15.77c-3.9 1.3-8.15 1-11.83-.84l-14.72-7.36a54.682 54.682 0 0 0-24.43-5.77h-.89c-11.82 0-23.32 3.83-32.78 10.93l-27.58 20.69A54.545 54.545 0 0 0 152 283.31v14.06c0 14.49 5.76 28.38 16 38.63a54.641 54.641 0 0 0 38.63 16h25.88c8.56 0 15.5 6.94 15.5 15.5v29.88c0 12.25 2.85 24.33 8.33 35.29 4.7 9.4 14.31 15.34 24.82 15.34 9.28 0 17.94-4.64 23.09-12.36l13.03-19.55a159.608 159.608 0 0 1 25-29.16c2.47-2.26 4.14-5.26 4.76-8.56l4.3-22.83c.44-2.33 1.41-4.53 2.83-6.43l18.74-24.98c2.01-2.68 3.1-5.95 3.1-9.3V303.5c0-8.56-6.94-15.5-15.5-15.5h-8.21c-5.18 0-10.02-2.59-12.89-6.9l-13.24-19.86c-5.67-8.5-1.7-20.07 7.99-23.3l2.65-.88c4.54-1.51 9.52-.85 13.5 1.81l18.21 12.14a15.532 15.532 0 0 0 15.53.97l15.39-7.7c5.25-2.62 8.57-7.99 8.57-13.86v-6.93c0-8.56 6.94-15.5 15.5-15.5h18.44c3.82 15.41 6.07 31.43 6.07 48C448 366.28 358.28 456 248 456z" className=""></path></svg>

    return (
        <>
            <div className="container main">
                <div className="layer">
                    <div className="content">
                        <div className="offer">
                            <p>Best logistics education center in Tashkent</p>
                            <h1>One step ahead this season</h1>
                            <div className="btns">
                                <button>Learn more</button>
                                <button>See course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="feature">
                        <div className="title">
                            <h1>Awesome feature</h1>
                            <p>Replenish man have thing gathering lights yielding shall you
                            </p>
                        </div>
                        <div className="cards">
                            <div className="card" data-aos="fade-zoom-in">
                                <div className="icon">{graduationHat}</div>
                                <div className="card-title">Scolarship facility</div>
                                <p>One make creepeth, man bearing theira firmament won't great heaven</p>
                            </div>
                            <div className="card" data-aos="fade-zoom-in" data-aos-delay="200">
                                <div className="icon">{book}</div>
                                <div className="card-title">Sell Online Course</div>
                                <p>One make creepeth, man bearing theira firmament won't great heaven</p>
                            </div>
                            <div className="card" data-aos="fade-zoom-in" data-aos-delay="400">
                                <div className="icon">{globe}</div>
                                <div className="card-title">Global certification</div>
                                <p>One make creepeth, man bearing theira firmament won't great heaven</p>
                            </div>
                        </div>
                    </div>
                    <div className="popular">
                        <div className="title">
                            <h1>Our popular courses</h1>
                            <p>Replenish man have thing gathering lights yielding shall you</p>
                        </div>
                        <div className="courses">
                            {courses.map((course, index) => {
                                return (
                                    <div className="course" key="index" data-aos="fade-up">
                                        <div className="upper">
                                            <img src={course.image} alt="Course image"/>
                                        </div>
                                        <div className="lower">
                                            <div className="price">$ {course.price}</div>
                                            <button>Design</button>
                                            <div className="card-title">{course.title}</div>
                                            <p>{course.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container count">
                <div className="content">
                    <div className="count-down">
                        <div className="title">Register now</div>
                        <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
                        <div className="tabs">
                            <div className="tab">
                                <div className="time days"></div>
                                <p>Days</p>
                            </div>
                            <div className="tab">
                                <div className="time hours"></div>
                                <p>Hours</p>
                            </div>
                            <div className="tab">
                                <div className="time minutes"></div>
                                <p>Minutes</p>
                            </div>
                            <div className="tab">
                                <div className="time seconds"></div>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="people">
                        <div className="title">
                            <h1>Our expert Trainers</h1>
                            <p>Replenish man have thing gathering lights yielding shall you</p>
                        </div>
                        <div className="cards">
                            {people.map((pers, index) => {
                                return (
                                    <div key={index} className="person" data-aos="zoom-in">
                                        <div className="profile-photo">
                                            <img src={`http://localhost:5000/${pers.image}`} alt="Person card"/>
                                        </div>
                                        <div className="profile-info">
                                            <div className="profile-title">{pers.person}</div>
                                            <p>{pers.position}</p>
                                            <p className="description">{pers.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container events">
                <div className="content">
                    <div className="title">Upcoming Event</div>
                    <p>Replenish man have thing gathering lights yielding shall you</p>
                    <div className="banners">
                        <div className="banner" data-aos="zoom-in-right">
                            <img src={banner1} alt="Banner 1"/>
                            <div className="content-wrapper">
                                <div className="time-place">
                                    <div className="date">
                                        <div className="day">15</div>
                                        <div className="month">Jun</div>
                                    </div>
                                    <div className="vl"></div>
                                    <div className="place">
                                        <div className="time">12:00 AM - 12:30 AM</div>
                                        <div className="location">Hilton Quebec</div>
                                    </div>
                                </div>
                                <div className="short-info">One make creepeth man for so bearing their firmament won't fowl meat over seas great</div>
                                <button className="more">View details</button>
                            </div>
                        </div>
                        <div className="banner" data-aos="zoom-in-left">
                            <img src={banner2} alt="Banner 2"/>
                            <div className="content-wrapper">
                                <div className="time-place">
                                    <div className="date">
                                        <div className="day">15</div>
                                        <div className="month">Jun</div>
                                    </div>
                                    <div className="vl"></div>
                                    <div className="place">
                                        <div className="time">12:00 AM - 12:30 AM</div>
                                        <div className="location">Hilton Quebec</div>
                                    </div>
                                </div>
                                <div className="short-info">One make creepeth man for so bearing their firmament won't fowl meat over seas great</div>
                                <button className="more">View details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container feedbacks">
                <div className="content">
                    <div className="title">What clients say about us</div>
                    <p>Replenish man have thing gathering lights yielding shall you</p>
                    <div className="clients">
                        <div className="client">
                            <img src={client1} alt="Client 1"/>
                            <div className="client-info">
                                <div className="client-name">Elite Martin</div>
                                <div className="client-say">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid error numquam odit placeat suscipit. Aliquam debitis doloribus ducimus earum incidunt inventore ipsum itaque labore quasi.</div>
                            </div>
                        </div>
                        <div className="client">
                            <img src={client2} alt="Client 2"/>
                            <div className="client-info">
                                <div className="client-name">David Saden</div>
                                <div className="client-say">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias aperiam assumenda, consequuntur earum eveniet in iure, laborum laudantium molestiae, nesciunt repellendus repudiandae soluta.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}