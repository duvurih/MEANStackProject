# MEANStackProject
1. Angular 6
2. Angular Material - UI Material Components
3. Express - is a web application framework for Node.js
4. MongoDB - MongoDB can be setup locally or use cloud based solutions
5. Node.js - Java Script runtime engine
6. HighCharts
7. ngx-Charts
8. D3js Charts
9. Mongoose (ORM) Object Modeling Tool for Node.js
10. Axiox - Promise based HTTP client for the browser and Node.js

# MongoDB Setup
1. Start MongoDB >net start MongoDB
2. Go to MongoDB Console >mongo
3. Created Database >use mycustomers
4. Create User: >
    db.createUser({
      user:"hkindia",
      pwd:"indian12",
      roles:["readWrite","dbAdmin"]
    });
5. Create Collection >db.createCollection('financials');
6. Show Collections >show collections
7. Inser Data into Collection
    db.financials.insert(
    {
        "name": "2015",
        "color": "brown",
        "data": [65.5, 33.5, 23.9, 120.8, 105.3, 130.9, 80.3, 89.9, 83.1, 79.1, 116.4, 139.2 ]
    }
    );

    db.financials.insert(
    {
        "name": "2016",
        "color": "green",
        "data": [23.9, 65.5, 33.5, 83.1, 79.1, 80.3, 89.9, 116.4, 120.8, 105.3, 130.9, 139.2]
    }
    );

    db.financials.insert(
    {
        "name": "2016",
        "color": "green",
        "data": [23.9, 65.5, 33.5, 83.1, 79.1, 80.3, 89.9, 116.4, 120.8, 105.3, 130.9, 139.2]
    }
    );
8. Find Data from Collection
      db.financials.find();
      db.financials.find().pretty();
9. Now MongoDB is SETUP Completed
10. Download the Project and run the following command
      c:\project>npm run build
      
