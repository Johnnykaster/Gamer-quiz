$(".submit").click(function() {
    var finalScore = Number($('input[name="fortniteAnswer"]:checked').val()) + Number($('input[name="skillAnswer"]:checked').val()) + Number($('input[name="timeAnswer"]:checked').val())
    console.log(finalScore);
    $("body").append("<p>")
});