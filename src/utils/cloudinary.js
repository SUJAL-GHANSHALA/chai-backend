import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  //check env folder
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null //agar localFilePath nhi he to return null ker do warna... file upload ker do(neeche line me)
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" //type meaning, image, raw, video etc, auto means khud hi detect ker lo
        })
        //file has been uploaded successfully, 
        console.log("file is uploaded on cloudnary", //this line is totally optional, just printing message
        response.url);
        return response //user ko poora response hi return ker diya, waise response.url bhi only return ker sakte the, aise hi bahut sare option the
    } catch(error) { //unlink, meaning delete kerna. Sync matlab, ye kaam to hona hi chahiye
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });