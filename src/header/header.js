import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import classes from './header.module.css';


const header = (props) => {
    const iconStyle = {fontSize : '1.25rem'}
    const themeModeHandler = () =>{
        let themeMode = props.thme;
        if(themeMode === 'dark')
        return true
        else return false
    }
    return(
        <header>
            <p>GitHub Profiles</p>
            <button onClick={props.onChangeTheme} className={classes.themeBtn}>
            {themeModeHandler()?<LightModeIcon sx={iconStyle} className={classes.icon}/>:<DarkModeIcon sx={iconStyle} className={classes.icon}/>}
            </button>
        </header>
    )
}



export default header;