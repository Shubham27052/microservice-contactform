import json
import boto3
import time

def lambda_handler(event, context):
    body = json.loads(event["body"])
    name = body["name"]
    email=body["email"]
    message=body["message"]
    timestamp=str(int(time.time()))
    
    dynamodb=boto3.resource("dynamodb")
    table=dynamodb.Table("contact-form")
    
    table.put_item(
        Item={
            "number": timestamp,
            "Name":name,
            "Email":email,
            "Message":message
            
        })
   
    return {
    "statusCode": 200,
    "headers": {
        "Content-Type": "application/json"
    },
    "body": json.dumps({
        "message":"success"
    })
    }

