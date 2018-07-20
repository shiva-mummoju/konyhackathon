function initializesegProductBox() {
    flxProductBox = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxProductBox",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox0ie8ed192b4e646"
    }, {}, {});
    flxProductBox.setDefaultUnit(kony.flex.DP);
    var imgProduct = new kony.ui.Image2({
        "centerY": "50%",
        "height": "125dp",
        "id": "imgProduct",
        "isVisible": true,
        "left": "30dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "35dp",
        "width": "110dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxProductInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "47.85%",
        "clipBounds": true,
        "height": "123dp",
        "id": "flxProductInfo",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "25dp",
        "skin": "slFbox",
        "top": "17dp",
        "width": "49.97%",
        "zIndex": 1
    }, {}, {});
    flxProductInfo.setDefaultUnit(kony.flex.DP);
    var lblProductName = new kony.ui.Label({
        "id": "lblProductName",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0g898f3c8bbb640",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblProductDescription = new kony.ui.Label({
        "id": "lblProductDescription",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0ib690b5040e648",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxProductInfo.add(lblProductName, lblProductDescription);
    flxProductBox.add(imgProduct, flxProductInfo);
}