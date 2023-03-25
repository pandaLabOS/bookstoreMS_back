import {connect, model, models, Schema} from "mongoose"
const connectionString = "mongodb+srv://user1:bookstoreUser1@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
    // console.log("req.method", req.method)
    // console.log("req.params.id", req.query)

    const id = req.query.id;

    //Get only one document
    if (req.method === 'GET') {
        const docs = await Author.find()
        // console.log(`id: ${id}`)
        // console.log(`Author object: ${docs[0].id}`)
        const doc = docs.filter((doc) => doc.id == id);
        res.status(200).json(doc)
    } 
    
    else if (req.method === 'DELETE') {
        const deletedDoc = await Author.deleteOne({ _id : id })
        res.status(200).json(deletedDoc)
    } 

    else if (req.method === 'POST') {
        const newDoc = await Author.create(req.body)
        res.status(200).json(newDoc)
    }

    else if (req.method === 'PUT') {
        const updatedDoc = await Author.updateOne({ _id : id }, req.body)
        res.status(200).json(updatedDoc)
    }
    
    
    else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
    const authorSchema = new Schema({
        _id: String,
        firstName: String,
        lastName: String,
        publisher: String
    })

    const Author = models?.author || model('author', authorSchema);