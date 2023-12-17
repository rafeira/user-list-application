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
}
export default UserRepository;
