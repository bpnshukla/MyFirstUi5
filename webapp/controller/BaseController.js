sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("ZREQ.ZCREATEREQUEST.controller.BaseContoller", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
		}
	});
});