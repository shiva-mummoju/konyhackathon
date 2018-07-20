function addWidgetsfrmUserProfile() {
    frmUserProfile.setDefaultUnit(kony.flex.DP);
    var flexImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flexImage",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "CopyslFbox0h4fd946fef664c",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexImage.setDefaultUnit(kony.flex.DP);
    var FlexContainer0d2904628d3f149 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": 130,
        "id": "FlexContainer0d2904628d3f149",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "CopyslFbox0g0b659be1d2140",
        "top": "30dp",
        "width": "34.67%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0d2904628d3f149.setDefaultUnit(kony.flex.DP);
    var userImage = new kony.ui.Image2({
        "height": "146dp",
        "id": "userImage",
        "isVisible": true,
        "left": "5dp",
        "skin": "CopyslImage0c472822be37b40",
        "src": "option3.png",
        "top": "-10dp",
        "width": "115dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0d2904628d3f149.add(userImage);
    var flxUserDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "205dp",
        "id": "flxUserDetails",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "5dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "57.33%",
        "zIndex": 1
    }, {}, {});
    flxUserDetails.setDefaultUnit(kony.flex.DP);
    var lbluserName = new kony.ui.Label({
        "id": "lbluserName",
        "isVisible": true,
        "left": "25%",
        "skin": "CopyslLabel0d95dc69c23b344",
        "text": "Amway",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "28dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblbusinessValue = new kony.ui.Label({
        "id": "lblbusinessValue",
        "isVisible": true,
        "left": "30%",
        "skin": "CopyslLabel0i70ed68da97044",
        "text": "8.22",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblbvalue = new kony.ui.Label({
        "height": "15dp",
        "id": "lblbvalue",
        "isVisible": true,
        "left": "46dp",
        "skin": "CopyslLabel0d6976791701647",
        "text": "Business Value",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblIncome = new kony.ui.Label({
        "id": "lblIncome",
        "isVisible": true,
        "left": "54dp",
        "skin": "CopyslLabel0d0849247fa6b46",
        "text": "10000",
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
    var Label0f1f8a00fd53a44 = new kony.ui.Label({
        "id": "Label0f1f8a00fd53a44",
        "isVisible": true,
        "left": "70dp",
        "skin": "CopyslLabel0g283f82ec3d642",
        "text": "Income",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxUserDetails.add(lbluserName, lblbusinessValue, lblbvalue, lblIncome, Label0f1f8a00fd53a44);
    flexImage.add(FlexContainer0d2904628d3f149, flxUserDetails);
    var segmentOtherDetails = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "imgConsumer": "imagedrag.png",
            "lblConsumerName": "Uttej",
            "lblPrice": "Rs. 200",
            "lblProductName": "Shampoo"
        }, {
            "imgConsumer": "imagedrag.png",
            "lblConsumerName": "Shiva",
            "lblPrice": "Rs. 120",
            "lblProductName": "Tooth Brush"
        }],
        "groupCells": false,
        "id": "segmentOtherDetails",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0ibb5592bc40c42",
        "rowTemplate": flxTrasactions,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "385dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainer0f6b812f1acfa41": "FlexContainer0f6b812f1acfa41",
            "flxTrasactions": "flxTrasactions",
            "imgConsumer": "imgConsumer",
            "lblConsumerName": "lblConsumerName",
            "lblPrice": "lblPrice",
            "lblProductName": "lblProductName"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGraph = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "170dp",
        "id": "flxGraph",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0d09f2022fee74c",
        "top": "212dp",
        "width": "99.95%",
        "zIndex": 1
    }, {}, {});
    flxGraph.setDefaultUnit(kony.flex.DP);
    flxGraph.add();
    var componentBottomBar = new BottomBar.componentBottomBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "componentBottomBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0e4e3327a3b9642",
        "top": "90%"
    }, {}, {});
    componentBottomBar.left = "0dp";
    componentBottomBar.top = "90%";
    componentBottomBar.flxSuperAdd.onClick = AS_FlexContainer_j5168017e4c2469d92b2441a2fa6b53f;
    componentBottomBar.flxSuperHistory.onClick = AS_FlexContainer_dd0e8df621bb43b68d4e251bad7ad9fd;
    componentBottomBar.flxSuperShopping.onClick = AS_FlexContainer_e538c3873167413089ca582803c28aba;
    componentBottomBar.flxSuperUser.onClick = AS_FlexContainer_c21fa2b3d28e4afaacaa8d1e4abf86b9;
    frmUserProfile.add(flexImage, segmentOtherDetails, flxGraph, componentBottomBar);
};

function frmUserProfileGlobals() {
    frmUserProfile = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUserProfile,
        "enabledForIdleTimeout": false,
        "id": "frmUserProfile",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0cf95d0cf2e2544"
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