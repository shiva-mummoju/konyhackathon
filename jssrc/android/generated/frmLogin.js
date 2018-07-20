function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxbasicLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxbasicLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxbasicLogin.setDefaultUnit(kony.flex.DP);
    var login = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "login",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "10%",
        "skin": "CopyslFbox0ec35e9f4f6ca47",
        "top": "0%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    login.setDefaultUnit(kony.flex.DP);
    var imgAmway = new kony.ui.Image2({
        "height": "63dp",
        "id": "imgAmway",
        "isVisible": true,
        "left": "25%",
        "skin": "slImage",
        "src": "amway.png",
        "top": "5%",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var txtUserName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "10%",
        "id": "txtUserName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "placeholder": "User Name....",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0h1ff00e2e4734f",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "5%",
        "width": "95%",
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
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "10%",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "10%",
        "maxTextLength": null,
        "placeholder": "Password",
        "right": "10%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0h1ff00e2e4734f",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "24dp",
        "width": "95%",
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
    var remberMe = new kony.ui.CheckBoxGroup({
        "height": "37dp",
        "id": "remberMe",
        "isVisible": true,
        "left": "49dp",
        "masterData": [
            ["cbg1", "          Remeber Me?"]
        ],
        "skin": "CopyslCheckBoxGroup0h377904d9dfc4e",
        "top": "25dp",
        "width": "67.59%",
        "zIndex": 1
    }, {
        "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnLogin = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "12%",
        "id": "btnLogin",
        "isVisible": true,
        "left": "37dp",
        "onClick": AS_Button_g56560674c8b4fe692c4ca530d45b82e,
        "skin": "CopyslButtonGlossBlue0i120976dcc3e4e",
        "text": "Login",
        "top": "5%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    login.add(imgAmway, txtUserName, txtPassword, remberMe, btnLogin);
    var flxthirdpartylogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "flxthirdpartylogin",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "10%",
        "skin": "CopyslFbox0b018b38059fc4f",
        "top": "70%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxthirdpartylogin.setDefaultUnit(kony.flex.DP);
    var imggoogle = new kony.ui.Image2({
        "height": "100%",
        "id": "imggoogle",
        "isVisible": true,
        "left": "15.00%",
        "skin": "slImage",
        "src": "google.png",
        "top": "0dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgfacebook = new kony.ui.Image2({
        "height": "100%",
        "id": "imgfacebook",
        "isVisible": true,
        "left": "7%",
        "skin": "slImage",
        "src": "facebook.png",
        "top": "1dp",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgtwiiter = new kony.ui.Image2({
        "height": "80%",
        "id": "imgtwiiter",
        "isVisible": true,
        "left": "10%",
        "skin": "slImage",
        "src": "twitter.jpg",
        "top": "10%",
        "width": "15%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxthirdpartylogin.add(imggoogle, imgfacebook, imgtwiiter);
    flxbasicLogin.add(login, flxthirdpartylogin);
    frmLogin.add(flxbasicLogin);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0ee194068540047"
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