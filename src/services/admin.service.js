import { api } from ".";

export const getAllUsers = async () => {
  const token = localStorage.getItem("token")
    try {
      const response = await api.get("/user/", {
        headers: {
          token: token
        }
      })
     
      
      const data = response.data;
      console.log(data,"data");
      return data
    } catch (error) {

        console.log("error trying to get users", error)
        throw error;
    }
  };



