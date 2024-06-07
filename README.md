# Get Open Positions Titles
This app is a simple express server based application which fetch all the open positions listed on "https://www.actian.com/company/careers/" page and display the html response with the titles of those positions.

# Requirements:
* Node version:
    - v18.14.2

# Major funtionality
We are parsing an html response (page) on the server using the "cheerio" npm package.

# How to run locally

* git clone the repo
* install the node version (>= 18.14)
* open terminal and run cmd
```
npm run install

then 

npm start
```

* open a new tab in the browser and check http://localhost:4000/getOpenOpsitions?department=Engineering