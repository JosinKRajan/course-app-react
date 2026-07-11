import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewCourse = () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/courses").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        },[]
    )
    return (
        <div>
            <NavBar/>
            <h2 className="text-center p-5">Employee Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Fee</th>
                        <th scope="col">ID</th>
                        <th scope="col">Mode</th>
                        <th scope="col">Trainer</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (

                                <tr key={index}>
                                    <th scope="row">{value.course_name}</th>
                                    <td>{value.created_at}</td>
                                    <td>{value.duration}</td>
                                    <td>{value.fee}</td>
                                    <td>{value.id}</td>
                                    <td>{value.mode}</td>
                                    <td>{value.trainer}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default ViewCourse