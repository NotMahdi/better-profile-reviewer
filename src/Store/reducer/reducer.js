 
const initialState  ={
    userName: '',
        name:'',
        company: '',
        location: '',
        website: '',
        email: '',
        avatar: null,
        repos: [],
        clicked: false,
        error: false,
        theme: 'dark'
}

const reducer = (state = initialState , action) => {
    switch(action.type){
    case 'getUserName':
        return{
            ...state,
            userName: action.name
        } 
        
    case 'changeTheme':{
        if(state.theme === 'dark')
        return{
            ...state,
            theme: 'light'
        }
        else
        return{
            ...state,
            theme: 'dark'
        }
    }
    case 'searchResult':{
        return{
            ...state,
            name: action.fetchData.name,
            company: action.fetchData.company,
            location: action.fetchData.location,
            website: action.fetchData.blog
        }    
    }

    default: return state}
    
}

export default reducer;