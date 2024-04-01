export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://mark:<password>@cluster0.cm2yvoi.mongodb.net/',
  dbName: process.env.DB_NAME || 'toyDB'
}
