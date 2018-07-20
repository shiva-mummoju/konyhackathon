function addWidgetsfrmPostHistory() {
    frmPostHistory.setDefaultUnit(kony.flex.DP);
    var componentBottomBar = new BottomBar.componentBottomBar({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "clipBounds": true,
        "id": "componentBottomBar",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "CopyslFbox0e4e3327a3b9642",
        "top": "90%",
        "zIndex": 100
    }, {}, {});
    componentBottomBar.bottom = 0;
    componentBottomBar.left = "0dp";
    componentBottomBar.top = "90%";
    componentBottomBar.zIndex = 100;
    componentBottomBar.flxSuperAdd.onClick = AS_FlexContainer_d915a99ae8e44f2abffe08e611e838db;
    componentBottomBar.flxSuperHistory.onClick = AS_FlexContainer_a857f340e70a4c218f25543a74e8ec10;
    componentBottomBar.flxSuperShopping.onClick = AS_FlexContainer_gfaa7e4bc8f94db7bf37f498ef6c4393;
    componentBottomBar.flxSuperUser.onClick = AS_FlexContainer_dcc43b90fcff45c198623a1853c3009f;
    var flxPosts = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "10%",
        "clipBounds": true,
        "id": "flxPosts",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPosts.setDefaultUnit(kony.flex.DP);
    var flxPlatformPallete = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "10%",
        "horizontalScrollIndicator": true,
        "id": "flxPlatformPallete",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "CopyslFSbox0hf25721cf82244",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxPlatformPallete.setDefaultUnit(kony.flex.DP);
    var btnFacebook = new kony.ui.Button({
        "height": "30dp",
        "id": "btnFacebook",
        "isVisible": true,
        "left": "13dp",
        "skin": "Copynonactiveplatform0a9ef3934072c49",
        "text": "FaceBook",
        "top": "10dp",
        "width": "87dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnTwitter = new kony.ui.Button({
        "height": "30dp",
        "id": "btnTwitter",
        "isVisible": true,
        "left": "110dp",
        "skin": "Copynonactiveplatform0ee2f714137834c",
        "text": "Twitter",
        "top": "10dp",
        "width": "87dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnPinterest = new kony.ui.Button({
        "height": "30dp",
        "id": "btnPinterest",
        "isVisible": true,
        "left": "210dp",
        "skin": "Copynonactiveplatform0ee2f714137834c",
        "text": "Pinterest",
        "top": "10dp",
        "width": "87dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnInstagramInPallete = new kony.ui.Button({
        "height": "30dp",
        "id": "btnInstagramInPallete",
        "isVisible": true,
        "left": "307dp",
        "skin": "Copynonactiveplatform0ee2f714137834c",
        "text": "Instagram",
        "top": "10dp",
        "width": "87dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPlatformPallete.add(btnFacebook, btnTwitter, btnPinterest, btnInstagramInPallete);
    var flxHorizontalLine = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "1dp",
        "id": "flxHorizontalLine",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "skin": "CopyslFbox0d2586a6ef1f243",
        "top": "0%",
        "width": "100%",
        "zIndex": 100
    }, {}, {});
    flxHorizontalLine.setDefaultUnit(kony.flex.DP);
    flxHorizontalLine.add();
    var segPosts = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "data": [{
            "PostShareCount": "2",
            "imgPosts": "amwayproduct.png",
            "lblPostProducts": "Nutrition",
            "lblPostTitle": "First Post",
            "lblShare": "shares"
        }, {
            "PostShareCount": "4",
            "imgPosts": "amwayproduct.png",
            "lblPostProducts": "Sports",
            "lblPostTitle": "Second Post",
            "lblShare": "shares"
        }, {
            "PostShareCount": "6",
            "imgPosts": "amwayproduct.png",
            "lblPostProducts": "Sports",
            "lblPostTitle": "Third Post",
            "lblShare": "shares"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "segPosts",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_afcf54d67c5d486a9d805ecd11312d25,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flxPostTemplate,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "PostShareCount": "PostShareCount",
            "flxPostTemplate": "flxPostTemplate",
            "imgPosts": "imgPosts",
            "lblPostProducts": "lblPostProducts",
            "lblPostTitle": "lblPostTitle",
            "lblShare": "lblShare"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPosts.add(flxPlatformPallete, flxHorizontalLine, segPosts);
    frmPostHistory.add(componentBottomBar, flxPosts);
};

function frmPostHistoryGlobals() {
    frmPostHistory = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPostHistory,
        "enabledForIdleTimeout": false,
        "id": "frmPostHistory",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_hf9d3a0931cb423782f6bff01a8bc7bc,
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