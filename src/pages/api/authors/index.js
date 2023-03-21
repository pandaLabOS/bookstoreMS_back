import {connect, model, models, Schema} from "mongoose"
const connectionString = "mongodb+srv://admin:bookstoreMS@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method", req.method)

    if (req.method === 'GET') {
        try{
        const docs = await Author.find()
        res.status(200).json(docs)
        } catch (error){
            console.error(error)
        }
    } 
    
    else if (req.method === 'POST') {
        try{
        const doc = await Author.create(req.body)
        res.status(201).json(doc)
        } catch (error){
            console.error(error)
        } 
    }
    else {
        try{
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
        } catch (error){
            console.error(error)
        }
    }
}

    const authorSchema = new Schema({
        id: String,
        firstName: String,
        lastName: String,
        publisher: String
    })

    const Author = models?.author || model('author', authorSchema);
    //if NextJS already uses mongoose and it is already defined, skip the new model creation (models?.Author) = check
    //otherwise, create a new model (model('author', authorSchema))