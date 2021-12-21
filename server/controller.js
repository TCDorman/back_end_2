const houses = require('./db.json')
let globalId = 10

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),

    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let { address, price, imageURl } = req.body
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURl
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        let targetId = req.params.id
        let { type } = req.body
        const foundindex = houses.findIndex(house =>{
            console.log('what is house', house)

            if(type === "minus" && house.id ==targetId){
                console.log('inside minus')
                house.price--
                res.status(200).send(houses)
            }else if(type === 'plus' && house.id == targetId){
                house.price++
                res.status(200).send(houses)
            }

        })   
    }
}
