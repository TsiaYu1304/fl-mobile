import axios from 'axios';

const baseURL = `http://localhost:5000/api/v1/`

export const getAllEvent = async () => {
    try {
        const _url = `${baseURL}event/all`
        const result = await axios.get(_url,{
            headers:{
                'accept': 'application/json',
            }
        })
        if(result.status === 200){
            return(result.data)
        }
    } catch (err){
        console.log(err.response)
    }
}

export const getEvent = async (event_id)=> { 
    try {
        const _url = `${baseURL}event/${event_id}`
        const result = await axios.get(_url,{
            headers:{
                'accept': 'application/json',
            }
        })
        if(result.status===200){
            return(result.data)
        }
    } catch (err){
        console.log(err.response)
    }
}

export const getTowerpos = async (line_id) => {
    try {
        const _url = `${baseURL}towerpos/line/${line_id}`
        const result = await axios.get(_url,{
            headers:{
                'accept': 'application/json',
            }
        })
        if(result.status===200){
            return(result.data)
        }else if(result.status===404){
            return(result.statusText)
        }
    }catch(err){
        console.log(err.response);
    }
}

export const getCalResultDetail = async (event_id) => {
    try{
        const _url = `${baseURL}calresult/${event_id}`
        const result = await axios.get(_url,{
            headers:{
                'accept': 'application/json',
            }
        })
        if(result.status===200){
            return(result.data)
        }
    }catch(err){
        console.log(err.response)
    }
}