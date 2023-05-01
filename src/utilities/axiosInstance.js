import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/e-commerce-5d98a/us-central1/api', // THE API (cloud function) URL
})

export default instance
