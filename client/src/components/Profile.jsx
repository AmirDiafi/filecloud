import React from 'react'
import ImgProfile from '../assets/me.jpg'

class Profile extends React.Component {

    render() {
        return (
            <div className="profile aside">
                <div className="info">
                    <div className="img">
                        <img src={ImgProfile} alt=""/>
                        <p className="fullname">
                            Amir Diafi
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile