import { api } from ".";

export const getAllUsers = async () => {
    try {
      const response = await api.get("/user/")
      console.log(data,"data")
      
      const data = response.data;
      console.log(data,"data");
      return data
    } catch (error) {

        console.log("error trying to get users", error)
        throw error;
    }
  };



