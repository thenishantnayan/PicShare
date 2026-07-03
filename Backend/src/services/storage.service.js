// storage service k liy alag file because its not sure what we will use imagekit, aws s3 or claudinary

  

const {ImageKit} = require("@imagekit/nodejs")

  

const imagekit = new ImageKit({

  privateKey : process.env.IMAGEKIT_PRIVATE_KEY,

})

  

async function uploadFile(buffer){

  console.log(buffer);

  const result = await imagekit.files.upload({

  file: buffer.toString("base64"),

  fileName: "NN image.jpg"

   })

  return result;

}

  

module.exports = uploadFile;