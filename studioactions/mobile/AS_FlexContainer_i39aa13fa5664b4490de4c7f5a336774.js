function AS_FlexContainer_i39aa13fa5664b4490de4c7f5a336774(eventobject) {
    // alert("function invoked")
    var dummy = [];
    productData.forEach((element) => {
        if (element.Category == "nutrition") {
            dummy.push(element);
        }
    })
    frmProducts.segProductList.setData(dummy);
    frmProducts.show();
}