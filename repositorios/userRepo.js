
const bcrypt = require('bcrypt');
const User = require('../database/models/User');


class UserRepo {

    constructor() {

    }

    async findAll(){
        return await User.findAll();
    }
}

module.exports = UserRepo;