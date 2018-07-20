function addWidgetsfrmPostSpecific() {
    frmPostSpecific.setDefaultUnit(kony.flex.DP);
    var componentBottomBar = new BottomBar.componentBottomBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "10%",
        "id": "componentBottomBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": 0,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "right": 0,
        "skin": "CopyslFbox0e4e3327a3b9642",
        "top": "90%",
        "zIndex": 10
    }, {}, {});
    componentBottomBar.autogrowMode = kony.flex.AUTOGROW_NONE;
    componentBottomBar.bottom = "0%";
    componentBottomBar.height = "10%";
    componentBottomBar.left = 0;
    componentBottomBar.right = 0;
    componentBottomBar.top = "90%";
    componentBottomBar.zIndex = 10;
    componentBottomBar.flxSuperAdd.onClick = AS_FlexContainer_d2be8d8ee20c4ec6bc50b4f23b9df906;
    componentBottomBar.flxSuperHistory.onClick = AS_FlexContainer_g7dff492813648fda3fe7f622100c9ea;
    componentBottomBar.flxSuperShopping.onClick = AS_FlexContainer_g349cb0c57ed4366b3f3c7c58962b59e;
    componentBottomBar.flxSuperUser.onClick = AS_FlexContainer_gcdb9f69672a4ace971dc233cf2e8572;
    var flxPostSpecific = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": "10%",
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": true,
        "id": "flxPostSpecific",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "pagingEnabled": false,
        "right": "0%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0aadd9f7c191e47",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPostSpecific.setDefaultUnit(kony.flex.DP);
    var flxPostImage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flxPostImage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "3%",
        "skin": "CopyslFbox0f9abd6e874c941",
        "top": "2%",
        "zIndex": 1
    }, {}, {});
    flxPostImage.setDefaultUnit(kony.flex.DP);
    var imgPostSpecific = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "220dp",
        "id": "imgPostSpecific",
        "isVisible": true,
        "left": "100dp",
        "skin": "CopyslImage0a633be7ecff448",
        "src": "imagedrag.png",
        "top": "45dp",
        "width": "300dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPostImage.add(imgPostSpecific);
    var flxpostInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "218dp",
        "id": "flxpostInfo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "3%",
        "skin": "CopyslFbox0a095f24a278a4e",
        "top": "44%",
        "zIndex": 1
    }, {}, {});
    flxpostInfo.setDefaultUnit(kony.flex.DP);
    var lblPostInfo = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblPostInfo",
        "isVisible": true,
        "left": "23dp",
        "maxHeight": "90%",
        "maxWidth": "90%",
        "skin": "CopyslLabel0ebd480acb80642",
        "text": "This is the product  description which is a very nice description.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "75dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblPostTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblPostTitle",
        "isVisible": true,
        "maxWidth": "90%",
        "skin": "slLabel",
        "text": "Post Title ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxHr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "flxHr",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "3%",
        "skin": "CopyslFbox0bd0f520eb08a4a",
        "top": "30%",
        "zIndex": 1
    }, {}, {});
    flxHr.setDefaultUnit(kony.flex.DP);
    flxHr.add();
    flxpostInfo.add(lblPostInfo, lblPostTitle, flxHr);
    var btnDelete = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "5%",
        "clipBounds": true,
        "height": "10%",
        "id": "btnDelete",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "3%",
        "skin": "CopyslFbox0g7059b9a5fb343",
        "top": "107%",
        "zIndex": 1
    }, {}, {});
    btnDelete.setDefaultUnit(kony.flex.DP);
    var Label0gda16b7ef92f44 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Label0gda16b7ef92f44",
        "isVisible": true,
        "skin": "CopyslLabel0eb29e52a633240",
        "text": "Delete",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    btnDelete.add(Label0gda16b7ef92f44);
    var flxPostStats = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxPostStats",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "3%",
        "skin": "CopyslFbox0cde9375ca16c47",
        "top": "85%",
        "zIndex": 1
    }, {}, {});
    flxPostStats.setDefaultUnit(kony.flex.DP);
    var flxLikeCount = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "40%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxLikeCount",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "38dp",
        "skin": "CopyslFbox0a4f1fe6d47724b",
        "top": "35dp",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    flxLikeCount.setDefaultUnit(kony.flex.DP);
    var lblLikeCount = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblLikeCount",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel0iec90249c0534a",
        "text": "100",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLikeCount.add(lblLikeCount);
    var flxShareCount = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "40%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxShareCount",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "140dp",
        "skin": "CopyslFbox0a4f1fe6d47724b",
        "top": "35dp",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    flxShareCount.setDefaultUnit(kony.flex.DP);
    var lblShareCount = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblShareCount",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0iec90249c0534a",
        "text": "100",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxShareCount.add(lblShareCount);
    var flxViewCount = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "40%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxViewCount",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "250dp",
        "skin": "CopyslFbox0a4f1fe6d47724b",
        "top": "35dp",
        "width": "16%",
        "zIndex": 1
    }, {}, {});
    flxViewCount.setDefaultUnit(kony.flex.DP);
    var lblViewCount = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblViewCount",
        "isVisible": true,
        "left": "20dp",
        "skin": "CopyslLabel0iec90249c0534a",
        "text": "100",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxViewCount.add(lblViewCount);
    var CopyLabel0f3bf6b5eb5164d = new kony.ui.Label({
        "id": "CopyLabel0f3bf6b5eb5164d",
        "isVisible": true,
        "left": "40dp",
        "skin": "CopyslLabel0d0b4ccffb8cd4d",
        "text": "Likes",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "72dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0b4bfa60b0b6a48 = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0b4bfa60b0b6a48",
        "isVisible": true,
        "skin": "CopyslLabel0b9ff0a306ba844",
        "text": "Shares",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "72dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0da17aae725b542 = new kony.ui.Label({
        "id": "CopyLabel0da17aae725b542",
        "isVisible": true,
        "left": "253dp",
        "skin": "CopyslLabel0a94c3149278042",
        "text": "Views",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "72dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxPostStats.add(flxLikeCount, flxShareCount, flxViewCount, CopyLabel0f3bf6b5eb5164d, CopyLabel0b4bfa60b0b6a48, CopyLabel0da17aae725b542);
    flxPostSpecific.add(flxPostImage, flxpostInfo, btnDelete, flxPostStats);
    frmPostSpecific.add(componentBottomBar, flxPostSpecific);
};

function frmPostSpecificGlobals() {
    frmPostSpecific = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPostSpecific,
        "enabledForIdleTimeout": false,
        "id": "frmPostSpecific",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
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