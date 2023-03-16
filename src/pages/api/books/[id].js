import {connect, model, models, Schema} from "mongoose"
<<<<<<< HEAD
const connectionString = "mongodb+srv://admin:bookstoreMS@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
=======
const connectionString = "mongodb+srv://user1:bookstoreUser1@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(`${connectionString}`);
>>>>>>> 212e30b08f02132106f867fd75abcf7c4bfe6b46
    console.log("req.method", req.method)
    console.log("req.params.id", req.query) //Because this is being run server-side, the console.log results in an output in the terminal (which is on the server) rather than the Dev Console on browsers (because those are client-side)

    const id = req.query.id

    //Get only one document
    if (req.method === 'GET') {
        const doc = await Book.findOne({ _id : id})
        res.status(200).json(doc)
    } 
    
    else if (req.method === 'DELETE') {
        const deletedDoc = await Book.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } 
<<<<<<< HEAD
=======

    else if (req.method === 'POST') {
        const newDoc = await Book.create(req.body)
        res.status(200).json(newDoc)
    }

    else if (req.method === 'PUT') {
        const updatedDoc = await Book.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    }
>>>>>>> 212e30b08f02132106f867fd75abcf7c4bfe6b46
    
    else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
    const bookSchema = new Schema({
        _id: String,
        title: String,
        author: String,
<<<<<<< HEAD
        year: String

    })

    const Book = models?.book || model('book', bookSchema);
    //if NextJS already uses mongoose and it is already defined, skip the new model creation (models?.Book) = check
    //otherwise, create a new model (model('book', bookSchema))
=======
        year: String,
        image: String,
        isbn: String

    })

    const Book = models?.book || model('book', bookSchema);
>>>>>>> 212e30b08f02132106f867fd75abcf7c4bfe6b46
