$('form').parsley({
    successClass: 'has-success',
    errorClass: 'has-error',
    errorsWrapper: '<ul class="invalid-feedback"></ul>'
}).on('form:validated', function(e) {
    if (e.validationResult) {
        $('[type=submit]').attr('disabled', 'disabled');
    }
});

$(function() {
    $('form').parsley().on('form:validated', function(e) {
        if (e.validationResult) {
            $('[type=submit]').attr('disabled', 'disabled').addClass("animate");
        }
    });
});