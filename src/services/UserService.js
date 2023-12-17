import UserRepository from "../repositories/UserRository";
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async getAll() {
    return await this.userRepository.getAll();
  }

  async save(user) {
    return await this.userRepository.save(user);
  }

  async find(id){
    return await this.userRepository.find(id);
  }
}
export default UserService;
