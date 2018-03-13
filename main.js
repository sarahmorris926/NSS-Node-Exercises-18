#!/usr/bin/env node
'use strict';
const {get} = require('http')

get('https://api.iextrading.com/1.0/stock/aapl/price', (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];
})

// method for apple stock
// GET https://api.iextrading.com/1.0/stock/aapl/price
// will return:
// 181.76

