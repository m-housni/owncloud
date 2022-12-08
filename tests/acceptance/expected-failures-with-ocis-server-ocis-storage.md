## Scenarios from web tests that are expected to fail on OCIS with OCIS storage

Lines that contain a format like "[someSuite.someFeature.feature:n](https://github.com/owncloud/web/path/to/feature)"
are lines that document a specific expected failure. Follow that with a URL to the line in the feature file in GitHub.
Please follow this format for the actual expected failures.

Level-3 headings should be used for the references to the relevant issues. Include the issue title with a link to the issue in GitHub.

Other free text and markdown formatting can be used elsewhere in the document if needed. But if you want to explain something about the issue, then please post that in the issue itself.


### [Exit page re-appears in loop when logged in user is deleted](https://github.com/owncloud/web/issues/4677)
-   [webUILogin/openidLogin.feature:50](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUILogin/openidLogin.feature#L50)

### [Support for favorites](https://github.com/owncloud/ocis/issues/1228)
-   [webUIFavorites/favoritesFile.feature:12](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L12)
-   [webUIFavorites/favoritesFile.feature:28](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L28)
-   [webUIFavorites/favoritesFile.feature:44](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L44)
-   [webUIFavorites/favoritesFile.feature:56](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L56)
-   [webUIFavorites/favoritesFile.feature:65](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L65)
-   [webUIFavorites/favoritesFile.feature:73](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L73)
-   [webUIFavorites/favoritesFile.feature:80](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L80)
-   [webUIFavorites/favoritesFile.feature:105](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L105)
-   [webUIFavorites/favoritesFile.feature:124](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/favoritesFile.feature#L124)
-   [webUIFavorites/unfavoriteFile.feature:12](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/unfavoriteFile.feature#L12)
-   [webUIFavorites/unfavoriteFile.feature:33](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/unfavoriteFile.feature#L33)
-   [webUIFavorites/unfavoriteFile.feature:53](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/unfavoriteFile.feature#L53)
-   [webUIFavorites/unfavoriteFile.feature:70](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/unfavoriteFile.feature#L70)
-   [webUIFavorites/unfavoriteFile.feature:87](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/unfavoriteFile.feature#L87)
-   [webUIFavorites/unfavoriteFile.feature:102](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFavorites/unfavoriteFile.feature#L102)
-   [webUIResharing1/reshareUsers.feature:177](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIResharing1/reshareUsers.feature#L177)

### [when sharer renames the shared resource, sharee get the updated name](https://github.com/owncloud/ocis/issues/2256)
-   [webUIRenameFiles/renameFiles.feature:226](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIRenameFiles/renameFiles.feature#L226)

### [Cannot create users with special characters](https://github.com/owncloud/ocis/issues/1417)
-   [webUISharingAutocompletion/shareAutocompletionSpecialChars.feature:37](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingAutocompletion/shareAutocompletionSpecialChars.feature#L37)
-   [webUISharingAutocompletion/shareAutocompletionSpecialChars.feature:38](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingAutocompletion/shareAutocompletionSpecialChars.feature#L38)
-   [webUISharingAutocompletion/shareAutocompletionSpecialChars.feature:39](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingAutocompletion/shareAutocompletionSpecialChars.feature#L39)
-   [webUISharingAutocompletion/shareAutocompletionSpecialChars.feature:36](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingAutocompletion/shareAutocompletionSpecialChars.feature#L36)


### [Share additional info](https://github.com/owncloud/ocis/issues/1253)
-   [webUISharingInternalUsersShareWithPage/shareWithUsers.feature:138](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalUsersShareWithPage/shareWithUsers.feature#L138)

### [Expiration date set is not implemented in user share](https://github.com/owncloud/ocis/issues/1250)
-   [webUISharingInternalGroups/shareWithGroups.feature:244](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalGroups/shareWithGroups.feature#L244)

### [Different path for shares inside folder](https://github.com/owncloud/ocis/issues/1231)

### [Implement expiration date for shares](https://github.com/owncloud/ocis/issues/1250)
- [webUISharingInternalGroups/shareWithGroups.feature:222](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalGroups/shareWithGroups.feature#L222)
- [webUISharingInternalGroups/shareWithGroups.feature:274](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalGroups/shareWithGroups.feature#L274)
- [webUISharingInternalGroups/shareWithGroups.feature:275](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalGroups/shareWithGroups.feature#L275)
- [webUISharingExpirationDate/shareWithExpirationDate.feature:21](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingExpirationDate/shareWithExpirationDate.feature#L21)

### [Notifications endpoint](https://github.com/owncloud/ocis/issues/14)
-   [webUISharingNotifications/shareWithGroups.feature:24](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingNotifications/shareWithGroups.feature#L24)
-   [webUISharingNotifications/shareWithUsers.feature:21](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingNotifications/shareWithUsers.feature#L21)
-   [webUISharingNotifications/shareWithUsers.feature:32](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingNotifications/shareWithUsers.feature#L32)
-   [webUISharingNotifications/shareWithUsers.feature:40](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingNotifications/shareWithUsers.feature#L40)
-   [webUISharingNotifications/shareWithUsers.feature:53](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingNotifications/shareWithUsers.feature#L53)

### [Listing shares via ocs API does not show path for parent folders](https://github.com/owncloud/ocis/issues/1231)
-   [webUISharingPublicManagement/shareByPublicLink.feature:127](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingPublicManagement/shareByPublicLink.feature#L127)

### [Propfind response to trashbin endpoint is different in ocis](https://github.com/owncloud/product/issues/186)
-   [webUIFilesSearch/search.feature:131](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesSearch/search.feature#L131)

### [Conflict / overwrite issues with TUS](https://github.com/owncloud/ocis/issues/1294)
-   [webUIUpload/uploadFileGreaterThanQuotaSize.feature:11](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIUpload/uploadFileGreaterThanQuotaSize.feature#L11)

### [restoring a file deleted from a received shared folder is not possible](https://github.com/owncloud/ocis/issues/1124)
-   [webUITrashbinRestore/trashbinRestore.feature:176](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUITrashbinRestore/trashbinRestore.feature#L176)

### [Blocked user is not logged out](https://github.com/owncloud/ocis/issues/902)
-   [webUILogin/adminBlocksUser.feature:13](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUILogin/adminBlocksUser.feature#L13)

### [Browser session deleted user should not be valid for newly created user of same name](https://github.com/owncloud/ocis/issues/904)
-   [webUILogin/openidLogin.feature:60](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUILogin/openidLogin.feature#L60)

### [Comments in sidebar](https://github.com/owncloud/web/issues/1158)
-   [webUIFilesDetails/fileDetails.feature:90](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesDetails/fileDetails.feature#L90)
-   [webUIFilesDetails/fileDetails.feature:106](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesDetails/fileDetails.feature#L106)
-   [webUIFilesDetails/fileDetails.feature:123](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesDetails/fileDetails.feature#L123)
-   [webUIFilesDetails/fileDetails.feature:140](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesDetails/fileDetails.feature#L140)

### [Deletion of a recursive folder from trashbin is not possible](https://github.com/owncloud/product/issues/188)
-   [webUITrashbinDelete/trashbinDelete.feature:51](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUITrashbinDelete/trashbinDelete.feature#L51)
-   [webUITrashbinDelete/trashbinDelete.feature:65](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUITrashbinDelete/trashbinDelete.feature#L65)

### [Saving public share is not possible](https://github.com/owncloud/web/issues/5321)
-   [webUISharingPublicManagement/shareByPublicLink.feature:24](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingPublicManagement/shareByPublicLink.feature#L24)

### [Uploading folders does not work in files-drop](https://github.com/owncloud/web/issues/2443)
-   [webUISharingPublicDifferentRoles/shareByPublicLinkDifferentRoles.feature:245](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingPublicDifferentRoles/shareByPublicLinkDifferentRoles.feature#L245)

### [Resources cannot be locked under ocis](https://github.com/owncloud/ocis/issues/1284)
-   [webUIWebdavLockProtection/delete.feature:33](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/delete.feature#L33)
-   [webUIWebdavLockProtection/delete.feature:34](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/delete.feature#L34)
-   [webUIWebdavLockProtection/move.feature:36](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/move.feature#L36)
-   [webUIWebdavLockProtection/move.feature:37](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/move.feature#L37)
-   [webUIWebdavLockProtection/upload.feature:32](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/upload.feature#L32)

### [Resources cannot be locked under ocis](https://github.com/owncloud/ocis/issues/1284)
-   [webUIWebdavLockProtection/upload.feature:33](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/upload.feature#L33)

### [Writing to locked files/folders give only a generic error message](https://github.com/owncloud/web/issues/5741)
-   [webUIWebdavLockProtection/upload.feature:32](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/upload.feature#L32)
-   [webUIWebdavLockProtection/upload.feature:33](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIWebdavLockProtection/upload.feature#L33)

### [Federated shares not showing in shared with me page](https://github.com/owncloud/web/issues/2510)
-   [webUISharingExternal/federationSharing.feature:38](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingExternal/federationSharing.feature#L38)
-   [webUISharingExternal/federationSharing.feature:166](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingExternal/federationSharing.feature#L166)

### [not possible to overwrite a received shared file](https://github.com/owncloud/ocis/issues/2267)
-   [webUISharingInternalGroups/shareWithGroups.feature:77](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalGroups/shareWithGroups.feature#L77)
-   [webUISharingInternalUsers/shareWithUsers.feature:55](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingInternalUsers/shareWithUsers.feature#L55)

### [web config update is not properly reflected after the ocis start](https://github.com/owncloud/ocis/issues/2944)
-   [webUIFiles/breadcrumb.feature:50](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFiles/breadcrumb.feature#L50)

### [empty subfolder inside a folder to be uploaded is not created on the server](https://github.com/owncloud/web/issues/6348)
-   [webUIUpload/upload.feature:43](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIUpload/upload.feature#L43)

### [Favorites deactivated in ocis temporarily](https://github.com/owncloud/ocis/issues/1228)
-   [webUIFilesDetails/fileDetails.feature:50](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesDetails/fileDetails.feature#L50)
-   [webUIFilesDetails/fileDetails.feature:70](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIFilesDetails/fileDetails.feature#L70)
-   [webUIRenameFiles/renameFiles.feature:249](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUIRenameFiles/renameFiles.feature#L249)

### [PROPFIND to sub-folder of a shared resources with same name gives 404](https://github.com/owncloud/ocis/issues/3859)
-   [webUISharingAcceptShares/acceptShares.feature:240](https://github.com/owncloud/web/blob/master/tests/acceptance/features/webUISharingAcceptShares/acceptShares.feature#L240)
