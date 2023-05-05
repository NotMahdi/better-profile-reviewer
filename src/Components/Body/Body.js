import React, { useEffect, useState } from "react";
import classes from './Body.module.css';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Reposes from '../Reposes/Reposes';

const Body = (props) =>{
    const [userState, setUserState] = useState({
        userName: '',
        name:'',
        company: '',
        location: '',
        website: '',
        email: '',
        avatar: null,
        repos: [],
        clicked: false,
        theme: 'dark'
    })

const GetUserName = (event) =>{
    setUserState({userName: event.target.value})
}

const searchHandler= async () =>{
    await axios.all([axios.get(`https://api.github.com/users/${userState.userName}`),
     axios.get(`https://api.github.com/users/${userState.userName}/repos?sort=created&direction=desc`)]).then(axios.spread((resp1,resp2)=>{
        setUserState({
            name: resp1.data.name,
            company: resp1.data.company,
            location: resp1.data.location,
            website: resp1.data.blog,
            email: resp1.data.email,
            avatar: resp1.data.avatar_url,
            repos: resp2.data,
            clicked: true
             })
                console.log(resp1, resp2)}))
}
let profile = null;
if(userState.clicked){
    profile = <div>
    <div className={classes.img} style={{backgroundImage: 'url('+userState.avatar+')'}}></div>
    <div className={classes.reposSection}>
        <div className={classes.reposes}>
            <Reposes reposes={userState.repos}/>
        </div>
    </div>
    <p className={classes.name}>{userState.name}</p>
    <div className={classes.lists}>
        <ul>
            <li>Company:</li>
            <li>Location:</li>
            <li>Website:</li>
            <li>Email:</li>
        </ul>
        <ul style={{color: '#ffffff'}}>
            <li>{userState.company? userState.company:<div>no company !</div>}</li>
            <li>{userState.location? userState.location:<div>no location !</div>}</li>
            <a className={classes.websiteLi} href={userState.blog}>{userState.website? userState.website:<div>no website !</div>}</a>
            <li>{userState.email? userState.email:<div>no email !</div>}</li>
        </ul>
    </div>
</div>
}

return(
    
    <div className={classes.parent} id={userState.theme}>
        <p className={classes.headText}>Enter a GitHub username, to see the magic.</p>
        <div className={classes.searchParent}>
            <p className={classes.searchTitle}>GitHub username:</p>
            <input className={classes.searchText} placeholder='@username' type='text' onChange={ GetUserName }></input>
            <button onClick={searchHandler} className={classes.searchBtn}><SearchIcon className={classes.searchIcon}/></button>
            {profile}
        </div>
        {console.log(props.userName)}
    </div>
)
}

 
export default Body;