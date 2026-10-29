import mongoose from "mongoose"

let cached = global.mongooseConn
if (!cached) {
    cached = global.mongooseConn = { conn: null, promise: null }
}

const connectDb = async () => {
    const mongodbUrl = process.env.MONGODB_URL

    if (!mongodbUrl) {
        throw new Error("MONGODB_URL environment variable is not set!")
    }

    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongodbUrl).then(c => c.connection)
    }

    try {
        cached.conn = await cached.promise
        return cached.conn
    } catch (error) {
        cached.promise = null
        console.error("MongoDB connection error:", error)
        throw error
    }
}

export default connectDb