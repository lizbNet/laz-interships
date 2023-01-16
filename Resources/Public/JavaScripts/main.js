$(window).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    if ($('form').length) {
        var validator = $('form.powermail_form_30').parsley({
            errorClass: 'is-invalid',
            errorsWrapper: '<ul class="invalid-feedback"></ul>',
            successClass: 'is-valid'
        });
    }

});

$('.tx-powermail').on('submitted.powermail.form', function() {

})


if (document.getElementById('powermail_form_431')) {
    var offer_practice_wrap = document.getElementById('powermail_fieldwrap_offer_practice');
    	offer_practice_wrap.classList.add('d-none');
    var offer_practice_length_wrap = document.getElementById('powermail_fieldwrap_offer_practice_length');
    	offer_practice_length_wrap.classList.add('d-none');
    var offer_practice_length_optional_wrap = document.getElementById('powermail_fieldwrap_offer_practice_length_optional');
    	offer_practice_length_optional_wrap.classList.add('d-none');
    var offer_work_type_wrap = document.getElementById('powermail_fieldwrap_offer_work_type');
    	offer_work_type_wrap.classList.add('d-none');
    var offer_by_www_wrap = document.getElementById('powermail_fieldwrap_offer_by_www');
    var offer_email_wrap = document.getElementById('powermail_fieldwrap_offer_email');
    	offer_email_wrap.required = true;
    var offer_www_wrap = document.getElementById('powermail_fieldwrap_offer_www');
    	offer_www_wrap.classList.add('d-none');
    var fieldset_2 = document.getElementById('powermail_fieldset_659');
    	fieldset_2.disabled = true;
    	fieldset_2.classList.add('opacity-0');

    var radios = document.querySelectorAll('#powermail_fieldwrap_offer_type input[type=radio]');
    	radios.forEach(radio => radio.addEventListener('change', () => offerType(radio.value)));

    var offer_by_www = document.getElementById('powermail_field_offer_by_www_1');
    	offer_by_www.addEventListener('change', function() {
        if (this.checked) {
            offer_email_wrap.classList.replace('mandatory', 'd-none');
            offer_www_wrap.classList.replace('d-none', 'mandatory');
            offer_email_wrap.querySelector('input').required = false;
            offer_www_wrap.querySelector('input').required = true;
        } else {
            offer_email_wrap.classList.replace('d-none', 'mandatory');
            offer_www_wrap.classList.replace('mandatory', 'd-none');
            offer_email_wrap.querySelector('input').required = false;
            offer_www_wrap.querySelector('input').required = true;
        }
    });

    document.onreadystatechange = function() {
        if (document.readyState == "interactive") {
            var selected_offer = document.querySelector('#powermail_fieldwrap_offer_type input[type=radio]:checked').value;
            if (selected_offer) {
                offerType(selected_offer);
            }
            var selected_offer_by_www = document.querySelector('#powermail_field_offer_by_www_1');
            if (selected_offer_by_www.checked) {
	            offer_email_wrap.classList.replace('mandatory', 'd-none');
	            offer_www_wrap.classList.replace('d-none', 'mandatory');
	            offer_email_wrap.querySelector('input').required = false;
	            offer_www_wrap.querySelector('input').required = true;
            }
        }
    }
    var offer_practice_length_optional = document.getElementById('powermail_field_offer_practice_length_optional_1');
    	offer_practice_length_optional.addEventListener('change', function() {
        	if (this.checked) {
            	offer_practice_length_wrap.querySelector('input').required = false;
	            offer_practice_length_wrap.classList.add('d-none');
	            offer_practice_length_wrap.classList.remove('mandatory');
        	} else {
            	offer_practice_length_wrap.querySelector('input').required = true;
	            offer_practice_length_wrap.classList.remove('d-none');
	            offer_practice_length_wrap.classList.add('mandatory');
        	}
        });
    function offerType(value) {
        console.log(value);
        if (value == 'practice') {
            offer_practice_wrap.classList.remove('d-none');
            offer_practice_wrap.classList.add('mandatory');
            offer_practice_wrap.querySelector('input').required = true;
            offer_practice_length_optional_wrap.classList.remove('d-none');
            offer_practice_length_wrap.classList.remove('d-none');
            offer_practice_length_wrap.classList.add('mandatory');
            offer_practice_length_wrap.querySelector('input').required = true;

            offer_work_type_wrap.classList.add('d-none');
            offer_work_type_wrap.classList.remove('mandatory');
            offer_work_type_wrap.querySelector('select').required = false;

            fieldset_2.disabled = false;
            fieldset_2.classList.remove('opacity-0');
        } else if (value == 'work') {
            offer_practice_wrap.classList.add('d-none');
            offer_practice_wrap.classList.remove('mandatory');
            offer_practice_wrap.querySelector('input').required = false;
            offer_practice_length_optional_wrap.classList.add('d-none');
            offer_practice_length_wrap.classList.add('d-none');
            offer_practice_length_wrap.classList.remove('mandatory');
            offer_practice_length_wrap.querySelector('input').required = false;
            
            offer_work_type_wrap.classList.remove('d-none');
            offer_work_type_wrap.classList.add('mandatory');
            offer_work_type_wrap.querySelector('select').required = true;
            fieldset_2.disabled = false;
            fieldset_2.classList.remove('opacity-0');
        } else {
            fieldset_2.disabled = true;
        }
    }

    function resizeTexatarea() {
        var tx = document.getElementsByTagName('textarea');
        for (var i = 0; i < tx.length; i++) {
            tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput(e) {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        }
    }
    resizeTexatarea();
}
// WebFont.load({
// 	google: {
// 		families: ['open sans']
// 	}
// });