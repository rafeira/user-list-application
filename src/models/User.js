class User {
  constructor(firstName = '', lastName = '', id) {
    this.id = id;
    this.first_name = firstName;
    this.last_name = lastName;
  }

  static fromData(data) {
    return new User(data.firstName, data.lastName, data.id);
  }

  fullName() {
    return `${this.first_name} ${this.last_name}`
  }

  toJson() {
    return {
      id: this.id,
      firstName: this.first_name,
      lastName: this.last_name
    }
  }
}
export default User
