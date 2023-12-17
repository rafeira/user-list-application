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
}
export default UserRepository;
