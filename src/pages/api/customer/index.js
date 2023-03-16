import {connect, model, models, Schema} from "mongoose"
const connectionString = "mongodb+srv://admin:customerstoreMS@customerstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method", req.method)

    if (req.method === 'GET') {
        const docs = await Customer.find()
        res.status(200).json(docs)
    } 
    
    else if (req.method === 'POST') {
        const doc = await Customer.create(req.body)
        res.status(201).json(doc)
    } 
    
    else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
    const customerSchema = new Schema({
        _id: String,
        firstName: String,
        lastName: String,
        phoneNumber: String
        
    })

    const Customer = models?.customer || model('customer', customerSchema);
    //if NextJS already uses mongoose and it is already defined, skip the new model creation (models?.Customer) = check
    //otherwise, create a new model (model('customer', customerSchema))