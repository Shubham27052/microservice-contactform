
# **Contactform Microservice using AWS Serverless**

A Microservice built to take customer details, using Aws Serverless offerings such as Lambda, API Gateway and DynamoDB. The microservice architecture can replicated and used anywhere where user contact and message needs to be taken.

The project has 4 main parts:
1. **Frontend**: Contact Form
2. **API Gateway**: to build an API
3. **Lambda Function**: handles application logic
4. **DynamoDB**: Database to store contact details


## **Tech Stack**

**Client:** HTML, CSS, Javascript

**Server:** API Gateway, Lambda (python), DynamoDB



![gif](https://user-images.githubusercontent.com/68993711/233837482-a4a15dc1-9851-40d5-8841-5ea815d8fa0c.gif)


## **How it works**


**Frontend**
- The frontend is made with HTML, CSS AND Javascript. 
- In script.js, the fetch api is used to make a post request API call to the api gateway.
- If the status code in the response is 200, the form filled successfully prompt pops up.
- If not then error is shown. 


**API Gateway**

- Used the AWS API Gateway to create an API that would allow the frontend to communicate with the lambda function.
- A /contact resource was created and POST method was added. This was then integrated with the lambda function

![smc](https://user-images.githubusercontent.com/68993711/233904319-3766f5cd-988a-4b2f-a85e-3d315dc31251.png)

**Lambda**
- The file lambda.py contains the code used for the function.
- The event recieved from the api is used by the event handler to extract the necessary data.
- A timestamp is used to give each item a unique key in the dynamodb table
- The aws sdk for python, boto3 i used to save the data in dynamodb using the 'put_item' function.
- The event handler returns a response witha status code, appropriate headers for CORS, and success message.

**DynamoDB**
- A DynamoDB table is created in the aws account.
- The following screenshot showns how the table looks like after data has been added by the lambda function.
![App Screenshot](https://microservice-contactform.s3.ap-south-1.amazonaws.com/ss.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBL%2B9WOfWBGIT%2BMdM51u4fAIRU2%2FhrQaWADE%2FWHtVSq0gIgd%2BGa7MKRcHaHGC1xuizcPch%2FeLyRTMZo1nqJxqlkQm0qhAMI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2MTMxMTUxNjQxNjQiDIIOpwZhHbBCTAE15CrYAnNTXw4ah1cJ%2BDAB0%2FiWkDhJOTvjZ7Sqx4OZ%2B0JDZFE5fDLBqOzT96HlVYR3uZ4NKH5aj7uhikV6CTfl6xNdo0hDABO6DDQd2dOBXRRjKOBd0ba5M5TvySH9zD7oTJ16me9suvM77u8M1nzRRrifYutd4OIah0OJ3oI%2Fhk9W8juhN7gQmxRsgepm7PX04U4oADTJO52HCAmfoEnf5yDURP2moqaZVI3NnH9o6Jd%2BK4GRZG%2FFTDMkReZwKEVuTrT9W%2BmmXkVocE76W%2FJ8yYOOoWbQMHO2DdaJEtGJMsP1M69LLl756y%2BUqPQFe3kc8C%2BfYgE1GLu60qBL3TD%2Budk3zKAycByQB4o8%2FnJG0HFqdh9KWSfCrIytAiwbBzszv2Hl4mdW6SJF%2F6gmEzbFMk8KPSRry3XmVSRDZ7LEbgjcOSJz1CDimBua4GRAK%2B64SlKEBjlBDmHqhBRBMO68k6IGOrQCdf8Jgun1sA%2FCVuPCJCVFm%2BgrbEuKK%2Bwk2DVhGR%2BbLx%2FfdCOAf37ekvwz2mb%2Bksr%2BY8AHtnaxsSpShHXAj9tf98iI2TN8ZFoq3IwUyDDF9SeDW8dX7fmFvH1Jhfhaf%2BQ1vJTHIMq2n7uE4jGTnKwq9SBtKACfvoCklW22jpl2caHgiH%2FxQkVAj0t6BDtLr7vr4uRHwoB0z4t7st48vxOUKBg%2BNy42mESNEdERKUOADS0H1MEw3Kes2AMebxG3jmJCgzGqitVTSrKGdECWGc5KoEtFLeXVg7zFCvwoRbBj9uzrNdQPDmeIlzqiUwLuYQqvd9J7WnBkeH9s62AR03NWrTmdbiSX%2BM7%2BhMHrr4LG%2BbBUk1Mnt1re96ihoE75fSAhWOhBvgkQPlZZEtmS4vZQ%2Fx4GzkI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230423T102113Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY5QEC6YCKFB3KTUE%2F20230423%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=897524fc9afc7d8b252c960083890d5dd3dbe77e83aee2d70db1c5c59c430449)






