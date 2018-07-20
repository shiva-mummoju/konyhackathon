define(function() {
    return function(controller) {
        var componentTopBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "8%",
            "id": "componentTopBar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "right": "0dp",
            "skin": "CopyslFbox0a0ec3290b3a847",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        componentTopBar.setDefaultUnit(kony.flex.DP);
        var lblFormName = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblFormName",
            "isVisible": true,
            "left": "150dp",
            "skin": "CopyslLabel0dd5ef2a4e29847",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgTopBarLeft = new kony.ui.Image2({
            "centerY": "50%",
            "height": "33dp",
            "id": "imgTopBarLeft",
            "isVisible": true,
            "left": "20dp",
            "right": "80%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "11dp",
            "width": "57dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgTopBarRight = new kony.ui.Image2({
            "centerY": "50%",
            "height": "33dp",
            "id": "imgTopBarRight",
            "isVisible": false,
            "left": "80%",
            "right": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "11dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        componentTopBar.add(lblFormName, imgTopBarLeft, imgTopBarRight);
        return componentTopBar;
    }
})