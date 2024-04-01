export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://mark:mark123@cluster0.cm2yvoi.mongodb.net/?retryWrites=true&w=majority&appName=cluster0',
  dbName: process.env.DB_NAME || 'toyDB'
}
