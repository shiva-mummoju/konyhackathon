//Type your code here

function openMediaGallery()
{
	try 
	{
		
		function onselectioncallback(rawbytes)
		{
			
			//alert("in selection callback");
			//if (rawbytes == null)
			//{
			//alert("nothing selected");
		    //return;
			//}
			//alert("return status is "+returnStatus);
			//(convert the rawbytes to base64 and can be assigned 
			//to a image widget or use base64 to upload)
			var base64 = kony.convertToBase64(rawbytes);
          	currentImage = rawbytes;
            
			frmCreatePost.flextest.imgPost.base64 = base64;
            frmCreatePost.flxCreatePost.isVisible = true;
           frmCreatePost.flxinvisible.isVisible = false;
			//Assigning rawbytes directly to a image widget
			/*formid.imageid.rawdata = rawbytes;*/
		}
		var querycontext = {mimetype:"image/*"};
		returnStatus = kony.phone.openMediaGallery(onselectioncallback, querycontext);
		
	}
	catch(err)
	{
		alert("error in openMediaGallery:: "+err);
	}
	
}


function cameraData(cam){
  
  
  
  frmCreatePost.imgPost.rawBytes = cam.rawBytes;
   frmCreatePost.flxCreatePost.isVisible = true;
    frmCreatePost.flxinvisible.isVisible = false;
  
  
    currentImage = cam.rawBytes;

  //var base64 = kony.convertToBase64(rawBytes);
            
 //frmCreatePost.flextest.imgPost.rawBytes = cam;
}

