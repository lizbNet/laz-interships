<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}
/*
call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'PrimeServices.LazarskiCkp',
            'Lazarskickp',
            'Lazarski CKP'
        );

    }
);
*/

TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('lazarski_form', 'Configuration/TypoScript', 'form');