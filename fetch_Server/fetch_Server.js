const express=require("express");
const cors= require("cors");
const morgan = require("morgan");
const { MongoClient, ServerApiVersion } = require("mongodb");
const path = require("path");

// MongoDB connection string
const uri = "mongodb+srv://WebstoreUser:Deborah_3180@webstorecluster.zoayw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect(); // Connect the client
    console.log("Connected to MongoDB successfully!");
    return client.db("Webstore"); // Return the database object
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit if the connection fails
  }
}


let app= express();
app.use(morgan("short"));
app.set('json spaces', 3);


app.use(cors());

app.use(express.json());

app.param('collectionName', function(req, res, next, collectionName){
req.collection = db.collection(collectionName);
return next();
});


app.use(function(req, res, next){
    console.log("Incoming request: " + req.url);
  next();
});

// Serve static files for lesson images
const imagesPath = path.join(__dirname, "Webstore-frontend/images");
app.use("/images", express.static(imagesPath));

// Custom middleware to handle missing image files
app.use("/images", (req, res) => {
  res.status(404).json({ error: "Image not found" });
});

app.use((req, res, next) => {
  req.url = req.url.trim(); // Remove leading/trailing spaces or newlines
  next();
});


app.get("/", function(req, res){
    res.send("Welcome to our lesson store");
});

// Example route to fetch lessons from MongoDB
app.get("/collections/lessons", async (req, res) => {
    try {
      const db = await connectToDatabase();
      const lessonsCollection = db.collection("lessons"); // Replace "lessons" with your collection name
      const lessons = await lessonsCollection.find({}).toArray();
      res.json(lessons);
    } catch (error) {
      console.error("Error fetching lessons:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

// Add order to the database
app.post("/orders", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const ordersCollection = db.collection("orders");

    const { name, phone, gift, method, cart } = req.body;

    // Validation
    if (!name || !phone || !Array.isArray(cart)) {
      return res
        .status(400)
        .json({ error: "Invalid order data. Ensure all fields are provided and valid." });
    }

    const order = { name, phone, gift, method, cart, createdAt: new Date() };

    // Insert the order into the database
    const result = await ordersCollection.insertOne(order);
    res.status(201).json({ message: "Order created successfully", orderID: result.insertedId });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get all orders
app.get("/orders", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const ordersCollection = db.collection("orders");

    // Retrieve all orders
    const orders = await ordersCollection.find({}).toArray();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.delete("/", function (req, res) {
    res.send("Are you sure??? Ok, let’s delete a record");
});

// Add order to the database
app.post("/collections/orders", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const ordersCollection = db.collection("orders");

    const { name, phone, lessonIDs, spaces } = req.body;

    // Validation
    if (!name || !phone || !Array.isArray(lessonIDs) || !Array.isArray(spaces)) {
      return res.status(400).json({ error: "Invalid order data. Ensure all fields are provided and valid." });
    }

    if (lessonIDs.length !== spaces.length) {
      return res.status(400).json({ error: "Lesson IDs and spaces must have the same length." });
    }

    const order = { name, phone, lessonIDs, spaces };

    // Insert the order into the database
    const result = await ordersCollection.insertOne(order);
    res.status(201).json({ message: "Order created successfully", orderID: result.insertedId });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get all orders
app.get("/collections/orders", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const ordersCollection = db.collection("orders");

    // Retrieve all orders
    const orders = await ordersCollection.find({}).toArray();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Internal Server Error");
  }
});


// // Update availableInventory for a specific product
app.put("/collections/lessons/:id", async (req, res) => {
  try {
      const db = await connectToDatabase();
      const lessonsCollection = db.collection("lessons");

      const productId = parseInt(req.params.id); // Extract product ID from URL params
      const { availableInventory } = req.body; // Get the new inventory count from the request body

      if (typeof availableInventory !== "number" || availableInventory < 0) {
          return res.status(400).json({ error: "Invalid inventory number" });
      }

      const result = await lessonsCollection.updateOne(
          { id: productId },
          { $set: { availableInventory: availableInventory } }
      );

      if (result.modifiedCount === 1) {
          res.status(200).json({ message: "Product inventory updated successfully" });
      } else {
          res.status(404).json({ error: "Product not found" });
      }
  } catch (error) {
      console.error("Error updating product inventory:", error);
      res.status(500).send("Internal Server Error!");
  }
});


//handle 404 errors
app.use(function(req, res){
    res.status(404).send("Resource not found!");
});


//calling the port
app.listen(3000, function(){
    console.log("App has started on port 3000");
});