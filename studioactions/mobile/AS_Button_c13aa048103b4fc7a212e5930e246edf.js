function AS_Button_c13aa048103b4fc7a212e5930e246edf(eventobject) {
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
    frmCreatePost.txtfield["text"] = "";
    frmCreatePost.imgPost["src"] = "takephoto.png";
    frmCreatePost.txtAreaDescription["text"] = "";
    frmCreatePost.txtPostTitle["text"] = "";
    frmPostHistory.show();
}