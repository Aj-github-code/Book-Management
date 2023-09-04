// import Bookie from "../models/Book";
import express from "express"
import BookController from "../controller/bookController.js"
import checkUserAuth from "../middleware/authmiddleware.js"
const bookrouter = express.Router()


/// token base  auth

bookrouter.use("/createbook",checkUserAuth)
bookrouter.use("/booklist",checkUserAuth)
bookrouter.use("/update/:id",checkUserAuth)

bookrouter.post("/createbook",BookController.craetebook)
bookrouter.put("/update/:id",BookController.updatebook)
bookrouter.delete("/delete/:id",BookController.deletebook)
bookrouter.get("/booklist",BookController.ListBooks)
export default bookrouter