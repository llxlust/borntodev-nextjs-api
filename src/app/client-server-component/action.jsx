"use server"
const axios = require('axios')
export async function getUserAll(){
    const {data:{data}} = await axios.get('http://localhost:3000/api/user')
    return data
}