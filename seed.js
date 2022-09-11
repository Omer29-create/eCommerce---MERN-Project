const mongoose = require('mongoose')
const Product = require('./models/productModels')

const main = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/adana')
    .then(() => console.log('mongo baglandi'))
    .catch((err) => console.log(err))
}
main()

const dro = [
    {
    
        title: 'Ali',
        price: 10,
},
{
    
    title: 'Ahmet',
    price: 10,
}
]
Product.insertMany(dro).then(() => console.log('Geldik sükür')).catch(err=>console.log(err))
