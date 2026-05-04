# API Rate Limiting with Node.js and Express

This project demonstrates how to implement API rate limiting using Node.js and Express.js to improve API security and prevent excessive or abusive requests. It uses express-rate-limit middleware to control the number of requests allowed per IP address within a specific time window, helping to protect the API from overuse and ensuring stable performance.

## Features
- Limits number of requests per IP address  
- Protects API from abuse and overuse  
- Helps prevent basic DDoS-type attacks  
- Simple and lightweight backend setup  

## Tech Stack
- Node.js  
- Express.js  
- express-rate-limit  

## How to Run
Install dependencies using npm install, then start the server using node app.js. After running the server, you will see Server running on port 3000 in the terminal.

## How to Test
Open your browser and go to http://localhost:3000/api/users. You will see User data fetched successfully. If you refresh multiple times quickly, the API will block requests and show Too many requests from this IP, please try again later.

## How It Works
Each request is tracked based on IP address. A limit is applied within a specific time window. If the limit is exceeded, requests are temporarily blocked. After the time window resets, access is allowed again automatically.

## Purpose
This project is built for learning backend security concepts, Express middleware usage, and API protection techniques using rate limiting.

## Author
Muhammad Hamza  
LinkedIn: https://www.linkedin.com/in/mhamza-se  
LinkedIn Post: (add your post link here)
