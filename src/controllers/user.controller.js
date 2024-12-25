const User = require("../services/user.service")


const addUser = async (req, res) => {
    try {
        const getData = await User.getUser(1)
        if (!getData) return res.status(400).send({ status: false, message: "something wrong", data: {} })
        return res.status(200).send({ status: false, message: "something wrong", data: getData })
    } catch (e) {

    }
}

module.exports = {
    addUser
}