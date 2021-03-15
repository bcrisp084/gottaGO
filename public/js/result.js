$(document).ready(() => {
    const refineBtn = $("#refineBtn");

    refineBtn.on("click", (e) => {
        // e.preventDefault();
        const zipCode = $("#zipInput").val();
        if (zipCode.length !== 5) {
            $("#inputError").empty();
            $("#inputError").text("Zip code must be 5 numbers, please try again");
            $("#zipInput").val("");
        } else {
            console.log("entry is valid")
            $("#inputError").empty();
            $("#zipInput").val("");
            window.location.replace(`/results?zipCode=${zipCode}`);
        }
    })
});



