import React from "react";
import classes from './Repos.module.css';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';



const Repos = (props) =>{
   const iconStyles= {fontSize:'1rem'}
 return(
    <div className={classes.repos}>
      <a className={classes.name} href={props.name_url}>{props.name}</a>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.iconSection}>
         <div><CodeIcon sx={iconStyles}className={classes.languageIcon}/><p className={classes.iconText}>{props.language}</p></div>
         <div><StarIcon sx={iconStyles}className={classes.languageIcon}/><p className={classes.iconText}>{props.watchers}</p></div>
         <div><ContentCopyIcon sx={iconStyles}className={classes.languageIcon}/><p className={classes.iconText}>{props.watchers}</p></div>
      </div>
    </div>
 )
}

export default Repos;