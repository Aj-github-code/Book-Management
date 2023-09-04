import mongoose from "mongoose";

const Book =mongoose.Schema({
    title:{
type:String
    },
    authors:{
type:String
    },
    genre:{
type:String
    },
    publications_year:{
type:Number
    },
    usreId:{
         
    }
})
const Bookie = mongoose.model("Bookie",Book)


// const BookID= mongoose.Schema({
//     title:String,
//     authorId:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Author',
//     }
// })

// const Bookid = mongoose.model('Book',BookID)
// export default  (Bookie ,Bookid)

export default  (Bookie )