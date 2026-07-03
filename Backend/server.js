require("dotenv").config();

const app = require("./src/app")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// app.listen(3000,()=>{

//    console.log("server is running on port 3000");

// })

  

const connectDB = require("./src/db/db");

  

connectDB();