require('dotenv').config()
const app = require('express')(),
    PORT = process.env.PORT || 5000;




app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
