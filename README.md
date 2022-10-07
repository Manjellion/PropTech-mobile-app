# Rental Sky

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

## Designs 

### Home Screen
![image](https://user-images.githubusercontent.com/77361838/191483576-4acaa0c7-3990-4c72-8096-48f932b32670.png)

### Saved/ Wishlist Screen
![image](https://user-images.githubusercontent.com/77361838/191483844-3f433303-d6af-43cb-9934-2e401f7f411a.png)

### Message Screen
![image](https://user-images.githubusercontent.com/77361838/191484375-b203dad8-ac20-4823-ae08-4017feb44d85.png)

### Profile Screen
![image](https://user-images.githubusercontent.com/77361838/191484473-dbc58ca2-dad5-4b7f-82f1-ed55ab5ad4ee.png)
