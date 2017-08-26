// global array to hold land heights
var g_LandArray = [];

// handles land array addition and display
$('#addLand').click(function(e){
    g_LandArray.push(e.target.textContent);
    $('#landArrayDisplay').text(g_LandArray.toString());
})

// clears land array display and simulates build click
$('#clear').click(function(e){
    g_LandArray = [];
    $('#landArrayDisplay').text('');
    $('#build').click();
})

// builds castles
$('#build').click(function(){
    // count stores the number of castles
    // currentElevation stores elevation direction
    var count = 0, previousHeight = null, currentElevation = null;
    g_LandArray.map( function ( currentHeight) {
        var newElevation = null;
        // add a castle at the beginning of land array
        if (!previousHeight){
            count++;
        } else {
            // updates newElevation direction
            if (currentHeight < previousHeight){
                newElevation = 'down';
            } else if (currentHeight > previousHeight) {
                newElevation = 'up';
            } else if (currentHeight === previousHeight) {
                newElevation = currentElevation;
            }
            // increases castle count if there is a change in elevation
            currentElevation && currentElevation !== newElevation ? count++ : count;
            currentElevation = newElevation;
        }
        previousHeight = currentHeight;
    })
    // removes previously added castles
    $(".appended").remove();

    // appends castle icon based on number of castles
    for (var i = 0; i < count; i++){
        $( "#castlesDisplay" ).append( "<img class='appended' src='http://www.vectorportal.com/img_novi/castle.jpg' style='height:120px;width:120px;padding:5px'></img>" )
    };
});
