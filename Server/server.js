    const express = require("express");
    const app = express();
    const port = 4500;
    const cors = require("cors");
    const productModel = require("./modules/productModel");
    const userModel = require("./modules/userModel");
    

    // Middleware
    app.use(cors());
    app.use(express.json()); 

    app.get("/api/getProducts", async (req, res) => {
        try {
            const products = await productModel.find({}); // Use find() to get all products
            console.log(products); // Log the products to the console
            res.status(200).json({message:"All Products",products}); // Send the products as a response

        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ message: "Internal server error" }); // Send an error response
        }
    });

    app.post("/api/search",async (req, res) => {
        try {
          
          const data = await productModel.find({
            $or: [
              {
                name: { $regex: req.body.name, $options: "i" } // Case-insensitive search
              }
            ]
          }) 
          console.log(data)
          res.status(200).json(data); // Send data 
        } catch (error) {
          res.status(500).json({ message: "Error fetching data", error }); // Handle errors
        }
      }
    )

    app.post("/api/signup", async (req, res) => {
        try {
            const {fname,lname,email,password,} = req.body

            if ( !fname || !lname || !email || !password ) {
                return res.status(400).json({ message: "All fields are required" });
            }
    
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "Email already in use" });
            }
            const user = await userModel({
                firstName:fname,
                lastName:lname,
                email:email,
                password:password,
            }) 
            const data = await user.save()
            console.log(data); // Log the products to the console

        res.status(200).json({"Message":"Signup Succesfully Completed"}); // Send the products as a response
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ message: "Internal server error......!" }); // Send an error response
        }
    });


    app.post("/api/login", async (req, res) => {
        try {
            const { email, password } = req.body;
    
            // Check if email and password are provided
            if (!email || !password) {
                return res.status(400).json({ message: "Please enter both email and password" });
            }
    
            // Find the user by email
            const existingUser = await userModel.findOne({ email });
            
            // Check if the user exists
            if (!existingUser) {
                return res.status(400).json({ message: "User does not exist" });
            }
    
            // Check if the provided password matches
            if (password !== existingUser.password) {
                return res.status(400).json({ message: "Invalid password" });
            }
    
            // If login is successful
            return res.status(200).json({
                message: "Login Successful",
                user: {
                    email: existingUser.email,
                    firstName: existingUser.firstName,
                    lastName: existingUser.lastName
                }
            });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    })

    app.put("/api/wishlist/:email", async (req, res) => {
      try {
        const data = await userModel.updateOne(
          { email: req.params.email },
          { $addToSet: { wishlist: req.body } } // Adds to wishlist only if it doesn’t already exist
        );
        console.log("Data updated:", data); // Optional: Log the updated data
        res.status(200).json({ message: "Added to wishlist" });
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).json({ error: "Failed to add to wishlist" });
      }
      
    })
    
    app.get("/api/getWishlist/:email",async (req, res) => {
        console.log(req.params.email)
        try {
          const userEmail = req.params.email;
          const user = await userModel.findOne({ email:userEmail});
      
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
      
          res.status(200).json(user.wishlist || []);
          console.log("data",user.watchlist)
        } catch (error) {
          console.error("Error fetching user watchlist:", error); // Log the error
          res.status(500).json({ message: "Error fetching data", error }); // Handle errors
        }
    })
    


    // Start the server
    app.listen(port, () => {
        console.log("Server Running on port " + port);
    });
