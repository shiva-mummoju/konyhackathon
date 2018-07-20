//Type your code here


function onPostRowClicked(eventObject,sectionNumber,rowNumber){


  
	 var selectedObj = frmPostHistory.flxPosts.segPosts.selectedRowItems[0];
  alert(JSON.stringify(selectedObj));
  var postTitle = selectedObj.lblPostTitle;
  var postProduct = selectedObj.lblPostProducts;
  var postImg = selectedObj.imgPosts;
  var shareCount = selectedObj.lblShareCount;
  var postDesc = selectedObj.txtAreaDescription;
  var likesCount = selectedObj.lblLikeCount;
  var viewCount = selectedObj.lblViewCount;
  
  frmPostSpecific.imgPostSpecific.base64 = kony.convertToBase64(postImg.rawBytes);
  frmPostSpecific.lblPostTitle.text  = postTitle;
  frmPostSpecific.lblPostInfo.text = postDesc;
  frmPostSpecific.lblShareCount.text = shareCount;
  frmPostSpecific.lblLikeCount.text = likesCount;
  frmPostSpecific.lblViewCount.txt = viewCount;
  
  frmPostSpecific.show();

}