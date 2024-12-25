const { User } = require("../models/index")


const getUser = (id) =>{
    try {
        return {data : "hello", message : 'hyy'}
    } catch (e) {
        
    }
}

module.exports = {
    getUser
}