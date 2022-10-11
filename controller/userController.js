const getUser = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Kartik", "age": 23}})
}
module.exports = {
    getUser
}