# Rental Sky

## Get Started 

To get started download the code and open it on your favourite IDE
<br>
Open up terminal which has the directory of the code in <strong>my-app</strong>
<br>
Before your begin the application you need to install all the dependencies, input in terminal <code>npm i</code><br>
Use code <code>expo start</code> or <code>npm start</code> to start the application

You will need to download Expo dependencies to run the native of the application and will also require either andriod studio if on windows or xcode for macOS

## Introduction
Final year of university project with both practical and theoretical thesis on mobile cloud application computing building a property mobile application using real time database and serverless backend services from AWS, Google Maps API and many more. 

## Aims and Objectives
<ul>
  <li>Develop a serverless mobile application using AWS and real time database</li>
  <li>Do analysis and run unit tests using AWS services to record primary data on the mobile application (Traffic efficency etc.)</li>
  <li>Compare primary cloud data to primary/secondary dedicated server servers to record cons and pros on:
    <ul>
      <li>Costs</li>
      <li>Scalability</li>
      <li>Reliability</li>
      <li>Efficiency</li>
      <li>Elasticity</li>
    </ul>
</ul>

## Creating

### Frontend (Client)
<ul>
  <li>React native project(React native Expo)</li>
  <li>React Navigation</li>
  <li>JavaScript</li>
  <li>React Vector Icons</li>
</ul>

### Backend (Cloud Server)
Main service for our backend we are using is a service in AWS called AWS Amplify, this is a mobile application tool that allows you to host and build your mobile application more easily with it access and connections to many of the other tools mentioned below:
<ul>
  <li>Lambda Function(Serverless Code)</li>
  <li>AppSync(GraphQL) API</li>
  <li>DynamoDB (NoSQL Database)</li>
  <li>S3 Bucket (Standard), (Storage)</li>
  <li>Cognito (Authentication & User management)</li>
</ul>

Other services such as Amazon SNS services will be used for the messaging sequence allowing a mobile push notification feature and connect with the other AWS services such as lambda function.

### Other Tools
These other tools consits of other cloud services that we will be using for testing, getting geographic information and many more;
<ul>
  <li>React Native Maps</li>
  <li>Google Maps API</li>
  <li>AWS (EC2, Route53, Device Farm)
</ul>

All these cloud computing services are on a pay as you go pricing but do have a free tier enabled for us to pratice demos or use it to gather data on the minimum requirement allowing the project to not be affected by costing, however we will be using secondary data and projections/ preidictions on the scale of the pricings.

### Initialising Project

To get started with developing our application we will need to install the React Native Expo CLI in order to have our application builder and be able to initialise the project. More about it in this <a href="https://docs.expo.dev/get-started/installation/">Link</a>

Using the command <code>expo init</code> choose a template etc, template for typescript or just blank, and begin to install our dependencies and libraries. 

## Design (AdobeXD)

### Home Design 
![image](https://user-images.githubusercontent.com/77361838/197478872-4b754a7f-9587-47a0-976f-ebaaddb405c1.png)

### Save Screen Design
![image](https://user-images.githubusercontent.com/77361838/197478995-e4226bfd-1b95-4636-b79e-028b0d6129e0.png)

### Property Information Screen 
![image](https://user-images.githubusercontent.com/77361838/197479161-b3d95c93-fc0e-4d99-8462-45f2f6b5ec08.png)

### Messaging Screen
![image](https://user-images.githubusercontent.com/77361838/197479256-c578ee16-06ac-434f-b73a-b86736533dcb.png)

### Profile Screen
![image](https://user-images.githubusercontent.com/77361838/197479332-5df492d4-9059-4e1f-a4b5-9ee529453cee.png)

## Building the Home Screen

Through Amplify we can create an API using the amplify cli to connect to AppSync so we have access to DynamoDB database and storing the property information to the database when the user uses a post request to our GraphQL server. Furthermore we will use GraphQL queries to list the posts into our home screen so users can view the properties listed by other users and can click on to be direct to an information screen on the selected property. Getting the correct information from the database to display in the info screen is done by requesting based on the ID of the initial press of the property in the home screen to be transferred into the info screen requesting the correct metadata from the database in dyanamoDB through GraphQL.

![image](https://user-images.githubusercontent.com/77361838/210117667-3d775cbf-3055-49b8-8e8c-4ec1a33e1c0a.png)

## Building the Wishlist Screen

Initially in the Home Screen, for each component rendered with the posts from GraphQL there is a heart vector icon rendered as well, using react navigation
library we can transfer the data into the on going screen allowing us to transfer the data accross the application on render. With the passing of information we will request the ID again like in the Home screen so the selected property information can be saved through using the create query in our GraphQL model and adding it to our database. 

Using Grapqh Mutations auto generated by amplify we can use it to both create the item and store inside the save which will work on request of the ID of the property pressed, the API will get the item using the ID from our DynamoDB table in post table and upload that data into the saved dynamoDB table. Same way we will use the delete save mutation inside graphql to remove selected item by the user to remove from the DynamoDB table for saved item. 

![image](https://user-images.githubusercontent.com/77361838/210117869-75b8e79a-8446-4b29-9d71-1fc8952c1d86.png)

## Building the Messaging Screen 

The messaging screen is for users who are looking to purchase a property to get direct contact with the seller of the property, this can be several entities going from a real estate agent or just a landlord. The messaging screen is ultimately designed and developed to make users feel more connected with the seller of the house to get more information about the house, the more informed the client or user is the more confident they are in purchasing the house.

Using Amplify's built in messaging app service we can send targeted messages to your defined user segments or even trigger contextual messages based on user behavior. Once you are up and running with In-App Messaging, you’ll be able to create messages that look native to your application and deliver them to your users all without additional code changes.

The different types of messages that can be shown to users are:

<ul>
  <li>Top Banner – a message that appears as a banner at the top of the page.</li>
  <li>Bottom Banner – a message that appears as a banner at the bottom of the page.</li>
  <li>Middle Banner – a message that appears as a banner in the middle of the page.</li>
  <li>Full Screen – a message that covers the entire screen.</li>
  <li>Modal – a message that appears in a window in front of the page.</li>
  <li>Carousel – a horizontally scrollable layout of up to five unique messages.</li>
</ul>

### How it works 

Unlike traditional push notifications, in-app messages are synced to your user’s device locally so that when an analytics event triggers them, they can be displayed instantly. An added benefit to in-app messages being locally stored is that, once synced, in-app messages can work even in offline use cases.

![image](https://user-images.githubusercontent.com/77361838/211037373-42a764bd-de16-4ae0-8796-ff24eb55e8c3.png)

### Messaging Chatrooms

Using graphql we can set up a relational table between users and its messages within a chatroom data mode;, each entity mentioned is a table within the database designed and will be connected with a one to many relationship to request and send data of messages between connected users within the application. 
