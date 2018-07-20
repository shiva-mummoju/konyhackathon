function addWidgetsfrmProducts() {
    frmProducts.setDefaultUnit(kony.flex.DP);
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
    componentBottomBar.flxSuperAdd.onClick = AS_FlexContainer_a832810e43e74e3d8e03558e5f584875;
    componentBottomBar.flxSuperHistory.onClick = AS_FlexContainer_i3d7b6d1a784438b8354de07a92d59b2;
    componentBottomBar.flxSuperShopping.onClick = AS_FlexContainer_bb87efd77e3544b997f105a09db27c6a;
    componentBottomBar.flxSuperUser.onClick = AS_FlexContainer_hc85a4d735e84e2d98c7120a660a3728;
    var segProductList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgProduct": "home1.jpg",
            "lblProductDescription": "Softens fabric during wash",
            "lblProductName": "Fabric Softner"
        }, {
            "imgProduct": "home2.jpg",
            "lblProductDescription": "Cleans Cloths",
            "lblProductName": "Detergent"
        }, {
            "imgProduct": "home3.jpg",
            "lblProductDescription": "Description",
            "lblProductName": "Shampoo"
        }],
        "groupCells": false,
        "height": "491dp",
        "id": "segProductList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_j8c7bd35a68446a4a577ea4c4f6b87fd,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0b88a5d9b306a41",
        "rowTemplate": flxProductBox,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
        "separatorColor": "b8b6b803",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "62dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxProductBox": "flxProductBox",
            "flxProductInfo": "flxProductInfo",
            "imgProduct": "imgProduct",
            "lblProductDescription": "lblProductDescription",
            "lblProductName": "lblProductName"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 13, 0, 0],
        "paddingInPixel": false
    }, {});
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
    componentTopBar.lblFormName.text = "Products";
    frmProducts.add(componentBottomBar, segProductList, componentTopBar);
};

function frmProductsGlobals() {
    frmProducts = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmProducts,
        "enabledForIdleTimeout": false,
        "id": "frmProducts",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0a71ac840507340"
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