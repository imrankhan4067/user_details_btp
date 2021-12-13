sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("ad.zjieapp.controller.View1", {
            onInit: function () {
                var that = this;
                $.ajax({
                    type: "GET",
                    crossDomain: true,
                    "url": "/V4/People",
                    dataType: "json",
                }).done(function (pdata) {
                    debugger;
                    // var tdata = { results: [] };
                    // for (var i = 0; i < pdata.value.length; i++) {
                    //     tdata.results.push(pdata.value[i]);
                    // }
                    // that.oModel = new JSONModel(tdata);
                    // that.getView().setModel(that.oModel);
                });

                //    this._userModel = this.getOwnerComponent().getModel("userModel");
                var that = this;
                fetch("/getUserInformation").then(res => res.json()).then(data => {
                    console.log(data);
                    //  that._userModel.setProperty("/", data );
                }).catch(err => console.log(err));



                var that = this;
                fetch("/getAppVariables")
                    .then(res => res.json())
                    .then(variables => {
                        console.log(variables);
                    }).catch(err => console.log(err));

                fetch("/getUserInfo")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    }).catch(err => console.log(err));


            }
        });
    });
