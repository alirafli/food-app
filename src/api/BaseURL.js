import axios from 'axios';

export default axios.create({
  baseURL:"https://sweetreats.herokuapp.com/api/",
  header:{
      "Access-Control-Allow-Origin" : "*"
  }
})