
function showNav() {
    
    var source = $("#list-template").html();
    var template = Handlebars.compile(source);

    var html = template(animals_data);

    $('.nav').html(html);
    $(document).on('click',".nav-item",showItem);

};

function showItem(event) {

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var catId = $($(this).parent().prevAll('.nav-group')[0]).data("id");
    var elemId = $(this).data("id");

    var html = template(animals_data.category[catId].animals[elemId]);

    $('.content').html(html);

    $('li').removeClass('active');

    $($('.nav-group[data-id='+catId+']').nextAll('li[data-id='+elemId+']')[0]).addClass('active');

    $('.img-thumb').on('click',showModal);

};

function showModal(event) {
    source   = $("#modal-template").html();
    var modal_template = Handlebars.compile(source);
    var html = modal_template({src: $(this).attr('src')}); 

    $('#myModal').html(html);

    $("#myModal").modal('show');

}

$( document ).ready(showNav);

$( document ).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});  
