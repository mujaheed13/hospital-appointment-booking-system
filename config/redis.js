const redis = require("redis");

// import { createClient } from "redis";

const client = redis.createClient({
  password: "8AzJxAN5NXRzpGAZRl6udHWZk5SgRsK5",
  socket: {
    host: "redis-16430.c264.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 16430,
  },
});

client.connect();

client.on("error", (error) => {
  console.log(error.message);
});
client.on("connect", () => {
  console.log("Connected to the redis cloud");
});

module.exports = {
  client,
};
