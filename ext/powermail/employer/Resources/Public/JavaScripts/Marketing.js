function startMarketing($) {
	var $marketingInformation = $('#powermail_marketing_information');
	var data = '';
	data += 'tx_powermail_pi1[language]=' + $marketingInformation.data('language');
	data += '&id=' + $marketingInformation.data('pid');
	data += '&tx_powermail_pi1[pid]=' + $marketingInformation.data('pid');
	data += '&tx_powermail_pi1[mobileDevice]=' + (isMobile() ? 1 : 0);
	data += '&tx_powermail_pi1[referer]=' + encodeURIComponent(document.referrer);
	jQuery.ajax({
		url: getBaseUrl() + '/index.php?&eID=powermailEidMarketing',
		data: data,
		cache: false
	});
}

/**
 * Check if user device is mobile or not
 *
 * @return bool
 */
function isMobile() {
	var ua = navigator.userAgent;
	var checker = {
		iphone:ua.match(/(iPhone|iPod|iPad)/),
		blackberry:ua.match(/BlackBerry/),
		android:ua.match(/Android/)
	};

	return (checker.iphone || checker.blackberry || checker.android);
}

/**
 * Return BaseUrl as prefix
 *
 * @return	string	Base Url
 */
function getBaseUrl() {
	var baseurl;
	if (jQuery('base').length > 0) {
		baseurl = jQuery('base').prop('href');
	} else {
		if (window.location.protocol != "https:") {
			baseurl = 'http://klubabsolwenta.oswiata.lazarski.pl';
		} else {
			baseurl = 'https://klubabsolwenta.oswiata.lazarski.pl';
		}
	}
	return baseurl;
}