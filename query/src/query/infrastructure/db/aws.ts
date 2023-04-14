/*
//import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {
    //await connect(DB_URI)
    console.log('Estamos ready?')
}

export default dbInit*/
/*
//import AWS from '@aws-sdk/client-dynamodb'

import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";

import "dotenv/config";


const client = new DynamoDBClient({ region: "REGION" });


const command = new BatchExecuteStatementCommand(params);



const client = new DynamoDBClient({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || undefined,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || undefined,
 });

AWS.config.update({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const db = new AWS.DynamoDB.DocumentClient()


export default db
*/
import "dotenv/config";

import AWS from 'aws-sdk'
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION||'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID||'',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY||''
      }
})
export default AWS