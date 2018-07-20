function initializesegTransactions() {
    flxTrasactions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxTrasactions",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0e39b4c3bb9924a"
    }, {}, {});
    flxTrasactions.setDefaultUnit(kony.flex.DP);
    var lblConsumerName = new kony.ui.Label({
        "id": "lblConsumerName",
        "isVisible": true,
        "left": "165dp",
        "skin": "CopyslLabel0be3e299059484e",
        "text": "Consumer Name",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblProductName = new kony.ui.Label({
        "id": "lblProductName",
        "isVisible": true,
        "left": "170dp",
        "skin": "CopyslLabel0d444b253d47742",
        "text": "product ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "53dp",
        "width": "26%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPrice = new kony.ui.Label({
        "id": "lblPrice",
        "isVisible": true,
        "left": "275dp",
        "skin": "CopyslLabel0c217215744d444",
        "text": "price",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "53dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer0f6b812f1acfa41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90dp",
        "id": "FlexContainer0f6b812f1acfa41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "skin": "CopyslFbox0j7a5e0dfc1ba45",
        "top": "10dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0f6b812f1acfa41.setDefaultUnit(kony.flex.DP);
    var imgConsumer = new kony.ui.Image2({
        "height": "85dp",
        "id": "imgConsumer",
        "isVisible": true,
        "left": "5dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "85dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0f6b812f1acfa41.add(imgConsumer);
    flxTrasactions.add(lblConsumerName, lblProductName, lblPrice, FlexContainer0f6b812f1acfa41);
}