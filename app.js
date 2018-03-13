#!/usr/bin/env node
const { readFile } = require("fs");
const { get } = require("https");
const [, , ...args] = process.argv;

get(`https://api.iextrading.com/1.0/stock/${args}/quote`, res => {
  console.log("getting info...");
  res.setEncoding("utf8");
  let rawData = "";
  res.on("data", chunk => {
    rawData += chunk;
  });
  res.on("end", () => {
    try {
      let parsedData = JSON.parse(rawData);
      let high = parsedData.week52High;
      let low = parsedData.week52Low;
      console.log("avg", (high + low) / 2);
    } catch (e) {
      console.log("please put in a stock symbol");
    }
  });
});
