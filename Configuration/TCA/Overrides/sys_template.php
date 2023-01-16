<?php

defined('TYPO3_MODE') or die();

/***************
 * TypoScript: Full Package
 * This includes the full setup including all configurations
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    'lazarski_interships',
    'Configuration/TypoScript',
    'Lazarski Interships: typoscrit'
);
