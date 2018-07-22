import AWS from "aws-sdk";
import {generateUUID} from "./helpers";

export async function addRecipe(recipe) {
  AWS.config.update({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }
  });
  const uuid = generateUUID();
  const docClient = await new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: "RecipeBox",
    Item:{
      "recipe_id": uuid,
      "recipe": recipe
    }
  };


  return await docClient.put(params).promise();
}

export async function getAllRecipes() {
  AWS.config.update({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }
  });
  const docClient = await new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: "RecipeBox"
  };

  return await docClient.scan(params).promise();
}

export async function getRecipe(recipeId) {
  AWS.config.update({
    region: "eu-west-2",
    credentials: {
      accessKeyId: process.env.REACT_APP_ACCESS_KEY,
      secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
    }
  });
  const docClient = await new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: "RecipeBox",
    KeyConditionExpression: "recipe_id = :recipe_id",
    ExpressionAttributeValues: {
      ":recipe_id": recipeId
    },
    Select: "ALL_ATTRIBUTES"
  };

  return await docClient.query(params).promise();
}