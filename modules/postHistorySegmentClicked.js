//Type your code here


function onPostRowClicked(eventObject,sectionNumber,rowNumber){
	
	 var selectedObj = frmPostHistory.flxPosts.segPosts.selectedRowItems[0];
  var postTitle = selectedObj.lblPostTitle;
  var postProduct = selectedObj.lblPostProducts;
  var postImg = selectedObj.imgPosts;
  var shareCount = selectedObj.PostShareCount;
  
  
  frmPostSpecific.lblPostTitle.text  = postTitle;
  frmPostSpecific.lblPostInfo.text = "This is a really nice product from Amway!";
  frmPostSpecific.lblShareCount.text = shareCount;
  frmPostSpecific.lblLikeCount.text = "10";
  frmPostSpecific.lblViewCount.txt = "20";
  
  frmPostSpecific.show();

}