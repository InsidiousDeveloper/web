import React, {useContext, useState} from 'react'
import {Context} from "../context/admincontext";
import axios from "axios";

export const Employeedit = () => {

    const uploadicon = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h124v-99.3h-52.7c-35.6 0-53.4-43.1-28.3-68.3L227.7 11.7c15.6-15.6 40.9-15.6 56.6 0L425 152.4c25.2 25.2 7.3 68.3-28.3 68.3H344V320h124c24.3 0 44 19.7 44 44zM200 188.7V376c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8V188.7h84.7c7.1 0 10.7-8.6 5.7-13.7L261.7 34.3c-3.1-3.1-8.2-3.1-11.3 0L109.7 175c-5 5-1.5 13.7 5.7 13.7H200zM480 364c0-6.6-5.4-12-12-12H344v24c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-24H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"></path></svg>

    const [information, setInformation] = useState({
        person: '',
        position: '',
        description: ''
    })

    const {linkId} = useContext(Context)
    const requestingUrl = `/adminpanel/employees/${linkId}`

    const [formData, setFormData] = useState('')

    const [info, setInfo] = useState({
        name: '',
        image: ''
    })

    const upload = ({target: {files}}) => {
        const data = new FormData()
        data.append('id', linkId)
        data.append('person', information.person)
        data.append('position', information.position)
        data.append('description', information.description)
        data.append('categoryImage', files[0])
        data.append('name', files.name)
        setFormData(data)
    }

    const handleChanges = event => {
        setInformation({...information, [event.target.name]: event.target.value})
    }

    const sendData = async (e) => {
        e.preventDefault()
        console.log(formData)
        setInfo({
            image: '',
            name: ''
        })

        axios
            .post(`${requestingUrl}`, formData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))

        setInformation({
            person: '',
            position: '',
            description: ''
        })
    }

    return (
        <div className="container">
            <h1 className="adminpanel courses info">Person edit page</h1>
            <div className="content">
                <form className="modify form" onSubmit={sendData}>
                    <div className="form-control">
                        <label htmlFor="person">Person name: </label>
                        <input type="text" id="person" required={true} placeholder="Person name..." name="person" value={information.person} onChange={handleChanges}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="position">Person position: </label>
                        <input type="text" id="position" required={true} placeholder="Person position..." name="position" value={information.position} onChange={handleChanges}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="description">Person description: </label>
                        <textarea name="description" id="description" required={true} maxLength={100} placeholder="Max 100 symbols..." value={information.description} onChange={handleChanges}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="course">Person image: </label>
                        <input type="file" id="course" required={true} onChange={upload}/>
                        <label htmlFor="course" id="replacer">{uploadicon} Upload an image</label>
                    </div>
                    <input type="submit" id="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}