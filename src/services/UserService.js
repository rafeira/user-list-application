import UserRepository from "../repositories/UserRository";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async getAll() {
    return await this.userRepository.getAll();
  }
}
export default UserService
