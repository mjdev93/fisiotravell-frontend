import { api } from ".";

export const getMyProfile = async () => {
    try {
      console.log(data,"data")
      const { data } = await api.get("/user/")
      return data;
      console.log(data,"data")
    } catch (error) {

        console.log("error trying to get user profile", error)
    }
  };