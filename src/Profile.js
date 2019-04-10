import React from 'react'

class Profile extends React.Component{
    render() {
        return(
            <div>
                <navbar>
                <a link href="#"><i class="fa fa-bars"></i></a>
                <input type="text" placeholder="Search.." name="search"/>
                <button className="button" type="submit"><i class="fa fa-search"></i></button>
                <a href="#"><i class="fas fa-bell"></i>Bell</a><br/>
                <a href="#"><i class="far fa-comments-alt"></i>Message</a><br/>
                <a href='#'><i class="fas fa-user-circle">Profile</i></a>
                </navbar>
                <h1>Feed</h1>
                <button>Menu</button>
            </div>
        )
    }
}

export default Profile;