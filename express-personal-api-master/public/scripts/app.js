console.log("Sanity Check: JS is working!");


const handleResponse = (json) => {
    let wishData = json;
    for (var i =0 ;  i < wishData.length; i++) {
    let item = wishData[i].item;
    let price = wishData[i].price;
    let URL = wishData[i].websiteLink;
    let description = wishData[i].description;
    $('.wishItems').append(`<div class="text-center"> <strong><p class="item"> ${item}: </strong> ${description} -  <span class="price"> $${price} </span> </p> <div>`)
    };
    }


   const handleError = (xhr, status, errorThrown) => console.log('uh oh');

$(document).ready(function(){

    $.ajax({
    method: 'GET',
    url: '/api/wish',
    success: handleResponse,
    error: handleError
});

});
