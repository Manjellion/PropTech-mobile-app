// get the aws sdk so we can use and connect with dynamoDB
var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  let date = new Date()

  // requesting access to the subjet of IAM to get metadata, if this is true then the statement will run
  if (event.request.userAttributes.sub) {
    // an object that hold the users meta data such usernmae id and email
    let params = {
      Item: {
        'id': {S: event.request.usereAttributes.sub},
        '__typename': {S: 'User'},
        'username': {S: event.userName},
        'email': {S: event.request.userAttributes.email},
        'createdAt': {S: date.toISOString()},
        'updatedAt': {S: date.toISOString()},
      },
      // The table name will be coming from a enviroment variable set inside our lambda function
      TableName: process.env.USERTABLE
    }
    // We will then use try statement and call dynamoDB function call put item to pass in the params metadata and logging out whether the operation was successfull
    try {
      await ddb.putItem(params).promise()
      console.log("Success")
    } catch(err) {
      console.log("Error:", err);
    }

    // When operation is done we will end the operation to continue to cognito
    context.done(null, event)
  } else {
    console.log("Error: Nothing was written to DynamoDB")
    context.done(null, event)
  }
}
