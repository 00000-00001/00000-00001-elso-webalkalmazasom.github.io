let imagesData = [
    { photo: 'images/mountains.jpg',
    title: 'Mountains',
    description: "On a mountain, weather and the organisms that live there rapidly change as elevation increases. As temperatures get colder, tree species change, and then become scarcer before disappearing entirely." }, 
    { photo: 'images/sea.jpg',
    title: 'Sea',
    description: "The sea, connected as the world ocean or simply the ocean, is the body of salty water that covers approximately 71 percent of the Earth's surface." }, 
    { photo: 'images/desert.webp',
    title: 'Desert',
    description: "A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life." }, 
    { photo: 'images/monolith.jpg',
    title: 'Monolith',
    description: "A monolith is a geological feature consisting of a single massive stone or rock, such as some mountains. Erosion usually exposes the geological formations, which are often made of very hard and solid igneous or metamorphic rock." }, 
    { photo: 'images/lavenders.webp',
    title: 'Lavandula',
    description: "Lavandula (common name lavender) is a genus of 47 known species of flowering plants in the mint family, Lamiaceae." }, 
    { photo: 'images/waterfall.jpg',
    title: 'Waterfall',
    description: "A waterfall is an area where water flows over a vertical drop or a series of steep drops in the course of a stream or river." }
    ];

imagesData.forEach((item, index) => {
    $('.thumbnails').append(
        `<div class="thumbnail-photo" data-number="${index}" id="thumb-${index}" style="background-image: url(`+item.photo+`);"><div class="title">`+item.title+`</div></div>`
    );
    $('.thumbnail-photo').click((event) => {
        let indexClicked = $(event.target).attr('data-number');
        let numberIndex = parseInt(indexClicked);
    });
});

let currentPhoto = 0;

let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-text').text(imagesData[currentPhoto].description);
    $(`#thumb-${currentPhoto}`).addClass('thumb-selected');
    tempIndex = currentPhoto;
}

loadPhoto(currentPhoto);

$('#arrow-right').click(() => {
    $(`#thumb-${currentPhoto}`).removeClass('thumb-selected');
    if (currentPhoto < imagesData.length-1) {
        currentPhoto++; 
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$('#arrow-left').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--; 
    } else {
        currentPhoto = imagesData.length-1;
    }
    loadPhoto(currentPhoto);
})

$('.thumbnail-photo').click((event) => {
    indexClicked = $(event.target).attr('data-number');
    numberIndex = parseInt(indexClicked);    
    $(`#thumb-${tempIndex}`).removeClass('thumb-selected');
    loadPhoto(numberIndex);
});