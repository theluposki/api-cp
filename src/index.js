/** Listen */
import app from "./app.js"

app.listen(process.env.PORT, console.log(`[ App ] running at http://${process.env.HOST}:${process.env.PORT}`))
