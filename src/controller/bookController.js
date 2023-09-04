import Book from "../models/Book.js";
import Bookie from "../models/Book.js"

class BookController {
    static craetebook = async (req, res) => {
        const { title, authors, genre, publications_year } = req.body;
        
        // console.log("jhgfghj")
        const {user}=req
        if (title && authors && genre && publications_year) {
            try {
                const bookTitle = await Bookie.findOne({ title: title });
                console.log(bookTitle)
                if (!bookTitle) {
                    const userBookDoc = new Bookie({
                        title: title,
                        authors: authors,
                        genre: genre,
                        publications_year: publications_year,
                        usreId:user._id,
                    });
                    await userBookDoc.save();
                    res.status(201).send({ "status": "Success", "message": "Your book has been added." });
                } else {
                    res.status(400).send({ "status": "Fail", "message": "This book title already exists." });
                }
            } catch (error) {
                res.status(400).send({ "status": "Fail", "message": "Book couldn't be saved.", error });
            }
        } else {
            res.status(400).send({ "status": "Fail", "message": "All fields are required." });
        }
    }

    static updatebook=async (req,res)=>{
        const bookId = req.params.id;
        console.log(req)
         const { title, authors, genre, publications_year } = req.body;
        // var updatedbook=res.body

        // console.log(updatedbook)

  try {
  

    const updatebook={ title, authors, genre, publications_year }
      console.log(updatebook)

    const updated = await Bookie.findByIdAndUpdate(bookId, updatebook, { new: true });

    if (!updated) {
        res.status(400).send({ "status": "Fail", "message": "Book couldn't be saved.", });
    }else{
        
                     res.json({ message: 'Book updated successfully', updated });
                
    }

    
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
    }
    static ListBooks = async (req, res) => {
        
        try {
            const books = await Bookie.find({});
            // const BookID = await Book.find({}).populate('authorId');
            // console.log("books",BookID)
            
            res.status(200).send({ "status": "Success", "books": books });
        } catch (error) {
            res.status(500).send({ "status": "Fail", "message": "Failed to retrieve books.", error });
        }
    }

    static deletebook=async (req,res)=>{

        try {
  

            
            const deleted = await Bookie.deleteOne({ _id:req.params.id }, { new: true });
        
            if (!deleted) {
                return  res.status(500).send({ "status": "Fail", "message": "book Unsuccessfully deleted.",  });
            }else{
                
                res.status(200).json({ message:"book successfully deleted"});
                        
            }
        
            
          } catch (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ message: 'Internal server error' });
          }


        // await  Bookie.deleteOne({ _id:req.params.id }, (error) => {
        //     if (error) {
        //     return  res.status(500).send({ "status": "Fail", "message": "book Unsuccessfully deleted.", error });
        //     }
        //     res.status(200).json({ message:"book successfully deleted"});
        //     });
    }

}

export default BookController;
