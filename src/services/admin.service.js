import { api } from ".";

export const getAllUsers = async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await api.get("/user/", {
      headers: {
        token: token,
      },
    });

    // console.log(data,"data");
    return data;
  } catch (error) {
    console.log("error trying to get users", error);
    throw error;
  }
};

export const createUser = async (name, lastname, email, phone) => {
 

  try {
    const { data } = await api.post(
      "/user/", {
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
    });
    localStorage.setItem("token", data.token);
    // console.log(data, "data");
    return data;
  } catch (error) {
    console.log("Error al crear usuario", error.message);
  }
};


