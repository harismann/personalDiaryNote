import axios from 'axios';

export default class Service {
  baseURL = 'https://private-anon-3d25aa8bf0-halfwineaid.apiary-mock.com/'
  async getAll(url: string, config = {}) {
    try {
      const result = await axios.get(`${this.baseURL}${url}`, config );
      return result.data
    } catch (error) {
     console.log(error)
    }
  }
  async post(url: string, config = {}) {
    try {
      const result = await axios.post(`${this.baseURL}${url}`, config );
      return result
    } catch (error) {

     console.log(error)
    }
  }
}

// export default () => {
//   return axios.create({
//     baseURL: 'https://private-anon-3d25aa8bf0-halfwineaid.apiary-mock.com'
//   })
// }


// {
  // email: "your.email@email.com",
  // id: "2d78cae8-6893-42e9-8340-7eecb01ea7c9",
  // password: "yourpassword",
  // password_confirmation: "yourpassword",
  // username: "yourusername"
// }