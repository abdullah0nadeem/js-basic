let DATA = "CURRENT DATA";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`User name: ${this.name}`);
    console.log(`User email: ${this.email}`);
    console.log(`DATA = ${DATA}`);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    DATA = "NEW DATA";
  }
}

const user = new User("John", "john@gmail.com");
user.viewData();

let admin = new Admin("admin", "admin@mail.com");
