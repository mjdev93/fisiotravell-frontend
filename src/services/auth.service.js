import { api } from ".";

export const login = async (email, password) => {
  try {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signUp2 = async (name, lastname, email, password, phone) => {
  try {
    const { data } = await api.post("/auth/signup", {
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      password: password,
    });
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};
