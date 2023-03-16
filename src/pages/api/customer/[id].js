import {connect, model, models, Schema} from "mongoose"
<<<<<<< HEAD
const connectionString = "mongodb+srv://admin:bookstoreMS@bookstorems.qgl1qca.mongodb.net/bookstore"
=======
const connectionString = "mongodb+srv://admin:bookstoreMS@bookstorems.qgl1qca.mongodb.net/customers"
>>>>>>> 212e30b08f02132106f867fd75abcf7c4bfe6b46

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method", req.method)
    console.log("req.params.id", req.query) //Because this is being run server-side, the console.log results in an output in the terminal (which is on the server) rather than the Dev Console on browsers (because those are client-side)

    const id = req.query.id

    //Get only one document
    if (req.method === 'GET') {
        const doc = await Customer.findOne({ _id : id})
        res.status(200).json(doc)
    } 
    
    else if (req.method === 'DELETE') {
        const deletedDoc = await Customer.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } 
<<<<<<< HEAD
=======

    else if (req.method === 'POST') {
        const newDoc = await Customer.create(req.body)
        res.status(200).json(newDoc)
    }

    else if (req.method === 'PUT') {
        const updatedDoc = await Customer.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    }
>>>>>>> 212e30b08f02132106f867fd75abcf7c4bfe6b46
    
    else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
    const customerSchema = new Schema({
<<<<<<< HEAD
        _id: String,
=======
        _id: Number,
>>>>>>> 212e30b08f02132106f867fd75abcf7c4bfe6b46
        firstName: String,
        lastName: String,
        phoneNumber: String

    })

    const Customer = models?.customer || model('customer', customerSchema);
    //if NextJS already uses mongoose and it is already defined, skip the new model creation (models?.Customer) = check
    //otherwise, create a new model (model('customer', customerSchema))