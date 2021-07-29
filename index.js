var bill=0;
var percentage=0;
var tipCal=0;
$(".btn").on("click", function () {
    var $this = $(this);
    $(".btn").not(this).removeClass("selected");
    $this.addClass("selected");
    bill = $("#tip-select").val();
    percentage = $(this).attr("id");
    tip = (percentage / 100) * bill;
});

$("#no-people").on("input", function (event) {

        var $this = $(this);
        var tip_total = tip / $this.val();
        $("#tip-amount").text("$" + tip_total.toFixed(2));
        var total = (parseInt(bill, 10) + parseInt(tip, 10)) / $this.val();
        $("#total-amount").text("$" + total.toFixed(2));


});


$(".custom-btn").on("input", function (event) {
    // if (event.key === "Enter") {
        $(this).attr("id", $(this).val());
        bill = $("#tip").val();
        tip = parseInt($(this).attr("id"), 10);
    // }
});


$("#reset").on("click", function () {
    $("input").val("");
    $(".custom-btn").val("Custom");
    $(".amount").text("$0.00");
    $(".btn").removeClass("selected");
    bill = 0;
    percentage = 0;
    tipCal = 0;
});
