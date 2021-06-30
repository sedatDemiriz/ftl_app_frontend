import { useState, useEffect } from 'react'
import RunsTable from './RunsTable'

const axios = require('axios')

const ProfilePage = (props) => {

    const [profileData, setProfileData] = useState({})
    useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api-runs/' + props.username + '/')
            // console.log(response.data.results)
            setProfileData(response.data.results)
        }
        fetchData()
    }, [])

    return(
        <div>
            <h1><span>{props.username}</span></h1>
            <div>
                <p>Best Streak</p>
                <p>Recent Streak</p>
                <div>
                    <p>Ship Tierlist</p>
                    <p>Weapon Tierlist</p>
                    <p>Augment Tierlist</p>
                </div>
            </div>
            <p>Runs table goes here</p>
        </div>
    )
}

export default ProfilePage