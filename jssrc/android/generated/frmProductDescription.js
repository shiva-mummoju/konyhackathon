function addWidgetsfrmProductDescription() {
    frmProductDescription.setDefaultUnit(kony.flex.DP);
    var flxProductDescription = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "80%",
        "id": "flxProductDescription",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0i98b9f6022d444",
        "zIndex": 1
    }, {}, {});
    flxProductDescription.setDefaultUnit(kony.flex.DP);
    var lblProductName = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "20%",
        "id": "lblProductName",
        "isVisible": true,
        "left": "140dp",
        "skin": "CopyslLabel0aae80a39f85642",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "23dp",
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
        "centerX": "50.00%",
        "centerY": "30%",
        "id": "lblProductDescription",
        "isVisible": true,
        "left": "140dp",
        "skin": "CopyslLabel0dad3b0602c6a43",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "103dp",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxProductGraph = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "70%",
        "clipBounds": true,
        "id": "flxProductGraph",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "zIndex": 1
    }, {}, {});
    flxProductGraph.setDefaultUnit(kony.flex.DP);
    flxProductGraph.add();
    var Label0d656be25c1d64d = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "40%",
        "id": "Label0d656be25c1d64d",
        "isVisible": true,
        "left": "28dp",
        "skin": "CopyslLabel0c7b447e8cfe243",
        "text": "Stats",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "163dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxProductDescription.add(lblProductName, lblProductDescription, flxProductGraph, Label0d656be25c1d64d);
    var componentBottomBar = new BottomBar.componentBottomBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "componentBottomBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "right": "0dp",
        "skin": "CopyslFbox0e4e3327a3b9642",
        "top": "90%",
        "zIndex": 1
    }, {}, {});
    componentBottomBar.bottom = "0dp";
    componentBottomBar.left = "0dp";
    componentBottomBar.right = "0dp";
    componentBottomBar.top = "90%";
    componentBottomBar.zIndex = 1;
    var componentTopBar = new TopBar.componentTopBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "componentTopBar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0a0ec3290b3a847",
        "top": "0dp",
        "zIndex": 1
    }, {}, {});
    componentTopBar.autogrowMode = kony.flex.AUTOGROW_NONE;
    componentTopBar.height = "10%";
    componentTopBar.left = "0dp";
    componentTopBar.top = "0dp";
    componentTopBar.zIndex = 1;
    componentTopBar.imgTopBarLeft.centerY = "50%";
    componentTopBar.imgTopBarLeft.top = "11dp";
    componentTopBar.lblFormName.centerX = "50%";
    componentTopBar.lblFormName.centerY = "50%";
    componentTopBar.lblFormName.left = "0dp";
    componentTopBar.lblFormName.right = 0;
    componentTopBar.lblFormName.text = "Product Info";
    componentTopBar.lblFormName.top = "0dp";
    frmProductDescription.add(flxProductDescription, componentBottomBar, componentTopBar);
};

function frmProductDescriptionGlobals() {
    frmProductDescription = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProductDescription,
        "enabledForIdleTimeout": false,
        "id": "frmProductDescription",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0e815f9ccbc7449"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};