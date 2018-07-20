function addWidgetsfrmCreatePost() {
    frmCreatePost.setDefaultUnit(kony.flex.DP);
    var flxCreatePost = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxCreatePost",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ad9cd4c3eb3346",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCreatePost.setDefaultUnit(kony.flex.DP);
    var flextest = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "id": "flextest",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "onClick": AS_FlexContainer_b2127423d04c4060900dfed1d7226078,
        "skin": "CopyslFbox0fda3651f433445",
        "top": "5%",
        "width": "50%",
        "zIndex": 1
    }, {}, {});
    flextest.setDefaultUnit(kony.flex.DP);
    var imgPost = new kony.ui.Image2({
        "id": "imgPost",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "takephoto.png",
        "top": 20,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flextest.add(imgPost);
    var txtfield = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtfield",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "47dp",
        "placeholder": "HashTags",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0ec01e96e7a4f44",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "55%",
        "width": "280dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnOffers = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnOffers",
        "isVisible": true,
        "left": "53dp",
        "skin": "CopyslButtonGlossBlue0b7b2bcabc2a443",
        "text": "Offers",
        "top": "65%",
        "width": "200dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnPost = new kony.ui.Button({
        "height": "50dp",
        "id": "btnPost",
        "isVisible": true,
        "left": "46dp",
        "onClick": AS_Button_d8157c6d4fd6498db482bb702166e627,
        "text": "Post",
        "top": "122dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtAreaDescription = new kony.ui.TextArea2({
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "id": "txtAreaDescription",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "left": "43dp",
        "numberOfVisibleLines": 3,
        "placeholder": "Description",
        "skin": "CopyslTextArea0dae01ca848c744",
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "top": "30%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [2, 2, 2, 2],
        "paddingInPixel": false
    }, {});
    flxCreatePost.add(flextest, txtfield, btnOffers, btnPost, txtAreaDescription);
    var flxinvisible = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "220dp",
        "id": "flxinvisible",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "57dp",
        "skin": "CopyslFbox0e418b7e2cf9549",
        "top": "192dp",
        "width": "75.00%",
        "zIndex": 1
    }, {}, {});
    flxinvisible.setDefaultUnit(kony.flex.DP);
    var galleryBtn = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "65%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "galleryBtn",
        "isVisible": true,
        "left": "20dp",
        "onClick": AS_Button_f0cc09e6d85b47a1aea3c8ba97e7bcf6,
        "skin": "CopyslButtonGlossBlue0bfc223e220614c",
        "text": "Gallery",
        "top": "110dp",
        "width": "180dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var camera = new kony.ui.Camera({
        "centerX": "50%",
        "centerY": "35%",
        "height": "50dp",
        "id": "camera",
        "isVisible": true,
        "left": "20dp",
        "onCapture": AS_Camera_h3ebd75b067645ca9b3c11097c876729,
        "skin": "CopyslCamera0b8292c52f05049",
        "text": "Camera",
        "top": "50dp",
        "width": "180dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "enablePhotoCropFeature": false
    });
    flxinvisible.add(galleryBtn, camera);
    var flxSocialMedia = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "52%",
        "centerY": "50%",
        "clipBounds": false,
        "height": "280dp",
        "id": "flxSocialMedia",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "27dp",
        "skin": "CopyslFbox0f891d6e08fb34a",
        "top": "214dp",
        "width": "79.63%",
        "zIndex": 1
    }, {}, {});
    flxSocialMedia.setDefaultUnit(kony.flex.DP);
    var CheckBoxG = new kony.ui.CheckBoxGroup({
        "centerX": "50%",
        "centerY": 100,
        "height": "33.33%",
        "id": "CheckBoxG",
        "isVisible": true,
        "left": "77dp",
        "masterData": [
            ["cbg1", "Facebook"],
            ["cbg2", "Twitter"],
            ["cbg3", "Pinterest"]
        ],
        "skin": "slCheckBoxGroup",
        "top": "53dp",
        "width": "51.16%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnOk = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "70%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnOk",
        "isVisible": true,
        "left": "83dp",
        "skin": "CopyslButtonGlossBlue0c6faebf9d19447",
        "text": "Ok",
        "top": "170dp",
        "width": "107dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSocialMedia.add(CheckBoxG, btnOk);
    var componentBottomBar = new BottomBar.componentBottomBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
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
    componentBottomBar.left = "0dp";
    componentBottomBar.top = "90%";
    componentBottomBar.zIndex = 1;
    componentBottomBar.flxSuperAdd.onClick = AS_FlexContainer_c01e7a2a5dda498bb8dc57741e171c30;
    componentBottomBar.flxSuperHistory.onClick = AS_FlexContainer_e730c14fbb624e1d9c3ada2c421b9fff;
    componentBottomBar.flxSuperShopping.onClick = AS_FlexContainer_g49912b180624c629b0f8f7744f81c79;
    componentBottomBar.flxSuperUser.onClick = AS_FlexContainer_ab30c87cf2b241fcae823a3936703d50;
    frmCreatePost.add(flxCreatePost, flxinvisible, flxSocialMedia, componentBottomBar);
};

function frmCreatePostGlobals() {
    frmCreatePost = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCreatePost,
        "enabledForIdleTimeout": false,
        "id": "frmCreatePost",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0e3bc1368b07c43"
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