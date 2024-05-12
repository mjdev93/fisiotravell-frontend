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

export const createUser = async (userData) => {
  // console.log("name",userData.name,"lastname", userData.lastname, "email", userData.email, "phone", userData.phone)
  const token = localStorage.getItem("token");
  try {
    const { data } = await api.post(
      "/user/",
      {
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
      },
      {
        headers: {
          token: token,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error al crear usuario", error);
    throw error
  }
};

export const editUser = async (userId, userData) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await api.patch(
      `/user/${userId}`,
      {
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        phone: userData.phone,
      },
      {
        headers: {
          token: token,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error al editar usuario", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await api.delete(`/user/${userId}`, {
      headers: {
        token: token,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};



export const enterProfile = async (userId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await api.get(`/user/${userId}`,{
      headers:{
        token: token,
      }
    })
    return data;
  } catch (error) {
    throw new Error ("Something went wrong")
    
  }
}

export const enterExerciseRoutines = async (userId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await api.get(`/exroutine/userExRoutines/${userId}`,{
      headers:{
        token: token,
      }
    })
    return data;
  } catch (error) {
    console.log(error)
    throw new Error ("Something went wrong")
    
  }
}

export const postNewRoutine = async (userId, date, exercises) => {
  const token = localStorage.getItem("token");
  
  try {
    const response = await api.post(`/exroutine/${userId}`, {
      userId: userId,
      date: date,
      exercises: exercises,
    }, {
      headers: {
        token: token,        
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear la rutina:", error);
    throw error;
  }
}




