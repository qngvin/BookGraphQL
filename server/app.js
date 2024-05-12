const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://qngvin:Vinhfpt11602@tutorialgraphql.i98j0wv.mongodb.net/",
      {}
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

// Start Apollo server and connect to MongoDB
async function startServer() {
  try {
    await connectDB();
    await startApolloServer();
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
