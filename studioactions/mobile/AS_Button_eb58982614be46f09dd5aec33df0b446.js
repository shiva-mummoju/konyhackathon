function AS_Button_eb58982614be46f09dd5aec33df0b446(eventobject) {
    // data = JSON.parse(kony.store.getItem("postData1"));
    if (!data) {
        data = [];
    }
    var onePost = {
        "imgPosts": {
            "rawBytes": currentImage
        },
        "lblPostTitle": frmCreatePost.txtPostTitle.text,
        "lblPostProducts": frmCreatePost.txtfield.text,
        "lblShareCount": String(Math.floor(Math.random() * 100)),
        "txtAreaDescription": String(frmCreatePost.txtAreaDescription.text),
        "lblLikeCount": String(Math.floor(Math.random() * 100)),
        "lblViewCount": String(Math.floor(Math.random() * 100)),
        "lblShare": "Shares"
    };
    data.push(onePost);
    //kony.store.setItem("postData1" , JSON.stringify(data));
    // alert(JSON.parse(kony.store.getItem("postData1")));
}