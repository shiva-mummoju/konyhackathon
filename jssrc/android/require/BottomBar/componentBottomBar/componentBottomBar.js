define(function() {
    return function(controller) {
        var componentBottomBar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "componentBottomBar",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "CopyslFbox0e4e3327a3b9642",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        componentBottomBar.setDefaultUnit(kony.flex.DP);
        var flxSuperShopping = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSuperShopping",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5.00%",
            "skin": "slFbox",
            "top": "7dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxSuperShopping.setDefaultUnit(kony.flex.DP);
        var imgProducts = new kony.ui.Image2({
            "centerY": "49.75%",
            "height": "50dp",
            "id": "imgProducts",
            "isVisible": true,
            "left": "6.00%",
            "onTouchStart": controller.AS_Image_h8731a10bb2b41c19632f7f6df05bb1b,
            "skin": "slImage",
            "src": "baseline_shopping_cart_black_18dp.png",
            "top": "561dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSuperShopping.add(imgProducts);
        var flxSuperCoupons = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSuperCoupons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5.00%",
            "skin": "slFbox",
            "top": "7dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxSuperCoupons.setDefaultUnit(kony.flex.DP);
        var imgCoupons = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50dp",
            "id": "imgCoupons",
            "isVisible": true,
            "left": "5.00%",
            "onTouchStart": controller.AS_Image_h3471b7fe0624fafa3061c902c45122d,
            "skin": "slImage",
            "src": "baseline_local_offer_black_18dp.png",
            "top": "561dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSuperCoupons.add(imgCoupons);
        var flxSuperAdd = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSuperAdd",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5.00%",
            "skin": "slFbox",
            "top": "7dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxSuperAdd.setDefaultUnit(kony.flex.DP);
        var imgAddPost = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50dp",
            "id": "imgAddPost",
            "isVisible": true,
            "left": "5.00%",
            "onTouchStart": controller.AS_Image_h4bf91b6768b44a0ba12b90d5736b2c1,
            "skin": "slImage",
            "src": "baseline_add_circle_outline_black_18dp.png",
            "top": "561dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSuperAdd.add(imgAddPost);
        var flxSuperUser = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSuperUser",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "onClick": controller.AS_FlexContainer_ce65fc45d9244fdbbd21270eda54e1dc,
            "skin": "slFbox",
            "top": "7dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxSuperUser.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50dp",
            "id": "imgUser",
            "isVisible": true,
            "left": "5.00%",
            "onTouchStart": controller.AS_Image_eba34948a2cf40b48d926ac7b8b1fb35,
            "skin": "slImage",
            "src": "baseline_assignment_ind_black_18dp.png",
            "top": "561dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSuperUser.add(imgUser);
        var flxSuperHistory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSuperHistory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "skin": "slFbox",
            "top": "7dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxSuperHistory.setDefaultUnit(kony.flex.DP);
        var imgHistory = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50dp",
            "id": "imgHistory",
            "isVisible": true,
            "left": "5.00%",
            "onTouchStart": controller.AS_Image_cbd59872ccd948fbb795c0f65524b75f,
            "skin": "slImage",
            "src": "baseline_today_black_18dp.png",
            "top": "561dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSuperHistory.add(imgHistory);
        componentBottomBar.add(flxSuperShopping, flxSuperCoupons, flxSuperAdd, flxSuperUser, flxSuperHistory);
        return componentBottomBar;
    }
})