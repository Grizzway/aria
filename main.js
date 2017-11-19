$(function () {
	$("#homeButton").click(function (event) {
    $("#homeDiv").show();
    $("#yourTracksDiv").hide();
		$("#profileDiv").hide();
		$("#headerHomeDiv").show();
    $("#headerYourTracksDiv").hide();
		$("#headerProfileDiv").hide();
	});
	$("#yourTracksButton").click(function (event) {
    $("#homeDiv").hide();
    $("#yourTracksDiv").show();
		$("#profileDiv").hide();
		$("#headerHomeDiv").hide();
    $("#headerYourTracksDiv").show();
		$("#headerProfileDiv").hide();
	});
	$("#profileButton").click(function (event) {
		$("#homeDiv").hide();
    $("#yourTracksDiv").hide();
		$("#profileDiv").show();
		$("#headerHomeDiv").hide();
    $("#headerYourTracksDiv").hide();
		$("#headerProfileDiv").show();
	});
});