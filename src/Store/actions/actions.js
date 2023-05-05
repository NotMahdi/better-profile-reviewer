import axios from 'axios';


export const getUserName = 'getUserName';
export const changeTheme = 'changeTheme';



export const searchResultFailed = ()=>{
    return{
        type: 'searchResultFailed'
    }
}

export const searchResult = (fetchData) =>{
    return {
        type: 'searchResult',
        fetchData: fetchData
    }
}

export const searchResultAsync = (userName) =>{
    return dispatch =>{
        /*axios.all([axios.get(`https://api.github.com/users/${getState().userName}`),
        axios.get(`https://api.github.com/users/${getState().userName}/repos?sort=created&direction=desc`)]).then(axios.spread((resp1,resp2)=>{
           dispatch(searchResult([resp1.data , resp2.data]))}))
        .catch(error=>{
            dispatch(searchResultFailed())
        })*/
        axios.get(`https://api.github.com/users/${userName}`)
        .then(response =>{
          dispatch(searchResult(response.data))
        })
    }
}