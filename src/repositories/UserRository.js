import AxiosService from "../utils/http/AxiosService";
import User from "../models/User";
class UserRepository {
  constructor() {
    this.axiosService = new AxiosService();
  }
  async getAll() {
    const response = await this.axiosService.get("users");
    return response.data.map((userData) => User.fromData(userData));
  }

  async save(user) {
    const data = user.toJson();
    return await this.axiosService.post("users", data);
  }

  async find(id) {
    const response = await this.axiosService.get(`users/${id}`);
    return User.fromData(response.data);
  }

  async remove(id) {
    return await this.axiosService.delete(`users/${id}`)
  }
}
export default UserRepository;
