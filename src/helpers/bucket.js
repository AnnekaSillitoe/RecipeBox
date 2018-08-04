import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-west-2",
  credentials: {
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
  }
});

let s3 = new AWS.S3();

export async function addImage(image, id) {
  const params = {
    Key: id,
    Body: image,
    Bucket: process.env.REACT_APP_S3_BUCKET,
    ACL: 'public-read'
  };

  return await s3.upload(params).promise();
}
