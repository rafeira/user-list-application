import axios from "axios";
class AxiosService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:8080/api/v1/",
    });
  }
  async get(path) {
    return await this.instance.get(path);
  }
  async post(path, data, config = {}) {
    return await this.instance.post(path, data, config);
  }
  async delete(path, config = {}) {
    return await this.instance.delete(path, config);
  }
  async put(path, data, config = {}) {
    return await this.instance.put(path, data, config);
  }
}
export default AxiosService;
