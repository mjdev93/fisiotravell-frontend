import { api } from ".";

export const getMyRoutines = async () => {
    const token = localStorage.getItem('token')
    try {
        const {data} = await api.get('/exroutine/myExRoutines', 
        {
            headers:{
                token: token,
            },

        })
        console.log(data)
        return {data}
        
    } catch (error) {
        
    }
}






