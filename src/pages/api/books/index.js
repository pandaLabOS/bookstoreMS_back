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

    if (req.method === 'GET') {
        const docs = await Book.find()
        res.status(200).json(docs)
    } 
    
    else if (req.method === 'POST') {
        const doc = await Book.create(req.body)
        res.status(201).json(doc)
    } 
    
    else {
        res.setHeader('Allow', ['GET', 'POST'])
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
