
//resize height on chagnes
$( window ).resize(function() {
    $('.instaWrapper').css('height', $('.instaWrapper').width());
});

//main instagram method
function instagram(obj, tag, row, col) {
    var toAdd = '';
    var counter = 0;

    //set up the divs and images
    for (var i = 0; i < row; i++) {
        toAdd = toAdd + '<div class=\"instarow\">';

        for (var j = 0; j < col; j++) {
            toAdd = toAdd + '<div id=\"instaWrapper' + counter +'\"' +  'class="instaWrapper" > <div class="instaOverlay"><div id="instaText' + counter + '" class="instaTextClass"></div></div></div>';
            counter = counter + 1;
        }
        toAdd = toAdd + '</div>';
    }
    obj.append(toAdd);
    
    //adjust width and height
    $('.instaWrapper').css('width', (100 / col) + '%');
    $('.instaWrapper').css('height', $('.instaWrapper').width());

    //make api call
    getPictures(row * col, tag);
}

//api call with number of pictures and the tag to load
function getPictures(num, tag) {

    $.ajax({
        url: "https://agile-taiga-1109.herokuapp.com/getData/" + tag,
        dataType: 'jsonp',
        type: 'GET',
        success: function(result){
            var jQueryData = jQuery.parseJSON(result.data);
            setData(jQueryData.data, num);
        },
        error: function(data, num) {
            console.log(data);
        }
    });
} 

//update web page with pictures
function setData(data, num) {
    for (i=0; i < num && i < data.length; i++) {                         
        $('#instaWrapper'+i).css("background","url("+data[i].images.low_resolution.url+")");
        $('#instaWrapper'+i).css("background-size","cover");
        var link = data[i].link;
        $('#instaWrapper' + i).attr("href", link);
        $('#instaWrapper' + i).click(function() {
            window.location.href = $(this).attr("href");
        });
        var caption = data[i].caption.text;
        $('#instaText'+i).text(caption);
    }
    //for now, upper bounded by number of pics returned from api
    for (j=i; j < num; j++) {
        console.log($('#instaWrapper' + j));
        $('#instaWrapper'+j).css("display","none");
        console.log($('#instaWrapper' + j));
    }                         

}