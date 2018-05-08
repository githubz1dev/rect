;(function ([window, undefined]) {

    window.rect = window.rect || {};

    function init() {
        addEvent(`.wrapper`);
    }

    function addEvent(selector) {
        $(selector).on('mousedown', function (event) {
            var origin = {
                offsetX: event.offsetX,
                offsetY: event.offsetY,
            }
            $(document)
                .on('mousemove', function (event) {
                    $(selector).css({
                        left: event.clientX - origin.offsetX + 'px',
                        top: event.clientY - origin.offsetY + 'px',
                    });
                })
                .on('mouseup', function (event) {
                    $(this).off('mouseup').off('mousemove');
                })
        })
    }

    rect.init = init;

})([window, undefined])