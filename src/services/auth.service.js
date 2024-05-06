import { api } from ".";

export const login = async (email, password) => {
  try {
    console.log(email,password, "email y password login")
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", data.token);
    console.log(data)
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
    console.log(data, "signup")
    return data;
  } catch (error) {
    console.log(error);
  }
};
