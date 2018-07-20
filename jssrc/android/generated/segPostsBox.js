function initializesegPostsBox() {
    flxPostTemplate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75dp",
        "id": "flxPostTemplate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0i724db48bb7545"
    }, {}, {});
    flxPostTemplate.setDefaultUnit(kony.flex.DP);
    var imgPosts = new kony.ui.Image2({
        "height": "36dp",
        "id": "imgPosts",
        "isVisible": true,
        "left": "8dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "16dp",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblPostTitle = new kony.ui.Label({
        "id": "lblPostTitle",
        "isVisible": true,
        "left": "92dp",
        "skin": "CopyslLabel0b25b4b42e33741",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "9dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPostProducts = new kony.ui.Label({
        "id": "lblPostProducts",
        "isVisible": true,
        "left": "93dp",
        "skin": "CopyslLabel0hfe17ac975424d",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "40dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var PostShareCount = new kony.ui.Label({
        "id": "PostShareCount",
        "isVisible": true,
        "left": "293dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "34dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblShare = new kony.ui.Label({
        "id": "lblShare",
        "isVisible": true,
        "left": "275dp",
        "skin": "CopyslLabel0h51c67ef7ae946",
        "text": "Shares",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "6dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxPostTemplate.add(imgPosts, lblPostTitle, lblPostProducts, PostShareCount, lblShare);
}