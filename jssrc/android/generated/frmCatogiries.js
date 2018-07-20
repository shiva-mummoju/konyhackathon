function addWidgetsfrmCatogiries() {
    frmCatogiries.setDefaultUnit(kony.flex.DP);
    var componentBottomBar = new BottomBar.componentBottomBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "id": "componentBottomBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0e4e3327a3b9642",
        "top": "90%",
        "zIndex": 1
    }, {}, {});
    componentBottomBar.bottom = "0%";
    componentBottomBar.left = "0dp";
    componentBottomBar.top = "90%";
    componentBottomBar.zIndex = 1;
    componentBottomBar.flxSuperAdd.onClick = AS_FlexContainer_g4f628dc403a462c9dcdef6fc22d1bc7;
    componentBottomBar.flxSuperHistory.onClick = AS_FlexContainer_i40111036398447296d24132097bca09;
    componentBottomBar.flxSuperShopping.onClick = AS_FlexContainer_a975978fa2394a428873d851636473a0;
    componentBottomBar.flxSuperUser.onClick = AS_FlexContainer_b2561a2977a74832baa94222353dc3fc;
    var flexWhole = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65.16%",
        "id": "flexWhole",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0ida28019b98c48",
        "top": "25%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexWhole.setDefaultUnit(kony.flex.DP);
    var flexHorixontal1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "flexHorixontal1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "55%",
        "skin": "CopyslFbox0ebc0694d963341",
        "top": "3%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flexHorixontal1.setDefaultUnit(kony.flex.DP);
    var imgHome = new kony.ui.Image2({
        "height": "100%",
        "id": "imgHome",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "home.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHorixontal1.add(imgHome);
    var flexHorizontal3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flexHorizontal3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "CopyslFbox0g45e38d5b66e43",
        "top": "3%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flexHorizontal3.setDefaultUnit(kony.flex.DP);
    var imgNutrition = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgNutrition",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "nutrtion.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHorizontal3.add(imgNutrition);
    var flexHorizontal4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.08%",
        "id": "flexHorizontal4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "55%",
        "skin": "CopyslFbox0he96c3b1cad94f",
        "top": "45%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flexHorizontal4.setDefaultUnit(kony.flex.DP);
    var imgCosmetics = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgCosmetics",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "lipstick.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHorizontal4.add(imgCosmetics);
    var flexHorizontal2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.00%",
        "id": "flexHorizontal2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "CopyslFbox0hbebcae335fd48",
        "top": "45%",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    flexHorizontal2.setDefaultUnit(kony.flex.DP);
    var imgSports = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgSports",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "fitness.png",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexHorizontal2.add(imgSports);
    flexWhole.add(flexHorixontal1, flexHorizontal3, flexHorizontal4, flexHorizontal2);
    var imgAmway = new kony.ui.Image2({
        "height": "63dp",
        "id": "imgAmway",
        "isVisible": true,
        "left": "25%",
        "skin": "slImage",
        "src": "amway.png",
        "top": "7%",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmCatogiries.add(componentBottomBar, flexWhole, imgAmway);
};

function frmCatogiriesGlobals() {
    frmCatogiries = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCatogiries,
        "enabledForIdleTimeout": false,
        "id": "frmCatogiries",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0d48fad8f38d34b"
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};