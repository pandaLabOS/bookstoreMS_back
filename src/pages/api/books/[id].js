import {connect, model, models, Schema} from "mongoose"
const connectionString = "mongodb+srv://user1:bookstoreUser1@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method", req.method)
    console.log("req.params.id", req.query)

    const isbn = req.query.id

    //Get only one document
    if (req.method === 'GET') {
        const doc = await Book.findOne({ isbn : isbn })
        console.log(`doc: ${doc}`)
        res.status(200).json(doc)
    } 
    
    else if (req.method === 'DELETE') {
        const deletedDoc = await Book.deleteOne({ isbn : isbn })
        res.status(200).json(deletedDoc)
    } 

    else if (req.method === 'POST') {
        const newDoc = await Book.create(req.body)
        res.status(200).json(newDoc)
    }

    else if (req.method === 'PUT') {
        const updatedDoc = await Book.updateOne({ isbn : isbn }, req.body)
        res.status(200).json(updatedDoc)
    }
    
    else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).send(`Method ${req.method} Not Allowed`)
    }
}
const bookSchema = new Schema({
    _id: String,
    title: String,
    author: String,
    year: String,
    image: String,
    isbn: String,
    price: Number
})

const Book = models?.book || model('book', bookSchema);