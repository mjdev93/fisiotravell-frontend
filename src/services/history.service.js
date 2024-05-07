import { api } from ".";

export const getMyRoutines = async () => {
    const token = localStorage.getItem('token')
    try {
        const {data} = await api.get('/routine/myRoutine', 
        {
            headers:{
                token: token,
            },

        })
        return {data}
    } catch (error) {
        
    }
}