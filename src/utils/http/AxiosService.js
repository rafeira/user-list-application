import axios from 'axios'
class AxiosService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8080/api/v1/",
      timeout: 1000
    });
  }
  async get(path) {
    return await this.instance.get(path);
  }
}
export default AxiosService
