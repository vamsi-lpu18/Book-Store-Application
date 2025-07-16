import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./model/book.model.js";

dotenv.config();

const books = [
  {
    name: "The Great Gatsby",
    price: 10,
    category: "Classic",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    title: "A novel by F. Scott Fitzgerald"
  },
  {
    name: "To Kill a Mockingbird",
    price: 12,
    category: "Classic",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=400&q=80",
    title: "A novel by Harper Lee"
  },
  {
    name: "JavaScript: The Good Parts",
    price: 20,
    category: "Programming",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "A book by Douglas Crockford"
  },
  {
    name: "React for Beginners",
    price: 0,
    category: "Free",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "A free course for React starters"
  },
  {
    name: "Python Crash Course",
    price: 0,
    category: "Free",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    title: "A hands-on, project-based introduction to programming in Python."
  },
  {
    name: "HTML & CSS Bootcamp",
    price: 0,
    category: "Free",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Learn the basics of web development with HTML and CSS."
  },
  {
    name: "Node.js Essentials",
    price: 0,
    category: "Free",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Get started with backend development using Node.js."
  },
  {
    name: "Data Structures in JavaScript",
    price: 0,
    category: "Free",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    title: "Master data structures with practical JavaScript examples."
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("Sample books added!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed(); 