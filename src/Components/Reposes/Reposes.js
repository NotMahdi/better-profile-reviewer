import React from 'react';
import Aux from '../../Auxiliary/Auxiliary';
import Repos from './Repos/Repos';

const Reposes = (props) =>{

    const repositoryData = props.reposes;
    let repository = repositoryData.slice(0 , 4).map(reposData =>{ /*I used Slice cause we just want the last 4 repositories */
        return <Repos key={reposData.id} name={reposData.name} name_url={reposData.html_url} description={reposData.description} language={reposData.language} watchers={reposData.watchers} forks={reposData.forks}/>
    })
    return(
        <>
        {repository}
        </>
    )
}

export default Reposes;