    const express = require("express");
    const app = express();
    const port = 5000;
    const cors = require("cors");
    const productModel = require("./modules/productModel");
    const userModel = require("./modules/userModel");
    

    console.log("Inside the login");
    
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

    app.get("/api/products/:name/reviews", async (req, res) => {
      try {
        const productName = decodeURIComponent(req.params.name);
        const product = await productModel.findOne({ name: productName });

        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json(product.reviews || []);
      } catch (error) {
        console.error("Error fetching product reviews:", error);
        return res.status(500).json({ message: "Error fetching reviews" });
      }
    });

    app.post("/api/products/:name/reviews", async (req, res) => {
      try {
        const productName = decodeURIComponent(req.params.name);
        const { reviewerName, reviewerEmail, rating, comment } = req.body;

        if (!reviewerName || !comment || !rating) {
          return res.status(400).json({ message: "Reviewer name, rating, and comment are required" });
        }

        const product = await productModel.findOne({ name: productName });

        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        const newReview = {
          reviewerName,
          reviewerEmail: reviewerEmail || "",
          rating: Number(rating),
          comment,
          createdAt: new Date(),
        };

        product.reviews = product.reviews || [];
        product.reviews.push(newReview);
        await product.save();

        return res.status(201).json(product.reviews);
      } catch (error) {
        console.error("Error adding product review:", error);
        return res.status(500).json({ message: "Error adding review" });
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
            console.log(fname,lname,email,password);
            
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
        const userEmail = req.params.email;
        const product = req.body;

        if (!userEmail) {
          return res.status(400).json({ message: "Email is required" });
        }

        if (!product || !product.name) {
          return res.status(400).json({ message: "Product data is required" });
        }

        const user = await userModel.findOne({ email: userEmail });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const alreadyExists = user.wishlist.some((item) => item.name === product.name);

        if (alreadyExists) {
          return res.status(200).json({
            message: "Product already in wishlist",
            wishlist: user.wishlist
          });
        }

        const updatedUser = await userModel.findOneAndUpdate(
          { email: userEmail },
          { $push: { wishlist: product } },
          { new: true }
        );

        res.status(200).json({
          message: "Added to wishlist",
          wishlist: updatedUser.wishlist
        });
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
          console.log("data", user.wishlist)
        } catch (error) {
          console.error("Error fetching user watchlist:", error);
          res.status(500).json({ message: "Error fetching data", error });
        }
    })
    


    // Start the server
    app.listen(port, () => {
        console.log("Server Running on port " + port);
    });
