$( document ).ready( function(){
    $('.icon').on('click', function(){
        $(this).toggleClass('active');
    });
    $(".control").click(function() {
        $(".lista").toggleClass("menu-abrir");
    });
    /*$( ".menu .enlace" ).on("click", function( evt ){
        $( "#control-menu" ).prop( "checked", false);
    });*/

	$( ".formulario" )
        .find( "input[type=text], input[type=tel], input[type=tel]" )
        .on( "keypress", function( evt ) {
            var $c = $(evt.currentTarget);
            var caracter, anterior, futuro, patron;
            var chc = evt.charCode;
            if ( chc > 0 ) {
                caracter = String.fromCharCode( chc );
                anterior = $c.val();
                patron = new RegExp( $c.data("restriccion") );
                futuro = anterior + caracter;
                if ( patron.test( futuro ) != true ) {
                    evt.preventDefault();
                }
            }
        });

    
});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnZW5lcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuY29udHJvbFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLmxpc3RhXCIpLnRvZ2dsZUNsYXNzKFwibWVudS1hYnJpclwiKTtcclxuICAgIH0pO1xyXG4gICAgLyokKCBcIi5tZW51IC5lbmxhY2VcIiApLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2dCApe1xyXG4gICAgICAgICQoIFwiI2NvbnRyb2wtbWVudVwiICkucHJvcCggXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgIH0pOyovXHJcblxyXG5cdCQoIFwiLmZvcm11bGFyaW9cIiApXHJcbiAgICAgICAgLmZpbmQoIFwiaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPXRlbF1cIiApXHJcbiAgICAgICAgLm9uKCBcImtleXByZXNzXCIsIGZ1bmN0aW9uKCBldnQgKSB7XHJcbiAgICAgICAgICAgIHZhciAkYyA9ICQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICB2YXIgY2FyYWN0ZXIsIGFudGVyaW9yLCBmdXR1cm8sIHBhdHJvbjtcclxuICAgICAgICAgICAgdmFyIGNoYyA9IGV2dC5jaGFyQ29kZTtcclxuICAgICAgICAgICAgaWYgKCBjaGMgPiAwICkge1xyXG4gICAgICAgICAgICAgICAgY2FyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCBjaGMgKTtcclxuICAgICAgICAgICAgICAgIGFudGVyaW9yID0gJGMudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBwYXRyb24gPSBuZXcgUmVnRXhwKCAkYy5kYXRhKFwicmVzdHJpY2Npb25cIikgKTtcclxuICAgICAgICAgICAgICAgIGZ1dHVybyA9IGFudGVyaW9yICsgY2FyYWN0ZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHBhdHJvbi50ZXN0KCBmdXR1cm8gKSAhPSB0cnVlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoiZ2VuZXJhbC5qcyJ9
