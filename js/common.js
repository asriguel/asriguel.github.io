
var $columns = $('.items-list .item__content-wrapper');
$(document).ready(function () {
    if($(window).width() > 768) {
        setEqualHeight($columns);
    }

    var menuToggleBtn = $('.menu-toggle');
    menuToggleBtn.on('click', function() {
        $('#wrapper').toggleClass('toggled');
    });
});

$(window).afterresize(function() {
    if($(window).width() > 768) {
        setEqualHeight($columns);
    }
    // resetHeightColumns($('.items-list .item__content-wrapper'));

});

function resetHeight(columns) {
    columns.each( function () {
       $(this).css('height', 'auto');
    });
}

function setEqualHeight(columns)
{
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}


