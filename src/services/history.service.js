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

export const getMyexerciseRoutines= async () => {

    const token = localStorage.getItem('token')
  
    try {
      const { data } = await app.get('/exroutines/myExRoutines',
        {
          headers: {
            Authorization: token,
          },
        }
      )
      
      return data
  
    } catch (error) {
      console.log('Error loging: ', error.message)
    }
  }


  
