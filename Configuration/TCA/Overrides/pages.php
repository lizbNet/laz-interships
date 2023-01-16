<?php

/***************
 * Register PageTS
 */


// BackendLayouts
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'lazarski_interships',
    'Configuration/TsConfig/Page/Mod/WebLayout/BackendLayouts.tsconfig',
    'Lazarski Interships: Backend Layouts'
);

// TCEMAIN
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'lazarski_interships',
    'Configuration/TsConfig/Page/TCEMAIN.tsconfig',
    'BLazarski Interships: TCEMAIN'
);

// TCEFORM
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'lazarski_interships',
    'Configuration/TsConfig/Page/TCEFORM.tsconfig',
    'Lazarski Interships: TCEFORM'
);