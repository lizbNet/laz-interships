if($('form').length){
$('form').parsley({
    successClass: 'has-success',
    errorClass: 'has-error',
    errorsWrapper: '<ul class="invalid-feedback"></ul>'
}).on('form:validated', function(e) {
    if (e.validationResult) {
        $('[type=submit]').attr('disabled', 'disabled').addClass("animate");
    }
});
}

$(document).ready(function() {
    $('#information').modal({
        backdrop: 'static'
    });
    $('#information').modal('show');
    if ( $('.powermail_fieldwrap_udzial').length) {
        $('#powermail_fieldwrap_2').addClass('d-none');
        $('#powermail_field_udzial').change(function(event) {
            $currentTarget = event.currentTarget;
            if ($currentTarget.value == 'Czynne') {
                $('#powermail_fieldwrap_2').removeClass('d-none');
                $("#powermail_fieldwrap_2 .form-control").prop('required', false);
            } else  {
                $('#powermail_fieldwrap_2').addClass('d-none');
                $("#powermail_fieldwrap_2 .form-control").prop('required', true);
            }
        })
    };
});