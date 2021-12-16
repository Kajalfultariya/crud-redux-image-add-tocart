import axios from "axios";

export const loadUsersApi = async () =>
await axios.get("http://localhost:3000/users");

//Login
export const loginUsersApi = async () =>
await axios.get("http://localhost:3000/users");

//add 
export const addUserApi = async (user) =>
await axios.post("http://localhost:3000/users",user);


//delete
export const delUserApi = async (userId) =>
await axios.delete(`http://localhost:3000/users/${userId}`);

//edit
export const editUserApi = async (userId,userInfo) =>
await axios.put(`http://localhost:3000/users/${userId}`,userInfo);