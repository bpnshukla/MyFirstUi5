/*global QUnit*/

sap.ui.define([
	"ZREQ/ZCREATEREQUEST/controller/CreateRequest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CreateRequest Controller");

	QUnit.test("I should test the CreateRequest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});