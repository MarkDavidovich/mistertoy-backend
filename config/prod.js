export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://mark:mark123@cluster0.jpqhu0h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  dbName: process.env.DB_NAME || 'toyDB'
}
