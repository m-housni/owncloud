Changelog for ownCloud Web [unreleased] (UNRELEASED)
=======================================
The following sections list the changes in ownCloud web unreleased relevant to
ownCloud admins and users.

[unreleased]: https://github.com/owncloud/web/compare/v6.0.0...master

Summary
-------

* Bugfix - Current year selection in the date picker: [#8058](https://github.com/owncloud/web/pull/8058)
* Bugfix - Include spaces in the list info: [#7926](https://github.com/owncloud/web/pull/7926)
* Bugfix - Omit "page"-query in breadcrumb navigation: [#8061](https://github.com/owncloud/web/pull/8061)
* Bugfix - "Paste"-action without write permissions: [#7925](https://github.com/owncloud/web/pull/7925)
* Bugfix - Resolving drives in search: [#8045](https://github.com/owncloud/web/pull/8045)
* Bugfix - Reverting versions for read-only shares: [#8040](https://github.com/owncloud/web/pull/8040)
* Bugfix - Search repeating no results message: [#8054](https://github.com/owncloud/web/issues/8054)
* Bugfix - Space quota not displayed after creation: [#7969](https://github.com/owncloud/web/pull/7969)
* Bugfix - Text editor appearance: [#8026](https://github.com/owncloud/web/pull/8026)
* Bugfix - UI fixes for sorting and quickactions: [#7966](https://github.com/owncloud/web/pull/7966)
* Change - Update Vue to v2.7.14: [#7877](https://github.com/owncloud/web/pull/7877)
* Enhancement - Access right sidebar panels via URL: [#8021](https://github.com/owncloud/web/pull/8021)
* Enhancement - Conflict dialog UX: [#7983](https://github.com/owncloud/web/pull/7983)
* Enhancement - Group and user creation forms submit on enter: [#7968](https://github.com/owncloud/web/pull/7968)
* Enhancement - Increase Searchbar height: [#8056](https://github.com/owncloud/web/pull/8056)
* Enhancement - Don't open sidebar when copying quicklink: [#8008](https://github.com/owncloud/web/issues/8008)
* Enhancement - Enable autoplay in the preview app: [#7995](https://github.com/owncloud/web/pull/7995)
* Enhancement - Introduce full screen mode to the preview app: [#7994](https://github.com/owncloud/web/pull/7994)
* Enhancement - Introduce zoom and rotate to the preview app: [#7977](https://github.com/owncloud/web/pull/7977)
* Enhancement - Retry failed uploads on re-upload: [#8055](https://github.com/owncloud/web/pull/8055)
* Enhancement - Warn users when using unsupported browsers: [#7942](https://github.com/owncloud/web/pull/7942)

Details
-------

* Bugfix - Current year selection in the date picker: [#8058](https://github.com/owncloud/web/pull/8058)

   We applied a hotpatch to fix the selection of the current year in December in the date picker.

   https://github.com/owncloud/web/issues/8042
   https://github.com/owncloud/web/pull/8058

* Bugfix - Include spaces in the list info: [#7926](https://github.com/owncloud/web/pull/7926)

   Spaces have been included in the list info below file lists that support displaying spaces.

   https://github.com/owncloud/web/issues/7924
   https://github.com/owncloud/web/pull/7926

* Bugfix - Omit "page"-query in breadcrumb navigation: [#8061](https://github.com/owncloud/web/pull/8061)

   We've omitted the "page"-query when navigating via breadcrumb. This solves an issue were the
   file list would be empty after navigating via breadcrumb from a paginated folder.

   https://github.com/owncloud/web/issues/8060
   https://github.com/owncloud/web/pull/8061

* Bugfix - "Paste"-action without write permissions: [#7925](https://github.com/owncloud/web/pull/7925)

   The "Paste"-action is now disabled in read-only folders/shares.

   https://github.com/owncloud/web/issues/7922
   https://github.com/owncloud/web/pull/7925

* Bugfix - Resolving drives in search: [#8045](https://github.com/owncloud/web/pull/8045)

   We've fixed a bug where folder listing was not reloaded when being in a space/share root and
   navigating into another space/share root via search.

   https://github.com/owncloud/web/issues/8034
   https://github.com/owncloud/web/pull/8045

* Bugfix - Reverting versions for read-only shares: [#8040](https://github.com/owncloud/web/pull/8040)

   Reverting versions for read-only shares is no longer possible.

   https://github.com/owncloud/web/issues/8037
   https://github.com/owncloud/web/pull/8040

* Bugfix - Search repeating no results message: [#8054](https://github.com/owncloud/web/issues/8054)

   We've fixed a bug that caused to repeat the 'no results' message when searching.

   https://github.com/owncloud/web/issues/8054
   https://github.com/owncloud/web/pull/8062

* Bugfix - Space quota not displayed after creation: [#7969](https://github.com/owncloud/web/pull/7969)

   We've fixed a bug where the quota in the space details was not shown after space creation.

   https://github.com/owncloud/web/issues/7959
   https://github.com/owncloud/web/pull/7969

* Bugfix - Text editor appearance: [#8026](https://github.com/owncloud/web/pull/8026)

   The text editor now looks normal again after its appearance had changed due to the inclusion of
   the ODS in the web repository.

   https://github.com/owncloud/web/pull/8026

* Bugfix - UI fixes for sorting and quickactions: [#7966](https://github.com/owncloud/web/pull/7966)

   Ensure the sorting of "shared with" in "shared with me" view is correct when they have been
   shared simultaneously with users and groups. Prevent the context actions to disappear when
   `hoverableQuickActions` is set to true.

   https://github.com/owncloud/web/pull/7966

* Change - Update Vue to v2.7.14: [#7877](https://github.com/owncloud/web/pull/7877)

   Vue has been updated to 2.7.14

   BREAKING CHANGE for developers: The `vue/composition-api` plugin is not available anymore
   as the composition-api now comes with Vue.

   https://github.com/owncloud/web/pull/7877

* Enhancement - Access right sidebar panels via URL: [#8021](https://github.com/owncloud/web/pull/8021)

   Opening the right sidebar (including its panels) is now possible via URL param.

   For private or internal links it only requires the new `details` param in the URL. For other URLs
   (e.g. personal space, project space) the `scrollTo` param including the resource id is needed
   as well.

   The following values can be used for the `details` param:

   * `details` - sidebar open, no specific panel * `actions` - actions panel * `sharing` - share
   panel * `versions` - versions panel * `space-share` - members panel (project space only)

   https://github.com/owncloud/web/issues/7927
   https://github.com/owncloud/web/pull/8021

* Enhancement - Conflict dialog UX: [#7983](https://github.com/owncloud/web/pull/7983)

   The UX of the conflict dialog has been improved slightly:

   * The name of the conflicting resource is now written in quotes * The title of the dialog now tells
   the difference between files and folders * The "Skip"-dialog now tells the difference between
   files and folders

   https://github.com/owncloud/web/issues/7682
   https://github.com/owncloud/web/pull/7983

* Enhancement - Group and user creation forms submit on enter: [#7968](https://github.com/owncloud/web/pull/7968)

   Group and User creation forms can now be submitted by pressing enter.

   https://github.com/owncloud/web/issues/7937
   https://github.com/owncloud/web/pull/7968

* Enhancement - Increase Searchbar height: [#8056](https://github.com/owncloud/web/pull/8056)

   We've increased the height of the Searchbar to better fit the design.

   https://github.com/owncloud/web/pull/8056

* Enhancement - Don't open sidebar when copying quicklink: [#8008](https://github.com/owncloud/web/issues/8008)

   Following user feedback, we don't open the sharing sidebar anymore after copying/creating a
   quicklink.

   https://github.com/owncloud/web/issues/8008
   https://github.com/owncloud/web/pull/8036

* Enhancement - Enable autoplay in the preview app: [#7995](https://github.com/owncloud/web/pull/7995)

   https://github.com/owncloud/web/issues/7908
   https://github.com/owncloud/web/pull/7995

* Enhancement - Introduce full screen mode to the preview app: [#7994](https://github.com/owncloud/web/pull/7994)

   https://github.com/owncloud/web/issues/6700
   https://github.com/owncloud/web/pull/7994

* Enhancement - Introduce zoom and rotate to the preview app: [#7977](https://github.com/owncloud/web/pull/7977)

   https://github.com/owncloud/web/issues/7160
   https://github.com/owncloud/web/pull/7977

* Enhancement - Retry failed uploads on re-upload: [#8055](https://github.com/owncloud/web/pull/8055)

   When re-uploading a file that failed uploading before, the upload is now being retried instead
   of being started from scratch again. This fixes some issues with the overlay and preserves the
   upload progress.

   https://github.com/owncloud/web/issues/7944
   https://github.com/owncloud/web/pull/8055

* Enhancement - Warn users when using unsupported browsers: [#7942](https://github.com/owncloud/web/pull/7942)

   We've added a warning message if the browser is older than our supported configuration,
   instead of just failing and showing blue/white screens or generic errors. Users still have the
   option to proceed and open the page if they want to. By proceeding to the page, the setting is set
   for 30 days, afterwards the warning is shown again.

   When building web, it's possible to pass a documentation url for users to know more about this
   issue, by setting the env variable DOCUMENTATION_URL.

   https://github.com/owncloud/web/pull/7942

Changelog for ownCloud Web [6.0.0] (2022-11-29)
=======================================
The following sections list the changes in ownCloud web 6.0.0 relevant to
ownCloud admins and users.

[6.0.0]: https://github.com/owncloud/web/compare/v5.7.0...v6.0.0

Summary
-------

* Bugfix - Add language param opening external app: [#7419](https://github.com/owncloud/web/issues/7419)
* Bugfix - "Copy Quicklink"-translations: [#7731](https://github.com/owncloud/web/pull/7731)
* Bugfix - "Cut" and "Copy" actions for current folder: [#7830](https://github.com/owncloud/web/pull/7830)
* Bugfix - Disable copy/move overwrite on self: [#7652](https://github.com/owncloud/web/pull/7652)
* Bugfix - Disable shares loading on public and trash locations: [#7739](https://github.com/owncloud/web/pull/7739)
* Bugfix - Disappearing quicklink in sidebar: [#7740](https://github.com/owncloud/web/pull/7740)
* Bugfix - Prevent shares from disappearing after sharing with groups: [#7946](https://github.com/owncloud/web/issues/7946)
* Bugfix - Edit new created user in user management: [#7820](https://github.com/owncloud/web/pull/7820)
* Bugfix - Editing text files on public pages: [#7936](https://github.com/owncloud/web/pull/7936)
* Bugfix - Handle non 2xx external app responses: [#7861](https://github.com/owncloud/web/pull/7861)
* Bugfix - File name reactivity: [#7734](https://github.com/owncloud/web/pull/7734)
* Bugfix - Prevent file upload when folder creation failed: [#7975](https://github.com/owncloud/web/pull/7975)
* Bugfix - Folder conflict dialog: [#7724](https://github.com/owncloud/web/pull/7724)
* Bugfix - Hide search bar in public link context: [#7603](https://github.com/owncloud/web/issues/7603)
* Bugfix - Hide share indicators on public page: [#7889](https://github.com/owncloud/web/pull/7889)
* Bugfix - "Keep both"-conflict option: [#7903](https://github.com/owncloud/web/issues/7903)
* Bugfix - Link indicator on "Shared with me"-page: [#7697](https://github.com/owncloud/web/issues/7697)
* Bugfix - Missing password form on public drop page: [#8007](https://github.com/owncloud/web/pull/8007)
* Bugfix - Inhibit move files between spaces: [#7652](https://github.com/owncloud/web/pull/7652)
* Bugfix - Prevent retrying uploads with status code 5xx: [#7985](https://github.com/owncloud/web/pull/7985)
* Bugfix - Do not load files from cache in public links: [#7811](https://github.com/owncloud/web/pull/7811)
* Bugfix - Add origin check to Draw.io events: [#7941](https://github.com/owncloud/web/pull/7941)
* Bugfix - Prefer alias links over private links: [#7916](https://github.com/owncloud/web/pull/7916)
* Bugfix - "Private link"-button alignment: [#7640](https://github.com/owncloud/web/pull/7640)
* Bugfix - Public link loading on role change: [#8006](https://github.com/owncloud/web/pull/8006)
* Bugfix - Quota check when replacing files: [#7962](https://github.com/owncloud/web/issues/7962)
* Bugfix - Reload file list after last share removal: [#7748](https://github.com/owncloud/web/pull/7748)
* Bugfix - Remove the "close sidebar"-calls on delete: [#7699](https://github.com/owncloud/web/issues/7699)
* Bugfix - Resolve upload existing folder: [#7504](https://github.com/owncloud/web/pull/7504)
* Bugfix - Routing for re-shares: [#7771](https://github.com/owncloud/web/pull/7771)
* Bugfix - Search bar on small screens: [#7675](https://github.com/owncloud/web/pull/7675)
* Bugfix - Sidebar for received shares in search file list: [#7662](https://github.com/owncloud/web/pull/7662)
* Bugfix - Share editing after selecting a space: [#7873](https://github.com/owncloud/web/pull/7873)
* Bugfix - Share permissions for re-shares: [#7657](https://github.com/owncloud/web/issues/7657)
* Bugfix - Shares loading: [#7506](https://github.com/owncloud/web/issues/7506)
* Bugfix - Sidebar toggle icon: [#7632](https://github.com/owncloud/web/pull/7632)
* Bugfix - Sidebar without highlighted resource: [#7781](https://github.com/owncloud/web/issues/7781)
* Bugfix - Try to obtain refresh token before the error case: [#7756](https://github.com/owncloud/web/pull/7756)
* Bugfix - Hide actions in space trash bins: [#7768](https://github.com/owncloud/web/pull/7768)
* Bugfix - Spaces on "Shared via link"-page: [#7651](https://github.com/owncloud/web/pull/7651)
* Bugfix - Spaces reactivity on update: [#7521](https://github.com/owncloud/web/issues/7521)
* Bugfix - Display error messages in text editor: [#7960](https://github.com/owncloud/web/issues/7960)
* Bugfix - Saving a file multiple times with the text editor: [#8030](https://github.com/owncloud/web/pull/8030)
* Bugfix - Trash bin sidebar: [#7778](https://github.com/owncloud/web/issues/7778)
* Bugfix - Introduce "upload finalizing"-state in upload overlay: [#7956](https://github.com/owncloud/web/issues/7956)
* Bugfix - Upload modify time: [#7630](https://github.com/owncloud/web/pull/7630)
* Bugfix - Prevent unnecessary request when saving a user: [#8011](https://github.com/owncloud/web/issues/8011)
* Bugfix - Versions on the "Shared with me"-page: [#7989](https://github.com/owncloud/web/pull/7989)
* Change - Drive aliases in URLs: [#6648](https://github.com/owncloud/web/issues/6648)
* Change - Remove mediaSource and v-image-source: [#7935](https://github.com/owncloud/web/pull/7935)
* Enhancement - Add restore conflict dialog: [#7635](https://github.com/owncloud/web/pull/7635)
* Enhancement - Add search field for space members: [#7901](https://github.com/owncloud/web/pull/7901)
* Enhancement - Add `X-Request-ID` header to all outgoing requests: [#4675](https://github.com/owncloud/web/issues/4675)
* Enhancement - Batch actions for two or more items only: [#7904](https://github.com/owncloud/web/pull/7904)
* Enhancement - Respect the new sharing denials capability (experimental): [#7892](https://github.com/owncloud/web/pull/7892)
* Enhancement - Edit custom permissions wording: [#7709](https://github.com/owncloud/web/pull/7709)
* Enhancement - Align dark mode colors with given design: [#7373](https://github.com/owncloud/web/issues/7373)
* Enhancement - Deny subfolders inside share: [#7190](https://github.com/owncloud/web/pull/7190)
* Enhancement - Design polishing: [#7684](https://github.com/owncloud/web/pull/7684)
* Enhancement - Disable share renaming: [#7865](https://github.com/owncloud/web/pull/7865)
* Enhancement - Enable renaming on received shares: [#7725](https://github.com/owncloud/web/pull/7725)
* Enhancement - Friendlier logout screen: [#7747](https://github.com/owncloud/web/pull/7747)
* Enhancement - Id based routing: [#6247](https://github.com/owncloud/web/issues/6247)
* Enhancement - Internal link on unaccepted share: [#7803](https://github.com/owncloud/web/issues/7803)
* Enhancement - Resolve internal links: [#7304](https://github.com/owncloud/web/issues/7304)
* Enhancement - Make keybindings global: [#7569](https://github.com/owncloud/web/pull/7569)
* Enhancement - Optimize email validation in the user management app: [#7894](https://github.com/owncloud/web/pull/7894)
* Enhancement - Resolve private links: [#7707](https://github.com/owncloud/web/issues/7707)
* Enhancement - Auth context in route meta props: [#7234](https://github.com/owncloud/web/issues/7234)
* Enhancement - Improve search experience: [#7821](https://github.com/owncloud/web/pull/7821)
* Enhancement - Make search results sortable: [#7801](https://github.com/owncloud/web/pull/7801)
* Enhancement - Update ODS to v14.0.1: [#8028](https://github.com/owncloud/web/pull/8028)
* Enhancement - Validate space names: [#7890](https://github.com/owncloud/web/pull/7890)
* Enhancement - Webdav support in web-client package: [#7430](https://github.com/owncloud/web/pull/7430)
* Enhancement - XHR upload timeout: [#7900](https://github.com/owncloud/web/issues/7900)

Details
-------

* Bugfix - Add language param opening external app: [#7419](https://github.com/owncloud/web/issues/7419)

   We've added the language param when opening an external app

   https://github.com/owncloud/web/issues/7419
   https://github.com/owncloud/web/pull/7631

* Bugfix - "Copy Quicklink"-translations: [#7731](https://github.com/owncloud/web/pull/7731)

   We've fixed a bug where the translation for the "Copy Quicklink"-notification was not
   working.

   https://github.com/owncloud/web/issues/7720
   https://github.com/owncloud/web/pull/7731

* Bugfix - "Cut" and "Copy" actions for current folder: [#7830](https://github.com/owncloud/web/pull/7830)

   The "Cut" and "Copy" actions for the current folder have been fixed.

   https://github.com/owncloud/web/issues/7784
   https://github.com/owncloud/web/pull/7830

* Bugfix - Disable copy/move overwrite on self: [#7652](https://github.com/owncloud/web/pull/7652)

   We've disabled copy/move if the file is moved/copied in the exact same location as before and
   the user selects overwrite. Previously this caused an network error.

   https://github.com/owncloud/web/issues/6892
   https://github.com/owncloud/web/pull/7652

* Bugfix - Disable shares loading on public and trash locations: [#7739](https://github.com/owncloud/web/pull/7739)

   We've disabled shares loading on public and trash locations as it's not needed.

   https://github.com/owncloud/web/issues/7667
   https://github.com/owncloud/web/pull/7739

* Bugfix - Disappearing quicklink in sidebar: [#7740](https://github.com/owncloud/web/pull/7740)

   We've fixed a bug where existing quicklinks would disappear when performing the "Create
   quicklink"-action.

   https://github.com/owncloud/web/issues/7736
   https://github.com/owncloud/web/pull/7740

* Bugfix - Prevent shares from disappearing after sharing with groups: [#7946](https://github.com/owncloud/web/issues/7946)

   The disappearing of shares after sharing with groups on the "Shared with me"-page has been
   fixed.

   https://github.com/owncloud/web/issues/7946
   https://github.com/owncloud/web/pull/8009

* Bugfix - Edit new created user in user management: [#7820](https://github.com/owncloud/web/pull/7820)

   We've fixed a bug, where editing a user after creating in the user management was only possible
   after page refresh.

   https://github.com/owncloud/web/issues/7761
   https://github.com/owncloud/web/pull/7820

* Bugfix - Editing text files on public pages: [#7936](https://github.com/owncloud/web/pull/7936)

   We've fixed a bug where editing text files on public pages was not possible with the oC10
   backend.

   https://github.com/owncloud/web/issues/7932
   https://github.com/owncloud/web/pull/7936

* Bugfix - Handle non 2xx external app responses: [#7861](https://github.com/owncloud/web/pull/7861)

   Axios no longer skips on non 200 status responses in app-external. If the status is not 2xx, the
   application now displays a proper error message.

   https://github.com/owncloud/web/pull/7861

* Bugfix - File name reactivity: [#7734](https://github.com/owncloud/web/pull/7734)

   We've fixed a bug where the file name would not update reactively in the sidebar after changing
   it.

   https://github.com/owncloud/web/issues/7713
   https://github.com/owncloud/web/pull/7734

* Bugfix - Prevent file upload when folder creation failed: [#7975](https://github.com/owncloud/web/pull/7975)

   We've fixed a bug where files would try to be uploaded if the creation of their respective folder
   failed beforehand.

   https://github.com/owncloud/web/issues/7957
   https://github.com/owncloud/web/pull/7975
   https://github.com/owncloud/web/pull/7999

* Bugfix - Folder conflict dialog: [#7724](https://github.com/owncloud/web/pull/7724)

   * Fixed "Keep both" and "Skip" options in Firefox * Fixed "Keep both" and "Skip" options when
   uploading via the "Upload"-menu * Fixed broken "Upload"-menu after skipping all files (= no
   files uploaded) * Fixed issues when uploading a folder into another folder which has or starts
   with the same name

   https://github.com/owncloud/web/issues/7680
   https://github.com/owncloud/web/pull/7724

* Bugfix - Hide search bar in public link context: [#7603](https://github.com/owncloud/web/issues/7603)

   The search bar in a public link context has been hidden because it requires authentication.

   https://github.com/owncloud/web/issues/7603
   https://github.com/owncloud/web/pull/7849

* Bugfix - Hide share indicators on public page: [#7889](https://github.com/owncloud/web/pull/7889)

   Share indicators are now being hidden on public link pages.

   https://github.com/owncloud/web/issues/7888
   https://github.com/owncloud/web/pull/7889

* Bugfix - "Keep both"-conflict option: [#7903](https://github.com/owncloud/web/issues/7903)

   We've fixed an issue with the "Keep both"-conflict option where uploaded folders would get
   mixed up.

   https://github.com/owncloud/web/issues/7903
   https://github.com/owncloud/web/pull/7905

* Bugfix - Link indicator on "Shared with me"-page: [#7697](https://github.com/owncloud/web/issues/7697)

   Link indicators in the sidebar on the "Shared with me"-page will now be displayed correctly.

   https://github.com/owncloud/web/issues/7697
   https://github.com/owncloud/web/pull/7853

* Bugfix - Missing password form on public drop page: [#8007](https://github.com/owncloud/web/pull/8007)

   We've fixed a bug where the password form on a public drop page would not show after setting a
   required password.

   https://github.com/owncloud/web/issues/7670
   https://github.com/owncloud/web/pull/8007

* Bugfix - Inhibit move files between spaces: [#7652](https://github.com/owncloud/web/pull/7652)

   We've inhibited moving files between spaces and will offer the user to copy instead.

   https://github.com/owncloud/web/issues/6892
   https://github.com/owncloud/web/pull/7652
   https://github.com/owncloud/web/pull/7735

* Bugfix - Prevent retrying uploads with status code 5xx: [#7985](https://github.com/owncloud/web/pull/7985)

   Uploads with status code 5xx can't be retried on the server side, hence the automatic retry has
   been disabled in such cases.

   https://github.com/owncloud/web/issues/7971
   https://github.com/owncloud/web/pull/7985

* Bugfix - Do not load files from cache in public links: [#7811](https://github.com/owncloud/web/pull/7811)

   When apps (i.e Drawio) try to load a file, the browser caches the request. If the file was
   modified somewhere else, this causes inconsistent results which prevent saving any changes
   until the cache is properly cleared. This had previously been fixed for normal files, but not
   yet for public links - which we took care of now.

   https://github.com/owncloud/web/pull/7811
   https://github.com/owncloud/web/pull/7075

* Bugfix - Add origin check to Draw.io events: [#7941](https://github.com/owncloud/web/pull/7941)

   Origin checks have been added to all Draw.io events due to security reasons.

   https://github.com/owncloud/web/issues/7933
   https://github.com/owncloud/web/pull/7941

* Bugfix - Prefer alias links over private links: [#7916](https://github.com/owncloud/web/pull/7916)

   The private link capability has recently been enabled in oCIS to announce to clients that
   private links are available. However, if alias links are available the web ui is supposed to
   only show alias links. Thus the "copy private link" button has been disabled when alias links
   are available.

   https://github.com/owncloud/web/pull/7916

* Bugfix - "Private link"-button alignment: [#7640](https://github.com/owncloud/web/pull/7640)

   We've fixed the alignment of the "Private link"-button in the sidebar.

   https://github.com/owncloud/web/issues/7618
   https://github.com/owncloud/web/pull/7640

* Bugfix - Public link loading on role change: [#8006](https://github.com/owncloud/web/pull/8006)

   The loading and resolving of public links when their respective roles have changed has been
   fixed.

   https://github.com/owncloud/web/issues/8003
   https://github.com/owncloud/web/pull/8006

* Bugfix - Quota check when replacing files: [#7962](https://github.com/owncloud/web/issues/7962)

   An issue with the quota check when replacing an existing file while having enough quota has been
   fixed.

   https://github.com/owncloud/web/issues/7962
   https://github.com/owncloud/web/pull/8015

* Bugfix - Reload file list after last share removal: [#7748](https://github.com/owncloud/web/pull/7748)

   We've fixed a bug where the file list would not update after removing the last share or link.
   Also, we now prevent the shares tree from being loaded again if the removed share was not the last
   one.

   https://github.com/owncloud/web/pull/7748

* Bugfix - Remove the "close sidebar"-calls on delete: [#7699](https://github.com/owncloud/web/issues/7699)

   We've removed the "close sidebar"-calls when deleting a resource as the mutations are not
   available as well as not needed anymore.

   https://github.com/owncloud/web/issues/7699
   https://github.com/owncloud/web/pull/7733

* Bugfix - Resolve upload existing folder: [#7504](https://github.com/owncloud/web/pull/7504)

   We've added a conflict dialog which handles name clashes when uploading files and folders.

   https://github.com/owncloud/web/issues/6996
   https://github.com/owncloud/web/pull/7504

* Bugfix - Routing for re-shares: [#7771](https://github.com/owncloud/web/pull/7771)

   We've fixed a bug where routing into re-shares and their parent folders from the "Shared with
   others/via link" page was broken.

   https://github.com/owncloud/web/issues/7347
   https://github.com/owncloud/web/pull/7771
   https://github.com/owncloud/web/pull/7790

* Bugfix - Search bar on small screens: [#7675](https://github.com/owncloud/web/pull/7675)

   We've fixed the display of the search bar on small screens.

   https://github.com/owncloud/web/issues/7617
   https://github.com/owncloud/web/pull/7675

* Bugfix - Sidebar for received shares in search file list: [#7662](https://github.com/owncloud/web/pull/7662)

   We've fixed a bug where the sidebar for received shares in the search file list was broken.

   https://github.com/owncloud/web/issues/7661
   https://github.com/owncloud/web/pull/7662

* Bugfix - Share editing after selecting a space: [#7873](https://github.com/owncloud/web/pull/7873)

   We've fixed a bug where editing or deleting shares in the personal space was not possible if a
   project space was selected previously.

   https://github.com/owncloud/web/issues/7872
   https://github.com/owncloud/web/pull/7873

* Bugfix - Share permissions for re-shares: [#7657](https://github.com/owncloud/web/issues/7657)

   We've fixed a bug where the selectable roles on a re-share could exceed the parent share's
   permissions in certain scenarios.

   https://github.com/owncloud/web/issues/7657
   https://github.com/owncloud/web/pull/7844

* Bugfix - Shares loading: [#7506](https://github.com/owncloud/web/issues/7506)

   We've improved the loading of shares:

   * Share loading now happens more globally in the sidebar component instead of in each sidebar
   panel. * Shares won't be loaded for resources without a path anymore, which massively
   increases performance. * Several issues with (re-)share permissions have been fixed. *
   `loadCurrentFileOutgoingShares` and `loadIncomingShares` mutations have been removed.
   Instead, incoming and outgoing shares are now being loaded via `loadSharesTree()`. This
   avoids `getShare()` requests from being executed multiple times. * Space member loading has
   been decoupled from shares loading in store. This reduces fetching of space members to a
   minimum and improves the structure of the code. * Reactive loading of share indicators in
   sidebar details panel has been fixed. * Reactive loading of space member count in the spaces
   overview has been fixed. * Loading of indirect shares within spaces has been fixed.

   https://github.com/owncloud/web/issues/7506
   https://github.com/owncloud/web/issues/7593
   https://github.com/owncloud/web/issues/7592
   https://github.com/owncloud/web/pull/7580
   https://github.com/owncloud/web/pull/7638
   https://github.com/owncloud/web/pull/7656
   https://github.com/owncloud/web/pull/7668

* Bugfix - Sidebar toggle icon: [#7632](https://github.com/owncloud/web/pull/7632)

   We've fixed a bug where the sidebar toggle icon would not detect the "open"-state of the
   sidebar.

   https://github.com/owncloud/web/pull/7632

* Bugfix - Sidebar without highlighted resource: [#7781](https://github.com/owncloud/web/issues/7781)

   Sidebar panels that require a resource now won't be loaded without such. This fixes a bug where
   navigating with an open sidebar would break it.

   https://github.com/owncloud/web/issues/7781
   https://github.com/owncloud/web/pull/7826

* Bugfix - Try to obtain refresh token before the error case: [#7756](https://github.com/owncloud/web/pull/7756)

   We've added a fallback strategy to try to revive the refresh token one more last time. This is for
   the rare case where the application is running in the background and the browsers throttles the
   token refresh mechanism.

   https://github.com/owncloud/web/pull/7756

* Bugfix - Hide actions in space trash bins: [#7768](https://github.com/owncloud/web/pull/7768)

   Actions in space trash bins are now hidden if the current user has insufficient permissions.

   https://github.com/owncloud/web/issues/7702
   https://github.com/owncloud/web/pull/7768

* Bugfix - Spaces on "Shared via link"-page: [#7651](https://github.com/owncloud/web/pull/7651)

   Spaces on the "Shared via link"-page are now being displayed correctly. Also, the sidebar for
   those has been fixed.

   https://github.com/owncloud/web/issues/7103
   https://github.com/owncloud/web/issues/7741
   https://github.com/owncloud/web/issues/7869
   https://github.com/owncloud/web/pull/7651
   https://github.com/owncloud/web/pull/7742
   https://github.com/owncloud/web/pull/7870

* Bugfix - Spaces reactivity on update: [#7521](https://github.com/owncloud/web/issues/7521)

   We've fixed a bug where updated data for a space would not show up in the UI before reloading.

   https://github.com/owncloud/web/issues/7521
   https://github.com/owncloud/web/issues/7782
   https://github.com/owncloud/web/pull/7546
   https://github.com/owncloud/web/pull/7818

* Bugfix - Display error messages in text editor: [#7960](https://github.com/owncloud/web/issues/7960)

   Error messages in and when leaving the text editor are now being displayed properly.

   https://github.com/owncloud/web/issues/7960
   https://github.com/owncloud/web/pull/8001

* Bugfix - Saving a file multiple times with the text editor: [#8030](https://github.com/owncloud/web/pull/8030)

   An issue with saving a file multiple times via text editor has been fixed.

   https://github.com/owncloud/web/issues/8029
   https://github.com/owncloud/web/pull/8030

* Bugfix - Trash bin sidebar: [#7778](https://github.com/owncloud/web/issues/7778)

   We've fixed the sidebar in the trash bin which was throwing errors and not showing the right
   content.

   https://github.com/owncloud/web/issues/7778
   https://github.com/owncloud/web/pull/7787

* Bugfix - Introduce "upload finalizing"-state in upload overlay: [#7956](https://github.com/owncloud/web/issues/7956)

   The "upload finalizing"-state has been introduced to the upload overlay. This state is
   relevant during the time window when all data has been transferred to the server (= progress bar
   is at 100%), but the server still needs to write all data to the storage.

   The "cancel"- and "pause"-actions are disabled during the "upload finalizing"-state as the
   data transfer is technically finished. Previously, when pausing and resuming when being in
   this state, the upload would be marked as successful instantly, despite the server still
   writing to the storage.

   https://github.com/owncloud/web/issues/7956
   https://github.com/owncloud/web/pull/7974
   https://github.com/owncloud/web/pull/7999

* Bugfix - Upload modify time: [#7630](https://github.com/owncloud/web/pull/7630)

   We've included the `x-oc-mtime` header in upload requests to tell the backend the proper
   modify date of uploaded resources.

   https://github.com/owncloud/web/issues/7628
   https://github.com/owncloud/web/pull/7630
   https://github.com/owncloud/web/pull/7641

* Bugfix - Prevent unnecessary request when saving a user: [#8011](https://github.com/owncloud/web/issues/8011)

   We've fixed a bug where changing the role of a user without changing any other data would cause an
   unnecessary request.

   https://github.com/owncloud/web/issues/8011
   https://github.com/owncloud/web/pull/8013

* Bugfix - Versions on the "Shared with me"-page: [#7989](https://github.com/owncloud/web/pull/7989)

   Downloading and reverting versions on the "Shared with me"-page has been fixed.

   https://github.com/owncloud/web/issues/7980
   https://github.com/owncloud/web/pull/7989

* Change - Drive aliases in URLs: [#6648](https://github.com/owncloud/web/issues/6648)

   We changed the URL format to not use storageIds in the URL path anymore to identify spaces, but
   instead use drive aliases of spaces in the URL path.

   BREAKING CHANGE for users: this breaks existing bookmarks - they won't resolve anymore.
   BREAKING CHANGE for developers: the appDefaults composables from web-pkg now work with drive
   aliases, concatenated with relative item paths, instead of webdav paths. If you use the
   appDefaults composables in your application it's likely that your code needs to be adapted.

   https://github.com/owncloud/web/issues/6648
   https://github.com/owncloud/web/pull/7430
   https://github.com/owncloud/web/pull/7791

* Change - Remove mediaSource and v-image-source: [#7935](https://github.com/owncloud/web/pull/7935)

   We have removed the deprecated `mediaSource` helper function and the `v-image-source`
   directive.

   BREAKING CHANGE for developers: `mediaSource` and `v-image-source` are not available
   anymore, `loadPreview` should be used once web-pkg is published.

   https://github.com/owncloud/web/issues/7338
   https://github.com/owncloud/web/pull/7935
   https://github.com/owncloud/web/pull/7072
   https://github.com/owncloud/web/pull/7350

* Enhancement - Add restore conflict dialog: [#7635](https://github.com/owncloud/web/pull/7635)

   We've added conflict handling for restoring files from the trashbin

   https://github.com/owncloud/web/issues/1753
   https://github.com/owncloud/web/pull/7635

* Enhancement - Add search field for space members: [#7901](https://github.com/owncloud/web/pull/7901)

   We've added a search field for space members, so the user can easily filter for existing space
   members.

   https://github.com/owncloud/web/issues/7746
   https://github.com/owncloud/web/pull/7901

* Enhancement - Add `X-Request-ID` header to all outgoing requests: [#4675](https://github.com/owncloud/web/issues/4675)

   `X-Request-ID` headers have been added to all outgoing requests to make the tracing of
   requests easier.

   https://github.com/owncloud/web/issues/4675
   https://github.com/owncloud/web/pull/7800

* Enhancement - Batch actions for two or more items only: [#7904](https://github.com/owncloud/web/pull/7904)

   Batch actions are now only being displayed if two or more items are selected.

   https://github.com/owncloud/web/pull/7904

* Enhancement - Respect the new sharing denials capability (experimental): [#7892](https://github.com/owncloud/web/pull/7892)

   The oCIS backend has added a new capability, files_sharing.enable_denials, which announces
   to clients if the experimental "No access" sharing role is supposed to be available. This
   capability is now respected by web, so that users only see the experimental "No access" role if
   the backend allows it.

   https://github.com/owncloud/web/pull/7892
   https://github.com/owncloud/ocis/pull/4903

* Enhancement - Edit custom permissions wording: [#7709](https://github.com/owncloud/web/pull/7709)

   We've changed the custom permission wording from 'update' to 'edit'

   https://github.com/owncloud/web/issues/7703
   https://github.com/owncloud/web/pull/7709

* Enhancement - Align dark mode colors with given design: [#7373](https://github.com/owncloud/web/issues/7373)

   The colors in the dark mode have been aligned with the given design. This improves the overall
   look and readability.

   https://github.com/owncloud/web/issues/7373
   https://github.com/owncloud/web/issues/7353
   https://github.com/owncloud/web/issues/7738
   https://github.com/owncloud/web/pull/7862

* Enhancement - Deny subfolders inside share: [#7190](https://github.com/owncloud/web/pull/7190)

   Sub-folders within user- and group-shares can now be denied for certain share receivers if the
   backend is capable of negative ACLs. Please note that the state of this feature is experimental
   and needs to be enabled in the backend.

   https://github.com/owncloud/web/issues/7180
   https://github.com/owncloud/web/pull/7190

* Enhancement - Design polishing: [#7684](https://github.com/owncloud/web/pull/7684)

   We've polished the overall design, especially spacings and the spaces-views.

   https://github.com/owncloud/web/issues/6705
   https://github.com/owncloud/web/issues/7676
   https://github.com/owncloud/web/issues/7525
   https://github.com/owncloud/web/issues/7693
   https://github.com/owncloud/web/issues/7694
   https://github.com/owncloud/web/issues/7685
   https://github.com/owncloud/web/issues/7693
   https://github.com/owncloud/web/issues/7773
   https://github.com/owncloud/web/pull/7684

* Enhancement - Disable share renaming: [#7865](https://github.com/owncloud/web/pull/7865)

   Renaming of shares has been disabled temporarily until it works as expected.

   https://github.com/owncloud/web/pull/7865

* Enhancement - Enable renaming on received shares: [#7725](https://github.com/owncloud/web/pull/7725)

   As a receiver the user can rename a share which will only take effect for the respective user but
   won't change the name for the sharee or other share receivers.

   https://github.com/owncloud/web/issues/6247
   https://github.com/owncloud/web/pull/7725

* Enhancement - Friendlier logout screen: [#7747](https://github.com/owncloud/web/pull/7747)

   We have updated the message and layout of the logout screen to make it a more pleasant user
   experience.

   https://github.com/owncloud/web/issues/7744
   https://github.com/owncloud/web/pull/7747

* Enhancement - Id based routing: [#6247](https://github.com/owncloud/web/issues/6247)

   We now include fileIds in the URL query to be able to - resolve files and spaces correctly and -
   resolve the correct relative path of a file if it was changed (this might be the case for
   bookmarks) The fileIds in the URL can be disabled by setting `options.routing.idBased` to
   `false` in the `config.json`.

   Note: It's recommended to keep the default of fileIds being used in routing. Otherwise it's not
   possible to resolve spaces with name clashes correctly.

   https://github.com/owncloud/web/issues/6247
   https://github.com/owncloud/web/issues/7714
   https://github.com/owncloud/web/issues/7715
   https://github.com/owncloud/web/pull/7725
   https://github.com/owncloud/web/pull/7797

* Enhancement - Internal link on unaccepted share: [#7803](https://github.com/owncloud/web/issues/7803)

   The error message when resolving an internal link to an unaccepted share has been improved for a
   better UX.

   https://github.com/owncloud/web/issues/7803
   https://github.com/owncloud/web/pull/7814

* Enhancement - Resolve internal links: [#7304](https://github.com/owncloud/web/issues/7304)

   Public links with the role "internal" can now be resolved.

   https://github.com/owncloud/web/issues/7304
   https://github.com/owncloud/web/issues/6844
   https://github.com/owncloud/web/pull/7405
   https://github.com/owncloud/web/pull/7769

* Enhancement - Make keybindings global: [#7569](https://github.com/owncloud/web/pull/7569)

   We've made keybindings global and introduced a data-attribute to mark elements that need
   custom keybindings

   https://github.com/owncloud/web/pull/7569
   https://github.com/owncloud/web/pull/7648
   https://github.com/owncloud/web/pull/7735

* Enhancement - Optimize email validation in the user management app: [#7894](https://github.com/owncloud/web/pull/7894)

   We've optimized the email validation process while creating users in the user management app
   to provide a better user experience.

   https://github.com/owncloud/web/issues/7806
   https://github.com/owncloud/web/pull/7894

* Enhancement - Resolve private links: [#7707](https://github.com/owncloud/web/issues/7707)

   Private links can now be resolved.

   https://github.com/owncloud/web/issues/7707
   https://github.com/owncloud/web/pull/7405
   https://github.com/owncloud/web/pull/7769

* Enhancement - Auth context in route meta props: [#7234](https://github.com/owncloud/web/issues/7234)

   The route meta prop has been extended by a new "meta.authContext" property (can be one out of
   "anonymous", "user", "publicLink" or "hybrid"). With this, app developers can now define
   anonymous routes, which was hardcoded to a few well known route names before. Anonymous routes
   are rendered in the application layout, i.e. with the top bar, as the ownCloud Web Chrome should
   always be visible to the user (except for a few handpicked exceptions in the web runtime, which
   are still rendered in the plain layout).

   https://github.com/owncloud/web/issues/7234
   https://github.com/owncloud/web/issues/7863
   https://github.com/owncloud/web/pull/7874

* Enhancement - Improve search experience: [#7821](https://github.com/owncloud/web/pull/7821)

   We've improved the overall search experience with following points: * increase search typing
   debounce to 500ms * send search requests only once on reloads * update search preview results on
   activation

   https://github.com/owncloud/web/pull/7821

* Enhancement - Make search results sortable: [#7801](https://github.com/owncloud/web/pull/7801)

   The files table on the search-result-page is now sortable.

   https://github.com/owncloud/web/issues/7798
   https://github.com/owncloud/web/pull/7801

* Enhancement - Update ODS to v14.0.1: [#8028](https://github.com/owncloud/web/pull/8028)

   We updated the ownCloud Design System to version 14.0.1. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   * Bugfix - Omit special characters in user avatar initials:
   [#2070](https://github.com/owncloud/owncloud-design-system/issues/2070) * Bugfix -
   Avatar link icon:
   [#2269](https://github.com/owncloud/owncloud-design-system/pull/2269) * Bugfix -
   Firefox drag & drop move of folders not possible:
   [#7495](https://github.com/owncloud/web/issues/7495) * Bugfix - Lazy loading render
   performance:
   [#2260](https://github.com/owncloud/owncloud-design-system/pull/2260) * Bugfix -
   Remove width shrinking of the ocAvatarItem:
   [#2241](https://github.com/owncloud/owncloud-design-system/issues/2241) * Bugfix -
   Remove click event on OcIcon:
   [#2216](https://github.com/owncloud/owncloud-design-system/pull/2216) * Bugfix -
   Modal input message overlays with buttons:
   [#2343](https://github.com/owncloud/owncloud-design-system/pull/2343) * Change -
   Redesign contextual helper:
   [#2271](https://github.com/owncloud/owncloud-design-system/pull/2271) * Change -
   Remove OcAlert component:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) * Change -
   Remove transition animations:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) * Change -
   Revamp animations:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) * Change -
   OcTable emit event data on row click:
   [#2218](https://github.com/owncloud/owncloud-design-system/pull/2218) *
   Enhancement - Add nestedd drop functionality:
   [#2238](https://github.com/owncloud/owncloud-design-system/issues/2238) *
   Enhancement - Add OcInfoDrop:
   [#2286](https://github.com/owncloud/owncloud-design-system/pull/2286) *
   Enhancement - Add rounded prop to OcTag:
   [#2284](https://github.com/owncloud/owncloud-design-system/pull/2284) *
   Enhancement - Adjust avatar font weight from bold to normal:
   [#2275](https://github.com/owncloud/owncloud-design-system/pull/2275) *
   Enhancement - Align breadcrumb context menu with regular context menu:
   [#2296](https://github.com/owncloud/owncloud-design-system/pull/2296) *
   Enhancement - OcCheckbox add outline:
   [#2218](https://github.com/owncloud/owncloud-design-system/pull/2218) *
   Enhancement - Add offset property to the drop component:
   [#7335](https://github.com/owncloud/web/issues/7335) * Enhancement - Make UI smaller:
   [#2270](https://github.com/owncloud/owncloud-design-system/pull/2270) *
   Enhancement - Oc-card style:
   [#2306](https://github.com/owncloud/owncloud-design-system/pull/2306) *
   Enhancement - OcSelect dark mode improvements:
   [#2262](https://github.com/owncloud/owncloud-design-system/pull/2262) *
   Enhancement - Progress bar indeterminate state:
   [#2200](https://github.com/owncloud/owncloud-design-system/pull/2200) *
   Enhancement - Redesign notifications:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) *
   Enhancement - Use Inter font:
   [#2270](https://github.com/owncloud/owncloud-design-system/pull/2270) *
   Enhancement - Button text align left:
   [#2323](https://github.com/owncloud/owncloud-design-system/pull/2323) *
   Enhancement - "Cancel"-button and -handler in OcSearchBar:
   [#2328](https://github.com/owncloud/owncloud-design-system/pull/2328) *
   Enhancement - Adjust breadcrumb spacing:
   [#2329](https://github.com/owncloud/owncloud-design-system/pull/2329) *
   Enhancement - Remove border on buttons:
   [#2345](https://github.com/owncloud/owncloud-design-system/pull/2345) *
   Enhancement - Input background color:
   [#2352](https://github.com/owncloud/owncloud-design-system/pull/2352)

   https://github.com/owncloud/web/pull/8028
   https://github.com/owncloud/owncloud-design-system/releases/tag/v14.0.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v14.0.1

* Enhancement - Validate space names: [#7890](https://github.com/owncloud/web/pull/7890)

   Spaces names are now being validated when creating or renaming spaces. The following special
   characters are not allowed: / \ . : ? * " > < |

   https://github.com/owncloud/web/pull/7890

* Enhancement - Webdav support in web-client package: [#7430](https://github.com/owncloud/web/pull/7430)

   Only relevant for developers: We've added webdav support to the `web-client` package. This
   wraps the existing webdav requests from ownCloud SDK but handles the differentiation of
   public link and user-specific webdav requests internally.

   https://github.com/owncloud/web/pull/7430
   https://github.com/owncloud/web/pull/7880

* Enhancement - XHR upload timeout: [#7900](https://github.com/owncloud/web/issues/7900)

   The default timeout for XHR uploads has been increased from 30 to 60 seconds. Also, it can now be
   configured via the `config.json` file (in ms).

   https://github.com/owncloud/web/issues/7900
   https://github.com/owncloud/web/pull/7912

Changelog for ownCloud Web [5.7.0] (2022-09-09)
=======================================
The following sections list the changes in ownCloud web 5.7.0 relevant to
ownCloud admins and users.

[5.7.0]: https://github.com/owncloud/web/compare/v5.6.1...v5.7.0

Summary
-------

* Bugfix - Add Droparea again: [#7080](https://github.com/owncloud/web/issues/7080)
* Bugfix - Allow uploads outside of user's home despite quota being exceeded: [#7522](https://github.com/owncloud/web/pull/7522)
* Bugfix - Batch deleting multiple files: [#7357](https://github.com/owncloud/web/pull/7357)
* Bugfix - Context menu misplaced when triggered by keyboard navigation: [#7230](https://github.com/owncloud/web/pull/7230)
* Bugfix - Datetime formatting: [#7443](https://github.com/owncloud/web/pull/7443)
* Bugfix - Decline share not possible: [#7379](https://github.com/owncloud/web/pull/7379)
* Bugfix - Default to user context: [#7437](https://github.com/owncloud/web/pull/7437)
* Bugfix - Dragging a file causes no selection: [#7473](https://github.com/owncloud/web/pull/7473)
* Bugfix - Prevent error when pasting with empty clipboard: [#7214](https://github.com/owncloud/web/pull/7214)
* Bugfix - Expiration date picker with long language codes: [#7622](https://github.com/owncloud/web/issues/7622)
* Bugfix - Re-introduce dynamic app name in document title: [#7173](https://github.com/owncloud/web/pull/7173)
* Bugfix - External apps fixes: [#7166](https://github.com/owncloud/web/pull/7166)
* Bugfix - File name in text editor: [#7516](https://github.com/owncloud/web/pull/7516)
* Bugfix - File size not updated while restoring file version: [#7469](https://github.com/owncloud/web/pull/7469)
* Bugfix - Files pagination scroll to top: [#7322](https://github.com/owncloud/web/pull/7322)
* Bugfix - File size formatting: [#7443](https://github.com/owncloud/web/pull/7443)
* Bugfix - Fix right sidebar content on small screens: [#7498](https://github.com/owncloud/web/issues/7498)
* Bugfix - Hide empty trash bin modal on error: [#7248](https://github.com/owncloud/web/pull/7248)
* Bugfix - Improve keyboard shortcuts copy/cut files: [#7455](https://github.com/owncloud/web/issues/7455)
* Bugfix - Paste action (keyboard) not working in project spaces: [#7510](https://github.com/owncloud/web/issues/7510)
* Bugfix - Left sidebar active navigation item has wrong cursor: [#7348](https://github.com/owncloud/web/pull/7348)
* Bugfix - Left sidebar when switching apps: [#7526](https://github.com/owncloud/web/issues/7526)
* Bugfix - Link indicator on "Shared via link"-page: [#7355](https://github.com/owncloud/web/pull/7355)
* Bugfix - Load only supported thumbnails (configurable): [#7474](https://github.com/owncloud/web/pull/7474)
* Bugfix - Loading state in views: [#7325](https://github.com/owncloud/web/pull/7325)
* Bugfix - Logout deleted user on page reload: [#4677](https://github.com/owncloud/web/issues/4677)
* Bugfix - Merge share with group and group member into one: [#7582](https://github.com/owncloud/web/issues/7582)
* Bugfix - Missing file icon in details panel: [#7344](https://github.com/owncloud/web/pull/7344)
* Bugfix - Missing scroll bar in user management app: [#7321](https://github.com/owncloud/web/pull/7321)
* Bugfix - SidebarNavItem icon flickering: [#7309](https://github.com/owncloud/web/pull/7309)
* Bugfix - No redirect after disabling space: [#7334](https://github.com/owncloud/web/pull/7334)
* Bugfix - Don't leak oidc callback url into browser history: [#3071](https://github.com/owncloud/web/issues/3071)
* Bugfix - Open file on shared space resource not possible: [#7379](https://github.com/owncloud/web/pull/7379)
* Bugfix - Open Folder in project space context menu: [#7425](https://github.com/owncloud/web/pull/7425)
* Bugfix - Personal shares leaked into project space: [#7268](https://github.com/owncloud/web/issues/7268)
* Bugfix - Prevent unnecessary PROPFIND request during upload: [#7486](https://github.com/owncloud/web/issues/7486)
* Bugfix - Filename hovers over the image in the preview app: [#7216](https://github.com/owncloud/web/pull/7216)
* Bugfix - Fix infinite loading spinner on invalid preview links: [#7359](https://github.com/owncloud/web/pull/7359)
* Bugfix - Print backend version: [#7272](https://github.com/owncloud/web/issues/7272)
* Bugfix - Quicklinks not shown: [#7424](https://github.com/owncloud/web/pull/7424)
* Bugfix - Re-fetch quota: [#7415](https://github.com/owncloud/web/pull/7415)
* Bugfix - Redirect after removing self from space members: [#7534](https://github.com/owncloud/web/issues/7534)
* Bugfix - Rename shared space resource not possible: [#7379](https://github.com/owncloud/web/pull/7379)
* Bugfix - Repair navigation highlighter: [#7210](https://github.com/owncloud/web/pull/7210)
* Bugfix - Search share representation: [#7560](https://github.com/owncloud/web/pull/7560)
* Bugfix - Selected item bottom glue: [#7393](https://github.com/owncloud/web/pull/7393)
* Bugfix - "Shared via"-indicator for links: [#7478](https://github.com/owncloud/web/issues/7478)
* Bugfix - "Shared with others" and "Shared via Link" resource links not working: [#7308](https://github.com/owncloud/web/pull/7308)
* Bugfix - Shared with others page apps not working with oc10 as backend: [#7228](https://github.com/owncloud/web/pull/7228)
* Bugfix - Sidebar for current folder: [#7519](https://github.com/owncloud/web/issues/7519)
* Bugfix - Create space and access user management permission: [#7197](https://github.com/owncloud/web/pull/7197)
* Bugfix - Missing space image in sidebar: [#7480](https://github.com/owncloud/web/issues/7480)
* Bugfix - Respect space quota permission: [#7400](https://github.com/owncloud/web/issues/7400)
* Bugfix - Hide share actions for space viewers/editors: [#7436](https://github.com/owncloud/web/issues/7436)
* Bugfix - Space sidebar sharing indicators: [#6921](https://github.com/owncloud/web/pull/6921)
* Bugfix - Missing quick actions in spaces file list: [#7349](https://github.com/owncloud/web/pull/7349)
* Bugfix - Add storage ID when navigating to a shared parent directory: [#7396](https://github.com/owncloud/web/pull/7396)
* Bugfix - Stuck After Session Expired: [#7453](https://github.com/owncloud/web/issues/7453)
* Bugfix - Suppress active panel error log: [#7394](https://github.com/owncloud/web/pull/7394)
* Bugfix - File list render performance: [#7038](https://github.com/owncloud/web/issues/7038)
* Bugfix - Access token renewal: [#7030](https://github.com/owncloud/web/issues/7030)
* Bugfix - Access token renewal during upload: [#7240](https://github.com/owncloud/web/issues/7240)
* Bugfix - Tooltips not shown on disabled create and upload button: [#7376](https://github.com/owncloud/web/pull/7376)
* Bugfix - Typo when reading public links capabilities: [#7595](https://github.com/owncloud/web/pull/7595)
* Bugfix - Upload overlay progress bar spacing: [#7297](https://github.com/owncloud/web/pull/7297)
* Bugfix - User management app close side bar throws error: [#7445](https://github.com/owncloud/web/pull/7445)
* Bugfix - Users list not loading if user has no role: [#7332](https://github.com/owncloud/web/pull/7332)
* Bugfix - Versions of shared files not visible: [#7313](https://github.com/owncloud/web/pull/7313)
* Enhancement - Add app top bar component: [#7217](https://github.com/owncloud/web/pull/7217)
* Enhancement - Add Keyboard navigation/selection: [#7153](https://github.com/owncloud/web/pull/7153)
* Enhancement - Adjust helper texts: [#7404](https://github.com/owncloud/web/pull/7404)
* Enhancement - Loading context blocks application bootstrap: [#7030](https://github.com/owncloud/web/issues/7030)
* Enhancement - Change file loading mechanism in `preview` app: [#7350](https://github.com/owncloud/web/pull/7350)
* Enhancement - Add change own password dialog to the account info page: [#7206](https://github.com/owncloud/web/pull/7206)
* Enhancement - Declined shares are now easily accessible: [#7356](https://github.com/owncloud/web/pull/7356)
* Enhancement - Drop menu styling in right sidebar: [#7365](https://github.com/owncloud/web/pull/7365)
* Enhancement - Adjust spacing of the files list options menu: [#7570](https://github.com/owncloud/web/pull/7570)
* Enhancement - Keyboard shortcut indicators in ContextMenu: [#7309](https://github.com/owncloud/web/pull/7309)
* Enhancement - Left sidebar hover effect: [#7540](https://github.com/owncloud/web/issues/7540)
* Enhancement - Lowlight cut resources: [#7309](https://github.com/owncloud/web/pull/7309)
* Enhancement - Re-sharing for ocis: [#7086](https://github.com/owncloud/web/pull/7086)
* Enhancement - Added a toolbar to pdf-viewer app: [#7201](https://github.com/owncloud/web/pull/7201)
* Enhancement - Permissionless (internal) link shares: [#7133](https://github.com/owncloud/web/pull/7133)
* Enhancement - Propose unique file name while creating a new file: [#7555](https://github.com/owncloud/web/pull/7555)
* Enhancement - Redesign shared with list: [#7252](https://github.com/owncloud/web/pull/7252)
* Enhancement - Reduce pagination options: [#7038](https://github.com/owncloud/web/issues/7038)
* Enhancement - Remember the UI that was last selected via the application switcher: [#6173](https://github.com/owncloud/web/pull/6173)
* Enhancement - Remove clickOutside directive: [#7584](https://github.com/owncloud/web/pull/7584)
* Enhancement - Replace locationpicker with clipboard actions: [#7309](https://github.com/owncloud/web/pull/7309)
* Enhancement - Reposition notifications: [#7139](https://github.com/owncloud/web/pull/7139)
* Enhancement - Resolve bookmarked public links with password protection: [#7030](https://github.com/owncloud/web/issues/7030)
* Enhancement - Add resource name to the WebDAV properties: [#7485](https://github.com/owncloud/web/pull/7485)
* Enhancement - Use fixed width for the right sidebar: [#7371](https://github.com/owncloud/web/pull/7371)
* Enhancement - Don't open right sidebar from private links: [#7559](https://github.com/owncloud/web/pull/7559)
* Enhancement - Search all files announce limit: [#7267](https://github.com/owncloud/web/pull/7267)
* Enhancement - Search improvements: [#7586](https://github.com/owncloud/web/pull/7586)
* Enhancement - Improve performance of share indicators: [#7038](https://github.com/owncloud/web/issues/7038)
* Enhancement - Sharing panel show label instead of description for links: [#7364](https://github.com/owncloud/web/pull/7364)
* Enhancement - Simplify mime type checking: [#7605](https://github.com/owncloud/web/pull/7605)
* Enhancement - Streamline UI sizings: [#7363](https://github.com/owncloud/web/pull/7363)
* Enhancement - Option to block file extensions from text-editor app: [#6661](https://github.com/owncloud/web/issues/6661)
* Enhancement - Update ODS to v14.0.0-alpha.18: [#7626](https://github.com/owncloud/web/pull/7626)
* Enhancement - Update Uppy to v3.0.1: [#7177](https://github.com/owncloud/web/issues/7177)
* Enhancement - User management app saved dialog: [#7375](https://github.com/owncloud/web/pull/7375)
* Enhancement - User management app edit quota: [#7182](https://github.com/owncloud/web/pull/7182)
* Enhancement - Introduce group assignments: [#7176](https://github.com/owncloud/web/pull/7176)
* Enhancement - Users table on small screen: [#7476](https://github.com/owncloud/web/pull/7476)

Details
-------

* Bugfix - Add Droparea again: [#7080](https://github.com/owncloud/web/issues/7080)

   We've added the visual droparea again to indicate drag and drop upload

   https://github.com/owncloud/web/issues/7080
   https://github.com/owncloud/web/pull/7251

* Bugfix - Allow uploads outside of user's home despite quota being exceeded: [#7522](https://github.com/owncloud/web/pull/7522)

   We've fixed a bug where a user was not able to upload a file in a share or space when the personal
   home quota was exceeded. We also show a message in the upload details if an upload to a share fails
   because the share owner's quota is exceeded.

   https://github.com/owncloud/web/issues/6318
   https://github.com/owncloud/web/issues/5817
   https://github.com/owncloud/web/pull/7522

* Bugfix - Batch deleting multiple files: [#7357](https://github.com/owncloud/web/pull/7357)

   We've fixed a bug where deleting many files in a batch action would fail.

   https://github.com/owncloud/web/issues/7329
   https://github.com/owncloud/web/pull/7357

* Bugfix - Context menu misplaced when triggered by keyboard navigation: [#7230](https://github.com/owncloud/web/pull/7230)

   We've fixed a bug where triggering the context menu by keyboard navigation misplaced the menu
   and made it inaccessible.

   https://github.com/owncloud/web/issues/7187
   https://github.com/owncloud/web/pull/7230
   https://github.com/owncloud/web/pull/7314
   https://github.com/owncloud/web/pull/7386

* Bugfix - Datetime formatting: [#7443](https://github.com/owncloud/web/pull/7443)

   We've adjusted date time formatting to show a less verbose format (e.g. hiding the time zone and
   using month abbreviations).

   https://github.com/owncloud/web/issues/7336
   https://github.com/owncloud/web/pull/7443

* Bugfix - Decline share not possible: [#7379](https://github.com/owncloud/web/pull/7379)

   We've fixed a bug where declining an accepted share in the dropdown next to the breadcrumb was
   not possible.

   https://github.com/owncloud/web/issues/6899
   https://github.com/owncloud/web/pull/7379

* Bugfix - Default to user context: [#7437](https://github.com/owncloud/web/pull/7437)

   We've fixed a bug where routes without explicit `auth` requirement (i.e. user context) and
   without any context route in the URL were recognized as neither user-context nor
   public-link-context. In such situations we now expect that the session requires a user and
   redirect to the login page.

   https://github.com/owncloud/web/pull/7437

* Bugfix - Dragging a file causes no selection: [#7473](https://github.com/owncloud/web/pull/7473)

   We've fixed a bug that caused no selection when dragging a file.

   https://github.com/owncloud/web/pull/7473

* Bugfix - Prevent error when pasting with empty clipboard: [#7214](https://github.com/owncloud/web/pull/7214)

   We've fixed a bug where an error was thrown when pasting with empty clipboard

   https://github.com/owncloud/web/issues/7146
   https://github.com/owncloud/web/pull/7214

* Bugfix - Expiration date picker with long language codes: [#7622](https://github.com/owncloud/web/issues/7622)

   We've fixed a bug where the expiration date picker in the sharing sidebar wouldn't open if the
   user selected a language with long language code, e.g. de_DE.

   https://github.com/owncloud/web/issues/7622
   https://github.com/owncloud/web/pull/7623

* Bugfix - Re-introduce dynamic app name in document title: [#7173](https://github.com/owncloud/web/pull/7173)

   The `external` app was missing the dynamic app name after some recent refactoring. It has been
   reintroduced.

   https://github.com/owncloud/web/pull/7173

* Bugfix - External apps fixes: [#7166](https://github.com/owncloud/web/pull/7166)

   Bug introduced in #6870. A method used to communicate with the backend was not properly added to
   the extension after being moved to a different location.

   https://github.com/owncloud/web/pull/7166
   https://github.com/owncloud/web/pull/7173

* Bugfix - File name in text editor: [#7516](https://github.com/owncloud/web/pull/7516)

   We've fixed a bug in the text editor where the UUID of a shared resource was being displayed
   instead of the file name.

   https://github.com/owncloud/web/issues/7292
   https://github.com/owncloud/web/pull/7516
   https://github.com/owncloud/web/pull/7518

* Bugfix - File size not updated while restoring file version: [#7469](https://github.com/owncloud/web/pull/7469)

   We've fixed a bug where the file size was not updated in the files table or side bar while
   restoring a file version.

   https://github.com/owncloud/web/issues/7438
   https://github.com/owncloud/web/pull/7469

* Bugfix - Files pagination scroll to top: [#7322](https://github.com/owncloud/web/pull/7322)

   We've fixed a bug where changing the page in a file list (pagination) doesn't scroll to top.

   https://github.com/owncloud/web/issues/7138
   https://github.com/owncloud/web/pull/7322

* Bugfix - File size formatting: [#7443](https://github.com/owncloud/web/pull/7443)

   We've fixed file size formatting to respect the language setting of the user.

   https://github.com/owncloud/web/pull/7443

* Bugfix - Fix right sidebar content on small screens: [#7498](https://github.com/owncloud/web/issues/7498)

   We've fixed the right sidebar content on small screens because some screen sizes caused the
   content to flow out of the screen. Things that have been done to achieve this:

   * Selection info has been removed. * Labels of the batch actions will hide on screens <1280px if
   the sidebar is open.

   https://github.com/owncloud/web/issues/7498
   https://github.com/owncloud/web/pull/7508

* Bugfix - Hide empty trash bin modal on error: [#7248](https://github.com/owncloud/web/pull/7248)

   We've fixed a bug where the empty trash bin modal was shown if an error occurred.

   https://github.com/owncloud/web/issues/7129
   https://github.com/owncloud/web/pull/7248

* Bugfix - Improve keyboard shortcuts copy/cut files: [#7455](https://github.com/owncloud/web/issues/7455)

   We've changed the Ctrl+X message to 'Cut to Clipboard' from 'Copied to Clipboard'

   https://github.com/owncloud/web/issues/7455
   https://github.com/owncloud/web/pull/7492

* Bugfix - Paste action (keyboard) not working in project spaces: [#7510](https://github.com/owncloud/web/issues/7510)

   We've fixed a bug which caused the user to be unable to paste in project spaces.

   https://github.com/owncloud/web/issues/7510
   https://github.com/owncloud/web/pull/7514

* Bugfix - Left sidebar active navigation item has wrong cursor: [#7348](https://github.com/owncloud/web/pull/7348)

   We've fixed a bug where the active navigation item in the left sidebar had the wrong cursor and
   pretended to be not clickable.

   https://github.com/owncloud/web/issues/7343
   https://github.com/owncloud/web/pull/7348

* Bugfix - Left sidebar when switching apps: [#7526](https://github.com/owncloud/web/issues/7526)

   We've fixed a bug where the active state of the left sidebar would glitch visually when
   switching apps.

   https://github.com/owncloud/web/issues/7526
   https://github.com/owncloud/web/pull/7529

* Bugfix - Link indicator on "Shared via link"-page: [#7355](https://github.com/owncloud/web/pull/7355)

   We've fixed the icon and the sidebar for the link indicator on the "Shared via link"-page.

   https://github.com/owncloud/web/issues/7345
   https://github.com/owncloud/web/pull/7355

* Bugfix - Load only supported thumbnails (configurable): [#7474](https://github.com/owncloud/web/pull/7474)

   We've fixed a bug where web was trying to load thumbnails for files that are not supported. Due to
   configurable values, we avoid unnecessary requests.

   https://github.com/owncloud/web/pull/7474

* Bugfix - Loading state in views: [#7325](https://github.com/owncloud/web/pull/7325)

   We fixed a small glitch in views of the files app, where the view would show a state like "Resource
   not found" in the brief moment before the resource loading started. Now the views correctly
   start in a loading state.

   https://github.com/owncloud/web/pull/7325
   https://github.com/owncloud/web/pull/7366

* Bugfix - Logout deleted user on page reload: [#4677](https://github.com/owncloud/web/issues/4677)

   A user that gets disabled or deleted in the backend now sees an authentication error page upon
   page reload. From there they can now properly reach the login page to log in again via a different
   user (or leave the page entirely).

   https://github.com/owncloud/web/issues/4677
   https://github.com/owncloud/web/issues/4564
   https://github.com/owncloud/web/issues/4795
   https://github.com/owncloud/web/pull/7072

* Bugfix - Merge share with group and group member into one: [#7582](https://github.com/owncloud/web/issues/7582)

   We've fixed a bug that the share with a group and share of the same resource with a member of this
   group was shown as 2 shares in "Shared with me" view.

   https://github.com/owncloud/web/issues/7582
   https://github.com/owncloud/web/pull/7598

* Bugfix - Missing file icon in details panel: [#7344](https://github.com/owncloud/web/pull/7344)

   We've fixed a bug where the file icon in the details panel was not shown, if no preview was
   available.

   https://github.com/owncloud/web/issues/7337
   https://github.com/owncloud/web/pull/7344

* Bugfix - Missing scroll bar in user management app: [#7321](https://github.com/owncloud/web/pull/7321)

   We've fixed a bug in the user management app where no scroll bar was displayed in the users or
   groups list if it exceeds the screen size.

   https://github.com/owncloud/web/issues/7266
   https://github.com/owncloud/web/pull/7321

* Bugfix - SidebarNavItem icon flickering: [#7309](https://github.com/owncloud/web/pull/7309)

   We've fixed a bug which caused the icons on the SidebarNav to flicker when transitioning in
   lightmode

   https://github.com/owncloud/web/pull/7309

* Bugfix - No redirect after disabling space: [#7334](https://github.com/owncloud/web/pull/7334)

   We've fixed a bug where the user was not redirected to the spaces overview after disabling the
   space inside the space view.

   https://github.com/owncloud/web/issues/7291
   https://github.com/owncloud/web/pull/7334

* Bugfix - Don't leak oidc callback url into browser history: [#3071](https://github.com/owncloud/web/issues/3071)

   We've made sure that the oidc callback url does not appear in the browser history after the user
   has been redirected back from the IdP to ownCloud Web.

   https://github.com/owncloud/web/issues/3071
   https://github.com/owncloud/web/pull/7293

* Bugfix - Open file on shared space resource not possible: [#7379](https://github.com/owncloud/web/pull/7379)

   We've fixed a bug where opening a file of a shared space resource for example in the pdf viewer app
   wasn't possible.

   https://github.com/owncloud/web/issues/6899
   https://github.com/owncloud/web/pull/7379

* Bugfix - Open Folder in project space context menu: [#7425](https://github.com/owncloud/web/pull/7425)

   We've fixed a bug that broke opening a folder in a project space from the context menu via "Open
   Folder" (simply clicking it wasn't affected).

   https://github.com/owncloud/web/pull/7425

* Bugfix - Personal shares leaked into project space: [#7268](https://github.com/owncloud/web/issues/7268)

   Due to a bug in how we handle spaces as resources internally we loaded personal shares when
   listing project space shares.

   https://github.com/owncloud/web/issues/7268
   https://github.com/owncloud/web/pull/7294

* Bugfix - Prevent unnecessary PROPFIND request during upload: [#7486](https://github.com/owncloud/web/issues/7486)

   We've removed the unnecessary PROPFIND request at the start of each upload, increasing upload
   performance especially in larger folders.

   https://github.com/owncloud/web/issues/7486
   https://github.com/owncloud/web/pull/7488

* Bugfix - Filename hovers over the image in the preview app: [#7216](https://github.com/owncloud/web/pull/7216)

   We've fixed a bug where the filename hovers over the image content in the preview app and the
   bottom toolbar is not accurate centered. Therefore we have introduced a new top bar, where the
   filename will be shown and the download and the close button will be displayed.

   https://github.com/owncloud/web/issues/6300
   https://github.com/owncloud/web/pull/7216
   https://github.com/owncloud/web/pull/7359

* Bugfix - Fix infinite loading spinner on invalid preview links: [#7359](https://github.com/owncloud/web/pull/7359)

   The `preview` app now shows an error, when a file does not exist (for example when opening a
   bookmark to a file that does not exist anymore). Before it showed a loading spinner infinitely.

   https://github.com/owncloud/web/pull/7359

* Bugfix - Print backend version: [#7272](https://github.com/owncloud/web/issues/7272)

   We fixed a regression with printing version information to the browser console (the backend
   version was not showing up anymore). Since loading the public link / user context is blocking
   the boot process of applications after a [recent
   PR](https://github.com/owncloud/web/pull/7072) has been merged, we are now able to
   reliably print the backend version on the first page load after login as well (was not possible
   before).

   https://github.com/owncloud/web/issues/7272
   https://github.com/owncloud/web/pull/7284

* Bugfix - Quicklinks not shown: [#7424](https://github.com/owncloud/web/pull/7424)

   We've fixed a bug where existing quicklinks were not shown when the user had no rights to create
   them.

   https://github.com/owncloud/web/issues/7406
   https://github.com/owncloud/web/pull/7424

* Bugfix - Re-fetch quota: [#7415](https://github.com/owncloud/web/pull/7415)

   We've fixed a bug where uploading, deleting or restoring resources doesn't always re-fetch
   the quota and therefore was falsy displayed.

   https://github.com/owncloud/web/issues/6930
   https://github.com/owncloud/web/issues/7389
   https://github.com/owncloud/web/pull/7415

* Bugfix - Redirect after removing self from space members: [#7534](https://github.com/owncloud/web/issues/7534)

   When a user removes themselves from the members of a project space we now properly redirect to
   the project spaces overviewe page instead of showing an error message.

   https://github.com/owncloud/web/issues/7534
   https://github.com/owncloud/web/pull/7576

* Bugfix - Rename shared space resource not possible: [#7379](https://github.com/owncloud/web/pull/7379)

   We've fixed a bug where renaming a file or a folder of a shared space wasn't possible.

   https://github.com/owncloud/web/issues/6899
   https://github.com/owncloud/web/pull/7379

* Bugfix - Repair navigation highlighter: [#7210](https://github.com/owncloud/web/pull/7210)

   We've refactored the navigation highlighter to fix several small glitches.

   https://github.com/owncloud/web/pull/7210
   https://github.com/owncloud/web/pull/7270
   https://github.com/owncloud/web/pull/7324

* Bugfix - Search share representation: [#7560](https://github.com/owncloud/web/pull/7560)

   We've fixed a bug, where shares in the search were not displayed correctly and clicking on the
   respective item did not open the default action or redirect to the correct share route.

   https://github.com/owncloud/web/issues/7043
   https://github.com/owncloud/web/pull/7560

* Bugfix - Selected item bottom glue: [#7393](https://github.com/owncloud/web/pull/7393)

   We've fixed a bug where the selected item would be glued to the bottom when scrolling up via
   keyboard navigation. Also, the scrollTo param has been fixed and is now working again.

   https://github.com/owncloud/web/issues/7318
   https://github.com/owncloud/web/pull/7393

* Bugfix - "Shared via"-indicator for links: [#7478](https://github.com/owncloud/web/issues/7478)

   We've fixed a bug where the "Shared via"-indicator would be empty or not be displayed at all for
   public links.

   https://github.com/owncloud/web/issues/7478
   https://github.com/owncloud/web/pull/7479

* Bugfix - "Shared with others" and "Shared via Link" resource links not working: [#7308](https://github.com/owncloud/web/pull/7308)

   We've fixed a bug where resource links in "Shared with others" and "Shared via Link" page
   stopped working.

   https://github.com/owncloud/web/issues/7303
   https://github.com/owncloud/web/pull/7308

* Bugfix - Shared with others page apps not working with oc10 as backend: [#7228](https://github.com/owncloud/web/pull/7228)

   We've fixed a bug where apps like preview, pdf-viewer or text-editor weren't working while
   browsing the shared with others page with oc10 as backend.

   https://github.com/owncloud/web/issues/7049
   https://github.com/owncloud/web/pull/7228

* Bugfix - Sidebar for current folder: [#7519](https://github.com/owncloud/web/issues/7519)

   We've fixed a bug where the right sidebar for the current folder could not be opened when another
   resource was selected.

   https://github.com/owncloud/web/issues/7519
   https://github.com/owncloud/web/pull/7527

* Bugfix - Create space and access user management permission: [#7197](https://github.com/owncloud/web/pull/7197)

   We've fixed a bug, where users with insufficient permissions could access the user management
   and were able to see the "New Space" button in the space overview.

   https://github.com/owncloud/web/issues/7181
   https://github.com/owncloud/web/issues/7079
   https://github.com/owncloud/web/pull/7197

* Bugfix - Missing space image in sidebar: [#7480](https://github.com/owncloud/web/issues/7480)

   We've fixed a bug where the image of a space was not showing in the sidebar.

   https://github.com/owncloud/web/issues/7480
   https://github.com/owncloud/web/pull/7481

* Bugfix - Respect space quota permission: [#7400](https://github.com/owncloud/web/issues/7400)

   By taking the space quota permission into account, we've fixed a bug where a regular space
   member could see the "Edit space quota" action.

   https://github.com/owncloud/web/issues/7400
   https://github.com/owncloud/web/pull/7401

* Bugfix - Hide share actions for space viewers/editors: [#7436](https://github.com/owncloud/web/issues/7436)

   We've fixed a bug where viewers and editors of a space could see the actions to edit and remove
   shares. We've also improved the error handling when something goes wrong while
   editing/removing shares.

   https://github.com/owncloud/web/issues/7436
   https://github.com/owncloud/web/pull/7470

* Bugfix - Space sidebar sharing indicators: [#6921](https://github.com/owncloud/web/pull/6921)

   We have fixed the way the sharing indicators for space members and link shares were displayed in
   the details panel of the sidebar as well as the click behavior for accessing the shares panel
   through the sharing information.

   https://github.com/owncloud/web/issues/6917
   https://github.com/owncloud/web/pull/6921

* Bugfix - Missing quick actions in spaces file list: [#7349](https://github.com/owncloud/web/pull/7349)

   We've fixed a bug where the quick actions 'Add people' and 'Copy quicklink' were missing in the
   spaces file list.

   https://github.com/owncloud/web/issues/7339
   https://github.com/owncloud/web/pull/7349

* Bugfix - Add storage ID when navigating to a shared parent directory: [#7396](https://github.com/owncloud/web/pull/7396)

   We've added the missing storage ID when navigating to a shared parent directory.

   https://github.com/owncloud/web/pull/7396

* Bugfix - Stuck After Session Expired: [#7453](https://github.com/owncloud/web/issues/7453)

   We've fixed exit link to redirect to login once session expires

   We've removed the logout click handler and created a new logout component

   https://github.com/owncloud/web/issues/7453
   https://github.com/owncloud/web/pull/7491

* Bugfix - Suppress active panel error log: [#7394](https://github.com/owncloud/web/pull/7394)

   We now suppress error logs which occurred when opening the sidebar without an active panel.

   https://github.com/owncloud/web/pull/7394

* Bugfix - File list render performance: [#7038](https://github.com/owncloud/web/issues/7038)

   We've drastically increased the initial render performance of the files list by removing the
   lazy loading delay and by moving the loading visualization from the OcTd to the OcTr component.
   For the selection of files there also has been a slight improvement in render speed.

   https://github.com/owncloud/web/issues/7038
   https://github.com/owncloud/web/pull/7298
   https://github.com/owncloud/web/pull/7312
   https://github.com/owncloud/web/pull/7367

* Bugfix - Access token renewal: [#7030](https://github.com/owncloud/web/issues/7030)

   Access token renewals had some flaws which have been fixed as follows: - OAuth2: access token
   renewal was not working at all, fixed by switching to authorization code flow with PKCE
   extension and by migrating from the unmaintained `oidc-client` library to
   `oidc-client-ts`. - OpenID Connect: when `offline_access` scope was not requested each
   token renewal caused a redirect to `/`, which was due to a faulty token update implementation
   and is fixed.

   WARNING: With a setup of ownCloud 10.x.x + oauth2-app older than v0.5.3 this bugfix is a
   breaking change. There was a bug in the oauth2-app that required to add the `clientSecret` in
   the `auth` section of the `config.json` file (although code flow with PKCE doesn't need it). To
   mitigate this, please add the `clientSecret` for your `clientId` to the `config.json` file.
   If the oauth2-app v0.5.3 or newer is used that's not needed.

   https://github.com/owncloud/web/issues/7030
   https://github.com/owncloud/web/pull/7072

* Bugfix - Access token renewal during upload: [#7240](https://github.com/owncloud/web/issues/7240)

   We've fixed the access token renewal during ongoing uploads.

   https://github.com/owncloud/web/issues/7240
   https://github.com/owncloud/web/pull/7296

* Bugfix - Tooltips not shown on disabled create and upload button: [#7376](https://github.com/owncloud/web/pull/7376)

   We've fixed a bug where tooltips that contain important information for example quota
   exceeded message weren't shown on hovering over the create or upload button.

   https://github.com/owncloud/web/issues/5937
   https://github.com/owncloud/web/pull/7376

* Bugfix - Typo when reading public links capabilities: [#7595](https://github.com/owncloud/web/pull/7595)

   https://github.com/owncloud/web/pull/7595

* Bugfix - Upload overlay progress bar spacing: [#7297](https://github.com/owncloud/web/pull/7297)

   We've fixed spacing issues with the upload overlay progress bar.

   https://github.com/owncloud/web/pull/7297

* Bugfix - User management app close side bar throws error: [#7445](https://github.com/owncloud/web/pull/7445)

   We've fixed a bug, where closing the side bar in the user management app threw an error, when a
   group or user was selected.

   https://github.com/owncloud/web/pull/7445
   https://github.com/owncloud/web/pull/7461

* Bugfix - Users list not loading if user has no role: [#7332](https://github.com/owncloud/web/pull/7332)

   We've fixed a bug where the users list in the user management app was not loading if a user has no
   assigned role.

   https://github.com/owncloud/web/issues/7326
   https://github.com/owncloud/web/pull/7332

* Bugfix - Versions of shared files not visible: [#7313](https://github.com/owncloud/web/pull/7313)

   We've fixed a bug where the versions of shared files where not visible for the share receivers.

   https://github.com/owncloud/web/issues/7159
   https://github.com/owncloud/web/pull/7313

* Enhancement - Add app top bar component: [#7217](https://github.com/owncloud/web/pull/7217)

   We've added a app top bar component for consistency, which will be used by the apps: preview,
   text-editor and pdf-viewer.

   https://github.com/owncloud/web/pull/7217
   https://github.com/owncloud/web/pull/7362

* Enhancement - Add Keyboard navigation/selection: [#7153](https://github.com/owncloud/web/pull/7153)

   We've added the possibility to navigate and select via keyboard. - Navigation: - via keyboard
   arrows up/down for moving up and down through the rows of the file list - Selection - via keyboard
   space bar: select / deselect the currently highlighted row - via keyboard shift + arrows
   up/down: add a series of rows - via keyboard cmd/ctrl + a: select all rows - via keyboard esc:
   deselect all rows - via mouse holding cmd/ctrl + left click on a row: add/remove the clicked item
   to/from the current selection model - via mouse holding shift + left click on a row: add the
   clicked row and the series of rows towards the most recently clicked row to the current
   selection model.

   https://github.com/owncloud/web/issues/6029
   https://github.com/owncloud/web/pull/7153
   https://github.com/owncloud/web/pull/7280
   https://github.com/owncloud/web/pull/7283

* Enhancement - Adjust helper texts: [#7404](https://github.com/owncloud/web/pull/7404)

   https://github.com/owncloud/web/issues/7331
   https://github.com/owncloud/web/pull/7404

* Enhancement - Loading context blocks application bootstrap: [#7030](https://github.com/owncloud/web/issues/7030)

   The bootstrap architecture has been improved to ensure that the respective context (user or
   public link) is fully resolved before applications can finalize their boot process and switch
   over to rendering their content. This means that application developers can rely on user data /
   public link data being loaded (including e.g. capabilities) when the web runtime triggers the
   boot processes and rendering of applications.

   https://github.com/owncloud/web/issues/7030
   https://github.com/owncloud/web/pull/7072

* Enhancement - Change file loading mechanism in `preview` app: [#7350](https://github.com/owncloud/web/pull/7350)

   Make preview loading mechanism from the `files` app available for all apps and use it in
   `preview` app.

   *DEPRECATION*: This deprecates `v-image-source` directive and the `mediaSource` method
   mixed into all components. It will be removed in 6.0.0.

   https://github.com/owncloud/web/issues/7233
   https://github.com/owncloud/web/pull/7350

* Enhancement - Add change own password dialog to the account info page: [#7206](https://github.com/owncloud/web/pull/7206)

   We have added a new change own password dialog to the account info page, so the user has the
   possibility to change their own password.

   https://github.com/owncloud/web/issues/7183
   https://github.com/owncloud/web/pull/7206

* Enhancement - Declined shares are now easily accessible: [#7356](https://github.com/owncloud/web/pull/7356)

   We've redesigned the 'Shared with me' page, so the 'Declined shares' section is now displayed
   under the 'Accepted shares' section. There is no need to click the toggle button anymore which
   makes the 'Declined shares' easily accessible.

   https://github.com/owncloud/web/issues/7342
   https://github.com/owncloud/web/pull/7356

* Enhancement - Drop menu styling in right sidebar: [#7365](https://github.com/owncloud/web/pull/7365)

   We've styled and aligned all the drop menus in the right sidebar to match with the other drop
   menus.

   https://github.com/owncloud/web/issues/7335
   https://github.com/owncloud/web/pull/7365

* Enhancement - Adjust spacing of the files list options menu: [#7570](https://github.com/owncloud/web/pull/7570)

   We've adjusted the spacing of the files list options menu to visually match with the other
   menus.

   https://github.com/owncloud/web/issues/7541
   https://github.com/owncloud/web/pull/7570

* Enhancement - Keyboard shortcut indicators in ContextMenu: [#7309](https://github.com/owncloud/web/pull/7309)

   We've added the option to display relevant keyboard shortcuts in the contextmenu to give
   notice to the user which shortcuts are available

   https://github.com/owncloud/web/issues/6892
   https://github.com/owncloud/web/pull/7309

* Enhancement - Left sidebar hover effect: [#7540](https://github.com/owncloud/web/issues/7540)

   We've added a hover effect to the left sidebar items.

   https://github.com/owncloud/web/issues/7540
   https://github.com/owncloud/web/pull/7567
   https://github.com/owncloud/web/pull/7575

* Enhancement - Lowlight cut resources: [#7309](https://github.com/owncloud/web/pull/7309)

   We've added a visual indication to show which resources are being cut

   https://github.com/owncloud/web/pull/7309

* Enhancement - Re-sharing for ocis: [#7086](https://github.com/owncloud/web/pull/7086)

   We've enhanced web to be able to re-share resources when using an ownCloud infinite scale
   backend. It now works for project and personal spaces as well as the sharing jail. Besides that
   we also send roles, space-ref and path as separate values to the sharing api which simplifies
   the usage of it.

   https://github.com/owncloud/web/issues/6894
   https://github.com/owncloud/web/issues/7225
   https://github.com/owncloud/web/issues/7223
   https://github.com/owncloud/web/issues/7397
   https://github.com/owncloud/web/pull/7086
   https://github.com/owncloud/web/pull/7247
   https://github.com/owncloud/web/pull/7243
   https://github.com/owncloud/web/pull/7317
   https://github.com/owncloud/web/pull/7319
   https://github.com/owncloud/web/pull/7398

* Enhancement - Added a toolbar to pdf-viewer app: [#7201](https://github.com/owncloud/web/pull/7201)

   We've added a toolbar to the pdf-viewer app, where the user can see the name of the opened pdf file
   and also close the app.

   https://github.com/owncloud/web/issues/7198
   https://github.com/owncloud/web/issues/7205
   https://github.com/owncloud/web/pull/7201
   https://github.com/owncloud/web/pull/7207

* Enhancement - Permissionless (internal) link shares: [#7133](https://github.com/owncloud/web/pull/7133)

   We have added the possibility to create alias link shares for internal usage when the backend is
   capable of handling them.

   https://github.com/owncloud/web/issues/6844
   https://github.com/owncloud/web/pull/7133
   https://github.com/owncloud/web/pull/7505

* Enhancement - Propose unique file name while creating a new file: [#7555](https://github.com/owncloud/web/pull/7555)

   We're proposing unique file names when creating a new file or folder via the 'New' file menu.

   https://github.com/owncloud/web/issues/7539
   https://github.com/owncloud/web/pull/7555

* Enhancement - Redesign shared with list: [#7252](https://github.com/owncloud/web/pull/7252)

   We've redesigned the shared with list, to achieve more spacing and a better user experience.
   We've also fixed a bug, where the role in a child of a share wasn't shown.

   https://github.com/owncloud/web/issues/7110
   https://github.com/owncloud/web/issues/7340
   https://github.com/owncloud/web/pull/7252
   https://github.com/owncloud/web/pull/7310
   https://github.com/owncloud/web/pull/7315
   https://github.com/owncloud/web/pull/7372
   https://github.com/owncloud/web/pull/7402
   https://github.com/owncloud/web/pull/7475

* Enhancement - Reduce pagination options: [#7038](https://github.com/owncloud/web/issues/7038)

   We've reduced the pagination options by removing the options to display 1000 and all files.
   These may be added again later after further improving the files table performance.

   https://github.com/owncloud/web/issues/7038
   https://github.com/owncloud/web/pull/7597

* Enhancement - Remember the UI that was last selected via the application switcher: [#6173](https://github.com/owncloud/web/pull/6173)

   With this change, ownCloud will remember the UI that was last selected via the application
   switcher. This only works when using ownCloud 10 as backend.

   https://github.com/owncloud/enterprise/issues/4694
   https://github.com/owncloud/web/pull/6173

* Enhancement - Remove clickOutside directive: [#7584](https://github.com/owncloud/web/pull/7584)

   We've removed the clickOutside directive because it isn't used anymore

   https://github.com/owncloud/web/issues/7572
   https://github.com/owncloud/web/pull/7584

* Enhancement - Replace locationpicker with clipboard actions: [#7309](https://github.com/owncloud/web/pull/7309)

   We've replaced the locationpicker in batchactions and contextmenu with the new
   cut/copy/paste clipboard actions.

   https://github.com/owncloud/web/issues/6892
   https://github.com/owncloud/web/pull/7309
   https://github.com/owncloud/web/pull/7503

* Enhancement - Reposition notifications: [#7139](https://github.com/owncloud/web/pull/7139)

   We've repositioned the notifications to no longer block the searchbar - they are now in the
   bottom right corner, above the (possibly visible) upload information. It has also been
   redesigned to better fit the overall design.

   https://github.com/owncloud/web/issues/7082
   https://github.com/owncloud/web/pull/7139

* Enhancement - Resolve bookmarked public links with password protection: [#7030](https://github.com/owncloud/web/issues/7030)

   Bookmarks to a public link (e.g. when user navigated into a subfolder and then created a
   bookmark) or to an app that was opened from a public link (e.g. photo opened in preview app) now
   properly resolve the public link context before loading the bookmarked content. This
   includes a roundtrip to the password input prompt for password protected public link, e.g.
   when a password was set in the first place, has been changed in the meantime, etc.

   https://github.com/owncloud/web/issues/7030
   https://github.com/owncloud/web/pull/7072

* Enhancement - Add resource name to the WebDAV properties: [#7485](https://github.com/owncloud/web/pull/7485)

   We've added the resource name to the WebDAV properties.

   https://github.com/owncloud/web/pull/7485

* Enhancement - Use fixed width for the right sidebar: [#7371](https://github.com/owncloud/web/pull/7371)

   We've set a fixed width of 440px to the right sidebar to have better control of its styling and
   alignment.

   https://github.com/owncloud/web/pull/7371
   https://github.com/owncloud/web/pull/7384

* Enhancement - Don't open right sidebar from private links: [#7559](https://github.com/owncloud/web/pull/7559)

   We've changed the behaviour of the web ui to not open the right sidebar anymore when the URL
   contains a "scrollTo" option. We still select the file and scroll it into the view, but opening
   the right sidebar felt very invasive, so we now leave that choice to the user.

   https://github.com/owncloud/web/pull/7559

* Enhancement - Search all files announce limit: [#7267](https://github.com/owncloud/web/pull/7267)

   If the search results of a backend search exceed the limit of 200 items we now announce that
   additional items exist.

   https://github.com/owncloud/web/issues/7192
   https://github.com/owncloud/web/pull/7267
   https://github.com/owncloud/web/pull/7306

* Enhancement - Search improvements: [#7586](https://github.com/owncloud/web/pull/7586)

   We've improved the search, it will show now if no results according to term was found or if the
   results exceeds the search limit. We've also navigate to the last page while clicking the x in
   the search input field.

   https://github.com/owncloud/web/issues/5644
   https://github.com/owncloud/web/issues/7587
   https://github.com/owncloud/web/pull/7586

* Enhancement - Improve performance of share indicators: [#7038](https://github.com/owncloud/web/issues/7038)

   We've improved the performance of share indicators when loading resource tables as well as
   when adding or removing shares.

   https://github.com/owncloud/web/issues/7038
   https://github.com/owncloud/web/pull/7188

* Enhancement - Sharing panel show label instead of description for links: [#7364](https://github.com/owncloud/web/pull/7364)

   https://github.com/owncloud/web/issues/7358
   https://github.com/owncloud/web/pull/7364

* Enhancement - Simplify mime type checking: [#7605](https://github.com/owncloud/web/pull/7605)

   We've removed the dependency to GuzzleHttp from our oc10 app package. It was used for mime type
   checking only. Instead we now rely on a mime type checker that is already bundled with oc10 core.
   IMPORTANT: this enhancement is needed to reach compatibility with oc10.11 and maintain
   backwards compatibility with oc prior to oc10.11. This would not be easily doable when still
   relying on GuzzleHttp because its major version was updated from 5 to 7 in oc10.11.

   https://github.com/owncloud/web/pull/7605
   https://github.com/owncloud/web/pull/5933

* Enhancement - Streamline UI sizings: [#7363](https://github.com/owncloud/web/pull/7363)

   We've streamlined the font sizes and some other size related options to let the web UI appear a
   bit more condensed. In addition to that we've chosen a new font family for the UI ("Inter") which
   is embedded into the ownCloud Design System by default now.

   https://github.com/owncloud/web/issues/7333
   https://github.com/owncloud/web/pull/7363
   https://github.com/owncloud/owncloud-design-system/pull/2270

* Enhancement - Option to block file extensions from text-editor app: [#6661](https://github.com/owncloud/web/issues/6661)

   We've added support to block certain file extensions from the text-editor app with additional
   config. See
   https://owncloud.dev/clients/web/deployments/oc10-app/#additional-configuration-for-certain-core-apps

   https://github.com/owncloud/web/issues/6661
   https://github.com/owncloud/web/pull/7174

* Enhancement - Update ODS to v14.0.0-alpha.18: [#7626](https://github.com/owncloud/web/pull/7626)

   We updated the ownCloud Design System to version 14.0.0-alpha.18. Please refer to the full
   changelog in the ODS release (linked) for more details. Summary:

   * Bugfix - Omit special characters in user avatar initials:
   [#2070](https://github.com/owncloud/owncloud-design-system/issues/2070) * Bugfix -
   Avatar link icon:
   [#2269](https://github.com/owncloud/owncloud-design-system/pull/2269) * Bugfix -
   Firefox drag & drop move of folders not possible:
   [#7495](https://github.com/owncloud/web/issues/7495) * Bugfix - Lazy loading render
   performance:
   [#2260](https://github.com/owncloud/owncloud-design-system/pull/2260) * Bugfix -
   Remove width shrinking of the ocAvatarItem:
   [#2241](https://github.com/owncloud/owncloud-design-system/issues/2241) * Bugfix -
   Remove click event on OcIcon:
   [#2216](https://github.com/owncloud/owncloud-design-system/pull/2216) * Change -
   Redesign contextual helper:
   [#2271](https://github.com/owncloud/owncloud-design-system/pull/2271) * Change -
   Remove OcAlert component:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) * Change -
   Remove transition animations:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) * Change -
   Revamp animations:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) * Change -
   OcTable emit event data on row click:
   [#2218](https://github.com/owncloud/owncloud-design-system/pull/2218) *
   Enhancement - Add nestedd drop functionality:
   [#2238](https://github.com/owncloud/owncloud-design-system/issues/2238) *
   Enhancement - Add OcInfoDrop:
   [#2286](https://github.com/owncloud/owncloud-design-system/pull/2286) *
   Enhancement - Add rounded prop to OcTag:
   [#2284](https://github.com/owncloud/owncloud-design-system/pull/2284) *
   Enhancement - Adjust avatar font weight from bold to normal:
   [#2275](https://github.com/owncloud/owncloud-design-system/pull/2275) *
   Enhancement - Align breadcrumb context menu with regular context menu:
   [#2296](https://github.com/owncloud/owncloud-design-system/pull/2296) *
   Enhancement - OcCheckbox add outline:
   [#2218](https://github.com/owncloud/owncloud-design-system/pull/2218) *
   Enhancement - Add offset property to the drop component:
   [#7335](https://github.com/owncloud/web/issues/7335) * Enhancement - Make UI smaller:
   [#2270](https://github.com/owncloud/owncloud-design-system/pull/2270) *
   Enhancement - Oc-card style:
   [#2306](https://github.com/owncloud/owncloud-design-system/pull/2306) *
   Enhancement - OcSelect dark mode improvements:
   [#2262](https://github.com/owncloud/owncloud-design-system/pull/2262) *
   Enhancement - Progress bar indeterminate state:
   [#2200](https://github.com/owncloud/owncloud-design-system/pull/2200) *
   Enhancement - Redesign notifications:
   [#2210](https://github.com/owncloud/owncloud-design-system/pull/2210) *
   Enhancement - Use Inter font:
   [#2270](https://github.com/owncloud/owncloud-design-system/pull/2270)

   https://github.com/owncloud/web/pull/7626
   https://github.com/owncloud/owncloud-design-system/releases/tag/v14.0.0-alpha.18

* Enhancement - Update Uppy to v3.0.1: [#7177](https://github.com/owncloud/web/issues/7177)

   We've updated Uppy to v3.0.1. This allows us to enable the `creation-with-upload` extension,
   which saves up one request per file during upload.

   https://github.com/owncloud/web/issues/7177
   https://github.com/owncloud/web/pull/7515

* Enhancement - User management app saved dialog: [#7375](https://github.com/owncloud/web/pull/7375)

   We've replaced the pop up message when the user gets saved by a message which will be shown next to
   the save button.

   https://github.com/owncloud/web/issues/7351
   https://github.com/owncloud/web/pull/7375
   https://github.com/owncloud/web/pull/7377

* Enhancement - User management app edit quota: [#7182](https://github.com/owncloud/web/pull/7182)

   We've added the possibility to change user's quota in the user management app.

   https://github.com/owncloud/web/issues/7059
   https://github.com/owncloud/web/pull/7182
   https://github.com/owncloud/web/pull/7530
   https://github.com/owncloud/web/pull/7538

* Enhancement - Introduce group assignments: [#7176](https://github.com/owncloud/web/pull/7176)

   We have added a new quick action in the user management where the user can be assigned to groups.

   https://github.com/owncloud/web/issues/6678
   https://github.com/owncloud/web/pull/7176

* Enhancement - Users table on small screen: [#7476](https://github.com/owncloud/web/pull/7476)

   We've improved the layout of the users table on small screens.

   https://github.com/owncloud/web/issues/7439
   https://github.com/owncloud/web/pull/7476

Changelog for ownCloud Web [5.6.1] (2022-06-22)
=======================================
The following sections list the changes in ownCloud web 5.6.1 relevant to
ownCloud admins and users.

[5.6.1]: https://github.com/owncloud/web/compare/v5.6.0...v5.6.1

Summary
-------

* Bugfix - Map unknown mime types to image rendering in Preview app: [#7161](https://github.com/owncloud/web/pull/7161)

Details
-------

* Bugfix - Map unknown mime types to image rendering in Preview app: [#7161](https://github.com/owncloud/web/pull/7161)

   Mime types that don't start with `video/`, `audio/` or `image/` were not rendered by the
   preview app. Files with unknown mime type category are now being rendered as images.

   https://github.com/owncloud/web/pull/7161

Changelog for ownCloud Web [5.6.0] (2022-06-21)
=======================================
The following sections list the changes in ownCloud web 5.6.0 relevant to
ownCloud admins and users.

[5.6.0]: https://github.com/owncloud/web/compare/v5.5.0...v5.6.0

Summary
-------

* Bugfix - Folder link targets: [#7156](https://github.com/owncloud/web/pull/7156)
* Enhancement - Separate direct and indirect link shares in sidebar: [#7140](https://github.com/owncloud/web/pull/7140)

Details
-------

* Bugfix - Folder link targets: [#7156](https://github.com/owncloud/web/pull/7156)

   Some views were missing parameters of their default target locations, e.g. the Favorites view
   and the search result page didn't link to the correct folders anymore. This has been fixed by
   always setting the personal view with the id of the current user as default.

   https://github.com/owncloud/web/pull/7156

* Enhancement - Separate direct and indirect link shares in sidebar: [#7140](https://github.com/owncloud/web/pull/7140)

   We have split the list of link shares into two lists, one with direct (and editable) and another
   one with read-only indirect link shares of parent folders for better structure in the sidebar.

   https://github.com/owncloud/web/issues/7132
   https://github.com/owncloud/web/pull/7140

Changelog for ownCloud Web [5.5.0] (2022-06-20)
=======================================
The following sections list the changes in ownCloud web 5.5.0 relevant to
ownCloud admins and users.

[5.5.0]: https://github.com/owncloud/web/compare/v5.4.0...v5.5.0

Summary
-------

* Bugfix - Reload file list after accepting a remote share: [#6942](https://github.com/owncloud/web/pull/6942)
* Bugfix - We added the shares item to the breadcrumbs at the shared with me page: [#6965](https://github.com/owncloud/web/pull/6965)
* Bugfix - Apply text selection range for new files: [#6756](https://github.com/owncloud/web/issues/6756)
* Bugfix - Breadcrumb auto focus: [#6846](https://github.com/owncloud/web/pull/6846)
* Bugfix - Decrease build time and fix faulty oc10 docker dev env: [#6855](https://github.com/owncloud/web/pull/6855)
* Bugfix - Enable optional chaining on configuration options access: [#6891](https://github.com/owncloud/web/pull/6891)
* Bugfix - "Create Space"-button with open sidebar: [#6919](https://github.com/owncloud/web/pull/6919)
* Bugfix - Do not load files from cache: [#6447](https://github.com/owncloud/web/pull/6447)
* Bugfix - Indicate guest shares: [#6813](https://github.com/owncloud/web/pull/6813)
* Bugfix - Indirect links should not be editable: [#6964](https://github.com/owncloud/web/issues/6964)
* Bugfix - Changing link permissions to role requiring password: [#6989](https://github.com/owncloud/web/pull/6989)
* Bugfix - Not logged out if backend is ownCloud 10: [#6939](https://github.com/owncloud/web/pull/6939)
* Bugfix - Edit public links with expiration: [#6858](https://github.com/owncloud/web/issues/6858)
* Bugfix - Password enforcement for public links: [#6323](https://github.com/owncloud/web/issues/6323)
* Bugfix - Remove private links from share notifications: [#6955](https://github.com/owncloud/web/pull/6955)
* Bugfix - Prevent rename button from getting covered: [#7061](https://github.com/owncloud/web/pull/7061)
* Bugfix - Rename is clickable on mobile: [#6767](https://github.com/owncloud/web/issues/6767)
* Bugfix - Rename a file in favorites list with same name but in different folder: [#6804](https://github.com/owncloud/web/pull/6804)
* Bugfix - Require quick link password if enforced in ownCloud 10: [#6967](https://github.com/owncloud/web/pull/6967)
* Bugfix - Resetting store on logout: [#6694](https://github.com/owncloud/web/pull/6694)
* Bugfix - Respect quota definition of none/unlimited: [#6923](https://github.com/owncloud/web/pull/6923)
* Bugfix - Search mess up spaces overview: [#7014](https://github.com/owncloud/web/pull/7014)
* Bugfix - Setting image and readme for spaces: [#6898](https://github.com/owncloud/web/pull/6898)
* Bugfix - Share downloads: [#3760](https://github.com/owncloud/ocis/issues/3760)
* Bugfix - Share hint with disabled federated sharing: [#5261](https://github.com/owncloud/web/issues/5261)
* Bugfix - Inheritance of share permissions: [#7015](https://github.com/owncloud/web/pull/7015)
* Bugfix - Share with people items overflows on long names: [#6984](https://github.com/owncloud/web/pull/6984)
* Bugfix - Show message while upload size exceeds quota: [#7032](https://github.com/owncloud/web/pull/7032)
* Bugfix - Space image not shown if file name contains blanks: [#6881](https://github.com/owncloud/web/pull/6881)
* Bugfix - Reload of an updated space-image and/or -readme: [#7108](https://github.com/owncloud/web/pull/7108)
* Bugfix - Cover image and readme in spaces: [#7017](https://github.com/owncloud/web/pull/7017)
* Bugfix - Spaces breadcrumbs not working correctly: [#6993](https://github.com/owncloud/web/pull/6993)
* Bugfix - Space image showing without setting it: [#6920](https://github.com/owncloud/web/issues/6920)
* Bugfix - Spaces Contextmenu trigger id isn't valid: [#6845](https://github.com/owncloud/web/issues/6845)
* Bugfix - The selected app item has a bad text color contrast in light mode: [#6954](https://github.com/owncloud/web/pull/6954)
* Bugfix - Drag and drop upload when a file is selected: [#7036](https://github.com/owncloud/web/pull/7036)
* Bugfix - Upload meta data serialization: [#6846](https://github.com/owncloud/web/pull/6846)
* Bugfix - Complete-state of the upload overlay: [#7100](https://github.com/owncloud/web/pull/7100)
* Bugfix - Upload overlay links: [#6846](https://github.com/owncloud/web/pull/6846)
* Bugfix - Parent folder name on public links: [#7104](https://github.com/owncloud/web/pull/7104)
* Bugfix - Use OC-ETag instead of ETag in text editor app: [#6952](https://github.com/owncloud/web/pull/6952)
* Enhancement - Add config option for hoverable quick actions: [#7022](https://github.com/owncloud/web/pull/7022)
* Enhancement - Add OcContextualHelper: [#6590](https://github.com/owncloud/web/issues/6590)
* Enhancement - Add Sentry support: [#6759](https://github.com/owncloud/web/pull/6759)
* Enhancement - Add show file extension toggle switch in file list settings: [#6793](https://github.com/owncloud/web/pull/6793)
* Enhancement - Add un-share confirmation dialog: [#6795](https://github.com/owncloud/web/pull/6795)
* Enhancement - Capability-based searchbar rendering: [#6856](https://github.com/owncloud/web/pull/6856)
* Enhancement - CERN features setting: [#7034](https://github.com/owncloud/web/pull/7034)
* Enhancement - CERN-specific help in shares tooltip: [#7034](https://github.com/owncloud/web/pull/7034)
* Enhancement - Consistent dropdown menus: [#6555](https://github.com/owncloud/web/issues/6555)
* Enhancement - Copy/Move conflict dialog: [#7119](https://github.com/owncloud/web/pull/7119)
* Enhancement - Design polishing: [#6781](https://github.com/owncloud/web/pull/6781)
* Enhancement - Make contexthelpers opt-out: [#6750](https://github.com/owncloud/web/pull/6750#issuecomment-1143753289)
* Enhancement - Enable Drag&Drop and keyboard shortcuts for all views: [#7122](https://github.com/owncloud/web/issues/7122)
* Enhancement - Enable search all files for ocis backend: [#6841](https://github.com/owncloud/web/pull/6841)
* Enhancement - EOS links insidebar, fix tooltips: [#6849](https://github.com/owncloud/web/issues/6849)
* Enhancement - Fixed aspect ratio for spaces images: [#6829](https://github.com/owncloud/web/pull/6829)
* Enhancement - Introduce quicklinks: [#6820](https://github.com/owncloud/web/pull/6820)
* Enhancement - Introduce sharing jail: [#6593](https://github.com/owncloud/web/pull/6593)
* Enhancement - Introduce user-management app: [#6673](https://github.com/owncloud/web/issues/6673)
* Enhancement - Load language from user object if given: [#7023](https://github.com/owncloud/web/pull/7023)
* Enhancement - Make rename resource icon always visible instead just on hover: [#6817](https://github.com/owncloud/web/pull/6817)
* Enhancement - Use new WebDAV endpoints for uploads: [#6970](https://github.com/owncloud/web/issues/6970)
* Enhancement - Personal space id in URL: [#7053](https://github.com/owncloud/web/pull/7053)
* Enhancement - Polish the upload overlay: [#6837](https://github.com/owncloud/web/pull/6837)
* Enhancement - Customize additional mimeTypes for preview app: [#6933](https://github.com/owncloud/web/issues/6933)
* Enhancement - Log correct oCIS version if available: [#3805](https://github.com/owncloud/ocis/pull/3805)
* Enhancement - Redesign link sharing: [#6749](https://github.com/owncloud/web/pull/6749)
* Enhancement - Refactor upload input components: [#6859](https://github.com/owncloud/web/pull/6859)
* Enhancement - Get rid of the integration tests: [#6863](https://github.com/owncloud/web/pull/6863)
* Enhancement - Remove the upload progress component: [#6825](https://github.com/owncloud/web/pull/6825)
* Enhancement - Replace deprecated String.prototype.substr(): [#6718](https://github.com/owncloud/web/pull/6718)
* Enhancement - Add Hotkeys to ResourceTable: [#7078](https://github.com/owncloud/web/pull/7078)
* Enhancement - Rendering of share-indicators in ResourceTable: [#7038](https://github.com/owncloud/web/issues/7038)
* Enhancement - Resumable uploads: [#6202](https://github.com/owncloud/web/pull/6202)
* Enhancement - Prevent the resource name in the sidebar from being truncated: [#6776](https://github.com/owncloud/web/issues/6776)
* Enhancement - Show default action at the first place in context menu: [#6971](https://github.com/owncloud/web/issues/6971)
* Enhancement - Space store improvements: [#6868](https://github.com/owncloud/web/pull/6868)
* Enhancement - Use tus chunksize from backend: [#7120](https://github.com/owncloud/web/pull/7120)
* Enhancement - Enable tus upload for password protected public links: [#6819](https://github.com/owncloud/web/issues/6819)
* Enhancement - Update ODS to v13.2.0-rc.1: [#6749](https://github.com/owncloud/web/pull/6749)
* Enhancement - Update SDK: [#6820](https://github.com/owncloud/web/pull/6820)
* Enhancement - Upload data during creation: [#7111](https://github.com/owncloud/web/pull/7111)
* Enhancement - Upload progress & overlay improvements: [#7067](https://github.com/owncloud/web/pull/7067)
* Enhancement - Clickable folder links in upload overlay: [#7109](https://github.com/owncloud/web/pull/7109)
* Enhancement - Indeterminate progress bar in upload overlay: [#7123](https://github.com/owncloud/web/pull/7123)
* Enhancement - Upload time estimation: [#7088](https://github.com/owncloud/web/pull/7088)
* Enhancement - Use event bus for upload related actions: [#6853](https://github.com/owncloud/web/pull/6853)
* Enhancement - Wording improvements: [#7125](https://github.com/owncloud/web/pull/7125)

Details
-------

* Bugfix - Reload file list after accepting a remote share: [#6942](https://github.com/owncloud/web/pull/6942)

   We've fixed a bug where the file list would not reload after accepting a remote share.

   https://github.com/owncloud/web/issues/1774
   https://github.com/owncloud/web/issues/4247
   https://github.com/owncloud/web/issues/4839
   https://github.com/owncloud/web/pull/6942

* Bugfix - We added the shares item to the breadcrumbs at the shared with me page: [#6965](https://github.com/owncloud/web/pull/6965)

   https://github.com/owncloud/web/issues/6937
   https://github.com/owncloud/web/pull/6965

* Bugfix - Apply text selection range for new files: [#6756](https://github.com/owncloud/web/issues/6756)

   We've fixed a bug, where the text selection range for a new file has not been applied only for the
   file name but also for the file extension. This is now working as in the rename modal and just
   selects the text for the file name.

   https://github.com/owncloud/web/issues/6756
   https://github.com/owncloud/web/pull/6803

* Bugfix - Breadcrumb auto focus: [#6846](https://github.com/owncloud/web/pull/6846)

   We've fixed a bug where the auto focus couldn't be set on the current breadcrumb item when
   navigating.

   https://github.com/owncloud/web/pull/6846

* Bugfix - Decrease build time and fix faulty oc10 docker dev env: [#6855](https://github.com/owncloud/web/pull/6855)

   We've fixed a bug where build times increased on every file change in dev mode, it also fixes the
   faulty file sync during docker development for oc10.

   https://github.com/owncloud/web/pull/6855

* Bugfix - Enable optional chaining on configuration options access: [#6891](https://github.com/owncloud/web/pull/6891)

   We've optional chaining on configuration options access to prevent unwanted access on
   undefined properties which might cause errors.

   https://github.com/owncloud/web/pull/6891

* Bugfix - "Create Space"-button with open sidebar: [#6919](https://github.com/owncloud/web/pull/6919)

   We've fixed a bug where the "Create Space"-button would disappear when opening the sidebar for
   a space.

   https://github.com/owncloud/web/issues/6918
   https://github.com/owncloud/web/pull/6919

* Bugfix - Do not load files from cache: [#6447](https://github.com/owncloud/web/pull/6447)

   When apps (i.e Drawio) tried to load a file, the browser caches the request. If the file was
   modified somewhere else and the browser reads the file and its version from the cache, the
   content shown to the user is outdated and saving any changes is impossible until the cache is
   properly cleared. Thus we now ask the browser to never load files from its cache in apps.

   In order to achieve that we send a `Cache-Control` header along with requests. Unfortunately
   currently released ownCloud 10 versions do not accept that header in cross site origin setups.
   If you run ownCloud Web on a different domain than your ownCloud 10 instance, then you might need
   to add `Cache-Control` to the list of allowed CORS headers:

   `occ config:system:set cors.allowed-headers --type json --value '["cache-control"]'`

   Please make sure you don't override previous values!

   https://github.com/owncloud/web/pull/6447
   https://github.com/owncloud/core/pull/40024

* Bugfix - Indicate guest shares: [#6813](https://github.com/owncloud/web/pull/6813)

   We've fixed a bug, where guest shares were not correctly indicated and shown as users shares at
   the share panel in the right sidebar.

   https://github.com/owncloud/web/pull/6813

* Bugfix - Indirect links should not be editable: [#6964](https://github.com/owncloud/web/issues/6964)

   We've fixed a bug where it was possible to edit an indirect link.

   https://github.com/owncloud/web/issues/6964
   https://github.com/owncloud/web/pull/6980
   https://github.com/owncloud/web/pull/6985

* Bugfix - Changing link permissions to role requiring password: [#6989](https://github.com/owncloud/web/pull/6989)

   We have added a dialogue option for updates of a link's permissions to a new role that would
   require a password. It now prompts the user to add a password instead of failing directly.

   https://github.com/owncloud/web/issues/6974
   https://github.com/owncloud/web/pull/6989

* Bugfix - Not logged out if backend is ownCloud 10: [#6939](https://github.com/owncloud/web/pull/6939)

   We've fixed an issue, where the user won't be logged out if the backend is ownCloud 10

   https://github.com/owncloud/web/issues/5886
   https://github.com/owncloud/web/pull/6939
   https://github.com/owncloud/web/pull/7128

* Bugfix - Edit public links with expiration: [#6858](https://github.com/owncloud/web/issues/6858)

   We've fixed an issue with public links with expiration date that were failing in update
   requests.

   https://github.com/owncloud/web/issues/6858
   https://github.com/owncloud/web/pull/6867

* Bugfix - Password enforcement for public links: [#6323](https://github.com/owncloud/web/issues/6323)

   Password enforcement for public links, which can be adjusted on a per-role basis, wasn't
   properly reflected in the UI. We have made the necessary adjustments to only enforce passwords
   for public links with the permissions that require a password according to the backend
   settings.

   https://github.com/owncloud/web/issues/6323
   https://github.com/owncloud/web/pull/6749

* Bugfix - Remove private links from share notifications: [#6955](https://github.com/owncloud/web/pull/6955)

   We've removed private links from share notifications because those were not working and also
   not needed.

   https://github.com/owncloud/web/issues/5227
   https://github.com/owncloud/web/pull/6955

* Bugfix - Prevent rename button from getting covered: [#7061](https://github.com/owncloud/web/pull/7061)

   We've fixed a bug where the rename button next to the file name would get covered if there is not
   enough space available.

   https://github.com/owncloud/web/issues/7007
   https://github.com/owncloud/web/pull/7061

* Bugfix - Rename is clickable on mobile: [#6767](https://github.com/owncloud/web/issues/6767)

   We've fixed a bug where the quick rename button was clickable, even so it wasn't visible.

   https://github.com/owncloud/web/issues/6767
   https://github.com/owncloud/web/pull/6775

* Bugfix - Rename a file in favorites list with same name but in different folder: [#6804](https://github.com/owncloud/web/pull/6804)

   We've fixed a bug, where renaming a file in the favorites file list to a file with the same name but
   located in a different folder was not possible, as the message `The name "..." is already taken`
   appeared.

   https://github.com/owncloud/web/issues/1750
   https://github.com/owncloud/web/pull/6804

* Bugfix - Require quick link password if enforced in ownCloud 10: [#6967](https://github.com/owncloud/web/pull/6967)

   We've fixed a bug, where no password was requested while creating a quick link, this led to a
   silent error where no quick link was created. We now prompt for a quick link password if enforced

   https://github.com/owncloud/web/issues/6963
   https://github.com/owncloud/web/pull/6967

* Bugfix - Resetting store on logout: [#6694](https://github.com/owncloud/web/pull/6694)

   When logging out, only some parts of vuex store were reset to default. This caused bugs by
   switching to another account that has some other/missing settings. For example, if the
   account has no quota, the quota of the previously logged in account was shown. We have fixed this
   by resetting the user store module on logout with reset function (vuex extensions library) and
   creating an action to reset dynamic nav items.

   https://github.com/owncloud/web/issues/6549
   https://github.com/owncloud/web/pull/6694

* Bugfix - Respect quota definition of none/unlimited: [#6923](https://github.com/owncloud/web/pull/6923)

   We have fixed an UI glitch where the UI stopped working if the backend reports a unlimited
   storage quota.

   https://github.com/owncloud/web/issues/6913
   https://github.com/owncloud/web/pull/6923
   https://github.com/owncloud/web/pull/7044

* Bugfix - Search mess up spaces overview: [#7014](https://github.com/owncloud/web/pull/7014)

   We've fixed a bug where searching for a file in the search bar messes up the spaces overview and
   instead of listing the spaces, and found files according to the search term were shown.

   https://github.com/owncloud/web/issues/6995
   https://github.com/owncloud/web/pull/7014

* Bugfix - Setting image and readme for spaces: [#6898](https://github.com/owncloud/web/pull/6898)

   * An issue where setting a space-image or -readme would corrupt the file list has been fixed. *
   Setting images from within the `.space` folder has been fixed. * Setting images and readme
   files with specials characters in their names has been fixed.

   https://github.com/owncloud/web/issues/6875
   https://github.com/owncloud/web/pull/6898

* Bugfix - Share downloads: [#3760](https://github.com/owncloud/ocis/issues/3760)

   Both single file and folder shares didn't have the download action available on the `Shared
   with me` page. We've fixed this by allowing the shared with me route for download actions and by
   fixing a download permission check on shares.

   https://github.com/owncloud/ocis/issues/3760
   https://github.com/owncloud/web/pull/6936

* Bugfix - Share hint with disabled federated sharing: [#5261](https://github.com/owncloud/web/issues/5261)

   We've removed any occurrences of federated sharing in the hint below the sharing input field if
   federated sharing is disabled.

   https://github.com/owncloud/web/issues/5261
   https://github.com/owncloud/web/pull/6951

* Bugfix - Inheritance of share permissions: [#7015](https://github.com/owncloud/web/pull/7015)

   We've fixed a bug where the permissions of a share were not inherited when trying to reshare a
   resource. We've also disabled the role-select-dropdown if only one role is available for
   sharing.

   https://github.com/owncloud/web/issues/2963
   https://github.com/owncloud/web/pull/7015

* Bugfix - Share with people items overflows on long names: [#6984](https://github.com/owncloud/web/pull/6984)

   We've fixed a bug where: * Search suggestion overflows the view port, while name is too long *
   Selected user overflows the select box item, while name is too long

   https://github.com/owncloud/web/issues/6004
   https://github.com/owncloud/web/pull/6984

* Bugfix - Show message while upload size exceeds quota: [#7032](https://github.com/owncloud/web/pull/7032)

   We fixed a bug where an upload silently failed if the upload size exceeds the space quota. It now
   displays a detailed message instead

   https://github.com/owncloud/web/issues/7025
   https://github.com/owncloud/web/pull/7032

* Bugfix - Space image not shown if file name contains blanks: [#6881](https://github.com/owncloud/web/pull/6881)

   https://github.com/owncloud/web/issues/6874
   https://github.com/owncloud/web/pull/6881

* Bugfix - Reload of an updated space-image and/or -readme: [#7108](https://github.com/owncloud/web/pull/7108)

   We've fixed a bug where the image and/or readme for a space wouldn't reload automatically after
   being updated.

   https://github.com/owncloud/web/pull/7108

* Bugfix - Cover image and readme in spaces: [#7017](https://github.com/owncloud/web/pull/7017)

   The URL construction for cover image and readme of a space was wrong and led to both not being
   shown. This has been fixed by making the URL construction more reliable regarding different ID
   formats.

   https://github.com/owncloud/web/pull/7017

* Bugfix - Spaces breadcrumbs not working correctly: [#6993](https://github.com/owncloud/web/pull/6993)

   We've fixed a bug where clicking on the last breadcrumb navigation item not resulted in a reload
   of the current path but forwarded to the upper path.

   https://github.com/owncloud/web/issues/6866
   https://github.com/owncloud/web/pull/6993

* Bugfix - Space image showing without setting it: [#6920](https://github.com/owncloud/web/issues/6920)

   We've fixed a bug where an image would show for a space even though no image has been set.

   https://github.com/owncloud/web/issues/6920
   https://github.com/owncloud/web/pull/6928

* Bugfix - Spaces Contextmenu trigger id isn't valid: [#6845](https://github.com/owncloud/web/issues/6845)

   We've fixed a bug which resulted in spaces having an invalid trigger id for the contextmenu.

   https://github.com/owncloud/web/issues/6845
   https://github.com/owncloud/web/pull/6848

* Bugfix - The selected app item has a bad text color contrast in light mode: [#6954](https://github.com/owncloud/web/pull/6954)

   We've fixed the contrast of the text color for hovered and active application menus items.

   https://github.com/owncloud/web/issues/6958
   https://github.com/owncloud/web/pull/6954

* Bugfix - Drag and drop upload when a file is selected: [#7036](https://github.com/owncloud/web/pull/7036)

   We've fixed a bug where uploading via drag and drop wouldn't work if one or more files were
   selected.

   https://github.com/owncloud/web/issues/7006
   https://github.com/owncloud/web/pull/7036

* Bugfix - Upload meta data serialization: [#6846](https://github.com/owncloud/web/pull/6846)

   We've fixed a bug where meta properties of uploading resources could not be serialized,
   resulting in unnecessary network requests.

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6846

* Bugfix - Complete-state of the upload overlay: [#7100](https://github.com/owncloud/web/pull/7100)

   We've fixed a bug where the complete-state of the upload overlay would show before the upload
   even started.

   https://github.com/owncloud/web/issues/7097
   https://github.com/owncloud/web/pull/7100

* Bugfix - Upload overlay links: [#6846](https://github.com/owncloud/web/pull/6846)

   We've fixed a bug where the folder links in the upload overlay were broken when navigating into
   another app or file list.

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6846

* Bugfix - Parent folder name on public links: [#7104](https://github.com/owncloud/web/pull/7104)

   We've fixed a bug where the parent folder link in the upload overlay on public pages would show
   the link's token instead of "Public link".

   https://github.com/owncloud/web/issues/7101
   https://github.com/owncloud/web/pull/7104

* Bugfix - Use OC-ETag instead of ETag in text editor app: [#6952](https://github.com/owncloud/web/pull/6952)

   We've fixed a bug, where the ETag instead of OC-ETag in the text editor app was used, due to server
   encoding, the ETag might be manipulated and contain the gzip suffix on a large text file. Saving
   the respective file, might cause an error, as the sent ETag doesn't match the server's ETag.

   https://github.com/owncloud/web/issues/6947
   https://github.com/owncloud/web/issues/4605
   https://github.com/owncloud/web/pull/6952

* Enhancement - Add config option for hoverable quick actions: [#7022](https://github.com/owncloud/web/pull/7022)

   We've added the possibility to add hover effect for quick actions with the option
   "hoverableQuickActions" in config.json. The hover effect applies to "edit name", "add
   people" and "copy quicklink" actions in the corresponding hovered row.

   https://github.com/owncloud/web/issues/7021
   https://github.com/owncloud/web/pull/7022

* Enhancement - Add OcContextualHelper: [#6590](https://github.com/owncloud/web/issues/6590)

   We've added contextual helpers to provide more information based on the context

   https://github.com/owncloud/web/issues/6590
   https://github.com/owncloud/web/pull/6750

* Enhancement - Add Sentry support: [#6759](https://github.com/owncloud/web/pull/6759)

   We've added Sentry support to enable monitoring and error tracking (see docs "getting
   started").

   https://github.com/owncloud/web/pull/6759

* Enhancement - Add show file extension toggle switch in file list settings: [#6793](https://github.com/owncloud/web/pull/6793)

   We've added a toggle switch to the file list settings to turn off and on displaying file
   extension.

   If this setting is turned off, the file extension won't be shown anymore in: * The name column
   displayed in the files list * The right sidebar * The rename modal * The new file modal

   https://github.com/owncloud/web/issues/6730
   https://github.com/owncloud/web/pull/6793

* Enhancement - Add un-share confirmation dialog: [#6795](https://github.com/owncloud/web/pull/6795)

   We have implemented a confirmation dialog which pops up if the user clicks the "remove share"
   button

   https://github.com/owncloud/web/issues/6728
   https://github.com/owncloud/web/pull/6795

* Enhancement - Capability-based searchbar rendering: [#6856](https://github.com/owncloud/web/pull/6856)

   We have removed the `hideSearchBar` configuration option and now always render a searchbar if
   the backend announces the availability of search functionality using its capabilities.

   https://github.com/owncloud/web/issues/6806
   https://github.com/owncloud/web/pull/6856

* Enhancement - CERN features setting: [#7034](https://github.com/owncloud/web/pull/7034)

   We've added a flag to enable CERN-specific features

   https://github.com/owncloud/web/pull/7034

* Enhancement - CERN-specific help in shares tooltip: [#7034](https://github.com/owncloud/web/pull/7034)

   We've added some CERN-related help strings to the share tooltip.

   https://github.com/owncloud/web/pull/7034

* Enhancement - Consistent dropdown menus: [#6555](https://github.com/owncloud/web/issues/6555)

   Made the main dropdown menus (new, upload, context, etc) constistent in size, hover effect and
   spacing/margins.

   https://github.com/owncloud/web/issues/6555
   https://github.com/owncloud/web/pull/6762

* Enhancement - Copy/Move conflict dialog: [#7119](https://github.com/owncloud/web/pull/7119)

   We've added a conflict dialog for moving resources via drag&drop in the files list

   https://github.com/owncloud/web/issues/6996
   https://github.com/owncloud/web/pull/7119
   https://github.com/owncloud/web/pull/6994
   https://github.com/owncloud/web/pull/7151

* Enhancement - Design polishing: [#6781](https://github.com/owncloud/web/pull/6781)

   We've fixed the following issues to enhance UI/UX: - wording for new space button - wording for
   invite space member submit button

   https://github.com/owncloud/web/issues/6555
   https://github.com/owncloud/web/pull/6781

* Enhancement - Make contexthelpers opt-out: [#6750](https://github.com/owncloud/web/pull/6750#issuecomment-1143753289)

   The contextual helpers needed to actively be enabled in the configuration. We have now enabled
   them by default and admins can disable them using the configuration.

   https://github.com/owncloud/web/pull/6750#issuecomment-1143753289

* Enhancement - Enable Drag&Drop and keyboard shortcuts for all views: [#7122](https://github.com/owncloud/web/issues/7122)

   We've enabled drag&drop move and keyboard shortcut copy/cut/paste for publicFiles,
   sharedResource and spaces.

   https://github.com/owncloud/web/issues/7122
   https://github.com/owncloud/web/pull/7126

* Enhancement - Enable search all files for ocis backend: [#6841](https://github.com/owncloud/web/pull/6841)

   We've enabled the search all files feature for ocis backend: * Find files in sub directories *
   Find files in other places like project spaces

   https://github.com/owncloud/web/pull/6841
   https://github.com/owncloud/web/pull/6873
   https://github.com/owncloud/web/pull/6887
   https://github.com/owncloud/web/pull/6884

* Enhancement - EOS links insidebar, fix tooltips: [#6849](https://github.com/owncloud/web/issues/6849)

   We've added a `runningOnEos` setting which, if set to true, displays two entries in the
   sidebar: The EOS path and a direct link to the file. Along with adding the two links, we have also
   resolved an issue with overflowing text/tooltips in the sidebar for very long text.

   https://github.com/owncloud/web/issues/6849
   https://github.com/owncloud/web/pull/6959
   https://github.com/owncloud/web/pull/6997

* Enhancement - Fixed aspect ratio for spaces images: [#6829](https://github.com/owncloud/web/pull/6829)

   We've set the spaces images to a fixed aspect ratio to make sure that the same part of the image is
   always displayed.

   https://github.com/owncloud/web/issues/6555
   https://github.com/owncloud/web/pull/6829

* Enhancement - Introduce quicklinks: [#6820](https://github.com/owncloud/web/pull/6820)

   We have added quicklinks to the link share section in the right sidebar. Clicking the link
   quickaction and the link menu item in the files table contextmenu now always copy the quick link
   instead of creating a new link (and create it first, if it didn't exist before).

   https://github.com/owncloud/web/issues/6605
   https://github.com/owncloud/web/pull/6820

* Enhancement - Introduce sharing jail: [#6593](https://github.com/owncloud/web/pull/6593)

   We've added the sharing jail to oCIS which means that navigating and working with shares now
   happens inside the `Shares` navigation item.

   https://github.com/owncloud/web/issues/5152
   https://github.com/owncloud/web/issues/6448
   https://github.com/owncloud/web/pull/6593
   https://github.com/owncloud/web/pull/6909
   https://github.com/owncloud/web/pull/6916

* Enhancement - Introduce user-management app: [#6673](https://github.com/owncloud/web/issues/6673)

   We've added the app "user-management" with the following features: * Listing, creating,
   deleting and editing users * Listing, creating, deleting and editing group * Universal search
   in users and groups view

   https://github.com/owncloud/web/issues/6673
   https://github.com/owncloud/web/issues/6674
   https://github.com/owncloud/web/issues/6675
   https://github.com/owncloud/web/issues/6676
   https://github.com/owncloud/web/issues/6677

* Enhancement - Load language from user object if given: [#7023](https://github.com/owncloud/web/pull/7023)

   We've added the possibility to load the user's language from the use object if given, this
   allows us to take the configured language if oC10 is running as backend.

   https://github.com/owncloud/web/issues/6243
   https://github.com/owncloud/web/pull/7023

* Enhancement - Make rename resource icon always visible instead just on hover: [#6817](https://github.com/owncloud/web/pull/6817)

   https://github.com/owncloud/web/issues/6755
   https://github.com/owncloud/web/pull/6817

* Enhancement - Use new WebDAV endpoints for uploads: [#6970](https://github.com/owncloud/web/issues/6970)

   We now use the new WebDAV endpoints for uploads when spaces are enabled.

   https://github.com/owncloud/web/issues/6970
   https://github.com/owncloud/web/pull/6991

* Enhancement - Personal space id in URL: [#7053](https://github.com/owncloud/web/pull/7053)

   We now include the personal space id in the URL instead of using a magic "home" alias. When using
   the old "home" alias the user gets redirected to the URL with their personal space id.

   https://github.com/owncloud/web/pull/7053

* Enhancement - Polish the upload overlay: [#6837](https://github.com/owncloud/web/pull/6837)

   We polished the overlay that pops up on the bottom right corner when uploading files:

   * The header now shows the amount of successful uploads * Polished the overall design of the
   overlay

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6837

* Enhancement - Customize additional mimeTypes for preview app: [#6933](https://github.com/owncloud/web/issues/6933)

   We've added support for customizing additional mimeTypes for the preview app. In case the
   backend supports more mimeTypes than our hardcoded list in the preview app, you can now
   announce them to ownCloud Web with additional config. See
   https://owncloud.dev/clients/web/deployments/oc10-app/#additional-configuration-for-certain-core-apps

   https://github.com/owncloud/web/issues/6933
   https://github.com/owncloud/web/pull/7131

* Enhancement - Log correct oCIS version if available: [#3805](https://github.com/owncloud/ocis/pull/3805)

   OCIS has introduced a new `productversion` field to announce it's correct version while
   maintaining a fake 10.x.x version in the `versionstring` field to keep clients compatible.
   We're using the new productversion field when it exists and use versionstring as a fallback.
   Thus the backend product information prints the correct oCIS version now.

   https://github.com/owncloud/ocis/pull/3805
   https://github.com/owncloud/web/pull/7045

* Enhancement - Redesign link sharing: [#6749](https://github.com/owncloud/web/pull/6749)

   We have redesigned the public link list in the right sidebar. Links now can be edited in-line and
   have a similiar look-and-feel to people and group shares. Additionally, creating new links
   now is less cumbersome and the default name, while not configurable from the backend anymore,
   is now translated.

   https://github.com/owncloud/web/issues/7149
   https://github.com/owncloud/web/pull/6749
   https://github.com/owncloud/web/pull/6885
   https://github.com/owncloud/web/pull/6961
   https://github.com/owncloud/web/pull/7150

* Enhancement - Refactor upload input components: [#6859](https://github.com/owncloud/web/pull/6859)

   We've refactored the upload input components for files and folders into one component.

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6859

* Enhancement - Get rid of the integration tests: [#6863](https://github.com/owncloud/web/pull/6863)

   We've decided to get rid of our integration test suite. Our unit and e2e tests get better and
   better with each release and have now reached the point where they can replace the integration
   tests.

   https://github.com/owncloud/web/pull/6863

* Enhancement - Remove the upload progress component: [#6825](https://github.com/owncloud/web/pull/6825)

   We've removed the upload progress component because the implementation of Uppy made it
   obsolete.

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6825

* Enhancement - Replace deprecated String.prototype.substr(): [#6718](https://github.com/owncloud/web/pull/6718)

   We've replaced all occurrences of the deprecated String.prototype.substr() function with
   String.prototype.slice() which works similarly but isn't deprecated.

   https://github.com/owncloud/web/pull/6718

* Enhancement - Add Hotkeys to ResourceTable: [#7078](https://github.com/owncloud/web/pull/7078)

   We've added hotkeys for copy, cut and paste.

   https://github.com/owncloud/web/issues/7071
   https://github.com/owncloud/web/pull/7078

* Enhancement - Rendering of share-indicators in ResourceTable: [#7038](https://github.com/owncloud/web/issues/7038)

   We have improved the rendering speed of the ResourceTable by fixing some underlying logic that
   caused unnecessary re-renderings.

   https://github.com/owncloud/web/issues/7038
   https://github.com/owncloud/web/pull/7070

* Enhancement - Resumable uploads: [#6202](https://github.com/owncloud/web/pull/6202)

   We've implemented Uppy as a library for handling uploads. This concludes the following
   features and changes:

   - Resumable uploads when the backend supports the Tus-protocol - A nice looking overview for
   all files that have been uploaded successfully or failed to upload - Navigation across Web
   while uploads are in progress - Improved rendering of uploadProgress-visualization -
   Removed `vue2-dropzone` and `vue-drag-drop` libraries

   https://github.com/owncloud/web/issues/5031
   https://github.com/owncloud/web/issues/6268
   https://github.com/owncloud/web/pull/6202

* Enhancement - Prevent the resource name in the sidebar from being truncated: [#6776](https://github.com/owncloud/web/issues/6776)

   We now prevent the resource name in the right sidebar from being truncated to ensure that the
   full name can be read at any time.

   https://github.com/owncloud/web/issues/6776
   https://github.com/owncloud/web/pull/7052

* Enhancement - Show default action at the first place in context menu: [#6971](https://github.com/owncloud/web/issues/6971)

   We've added the sorting of actions in the way that default file handler shows first in the
   context menu

   https://github.com/owncloud/web/issues/6971
   https://github.com/owncloud/web/pull/6954

* Enhancement - Space store improvements: [#6868](https://github.com/owncloud/web/pull/6868)

   We've improved the space's store, this allows us to keep the search reactive to space changes,
   for example, as a project space gets added or renamed.

   https://github.com/owncloud/web/pull/6868

* Enhancement - Use tus chunksize from backend: [#7120](https://github.com/owncloud/web/pull/7120)

   We now use the chunksize value coming from the backend for uploading via tus. If no chunksize is
   given, it will default to `Infinity`. The Web config `uploadChunkSize` has been removed as a
   result.

   https://github.com/owncloud/web/pull/7120

* Enhancement - Enable tus upload for password protected public links: [#6819](https://github.com/owncloud/web/issues/6819)

   Uploading files on password protected public links now features tus uploads if the backend
   supports it.

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6890

* Enhancement - Update ODS to v13.2.0-rc.1: [#6749](https://github.com/owncloud/web/pull/6749)

   We updated the ownCloud Design System to version 13.2.0-rc.1. Please refer to the full
   changelog in the ODS release (linked) for more details. Summary:

   - Enhancement - Add isFileExtensionDisplayed property:
   https://github.com/owncloud/owncloud-design-system/pull/2087 - Enhancement - OcModal
   input type: https://github.com/owncloud/owncloud-design-system/pull/2077 -
   Enhancement - Add OcContextualHelper:
   https://github.com/owncloud/owncloud-design-system/pull/2064 - Enhancement - Add
   selection range for OcModal and OcTextInput:
   https://github.com/owncloud/owncloud-design-system/pull/2061 - Enhancement - Replace
   deprecated String.prototype.substr():
   https://github.com/owncloud/owncloud-design-system/pull/2059 - Enhancement -
   Redesign OcGhostElement:
   https://github.com/owncloud/owncloud-design-system/pull/2049 - Enhancement - Export
   package members: https://github.com/owncloud/owncloud-design-system/pull/2048 -
   Enhancement - Make OcResource inline-flex:
   https://github.com/owncloud/owncloud-design-system/pull/2041 - Enhancement - Hover in
   ocDrop menus: https://github.com/owncloud/owncloud-design-system/pull/2069 -
   Enhancement - Implement an indeterminate state for the progress bar:
   https://github.com/owncloud/owncloud-design-system/pull/2200 - Bugfix - Disabled
   textarea color contrast in darkmode:
   https://github.com/owncloud/owncloud-design-system/pull/2055 - Bugfix - OcTextInput:
   Fix event handlers in loops:
   https://github.com/owncloud/owncloud-design-system/pull/2054

   https://github.com/owncloud/web/pull/6749
   https://github.com/owncloud/web/pull/6750
   https://github.com/owncloud/web/pull/6953
   https://github.com/owncloud/web/pull/7094
   https://github.com/owncloud/web/pull/7123
   https://github.com/owncloud/owncloud-design-system/releases/tag/13.2.0-rc.1

* Enhancement - Update SDK: [#6820](https://github.com/owncloud/web/pull/6820)

   We've updated the ownCloud SDK to version 3.0.0-alpha.10.

   - Change - Pass full trash bin path to methods of FilesTrash class:
   https://github.com/owncloud/owncloud-sdk/pull/1021 - Enhancement - Enforce share_type
   guest if applies: https://github.com/owncloud/owncloud-sdk/pull/1046 - Enhancement -
   Create quicklink: https://github.com/owncloud/owncloud-sdk/pull/1041 - Enhancement -
   Replace deprecated String.prototype.substr():
   https://github.com/owncloud/owncloud-sdk/pull/1035 - Enhancement - Add blob
   resolveType: https://github.com/owncloud/owncloud-sdk/pull/1028 - Enhancement -
   Adjust share management to properly work with spaces:
   https://github.com/owncloud/owncloud-sdk/pull/1013 - Enhancement - Send oc-etag on
   putFileContents and getFileContents methods:
   https://github.com/owncloud/owncloud-sdk/pull/1067 - Enhancement - Enable search
   results for ocis: https://github.com/owncloud/owncloud-sdk/pull/1057 - Enhancement -
   Add overwrite flag for file move: https://github.com/owncloud/owncloud-sdk/pull/1073 -
   Bugfix - Always add X-Request-ID: https://github.com/owncloud/owncloud-sdk/pull/1016 -
   Bugfix - Always add X-Requested-With header:
   https://github.com/owncloud/owncloud-sdk/pull/1020

   https://github.com/owncloud/web/pull/6820
   https://github.com/owncloud/web/pull/6952
   https://github.com/owncloud/web/pull/6994
   https://github.com/owncloud/owncloud-sdk/releases/tag/v3.0.0-alpha.10

* Enhancement - Upload data during creation: [#7111](https://github.com/owncloud/web/pull/7111)

   Uploading via tus now uses the `uploadDataDuringCreation` option which saves up one request.

   https://github.com/owncloud/web/issues/7066
   https://github.com/owncloud/web/pull/7111

* Enhancement - Upload progress & overlay improvements: [#7067](https://github.com/owncloud/web/pull/7067)

   * Remove fetching of newly uploaded files and folders to improve performance * Redesign the
   upload overlay * Show uploading files in the upload overlay * Immediately show the upload
   overlay when uploading folders to tell the user that the upload is starting * Only show top level
   folders in the upload overlay when uploading folders * Remove the Uppy StatusBar plugin * Use
   `uppy.addFiles()` instead of calling `uppy.addFile()` for each file * The upload overlay now
   shows a more proper time estimation when uploading many files * The user feedback of the upload
   overlay during upload preparation has been improved * Several router bugs have been fixed in
   the upload overlay * Temporarily disabled `uploadDataDuringCreation` to prevent the local
   storage from getting to full * Some more refactoring under the hood has been made

   https://github.com/owncloud/web/issues/7066
   https://github.com/owncloud/web/issues/7069
   https://github.com/owncloud/web/pull/7067
   https://github.com/owncloud/web/pull/7127

* Enhancement - Clickable folder links in upload overlay: [#7109](https://github.com/owncloud/web/pull/7109)

   Uploaded folders can now be clicked in the upload overlay, which navigates the user to the
   clicked folder.

   https://github.com/owncloud/web/issues/7102
   https://github.com/owncloud/web/pull/7109

* Enhancement - Indeterminate progress bar in upload overlay: [#7123](https://github.com/owncloud/web/pull/7123)

   We've added an indeterminate state to the progress bar in the upload overlay as long as the
   upload is preparing.

   https://github.com/owncloud/web/issues/7105
   https://github.com/owncloud/web/pull/7123

* Enhancement - Upload time estimation: [#7088](https://github.com/owncloud/web/pull/7088)

   The estimated remaining time for an upload will now be displayed in the upload overlay.

   https://github.com/owncloud/web/issues/7066
   https://github.com/owncloud/web/pull/7088

* Enhancement - Use event bus for upload related actions: [#6853](https://github.com/owncloud/web/pull/6853)

   Instead of extending Vue, the uppy service now uses our custom `EventBus`.

   https://github.com/owncloud/web/issues/6819
   https://github.com/owncloud/web/pull/6853
   https://github.com/owncloud/web/pull/6864

* Enhancement - Wording improvements: [#7125](https://github.com/owncloud/web/pull/7125)

   We've simplified and improved the wording of some copy/move related ui elements.

   https://github.com/owncloud/web/pull/7125

Changelog for ownCloud Web [5.4.0] (2022-04-11)
=======================================
The following sections list the changes in ownCloud web 5.4.0 relevant to
ownCloud admins and users.

[5.4.0]: https://github.com/owncloud/web/compare/v5.3.0...v5.4.0

Summary
-------

* Bugfix - Accessible breadcrumb itemcount: [#6690](https://github.com/owncloud/web/pull/6690)
* Bugfix - AppBar ViewOptions alignment: [#6662](https://github.com/owncloud/web/pull/6662)
* Bugfix - Hide sidebar toggle button on spaces projects page: [#6690](https://github.com/owncloud/web/pull/6690)
* Bugfix - Use oC10 navigation entry names: [#6656](https://github.com/owncloud/web/pull/6656)
* Bugfix - TopBar on redirect: [#6704](https://github.com/owncloud/web/pull/6704)
* Bugfix - Unsticky appbar position: [#6708](https://github.com/owncloud/web/pull/6708)
* Enhancement - Add rename selection range: [#6729](https://github.com/owncloud/web/issues/6729)
* Enhancement - Archive download for oc10 backend: [#6239](https://github.com/owncloud/web/issues/6239)
* Enhancement - Customizable feedback link: [#6702](https://github.com/owncloud/web/issues/6702)
* Enhancement - Editor role for single file public links: [#6618](https://github.com/owncloud/web/pull/6618)
* Enhancement - Full screen external apps: [#6688](https://github.com/owncloud/web/pull/6688)
* Enhancement - Make some UI elements/actions optional: [#6618](https://github.com/owncloud/web/pull/6618)
* Enhancement - PDF viewer: [#6654](https://github.com/owncloud/web/pull/6654)
* Enhancement - Permission-based visibility of upload and create buttons: [#6690](https://github.com/owncloud/web/pull/6690)
* Enhancement - Audio support in preview app: [#6514](https://github.com/owncloud/web/pull/6514)
* Enhancement - Audio handling in preview app: [#6514](https://github.com/owncloud/web/pull/6514)
* Enhancement - Provide dependencies to applications: [#6746](https://github.com/owncloud/web/pull/6746)
* Enhancement - Remove public links from SharedWithOthers page: [#5976](https://github.com/owncloud/web/issues/5976)
* Enhancement - Rename mediaviewer to preview: [#6514](https://github.com/owncloud/web/pull/6514)
* Enhancement - Add "Shared with" column for "Shared with me" page: [#6140](https://github.com/owncloud/web/issues/6140)
* Enhancement - Spaces quota unlimited option: [#6693](https://github.com/owncloud/web/pull/6693)
* Enhancement - Spaces context menus: [#6659](https://github.com/owncloud/web/pull/6659)
* Enhancement - Spaces group sharing: [#6639](https://github.com/owncloud/web/pull/6639)
* Enhancement - Spaces link sharing: [#6633](https://github.com/owncloud/web/pull/6633)
* Enhancement - Space name in breadcrumb: [#6662](https://github.com/owncloud/web/pull/6662)
* Enhancement - Spaces overview topbar layout: [#6642](https://github.com/owncloud/web/pull/6642)
* Enhancement - Text Editor: [#6667](https://github.com/owncloud/web/pull/6667)
* Enhancement - Unified shares sidebar panel: [#6701](https://github.com/owncloud/web/pull/6701)
* Enhancement - Update ODS to v13.1.0-rc.2: [#6701](https://github.com/owncloud/web/pull/6701)

Details
-------

* Bugfix - Accessible breadcrumb itemcount: [#6690](https://github.com/owncloud/web/pull/6690)

   Our breadcrumbs announce the amount of resources inside a folder. Due to a bug the calculated
   number wasn't announced correctly, which we have resolved.

   https://github.com/owncloud/web/issues/6022
   https://github.com/owncloud/web/pull/6690

* Bugfix - AppBar ViewOptions alignment: [#6662](https://github.com/owncloud/web/pull/6662)

   We have fixed a visual glitch that rendered the ViewOptions in the AppBar on the left side
   instead of right-aligned if no Breadcrumbs or SharesNavigation is present.

   https://github.com/owncloud/web/issues/6685
   https://github.com/owncloud/web/pull/6662

* Bugfix - Hide sidebar toggle button on spaces projects page: [#6690](https://github.com/owncloud/web/pull/6690)

   We have hidden the sidebar toggle button on the spaces projects page to avoid user confusion.

   https://github.com/owncloud/web/pull/6690

* Bugfix - Use oC10 navigation entry names: [#6656](https://github.com/owncloud/web/pull/6656)

   When fetching navigation entries from oC10, we previously used the app's names. This caused
   issues when the navigation entry ID and the app ID differ. Also, the navigation entries did not
   match with the ones in the classic UI. This has been fixed as we now use the navigation entry name,
   which falls back to the app name if not given.

   https://github.com/owncloud/web/issues/6585
   https://github.com/owncloud/web/pull/6656

* Bugfix - TopBar on redirect: [#6704](https://github.com/owncloud/web/pull/6704)

   We fixed a visual glitch that showed the topbar on redirect pages.

   https://github.com/owncloud/web/issues/6527
   https://github.com/owncloud/web/pull/6704

* Bugfix - Unsticky appbar position: [#6708](https://github.com/owncloud/web/pull/6708)

   After recent changes to the files appbar, it wouldn't be visible when scrolling inside the
   table. This has been resolved.

   https://github.com/owncloud/web/issues/6696
   https://github.com/owncloud/web/pull/6708

* Enhancement - Add rename selection range: [#6729](https://github.com/owncloud/web/issues/6729)

   We've added a selection range for the rename modal to intially select the resource name without
   extension.

   https://github.com/owncloud/web/issues/6729
   https://github.com/owncloud/web/pull/6736

* Enhancement - Archive download for oc10 backend: [#6239](https://github.com/owncloud/web/issues/6239)

   We now offer archive downloads (multifile or folder) as archive with oc10 backends. Since oc10
   archive downloads are path based this could only be made possible on pages that follow the
   folder hierarchy of the logged in user. In other words: on favorites pages the archive download
   is unavailable for oc10 backends as the selected files/folders don't necessarily share the
   same parent folder.

   https://github.com/owncloud/web/issues/6239
   https://github.com/owncloud/web/pull/6697

* Enhancement - Customizable feedback link: [#6702](https://github.com/owncloud/web/issues/6702)

   We've added options and documentation for customization of the `href`, `ariaLabel` and
   `description` of the feedback link in the topbar. See
   https://owncloud.dev/clients/web/getting-started/ for documentation.

   https://github.com/owncloud/web/issues/6702
   https://github.com/owncloud/web/pull/6761
   https://owncloud.dev/clients/web/getting-started/

* Enhancement - Editor role for single file public links: [#6618](https://github.com/owncloud/web/pull/6618)

   Allow creating a public link with editor role for a single file. Only available in oCIS.

   https://github.com/owncloud/web/pull/6618

* Enhancement - Full screen external apps: [#6688](https://github.com/owncloud/web/pull/6688)

   It allows, for example, presentation apps to enter full screen.

   https://github.com/owncloud/web/pull/6688

* Enhancement - Make some UI elements/actions optional: [#6618](https://github.com/owncloud/web/pull/6618)

   Make renaming a share, permanently deleting files and showing the custom permissions role
   optional via capabilities. By default, all of these options are enabled/showed.

   Capabilities: * capabilities.files_sharing.can_rename *
   capabilities.files.permanent_deletion * capabilities.files_sharing.allow_custom

   https://github.com/owncloud/web/issues/6324
   https://github.com/owncloud/web/pull/6618

* Enhancement - PDF viewer: [#6654](https://github.com/owncloud/web/pull/6654)

   We've added a lightweight PDF viewer app which allows the user to bookmark PDF files.

   https://github.com/owncloud/web/pull/6654

* Enhancement - Permission-based visibility of upload and create buttons: [#6690](https://github.com/owncloud/web/pull/6690)

   Instead of showing disabled "Upload" and "New" buttons on public links with insufficient
   permissions, we now hide them for the page visitor.

   https://github.com/owncloud/web/issues/5618
   https://github.com/owncloud/web/pull/6690

* Enhancement - Audio support in preview app: [#6514](https://github.com/owncloud/web/pull/6514)

   We've added support for audio file playback into the preview app (namely flac, mp3, wav and
   ogg).

   https://github.com/owncloud/web/pull/6514

* Enhancement - Audio handling in preview app: [#6514](https://github.com/owncloud/web/pull/6514)

   We've built audio preview support for flac, mp3, ogg and wav files into the preview app.

   https://github.com/owncloud/web/pull/6514

* Enhancement - Provide dependencies to applications: [#6746](https://github.com/owncloud/web/pull/6746)

   We reduced the bundle size of externally built applications and the risk of clashing library
   instances by passing certain dependencies into applications (namely
   `@vue/composition-api`, `vuex` and `luxon`).

   https://github.com/owncloud/web/issues/5716
   https://github.com/owncloud/web/pull/6746

* Enhancement - Remove public links from SharedWithOthers page: [#5976](https://github.com/owncloud/web/issues/5976)

   We've removed links from the shared-with-others page as those belong in the `Shared via link`
   page (and already exist there).

   https://github.com/owncloud/web/issues/5976
   https://github.com/owncloud/web/pull/6612

* Enhancement - Rename mediaviewer to preview: [#6514](https://github.com/owncloud/web/pull/6514)

   We've renamed the media-viewer app to preview because that describes the purpose of the app
   better and doesn't mislead users into thinking that it's a full blown media viewer.

   For the time being we've added an app alias handling to ownCloud Web which prints a deprecation
   warning if the preview app is tried to be loaded as `media-viewer`.

   https://github.com/owncloud/web/pull/6514

* Enhancement - Add "Shared with" column for "Shared with me" page: [#6140](https://github.com/owncloud/web/issues/6140)

   We've added the "Shared with" column for incoming shares in the "Shared with me" page and
   changed the order of the column to follow the "Share owner" column.

   https://github.com/owncloud/web/issues/6140
   https://github.com/owncloud/web/pull/6699

* Enhancement - Spaces quota unlimited option: [#6693](https://github.com/owncloud/web/pull/6693)

   Space quota can now be set to unlimited

   https://github.com/owncloud/web/issues/6470
   https://github.com/owncloud/web/pull/6693

* Enhancement - Spaces context menus: [#6659](https://github.com/owncloud/web/pull/6659)

   Spaces context menus have been adjusted visibly to match the other available context menus.
   Also, the corresponding component has been abstracted in the course of this. This cleans up a
   lot of (duplicated) code across the spaces views and makes future adjustments easier.

   https://github.com/owncloud/web/issues/6634
   https://github.com/owncloud/web/pull/6659

* Enhancement - Spaces group sharing: [#6639](https://github.com/owncloud/web/pull/6639)

   Resources within a space can now be shared with user groups. Spaces themselves can't be shared
   with groups, therefore those have been removed from the autocomplete results when adding
   members to a space.

   https://github.com/owncloud/web/issues/6283
   https://github.com/owncloud/web/pull/6639

* Enhancement - Spaces link sharing: [#6633](https://github.com/owncloud/web/pull/6633)

   Spaces and their resources can now be shared via links.

   https://github.com/owncloud/web/issues/6283
   https://github.com/owncloud/web/pull/6633

* Enhancement - Space name in breadcrumb: [#6662](https://github.com/owncloud/web/pull/6662)

   We have updated the breadcrumbs to show a space's name (if available).

   https://github.com/owncloud/web/issues/6637
   https://github.com/owncloud/web/pull/6662

* Enhancement - Spaces overview topbar layout: [#6642](https://github.com/owncloud/web/pull/6642)

   We've adjusted the topbar layout of the spaces overview to match the other pages.

   https://github.com/owncloud/web/issues/6641
   https://github.com/owncloud/web/pull/6642

* Enhancement - Text Editor: [#6667](https://github.com/owncloud/web/pull/6667)

   Replace MarkdownEditor with Text Editor and add the following improvements: * Disable
   preview for non md files (configurable) * Data integrity checks (prevent exiting with unsaved
   changes) * Better error information to the user * Keyboard shortcut to save * Read-only mode *
   Fix to open on non-authenticated public links * Open other extensions (js, json, xml, py, php,
   yaml) * UI polish

   https://github.com/owncloud/web/pull/6667
   https://github.com/owncloud/web/pull/6754
   https://github.com/owncloud/web/pull/6763

* Enhancement - Unified shares sidebar panel: [#6701](https://github.com/owncloud/web/pull/6701)

   We've merged the "people" and "link" shares sidebar panels to give users a clearer idea of who
   has access to a resource.

   https://github.com/owncloud/web/issues/6621
   https://github.com/owncloud/web/pull/6701

* Enhancement - Update ODS to v13.1.0-rc.2: [#6701](https://github.com/owncloud/web/pull/6701)

   We updated the ownCloud Design System to version 13.1.0-rc.2. Please refer to the full
   changelog in the ODS release (linked) for more details. Summary:

   - Enhancement - Replace deprecated String.prototype.substr():
   https://github.com/owncloud/owncloud-design-system/pull/2059 - Enhancement -
   Redesign OcGhostElement:
   https://github.com/owncloud/owncloud-design-system/pull/2049 - Enhancement - Export
   package members: https://github.com/owncloud/owncloud-design-system/pull/2048 -
   Enhancement - Make OcResource inline-flex:
   https://github.com/owncloud/owncloud-design-system/pull/2041 - Bugfix - Disabled
   textarea color contrast in darkmode:
   https://github.com/owncloud/owncloud-design-system/pull/2055 - Bugfix - OcTextInput:
   Fix event handlers in loops:
   https://github.com/owncloud/owncloud-design-system/pull/2054

   https://github.com/owncloud/web/pull/6701
   https://github.com/owncloud/web/pull/6708
   https://github.com/owncloud/owncloud-design-system/releases/tag/v13.1.0-rc.2

Changelog for ownCloud Web [5.3.0] (2022-03-23)
=======================================
The following sections list the changes in ownCloud web 5.3.0 relevant to
ownCloud admins and users.

[5.3.0]: https://github.com/owncloud/web/compare/v5.2.0...v5.3.0

Summary
-------

* Bugfix - Thumbnails only for accepted shares: [#5310](https://github.com/owncloud/web/issues/5310)
* Bugfix - File handling in apps: [#6456](https://github.com/owncloud/web/pull/6456)
* Bugfix - Pressing enter in forms: [#6548](https://github.com/owncloud/web/pull/6548)
* Bugfix - Remove iFrame border: [#6555](https://github.com/owncloud/web/issues/6555)
* Bugfix - Show no auth popup on password protected public links in ownCloud 10: [#6530](https://github.com/owncloud/web/pull/6530)
* Bugfix - Sidebar panels in public links: [#2090](https://github.com/owncloud/web/issues/2090)
* Bugfix - Don't write error message on passing ReadmeContentModal.spec.js test: [#6525](https://github.com/owncloud/web/pull/6525)
* Bugfix - Rename parent folder: [#6516](https://github.com/owncloud/web/issues/6516)
* Bugfix - Resize observer errors within subfolders of a space: [#6569](https://github.com/owncloud/web/pull/6569)
* Bugfix - Resolve private links: [#5654](https://github.com/owncloud/web/pull/5654)
* Bugfix - Natural sort order: [#6532](https://github.com/owncloud/web/issues/6532)
* Bugfix - Prevent cross-site scripting attack while displaying space description: [#6523](https://github.com/owncloud/web/pull/6523)
* Bugfix - Prevent the member count inside a space from disappearing: [#6550](https://github.com/owncloud/web/pull/6550)
* Bugfix - TypeErrors when trying to destruct undefined properties: [#6568](https://github.com/owncloud/web/pull/6568)
* Enhancement - Don't block account page while groups are loading: [#6547](https://github.com/owncloud/web/pull/6547)
* Enhancement - Add a watcher for the share panel of a space: [#6543](https://github.com/owncloud/web/pull/6543)
* Enhancement - App context route to query instead of params: [#6622](https://github.com/owncloud/web/pull/6622)
* Enhancement - Contextmenu background hover: [#6553](https://github.com/owncloud/web/pull/6553)
* Enhancement - Design improvements: [#6492](https://github.com/owncloud/web/issues/6492)
* Enhancement - Improve resource loading within spaces: [#6601](https://github.com/owncloud/web/pull/6601)
* Enhancement - Internet Explorer deprecation warning banner: [#6629](https://github.com/owncloud/web/pull/6629)
* Enhancement - Load space images as preview: [#6529](https://github.com/owncloud/web/pull/6529)
* Enhancement - Move ListLoader component: [#6644](https://github.com/owncloud/web/pull/6644)
* Enhancement - Move NoContentMessage component: [#6643](https://github.com/owncloud/web/pull/6643)
* Enhancement - Move share indicators: [#5976](https://github.com/owncloud/web/issues/5976)
* Enhancement - Polish ViewOptions: [#6492](https://github.com/owncloud/web/issues/6492)
* Enhancement - Resolve private links into folders instead of parent: [#5533](https://github.com/owncloud/web/issues/5533)
* Enhancement - Share inheritance indicators: [#6613](https://github.com/owncloud/web/pull/6613)
* Enhancement - Shares overview: [#6440](https://github.com/owncloud/web/issues/6440)
* Enhancement - Side bar nav tags: [#6540](https://github.com/owncloud/web/pull/6540)
* Enhancement - Show space members in share panel for files inside a space: [#6554](https://github.com/owncloud/web/pull/6554)
* Enhancement - Allow updating space quota: [#6477](https://github.com/owncloud/web/pull/6477)
* Enhancement - Update the stored space after its members have been changed: [#6545](https://github.com/owncloud/web/pull/6545)
* Enhancement - Implement edit quota action in spaces overview: [#6598](https://github.com/owncloud/web/pull/6598)
* Enhancement - Implement people sharing for spaces: [#6455](https://github.com/owncloud/web/pull/6455)
* Enhancement - Implement the spaces permission concept: [#6531](https://github.com/owncloud/web/pull/6531)
* Enhancement - Implement people sharing for resources within a space: [#6577](https://github.com/owncloud/web/pull/6577)
* Enhancement - Trash bin: [#6566](https://github.com/owncloud/web/pull/6566)
* Enhancement - Trash bin breadcrumbs: [#6609](https://github.com/owncloud/web/pull/6609)
* Enhancement - Update the graph SDK: [#6519](https://github.com/owncloud/web/pull/6519)
* Enhancement - Update ODS to v13.0.0: [#6540](https://github.com/owncloud/web/pull/6540)

Details
-------

* Bugfix - Thumbnails only for accepted shares: [#5310](https://github.com/owncloud/web/issues/5310)

   Only accepted shares now display a thumbnail in the "Shared with me" resource table.

   https://github.com/owncloud/web/issues/5310
   https://github.com/owncloud/web/pull/6534

* Bugfix - File handling in apps: [#6456](https://github.com/owncloud/web/pull/6456)

   We fixed loading and saving files in apps in all contexts. It's now possible to open files in apps
   in personal files, favorites, share views and spaces.

   https://github.com/owncloud/web/pull/6456

* Bugfix - Pressing enter in forms: [#6548](https://github.com/owncloud/web/pull/6548)

   We fixed behavior when pressing enter in forms. For instance when adding or editing public
   links pressing enter in the name or password input fields, instead of saving the link it opened
   the datepicker.

   https://github.com/owncloud/web/pull/6548
   https://github.com/owncloud/owncloud-design-system/pull/2009

* Bugfix - Remove iFrame border: [#6555](https://github.com/owncloud/web/issues/6555)

   We fixed a UI issue which showed small borders around iFrames, e.g. in the external app.

   https://github.com/owncloud/web/issues/6555
   https://github.com/owncloud/web/pull/6573

* Bugfix - Show no auth popup on password protected public links in ownCloud 10: [#6530](https://github.com/owncloud/web/pull/6530)

   We fixed a native browser auth popup erroneously being shown for password protected public
   links with ownCloud 10.

   https://github.com/owncloud/web/issues/5727
   https://github.com/owncloud/web/pull/6530
   https://github.com/owncloud/owncloud-sdk/pull/1020

* Bugfix - Sidebar panels in public links: [#2090](https://github.com/owncloud/web/issues/2090)

   Public links were showing some panels (People, Links, Versions) that were not supposed to be
   visible in public links. We've fixed that by excluding those panels on public link routes.

   https://github.com/owncloud/web/issues/2090
   https://github.com/owncloud/web/pull/6567

* Bugfix - Don't write error message on passing ReadmeContentModal.spec.js test: [#6525](https://github.com/owncloud/web/pull/6525)

   ReadmeContentModal.spec.js test doesn't write error output anymore while passing

   https://github.com/owncloud/web/issues/6337
   https://github.com/owncloud/web/pull/6525

* Bugfix - Rename parent folder: [#6516](https://github.com/owncloud/web/issues/6516)

   We fixed the rename option in the parent folder / breadcrumb context menu. It was broken due to
   malformed webdav paths.

   https://github.com/owncloud/web/issues/6516
   https://github.com/owncloud/web/pull/6631

* Bugfix - Resize observer errors within subfolders of a space: [#6569](https://github.com/owncloud/web/pull/6569)

   We've fixed a bug where the resize observer crashes within subfolders of a space because there
   is no element to observe.

   https://github.com/owncloud/web/pull/6569

* Bugfix - Resolve private links: [#5654](https://github.com/owncloud/web/pull/5654)

   Private links didn't resolve correctly anymore because the internal file path handling was
   changed in our api client (owncloud-sdk). We've adjusted it accordingly so that private links
   now resolve correctly again.

   https://github.com/owncloud/web/pull/5654

* Bugfix - Natural sort order: [#6532](https://github.com/owncloud/web/issues/6532)

   We've fixed the sort order to respect natural sorting again. Also used the chance to make use of
   `Intl.Collator` instead of `localeCompare` which is considered to be a performance
   improvement.

   https://github.com/owncloud/web/issues/6532
   https://github.com/owncloud/web/pull/6632

* Bugfix - Prevent cross-site scripting attack while displaying space description: [#6523](https://github.com/owncloud/web/pull/6523)

   We've added a new package that strips out possible XSS attack code while displaying the space
   description

   https://github.com/owncloud/web/issues/6526
   https://github.com/owncloud/web/pull/6523

* Bugfix - Prevent the member count inside a space from disappearing: [#6550](https://github.com/owncloud/web/pull/6550)

   We've fixed a bug where opening the sidebar for a file inside a space caused the member count of
   the space to disappear.

   https://github.com/owncloud/web/pull/6550

* Bugfix - TypeErrors when trying to destruct undefined properties: [#6568](https://github.com/owncloud/web/pull/6568)

   We fixed TypeErrors when trying to destruct undefined properties in the space permissions
   checks by providing a default value.

   https://github.com/owncloud/web/pull/6568

* Enhancement - Don't block account page while groups are loading: [#6547](https://github.com/owncloud/web/pull/6547)

   We don't show a loading state for the full account information page anymore while the group
   membership information is loading. Instead we only show a loading spinner for the group
   membership information, while the rest of the user information is available immediately.

   https://github.com/owncloud/web/pull/6547

* Enhancement - Add a watcher for the share panel of a space: [#6543](https://github.com/owncloud/web/pull/6543)

   We've added a watcher for the share panel of a space to ensure seamless navigation via the share
   indicator.

   https://github.com/owncloud/web/pull/6543

* Enhancement - App context route to query instead of params: [#6622](https://github.com/owncloud/web/pull/6622)

   We've moved app context information (where you get redirected when you close an app) into the
   query instead of a regular param. This relocates this information further to the back of the url
   where it's less confusing for users.

   https://github.com/owncloud/web/pull/6622

* Enhancement - Contextmenu background hover: [#6553](https://github.com/owncloud/web/pull/6553)

   We've added a background hover color for contextmenu actions.

   https://github.com/owncloud/web/issues/6560
   https://github.com/owncloud/web/pull/6553
   https://github.com/owncloud/web/pull/6559

* Enhancement - Design improvements: [#6492](https://github.com/owncloud/web/issues/6492)

   We've fixed various design glitches and improved the overall look-and-feel of the UI.

   https://github.com/owncloud/web/issues/6492
   https://github.com/owncloud/web/issues/6555
   https://github.com/owncloud/web/pulls/6584

* Enhancement - Improve resource loading within spaces: [#6601](https://github.com/owncloud/web/pull/6601)

   We've improved the loading of resources within a space. This enhances performance and overall
   stability within spaces.

   * The loading task will determine if a space needs to be fetched or not. Route changes within a
   space do not require the space the be fetched again. This also ensures that the space image and
   readme won't be fetched when navigating into subfolders. * The space now gets set at the end of
   the loading task. This ensures that the space task has finished as soon as the image and readme
   get loaded.

   https://github.com/owncloud/web/pull/6601

* Enhancement - Internet Explorer deprecation warning banner: [#6629](https://github.com/owncloud/web/pull/6629)

   We've removed some internal checks for the internet explorer browser since it's not
   officially supported anymore in favor of a warning banner that informs the user that the web app
   may not work properly if they use it with IE.

   https://github.com/owncloud/web/pull/6629

* Enhancement - Load space images as preview: [#6529](https://github.com/owncloud/web/pull/6529)

   We've added a new logic which renders space images as preview to minimize data traffic

   https://github.com/owncloud/web/pull/6529
   https://github.com/owncloud/web/pull/6558

* Enhancement - Move ListLoader component: [#6644](https://github.com/owncloud/web/pull/6644)

   We've moved the ListLoader component into the web-pkg package and give it a more general name,
   to ease the use in other packages.

   https://github.com/owncloud/web/pull/6644

* Enhancement - Move NoContentMessage component: [#6643](https://github.com/owncloud/web/pull/6643)

   We've moved the NoContentMessage component into the web-pkg package to ease the use in other
   packages

   https://github.com/owncloud/web/pull/6643

* Enhancement - Move share indicators: [#5976](https://github.com/owncloud/web/issues/5976)

   We've moved the share/status indicators into a separate column and adjusted the design in ODS.

   https://github.com/owncloud/web/issues/5976
   https://github.com/owncloud/web/pull/6552
   https://github.com/owncloud/owncloud-design-system/pull/2014
   https://github.com/owncloud/web/pull/6583

* Enhancement - Polish ViewOptions: [#6492](https://github.com/owncloud/web/issues/6492)

   We've added an hover effect for ViewOptions buttons

   https://github.com/owncloud/web/issues/6492
   https://github.com/owncloud/web/pull/6591

* Enhancement - Resolve private links into folders instead of parent: [#5533](https://github.com/owncloud/web/issues/5533)

   Private links always resolved into the parent folder of the linked file and visually
   highlighted the file or folder from the link. We've changed this behaviour to directly
   navigate into the folder in case the linked resource is a folder and only keep the previous
   behaviour for when the linked resource is a file.

   https://github.com/owncloud/web/issues/5533
   https://github.com/owncloud/web/pull/5654

* Enhancement - Share inheritance indicators: [#6613](https://github.com/owncloud/web/pull/6613)

   We've implemented the share inheritance indicators in the share sidebar panel. They indicate
   whether a resource is shared indirectly via one of its parent folders.

   https://github.com/owncloud/web/issues/6528
   https://github.com/owncloud/web/pull/6613

* Enhancement - Shares overview: [#6440](https://github.com/owncloud/web/issues/6440)

   We've merged the three shares navigation items into one central "Shares" item, with a toggle to
   switch between the three different kinds of shares (incoming, outgoing, links). In the
   process, we have also renamed the "All files" page to the "Personal" page, indicating that this
   is the user's personal space since shares (and potentially other shared spaces) live
   elsewhere.

   https://github.com/owncloud/web/issues/6440
   https://github.com/owncloud/web/issues/6570
   https://github.com/owncloud/web/pull/6512
   https://github.com/owncloud/web/pull/6573

* Enhancement - Side bar nav tags: [#6540](https://github.com/owncloud/web/pull/6540)

   We have implemented a way to show a tag next to the sidebar navigation item link text

   https://github.com/owncloud/web/issues/6259
   https://github.com/owncloud/web/pull/6540

* Enhancement - Show space members in share panel for files inside a space: [#6554](https://github.com/owncloud/web/pull/6554)

   The space managers are now displayed in the sidebar for resources within a space. Also, space
   members are now sorted via role (managers first) and name.

   https://github.com/owncloud/web/issues/6283
   https://github.com/owncloud/web/pull/6554

* Enhancement - Allow updating space quota: [#6477](https://github.com/owncloud/web/pull/6477)

   We have implemented a way to update the quota of a space

   https://github.com/owncloud/web/issues/6470
   https://github.com/owncloud/web/pull/6477

* Enhancement - Update the stored space after its members have been changed: [#6545](https://github.com/owncloud/web/pull/6545)

   We now update the stored space after its members have been changed. Also, the
   permission-object of a built space has been simplified in the course of this.

   https://github.com/owncloud/web/pull/6545

* Enhancement - Implement edit quota action in spaces overview: [#6598](https://github.com/owncloud/web/pull/6598)

   We've added the edit quota action to the space context menu in the spaces overview.

   https://github.com/owncloud/web/pull/6598

* Enhancement - Implement people sharing for spaces: [#6455](https://github.com/owncloud/web/pull/6455)

   Spaces can now be shared with other people. This change specifically includes:

   * listing all members who have access to a space (possible for all space members) * adding
   members to a space and giving them dedicated roles (possible for managers only) * editing the
   role of members (possible for managers only) * removing members from a space (possible for
   managers only)

   https://github.com/owncloud/web/issues/6283
   https://github.com/owncloud/web/pull/6455
   https://github.com/owncloud/web/pull/6572

* Enhancement - Implement the spaces permission concept: [#6531](https://github.com/owncloud/web/pull/6531)

   We've implemented the spaces permission concept and improved the code structure for further
   permission changes.

   https://github.com/owncloud/web/pull/6531

* Enhancement - Implement people sharing for resources within a space: [#6577](https://github.com/owncloud/web/pull/6577)

   Resources within a space can now be shared with other people.

   https://github.com/owncloud/web/issues/6283
   https://github.com/owncloud/web/pull/6577

* Enhancement - Trash bin: [#6566](https://github.com/owncloud/web/pull/6566)

   We've improved the trash bin in general: * Add compatibility with owncloud-sdk 3.0.0-alpha 1 *
   Add a confirmation dialog while hitting the `Empty trash bin` button * Add trash bin for project
   spaces * Change personal trash bin route from `files/trash` to `files/trash/personal`

   https://github.com/owncloud/web/issues/6544
   https://github.com/owncloud/web/issues/5974
   https://github.com/owncloud/web/pull/6566

* Enhancement - Trash bin breadcrumbs: [#6609](https://github.com/owncloud/web/pull/6609)

   We've improved the trash bin in general: * Add a breadcrumb for personal trash bin * Improve the
   breadcrumb for spaces trash bin, also add 'Navigate to space' action to context menu * Fix wrong
   page title in spaces trash bin

   https://github.com/owncloud/web/pull/6609

* Enhancement - Update the graph SDK: [#6519](https://github.com/owncloud/web/pull/6519)

   We've updated the graph SDK to include the "me"-endpoint.

   https://github.com/owncloud/web/pull/6519

* Enhancement - Update ODS to v13.0.0: [#6540](https://github.com/owncloud/web/pull/6540)

   We updated the ownCloud Design System to version 13.0.0. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   - Change - Default type of OcButton:
   https://github.com/owncloud/owncloud-design-system/pull/2009 - Change - Remove
   OcStatusIndicators from OcResource:
   https://github.com/owncloud/owncloud-design-system/pull/2014 - Enhancement -
   Redesign OcStatusIndicators:
   https://github.com/owncloud/owncloud-design-system/pull/2014 - Enhancement - Icons
   for drawio, ifc and odg resource types:
   https://github.com/owncloud/owncloud-design-system/pull/2005 - Enhancement - Apply
   size property to oc-tag:
   https://github.com/owncloud/owncloud-design-system/pull/2011 - Enhancement -
   Underline OcResourceName:
   https://github.com/owncloud/owncloud-design-system/pull/2019 - Enhancement -
   Configurable OcResource parentfolder name:
   https://github.com/owncloud/owncloud-design-system/pull/2029 - Enhancement - Polish
   OcSwitch: https://github.com/owncloud/owncloud-design-system/pull/2018 -
   Enhancement - Make filled primary OcButton use gradient background:
   https://github.com/owncloud/owncloud-design-system/pull/2036 - Bugfix - Disabled
   OcSelect background: https://github.com/owncloud/owncloud-design-system/pull/2008 -
   Bugfix - Icons/Thumbnails were only visible for clickable resources:
   https://github.com/owncloud/owncloud-design-system/pull/2007 - Bugfix - OcSelect
   transparent background:
   https://github.com/owncloud/owncloud-design-system/pull/2036

   https://github.com/owncloud/web/pull/6540
   https://github.com/owncloud/web/pull/6600
   https://github.com/owncloud/web/pull/6584
   https://github.com/owncloud/web/pull/6561
   https://github.com/owncloud/owncloud-design-system/releases/tag/v13.0.0

Changelog for ownCloud Web [5.2.0] (2022-03-03)
=======================================
The following sections list the changes in ownCloud web 5.2.0 relevant to
ownCloud admins and users.

[5.2.0]: https://github.com/owncloud/web/compare/v5.1.0...v5.2.0

Summary
-------

* Bugfix - Breadcrumb 'All Files' link: [#6467](https://github.com/owncloud/web/pull/6467)
* Bugfix - Load capabilities for password protected public links: [#6471](https://github.com/owncloud/web/pull/6471)
* Bugfix - No selection info right sidebar: [#6502](https://github.com/owncloud/web/issues/6502)
* Bugfix - Update file list when creating new files: [#5530](https://github.com/owncloud/web/issues/5530)
* Enhancement - Add quick rename button: [#6645](https://github.com/owncloud/web/pull/6645)
* Enhancement - Display search results within files app: [#6496](https://github.com/owncloud/web/issues/6496)
* Enhancement - Option to enable Vue history mode: [#6363](https://github.com/owncloud/web/issues/6363)
* Enhancement - Redesign OcBreadcrumb: [#6218](https://github.com/owncloud/web/issues/6218)
* Enhancement - Redesign create and upload buttons: [#6279](https://github.com/owncloud/web/issues/6279)
* Enhancement - Redesign FilesTable: [#6207](https://github.com/owncloud/web/issues/6207)
* Enhancement - Run web as oc10 sidecar: [#6363](https://github.com/owncloud/web/issues/6363)
* Enhancement - Allow updating space image and description: [#6410](https://github.com/owncloud/web/pull/6410)
* Enhancement - Outsource space readme content modal: [#6509](https://github.com/owncloud/web/pull/6509)
* Enhancement - Implement the right sidebar for spaces: [#6437](https://github.com/owncloud/web/pull/6437)
* Enhancement - Update ODS to v12.2.1: [#6450](https://github.com/owncloud/web/pull/6450)

Details
-------

* Bugfix - Breadcrumb 'All Files' link: [#6467](https://github.com/owncloud/web/pull/6467)

   The `All Files` link in the breadcrumb now always point to the root of the personal storage home
   instead of the optional homeFolder.

   https://github.com/owncloud/web/issues/6327
   https://github.com/owncloud/web/pull/6467

* Bugfix - Load capabilities for password protected public links: [#6471](https://github.com/owncloud/web/pull/6471)

   We've enabled capability loading for password protected public links.

   https://github.com/owncloud/web/issues/5863
   https://github.com/owncloud/web/pull/6471

* Bugfix - No selection info right sidebar: [#6502](https://github.com/owncloud/web/issues/6502)

   We fixed that the right sidebar was not showing the "no selection" info panel anymore in the root
   of "All files". In addition we also use the same "no selection" info panel now in the root nodes of
   public links.

   https://github.com/owncloud/web/issues/6502
   https://github.com/owncloud/web/issues/6182
   https://github.com/owncloud/web/pull/6505

* Bugfix - Update file list when creating new files: [#5530](https://github.com/owncloud/web/issues/5530)

   We update the file list now when creating a file in an editor that openes in a new tab (like
   draw.io).

   https://github.com/owncloud/web/issues/5530
   https://github.com/owncloud/web/pull/6358

* Enhancement - Add quick rename button: [#6645](https://github.com/owncloud/web/pull/6645)

   We've added a button for quick editing a resource name

   https://github.com/owncloud/web/issues/6626
   https://github.com/owncloud/web/pull/6645

* Enhancement - Display search results within files app: [#6496](https://github.com/owncloud/web/issues/6496)

   We've updated the "Search in all files" view to be displayed within the files app instead of
   showing them in a dedicated extension. This way, users don't loose their context and can still
   use sidebar.

   https://github.com/owncloud/web/issues/6496
   https://github.com/owncloud/web/issues/6507
   https://github.com/owncloud/web/pulls/6511

* Enhancement - Option to enable Vue history mode: [#6363](https://github.com/owncloud/web/issues/6363)

   We've added the option to use vue's history mode. All configuration is done automatically by
   the system. To enable it, add a `<base href="PATH">` header tag to `index.html`,
   `oidc-callback.html` and `oidc-silent-redirect.html`. Adding `<base>` is not needed for
   ocis.

   https://github.com/owncloud/web/issues/6363
   https://github.com/owncloud/web/issues/6277

* Enhancement - Redesign OcBreadcrumb: [#6218](https://github.com/owncloud/web/issues/6218)

   We've adjustet the look of the OcBreadcrumb to fit the Redesign

   https://github.com/owncloud/web/issues/6218
   https://github.com/owncloud/web/pull/6472

* Enhancement - Redesign create and upload buttons: [#6279](https://github.com/owncloud/web/issues/6279)

   We have separated the "Create new file/folder" and "Upload" actions above the files list into
   two separate buttons, also using the new resource type icons for more consistency.

   https://github.com/owncloud/web/issues/6279
   https://github.com/owncloud/web/pull/6358
   https://github.com/owncloud/web/pull/6500

* Enhancement - Redesign FilesTable: [#6207](https://github.com/owncloud/web/issues/6207)

   We've redesigned the QuickActions visually and updated theming to fit the redesign

   https://github.com/owncloud/web/issues/6207
   https://github.com/owncloud/web/pull/6450

* Enhancement - Run web as oc10 sidecar: [#6363](https://github.com/owncloud/web/issues/6363)

   We've added the option to run web in oc10 sidecar mode. Copy
   `config/config.json.sample-oc10` to `config/config.json`, run `yarn server` and then
   `docker compose up oc10`.

   https://github.com/owncloud/web/issues/6363

* Enhancement - Allow updating space image and description: [#6410](https://github.com/owncloud/web/pull/6410)

   We have implemented multiple ways to update the image and description of a space.

   https://github.com/owncloud/web/issues/6377
   https://github.com/owncloud/web/pull/6410

* Enhancement - Outsource space readme content modal: [#6509](https://github.com/owncloud/web/pull/6509)

   We've added a new component for space readme content modal and extracted duplicated code.

   https://github.com/owncloud/web/pull/6509

* Enhancement - Implement the right sidebar for spaces: [#6437](https://github.com/owncloud/web/pull/6437)

   The right sidebar for a space functions similar to the files sidebar and gives the user basic
   information and actions for the current space.

   https://github.com/owncloud/web/issues/6284
   https://github.com/owncloud/web/pull/6437

* Enhancement - Update ODS to v12.2.1: [#6450](https://github.com/owncloud/web/pull/6450)

   We updated the ownCloud Design System to version 12.2.1. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   - Enhancement - Apply outstanding background color to oc-card:
   https://github.com/owncloud/owncloud-design-system/pull/1974 - Enhancement -
   Redesign OcBreadcrumb: https://github.com/owncloud/web/issues/6218 - Enhancement -
   Redesign files table related components:
   https://github.com/owncloud/owncloud-design-system/pull/1958

   https://github.com/owncloud/web/pull/6450
   https://github.com/owncloud/web/pull/6472
   https://github.com/owncloud/web/pull/6505
   https://github.com/owncloud/owncloud-design-system/releases/tag/v12.2.1

Changelog for ownCloud Web [5.1.0] (2022-02-18)
=======================================
The following sections list the changes in ownCloud web 5.1.0 relevant to
ownCloud admins and users.

[5.1.0]: https://github.com/owncloud/web/compare/v5.0.0...v5.1.0

Summary
-------

* Bugfix - App compatibility: [#6439](https://github.com/owncloud/web/pull/6439)
* Bugfix - Fix closing apps opened from search: [#6444](https://github.com/owncloud/web/pull/6444)
* Enhancement - Add the graph client to the client service: [#6425](https://github.com/owncloud/web/pull/6425)
* Enhancement - Enable context menu for search results: [#6445](https://github.com/owncloud/web/pull/6445)
* Enhancement - Use the Vue store for spaces: [#6427](https://github.com/owncloud/web/pull/6427)

Details
-------

* Bugfix - App compatibility: [#6439](https://github.com/owncloud/web/pull/6439)

   We've made sure that apps that were not made compatible with ownCloud Web 5.0.0 don't run into a
   non-rendered state.

   https://github.com/owncloud/web/pull/6439

* Bugfix - Fix closing apps opened from search: [#6444](https://github.com/owncloud/web/pull/6444)

   We've made sure that closing apps that were opened from search navigates properly back to the
   original search.

   https://github.com/owncloud/web/pull/6444

* Enhancement - Add the graph client to the client service: [#6425](https://github.com/owncloud/web/pull/6425)

   This way, the client for the graph API can easily be fetched when needed.

   https://github.com/owncloud/web/pull/6425

* Enhancement - Enable context menu for search results: [#6445](https://github.com/owncloud/web/pull/6445)

   We've enabled a rudimentary context menu for search results.

   https://github.com/owncloud/web/pull/6445

* Enhancement - Use the Vue store for spaces: [#6427](https://github.com/owncloud/web/pull/6427)

   Using the store for spaces integrates them seamlessly in our ecosystem and makes it easier to
   develop spaces even further. E.g. the properties of a space can now be altered without fetching
   all spaces again. This was achieved by introducing a "buildSpace" method, that transforms a
   space into a more generic resource object (just like regular files or shares).

   https://github.com/owncloud/web/pull/6427

Changelog for ownCloud Web [5.0.0] (2022-02-14)
=======================================
The following sections list the changes in ownCloud web 5.0.0 relevant to
ownCloud admins and users.

[5.0.0]: https://github.com/owncloud/web/compare/v4.9.0...v5.0.0

Summary
-------

* Bugfix - Application config not available to application: [#6296](https://github.com/owncloud/web/issues/6296)
* Bugfix - Failed move by drag'n'drop doesn't show the resource name in the error: [#6412](https://github.com/owncloud/web/issues/6412)
* Bugfix - Add and remove to/from favorites: [#6328](https://github.com/owncloud/web/issues/6328)
* Bugfix - Jumpy batch actions: [#6360](https://github.com/owncloud/web/pull/6360)
* Bugfix - Open folder from context menu: [#6187](https://github.com/owncloud/web/issues/6187)
* Bugfix - Breadcrumbs in different views: [#6326](https://github.com/owncloud/web/issues/6326)
* Bugfix - Scrolling inside Markdown Editor: [#4606](https://github.com/owncloud/web/issues/4606)
* Bugfix - Focus management in topbar dropdowns: [#6213](https://github.com/owncloud/web/pull/6213)
* Change - Dropped editor route whitelist: [#6381](https://github.com/owncloud/web/pull/6381)
* Change - Enforce extensions to always display the ui-header: [#6401](https://github.com/owncloud/web/pull/6401)
* Change - Remove UiKit: [#6103](https://github.com/owncloud/web/issues/6103)
* Change - Rename theme logo sidebar to topbar: [#6349](https://github.com/owncloud/web/pull/6349)
* Change - Use remixicons for redesign: [#6142](https://github.com/owncloud/web/pull/6142)
* Change - Drop support for Internet Explorer and other dead browsers: [#6386](https://github.com/owncloud/web/pull/6386)
* Enhancement - Add spaces actions: [#6254](https://github.com/owncloud/web/pull/6254)
* Enhancement - File creation via app provider: [#5890](https://github.com/owncloud/web/pull/5890)
* Enhancement - Redirect to IDP when opening apps from bookmark: [#6045](https://github.com/owncloud/web/issues/6045)
* Enhancement - Context Route Params: [#6331](https://github.com/owncloud/web/pull/6331)
* Enhancement - Darkmode theme switcher: [#6242](https://github.com/owncloud/web/issues/6242)
* Enhancement - Drawio improvements: [#6125](https://github.com/owncloud/web/pull/6125)
* Enhancement - File selection simplification: [#5967](https://github.com/owncloud/web/issues/5967)
* Enhancement - Resource-specific icons in ResourceTable: [#6295](https://github.com/owncloud/web/pull/6295)
* Enhancement - Reorganize urls: [#6137](https://github.com/owncloud/web/pull/6137)
* Enhancement - Lazy resource table cells: [#6204](https://github.com/owncloud/web/pull/6204)
* Enhancement - Add URL handling to markdown editor: [#6134](https://github.com/owncloud/web/pull/6134)
* Enhancement - Persist chosen sorting options: [#5930](https://github.com/owncloud/web/issues/5930)
* Enhancement - Redesign appswitcher: [#6102](https://github.com/owncloud/web/issues/6102)
* Enhancement - Redesign main layout: [#6036](https://github.com/owncloud/web/issues/6036)
* Enhancement - Redesigned user menu: [#6272](https://github.com/owncloud/web/pull/6272)
* Enhancement - Show parent folder for resources: [#6226](https://github.com/owncloud/web/pull/6226)
* Enhancement - Add default sorting to the spaces list: [#6262](https://github.com/owncloud/web/pull/6262)
* Enhancement - Implement spaces front page: [#6287](https://github.com/owncloud/web/pull/6287)
* Enhancement - Implement spaces list: [#6199](https://github.com/owncloud/web/pull/6199)
* Enhancement - Update ODS to v12.1.0: [#6086](https://github.com/owncloud/web/pull/6086)
* Enhancement - Update SDK: [#6309](https://github.com/owncloud/web/pull/6309)

Details
-------

* Bugfix - Application config not available to application: [#6296](https://github.com/owncloud/web/issues/6296)

   We fixed a bug in providing config to external apps like draw-io.

   https://github.com/owncloud/web/issues/6296
   https://github.com/owncloud/web/pull/6298

* Bugfix - Failed move by drag'n'drop doesn't show the resource name in the error: [#6412](https://github.com/owncloud/web/issues/6412)

   We fixed the error message when moving an item via drag-and-drop failed, now it shows the
   correct name of the item.

   https://github.com/owncloud/web/issues/6412

* Bugfix - Add and remove to/from favorites: [#6328](https://github.com/owncloud/web/issues/6328)

   We've fixed bugs related to adding and removing files to/from favorites: - "favorite" star
   button in the right sidebar of the files app was not being updated when the favorite-state was
   modified through a click on the star icon - toggling the favorites state of the current folder
   was broken (via both context menu on current folder and right sidebar without a file selection)

   https://github.com/owncloud/web/issues/6328
   https://github.com/owncloud/web/pull/6330

* Bugfix - Jumpy batch actions: [#6360](https://github.com/owncloud/web/pull/6360)

   We fixed a bug that made the batch actions move up and down a few pixels every time they
   appeared/disappeared.

   https://github.com/owncloud/web/pull/6360

* Bugfix - Open folder from context menu: [#6187](https://github.com/owncloud/web/issues/6187)

   We fixed a bug in the context menu that prevented correct folder navigation ("Open folder").

   https://github.com/owncloud/web/issues/6187
   https://github.com/owncloud/web/pull/6232

* Bugfix - Breadcrumbs in different views: [#6326](https://github.com/owncloud/web/issues/6326)

   The files app had the breadcrumbs broken in the various views. We fixed that by actively
   watching the current route now for updates of some active route helpers.

   https://github.com/owncloud/web/issues/6326
   https://github.com/owncloud/web/pull/6370

* Bugfix - Scrolling inside Markdown Editor: [#4606](https://github.com/owncloud/web/issues/4606)

   Scrolling inside the Markdown Editor was broken, before the redesign by allowing the user to
   scroll the appBar out of the viewport, and after the redesign by cutting a potentially long
   preview off at the bottom. This has been addressed by allowing to scroll the preview content.

   https://github.com/owncloud/web/issues/4606
   https://github.com/owncloud/web/pull/6386

* Bugfix - Focus management in topbar dropdowns: [#6213](https://github.com/owncloud/web/pull/6213)

   We've fixed issues with focus management upon opening and closing the dropdown menus in the
   ApplicationSwitcher and Usermenu.

   https://github.com/owncloud/web/pull/6213

* Change - Dropped editor route whitelist: [#6381](https://github.com/owncloud/web/pull/6381)

   We've dropped the `routes` key from file extension handlers defined by editor apps. This was
   used as a whitelist for being rendered as available editor in the files app. The only usage of
   this was for disabling editors in the trashbin. We've moved that part of the business logic to
   the files app itself and from now on ignore the `routes` key from editors.

   https://github.com/owncloud/web/pull/6381

* Change - Enforce extensions to always display the ui-header: [#6401](https://github.com/owncloud/web/pull/6401)

   We've enforced the ui to always render the header for third party extensions. From now on
   extensions are not able to disable the header anymore.

   https://github.com/owncloud/web/pull/6401

* Change - Remove UiKit: [#6103](https://github.com/owncloud/web/issues/6103)

   The ownCloud design system has dropped the underlying UiKit library, which we've also removed
   from the web codebase to reduce the overall bundle size.

   https://github.com/owncloud/web/issues/6103
   https://github.com/owncloud/web/pull/6213

* Change - Rename theme logo sidebar to topbar: [#6349](https://github.com/owncloud/web/pull/6349)

   With the redesign, the theme-able logo has moved from the sidebar to the topbar. Accordingly,
   within a theme, the key for it has been renamed from `sidebar` to `topbar`.

   https://github.com/owncloud/web/pull/6349
   https://github.com/owncloud/web/pull/6386

* Change - Use remixicons for redesign: [#6142](https://github.com/owncloud/web/pull/6142)

   We've switched the iconset to remixicons to fit the new design.

   https://github.com/owncloud/web/issues/6100
   https://github.com/owncloud/web/pull/6142
   https://github.com/owncloud/web/pull/6270

* Change - Drop support for Internet Explorer and other dead browsers: [#6386](https://github.com/owncloud/web/pull/6386)

   Even though it was never officially supported, we were still checking for certain dead
   browsers. This has now been dropped.

   https://github.com/owncloud/web/pull/6386

* Enhancement - Add spaces actions: [#6254](https://github.com/owncloud/web/pull/6254)

   We added the following actions to the spaces overview:

   * Create a new space * Rename a space * Delete a space

   https://github.com/owncloud/web/issues/6255
   https://github.com/owncloud/web/pull/6254

* Enhancement - File creation via app provider: [#5890](https://github.com/owncloud/web/pull/5890)

   For oCIS deployments the integration of the app provider for editing files was enhanced by
   adding support for the app provider capabilities to create files as well.

   https://github.com/owncloud/web/pull/5890
   https://github.com/owncloud/web/pull/6312

* Enhancement - Redirect to IDP when opening apps from bookmark: [#6045](https://github.com/owncloud/web/issues/6045)

   We've expanded the check for authentication requirements to the referrer of the current URL.
   As a result an app that doesn't necessarily require authentication can still require
   authentication based on the file context it was opened in. This is especially important for
   situations where an app is opened for a file from a bookmark, so that we cannot rely on the user
   already having an authenticated session.

   https://github.com/owncloud/web/issues/6045
   https://github.com/owncloud/web/issues/6069
   https://github.com/owncloud/web/pull/6314

* Enhancement - Context Route Params: [#6331](https://github.com/owncloud/web/pull/6331)

   We now add params of the source context route to the query of app routes and convert them back to
   params when routing back to the origin - this is necessary to properly navigate back from
   opening files in extensions or in search results, throughout personal, public or, in the
   future, spaces views.

   https://github.com/owncloud/web/issues/6390
   https://github.com/owncloud/web/pull/6331

* Enhancement - Darkmode theme switcher: [#6242](https://github.com/owncloud/web/issues/6242)

   We've added a theme switcher and now initialize the user interface theme based on the user's
   browser preferences. It also gets saved to the localstorage of the browser so the user's
   preference gets saved locally.

   https://github.com/owncloud/web/issues/6242
   https://github.com/owncloud/web/pull/6240
   https://github.com/owncloud/web/pull/6350

* Enhancement - Drawio improvements: [#6125](https://github.com/owncloud/web/pull/6125)

   - Honor the autosave configuration, and actually save - Show error messages to the user,
   currently all failures are silent

   https://github.com/owncloud/web/pull/6125

* Enhancement - File selection simplification: [#5967](https://github.com/owncloud/web/issues/5967)

   When creating a file or folder the created item is neither selected nor scrolled to anymore.
   This enhances usability because the selection model doesn't get altered to a single item
   selection anymore and allows to create items and adding them to a preselected set of resources.
   It also fixes an accessibility violation as the selection model (and with it the current page in
   it's entirety) is not altered anymore without announcement.

   https://github.com/owncloud/web/issues/5967
   https://github.com/owncloud/web/pull/6208

* Enhancement - Resource-specific icons in ResourceTable: [#6295](https://github.com/owncloud/web/pull/6295)

   We've added FontAwesome icons for the different resource types, each getting their
   respective resource type color from the ODS definition.

   https://github.com/owncloud/web/pull/6295
   https://github.com/owncloud/web/pull/6387

* Enhancement - Reorganize urls: [#6137](https://github.com/owncloud/web/pull/6137)

   With the [global-url-format
   ADR](https://github.com/owncloud/ocis/blob/master/docs/ocis/adr/0011-global-url-format.md)
   we've decided how the internal and external URL schema should look like.

   To have a human understandable structure we've decided to also rethink how the overall
   structure should look like. This PR introduces the new schema and takes care that existing
   routes still work by redirecting them.

   https://github.com/owncloud/web/issues/6085
   https://github.com/owncloud/web/pull/6137
   https://github.com/owncloud/ocis/blob/master/docs/ocis/adr/0011-global-url-format.md

* Enhancement - Lazy resource table cells: [#6204](https://github.com/owncloud/web/pull/6204)

   ODS introduced lazy loadable table cells, this feature is now also part of web and enabled by
   default. To disable the feature set the displayResourcesLazy option to false.

   https://github.com/owncloud/web/pull/6204

* Enhancement - Add URL handling to markdown editor: [#6134](https://github.com/owncloud/web/pull/6134)

   We made the markdown editor URL aware. This enables the close button to return to the source
   folder of the file being edited and also enables opening the editor again on page reload.

   https://github.com/owncloud/web/issues/5928
   https://github.com/owncloud/web/pull/6134

* Enhancement - Persist chosen sorting options: [#5930](https://github.com/owncloud/web/issues/5930)

   We now persist the chosen sorting options per view into the local storage of the browser. This
   means, that when e.g. the `All files` page is sorted by last modification date and the `Share
   with others` page is sorted by share receivers, the web UI remembers those choices for example
   across browser tabs or during navigation in the folder tree.

   https://github.com/owncloud/web/issues/5930
   https://github.com/owncloud/web/pull/6290

* Enhancement - Redesign appswitcher: [#6102](https://github.com/owncloud/web/issues/6102)

   We've redesigned the appswitcher to follow the new design and highlight the currently used
   app.

   https://github.com/owncloud/web/issues/6102
   https://github.com/owncloud/web/pull/6349

* Enhancement - Redesign main layout: [#6036](https://github.com/owncloud/web/issues/6036)

   We've started to implement the redesign by adjusting the sidebar, topbar and appswitcher.
   While doing so, we also removed the `vue2-touch-events` dependency.

   https://github.com/owncloud/web/issues/6036
   https://github.com/owncloud/web/pull/6086
   https://github.com/owncloud/web/pull/6222
   https://github.com/owncloud/web/pull/6228
   https://github.com/owncloud/web/pull/6360
   https://github.com/owncloud/web/pull/6365
   https://github.com/owncloud/web/pull/6366
   https://github.com/owncloud/web/pull/6386

* Enhancement - Redesigned user menu: [#6272](https://github.com/owncloud/web/pull/6272)

   We've redesigned the user menu. It now also features more detailed information about the
   user's quota and how much space they have left.

   https://github.com/owncloud/web/issues/6101
   https://github.com/owncloud/web/pull/6272

* Enhancement - Show parent folder for resources: [#6226](https://github.com/owncloud/web/pull/6226)

   We've added a visual hint for the parent folder of a resource in cases where it could be usefull.

   https://github.com/owncloud/web/issues/5953
   https://github.com/owncloud/web/pull/6226

* Enhancement - Add default sorting to the spaces list: [#6262](https://github.com/owncloud/web/pull/6262)

   Spaces will now be sorted by their name by default.

   https://github.com/owncloud/web/issues/6253
   https://github.com/owncloud/web/pull/6262

* Enhancement - Implement spaces front page: [#6287](https://github.com/owncloud/web/pull/6287)

   Each space can now be entered from within the spaces list. The space front page will then display
   all the space contents, plus an image and a readme file if set. Basic actions like uploading
   files, creating folders, renaming resources, and more. were also implemented in the course of
   this.

   https://github.com/owncloud/web/issues/6271
   https://github.com/owncloud/web/pull/6287

* Enhancement - Implement spaces list: [#6199](https://github.com/owncloud/web/pull/6199)

   We added a new route that lists all available spaces of type "project".

   https://github.com/owncloud/web/issues/6104
   https://github.com/owncloud/web/pull/6199
   https://github.com/owncloud/web/pull/6399

* Enhancement - Update ODS to v12.1.0: [#6086](https://github.com/owncloud/web/pull/6086)

   We updated the ownCloud Design System to version 12.1.0. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   - Change - Drop Internet Explorer support:
   https://github.com/owncloud/owncloud-design-system/pull/1909 - Change - Do not sort in
   OcTable: https://github.com/owncloud/owncloud-design-system/pull/1825 - Change - Pass
   folderLink to OcResource component:
   https://github.com/owncloud/owncloud-design-system/pull/1913 - Change - Remove
   OcAppSideBar component:
   https://github.com/owncloud/owncloud-design-system/pull/1810 - Change - Remove
   OcAppBar component: https://github.com/owncloud/owncloud-design-system/pull/1810 -
   Change - Remove implicit ODS registration:
   https://github.com/owncloud/owncloud-design-system/pull/1848 - Change - Remove
   oc-table-files from ods:
   https://github.com/owncloud/owncloud-design-system/pull/1817 - Change - Remove OcGrid
   options: https://github.com/owncloud/owncloud-design-system/pull/1658 - Change - Move
   OcSidebarNav and OcSidebarNavItem to web: https://github.com/owncloud/web/issues/6036
   - Change - Remove UiKit: https://github.com/owncloud/owncloud-design-system/pull/1658
   - Change - Remove unused props for unstyled components:
   https://github.com/owncloud/owncloud-design-system/pull/1795 - Change - Use
   remixicons for redesign:
   https://github.com/owncloud/owncloud-design-system/pull/1826 - Enhancement - Make
   Vue-Composition-API available:
   https://github.com/owncloud/owncloud-design-system/pull/1848 - Enhancement - Export
   mappings of types, icons and colors of resources:
   https://github.com/owncloud/owncloud-design-system/pull/1920 - Enhancement - Fix
   OcAvatar line-height: https://github.com/owncloud/owncloud-design-system/pull/1810
   - Enhancement - Add option to render table cells lazy:
   https://github.com/owncloud/owncloud-design-system/pull/1848 - Enhancement - Make
   OcDrop rounded: https://github.com/owncloud/owncloud-design-system/pull/1881 -
   Enhancement - Change background color of OcDrop:
   https://github.com/owncloud/owncloud-design-system/pull/1919 - Enhancement - Improve
   OcList: https://github.com/owncloud/owncloud-design-system/pull/1881 - Enhancement -
   Show path / parent folder to distinguish files:
   https://github.com/owncloud/web/issues/5953 - Enhancement - Redesign Filetype icons:
   https://github.com/owncloud/web/issues/6278 - Enhancement - Adjust OcSearchBar to new
   design: https://github.com/owncloud/owncloud-design-system/pull/1810/ - Enhancement
   - Sizes: https://github.com/owncloud/owncloud-design-system/pull/1858 - Enhancement -
   Add svg icon for spaces: https://github.com/owncloud/owncloud-design-system/pull/1846
   - Enhancement - OcTable header alignment:
   https://github.com/owncloud/owncloud-design-system/pull/1922 - Enhancement - Use
   Roboto font: https://github.com/owncloud/owncloud-design-system/pull/1876 -
   Enhancement - Redesign OcModal:
   https://github.com/owncloud/owncloud-design-system/pull/1953 - Bugfix - Missing
   OcDrop shadow: https://github.com/owncloud/owncloud-design-system/pull/1926 - Bugfix
   - OcNotification positioning:
   https://github.com/owncloud/owncloud-design-system/pull/1658 - Bugfix - Rename
   GhostElement: https://github.com/owncloud/owncloud-design-system/pull/1845 - Bugfix
   - OcTooltip isn't reactive:
   https://github.com/owncloud/owncloud-design-system/pull/1863 - Bugfix -
   Background-primary-gradient border: https://github.com/owncloud/web/issues/6383

   https://github.com/owncloud/web/pull/6086
   https://github.com/owncloud/web/pull/6142
   https://github.com/owncloud/web/pull/6213
   https://github.com/owncloud/web/pull/6228
   https://github.com/owncloud/web/pull/6240
   https://github.com/owncloud/web/pull/6295
   https://github.com/owncloud/web/pull/6360
   https://github.com/owncloud/web/pull/6368
   https://github.com/owncloud/web/pull/6418
   https://github.com/owncloud/owncloud-design-system/releases/tag/v12.0.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v12.1.0

* Enhancement - Update SDK: [#6309](https://github.com/owncloud/web/pull/6309)

   We've updated the ownCloud SDK to version 2.0.0.

   - Change - Drop Internet Explorer support:
   https://github.com/owncloud/owncloud-sdk/pull/966 - Change - Pass full file or directory
   path to methods of Files class: https://github.com/owncloud/owncloud-sdk/pull/971 -
   Change - Remove webdav v1 api support:
   https://github.com/owncloud/owncloud-sdk/pull/962 - Change - Use peerDependencies
   instead of dependencies: https://github.com/owncloud/owncloud-sdk/pull/979 - Bugfix -
   Graceful reject for failing network request in OCS:
   https://github.com/owncloud/owncloud-sdk/pull/977

   https://github.com/owncloud/web/pull/6309
   https://github.com/owncloud/web/pull/6287
   https://github.com/owncloud/owncloud-sdk/releases/tag/v1.1.2
   https://github.com/owncloud/owncloud-sdk/releases/tag/v2.0.0

Changelog for ownCloud Web [4.9.0] (2021-12-24)
=======================================
The following sections list the changes in ownCloud web 4.9.0 relevant to
ownCloud admins and users.

[4.9.0]: https://github.com/owncloud/web/compare/v4.8.0...v4.9.0

Summary
-------

* Enhancement - Print version numbers: [#5954](https://github.com/owncloud/web/issues/5954)

Details
-------

* Enhancement - Print version numbers: [#5954](https://github.com/owncloud/web/issues/5954)

   The package version of the web UI and the version of the backend (if available) now get printed to
   the browser console and get set as meta generator tag in the html head. This makes it possible to
   easily reference versions in bug reports.

   https://github.com/owncloud/web/issues/5954
   https://github.com/owncloud/web/pull/6190

Changelog for ownCloud Web [4.8.0] (2021-12-22)
=======================================
The following sections list the changes in ownCloud web 4.8.0 relevant to
ownCloud admins and users.

[4.8.0]: https://github.com/owncloud/web/compare/v4.7.0...v4.8.0

Summary
-------

* Bugfix - Editor default handling: [#6186](https://github.com/owncloud/web/pull/6186)
* Bugfix - Sort before pagination: [#5687](https://github.com/owncloud/web/issues/5687)
* Enhancement - Edit people shares without changing the panel: [#6039](https://github.com/owncloud/web/pull/6039)
* Enhancement - Respect share max, min and enforced expiration date: [#6176](https://github.com/owncloud/web/pull/6176)
* Enhancement - Simplify people sharing sidebar: [#6039](https://github.com/owncloud/web/pull/6039)

Details
-------

* Bugfix - Editor default handling: [#6186](https://github.com/owncloud/web/pull/6186)

   Editor apps that don't provide the information about whether or not they are a default editor
   were not recognized as default editors when left-clicking a file in the file list. We've
   changed the default behaviour so that editors are capable of being the default editor unless
   explicitly disabled.

   https://github.com/owncloud/web/pull/6186

* Bugfix - Sort before pagination: [#5687](https://github.com/owncloud/web/issues/5687)

   We've extracted the sorting logic from the [OcTable
   component](https://owncloud.design/#/oC%20Components/OcTable) and moved it to the data
   preprocessing steps in web. This way we won't sort the current page anymore, but sort the whole
   data of the current folder and then only show the current page from that sorted data.

   https://github.com/owncloud/web/issues/5687
   https://github.com/owncloud/web/pull/6136

* Enhancement - Edit people shares without changing the panel: [#6039](https://github.com/owncloud/web/pull/6039)

   We have reworked the full list view of sharees in the right sidebar for better overview and
   faster editing.

   https://github.com/owncloud/web/issues/5763
   https://github.com/owncloud/web/pull/6039

* Enhancement - Respect share max, min and enforced expiration date: [#6176](https://github.com/owncloud/web/pull/6176)

   If the expiration date max and/or enforcement is supported (defined by the capabilities) the
   UI now handles the different cases and respects the backend settings. In oc10 there are options
   to enforce the maximum available date for group and user shares, this is now considered in the UI
   and updates dynamically in both cases.

   https://github.com/owncloud/web/pull/6176
   https://github.com/owncloud/web/pull/6039

* Enhancement - Simplify people sharing sidebar: [#6039](https://github.com/owncloud/web/pull/6039)

   We have reworked the people sharing sidebar to not be split into show/edit/create panels. The
   create form now is fixed to the top with the sharees list below and editing happening in-line.

   https://github.com/owncloud/web/issues/5923
   https://github.com/owncloud/web/issues/5608
   https://github.com/owncloud/web/issues/5797
   https://github.com/owncloud/web/pull/6039

Changelog for ownCloud Web [4.7.0] (2021-12-16)
=======================================
The following sections list the changes in ownCloud web 4.7.0 relevant to
ownCloud admins and users.

[4.7.0]: https://github.com/owncloud/web/compare/v4.6.0...v4.7.0

Summary
-------

* Bugfix - Contextmenu on public links: [#6123](https://github.com/owncloud/web/issues/6123)
* Bugfix - Inconsistencies in share expiry dates: [#6084](https://github.com/owncloud/web/pull/6084)
* Bugfix - Extension casing: [#5339](https://github.com/owncloud/web/issues/5339)
* Bugfix - Show extension image: [#5985](https://github.com/owncloud/web/pull/5985)
* Bugfix - File renaming: [#4893](https://github.com/owncloud/web/issues/4893)
* Bugfix - Hidden files hidden by default: [#5985](https://github.com/owncloud/web/pull/5985)
* Bugfix - Ensure route config is honored for new file handlers: [#6135](https://github.com/owncloud/web/pull/6135)
* Bugfix - Show context menu for all file extensions: [#6002](https://github.com/owncloud/web/issues/6002)
* Bugfix - Do not scroll on apps open in app provider: [#5960](https://github.com/owncloud/web/issues/5960)
* Bugfix - Open in browser for public files: [#4615](https://github.com/owncloud/web/issues/4615)
* Bugfix - Order extensions and default: [#5985](https://github.com/owncloud/web/pull/5985)
* Bugfix - Double escaping in progress bar: [#4214](https://github.com/owncloud/web/issues/4214)
* Bugfix - Context for dates in SideBar: [#5068](https://github.com/owncloud/web/issues/5068)
* Bugfix - User email attribute initialization: [#6118](https://github.com/owncloud/web/pull/6118)
* Enhancement - Adopt oc-table-files from ods: [#6106](https://github.com/owncloud/web/pull/6106)
* Enhancement - Show errors when failing to open app in app provider: [#6003](https://github.com/owncloud/web/pull/6003)
* Enhancement - Build options: [#5985](https://github.com/owncloud/web/pull/5985)
* Enhancement - MarkdownEditor and MediaViewer can be default: [#6148](https://github.com/owncloud/web/pull/6148)
* Enhancement - Show feedback on startup: [#5985](https://github.com/owncloud/web/pull/5985)
* Enhancement - Update ODS to v12.0.0-alpha1: [#6106](https://github.com/owncloud/web/pull/6106)

Details
-------

* Bugfix - Contextmenu on public links: [#6123](https://github.com/owncloud/web/issues/6123)

   We fixed an issue of the contextmenu not being displayed for the files table on public links.

   https://github.com/owncloud/web/issues/6123

* Bugfix - Inconsistencies in share expiry dates: [#6084](https://github.com/owncloud/web/pull/6084)

   * Share expiry dates now always refer to the end of the given day. This change allows users to
   select the current day as expiry date. * Displayed expiry dates have been aligned to ensure
   their consistency. * Existing expiry dates for public links can now be removed again. * We now
   use the Luxon `DateTime` object more consistently across the code base (replacing
   JavaScript's `new Date()).

   https://github.com/owncloud/web/pull/6084

* Bugfix - Extension casing: [#5339](https://github.com/owncloud/web/issues/5339)

   We fixed file extensions always being shown in lowercase.

   https://github.com/owncloud/web/issues/5339
   https://github.com/owncloud/web/pull/6117

* Bugfix - Show extension image: [#5985](https://github.com/owncloud/web/pull/5985)

   Allow extensions to set an image as its logo, instead of an icon. If `img` is set, it will take
   precedence over `icon`.

   https://github.com/owncloud/web/pull/5985

* Bugfix - File renaming: [#4893](https://github.com/owncloud/web/issues/4893)

   We fixed the displayed file name not being properly updated in files list and sidebar after
   renaming.

   https://github.com/owncloud/web/issues/4893
   https://github.com/owncloud/web/pull/6114

* Bugfix - Hidden files hidden by default: [#5985](https://github.com/owncloud/web/pull/5985)

   Hide hidden files (files started with ".") by default, similar to oc10

   https://github.com/owncloud/web/pull/5985

* Bugfix - Ensure route config is honored for new file handlers: [#6135](https://github.com/owncloud/web/pull/6135)

   Only display the new file entries for the routes it belongs to.

   https://github.com/owncloud/web/pull/6135

* Bugfix - Show context menu for all file extensions: [#6002](https://github.com/owncloud/web/issues/6002)

   The context menu was failing to build for file extensions that did not have a match in the apps
   from the app provider.

   https://github.com/owncloud/web/issues/6002
   https://github.com/owncloud/web/pull/6003

* Bugfix - Do not scroll on apps open in app provider: [#5960](https://github.com/owncloud/web/issues/5960)

   Apps opened from the app provider were taking more than the window size, prompting the use of the
   scrollbar.

   https://github.com/owncloud/web/issues/5960
   https://github.com/owncloud/web/pull/6003

* Bugfix - Open in browser for public files: [#4615](https://github.com/owncloud/web/issues/4615)

   We fixed opening publicly shared files in the browser.

   https://github.com/owncloud/web/issues/4615
   https://github.com/owncloud/web/pull/6133

* Bugfix - Order extensions and default: [#5985](https://github.com/owncloud/web/pull/5985)

   Ensure the default extensions are displayed first. Ensure that extensions can be set as
   default or not.

   https://github.com/owncloud/web/pull/5985

* Bugfix - Double escaping in progress bar: [#4214](https://github.com/owncloud/web/issues/4214)

   We fixed file names with special chars not being properly displayed in the upload progressbar.

   https://github.com/owncloud/web/issues/4214
   https://github.com/owncloud/web/pull/6131

* Bugfix - Context for dates in SideBar: [#5068](https://github.com/owncloud/web/issues/5068)

   We fixed dates in sidebar file info having no context. The sidebar is either showing the last
   modification date or the deletion date. Before this change it wasn't obvious what kind of date
   was showing. Especially when the file list was showing a completely different date (e.g., a
   share date) it was confusing to the user to see a possibly different date here without
   explanation.

   https://github.com/owncloud/web/issues/5068
   https://github.com/owncloud/web/pull/6119

* Bugfix - User email attribute initialization: [#6118](https://github.com/owncloud/web/pull/6118)

   Until now, the user email would only be set if the user used it instead of a username in the login
   form. It now can also be set from the user webdav response as a fallback.

   https://github.com/owncloud/web/pull/6118

* Enhancement - Adopt oc-table-files from ods: [#6106](https://github.com/owncloud/web/pull/6106)

   Ods oc-table-files always contained concrete web-app-files logic, to make development more
   agile and keep things close oc-table-files was renamed to resource-table and relocated to
   live in web-app-files from now on.

   https://github.com/owncloud/web/pull/6106
   https://github.com/owncloud/owncloud-design-system/pull/1817

* Enhancement - Show errors when failing to open app in app provider: [#6003](https://github.com/owncloud/web/pull/6003)

   The error message provided by wopi is now displayed to the user, giving some context on why it
   failed to open a file.

   https://github.com/owncloud/web/pull/6003

* Enhancement - Build options: [#5985](https://github.com/owncloud/web/pull/5985)

   Configure the startup title (displayed before the configuration is loaded) via env variable
   TITLE. Make the source map generation optional with the env variable SOURCE_MAP.

   https://github.com/owncloud/web/pull/5985

* Enhancement - MarkdownEditor and MediaViewer can be default: [#6148](https://github.com/owncloud/web/pull/6148)

   We have updated the extension handlers of two internal apps to be able to be used as default
   actions.

   https://github.com/owncloud/web/pull/6148

* Enhancement - Show feedback on startup: [#5985](https://github.com/owncloud/web/pull/5985)

   Instead of displaying an empty page while all components load, display a spiner. Also show an
   error message if there was an error.

   https://github.com/owncloud/web/pull/5985

* Enhancement - Update ODS to v12.0.0-alpha1: [#6106](https://github.com/owncloud/web/pull/6106)

   We updated the ownCloud Design System to version 12.0.0-alpha1. Please refer to the full
   changelog in the ODS release (linked) for more details. Summary:

   - Change - Remove oc-table-files from ods:
   https://github.com/owncloud/owncloud-design-system/pull/1817 - Change - Remove unused
   props for unstyled components:
   https://github.com/owncloud/owncloud-design-system/pull/1795

   https://github.com/owncloud/web/pull/6106
   https://github.com/owncloud/owncloud-design-system/releases/tag/v12.0.0-alpha1

Changelog for ownCloud Web [4.6.0] (2021-12-07)
=======================================
The following sections list the changes in ownCloud web 4.6.0 relevant to
ownCloud admins and users.

[4.6.0]: https://github.com/owncloud/web/compare/v4.5.0...v4.6.0

Summary
-------

* Bugfix - Pagination: [#6056](https://github.com/owncloud/web/pull/6056)
* Enhancement - Implement breadcrumb context menu: [#6044](https://github.com/owncloud/web/pull/6044)
* Enhancement - Contextmenu for multiple files: [#5973](https://github.com/owncloud/web/pull/5973)
* Enhancement - Add tooltips to relative dates: [#6037](https://github.com/owncloud/web/pull/6037)
* Enhancement - Update ODS to v11.3.1: [#6090](https://github.com/owncloud/web/pull/6090)

Details
-------

* Bugfix - Pagination: [#6056](https://github.com/owncloud/web/pull/6056)

   We fixed the pagination as it was slicing the items wrong on pages after the first one.

   https://github.com/owncloud/web/pull/6056

* Enhancement - Implement breadcrumb context menu: [#6044](https://github.com/owncloud/web/pull/6044)

   The last element of the breadcrumb now has a context menu which gives the user the possibility to
   perform actions on the current folder.

   https://github.com/owncloud/web/issues/6030
   https://github.com/owncloud/web/pull/6044

* Enhancement - Contextmenu for multiple files: [#5973](https://github.com/owncloud/web/pull/5973)

   We have enabled batch actions in the context menu for when multiple resources are selected.

   https://github.com/owncloud/web/issues/5968
   https://github.com/owncloud/web/issues/5977
   https://github.com/owncloud/web/pull/5973

* Enhancement - Add tooltips to relative dates: [#6037](https://github.com/owncloud/web/pull/6037)

   Relative dates like "1 day ago" now have a tooltip that shows the absolute date.

   https://github.com/owncloud/web/issues/5672
   https://github.com/owncloud/web/pull/6037

* Enhancement - Update ODS to v11.3.1: [#6090](https://github.com/owncloud/web/pull/6090)

   We updated the ownCloud Design System to version 11.3.1. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   - Bugfix - Set language for date formatting:
   https://github.com/owncloud/owncloud-design-system/pull/1806 - Enhancement -
   Relative date tooltips in the OcTableFiles component:
   https://github.com/owncloud/owncloud-design-system/pull/1787 - Enhancement -
   Breadcrumb contextmenu: https://github.com/owncloud/web/issues/6030 - Enhancement -
   Optional padding size for OcDrop:
   https://github.com/owncloud/owncloud-design-system/pull/1798 - Enhancement -
   Truncate file names while preserving file extensions:
   https://github.com/owncloud/owncloud-design-system/issues/1758

   https://github.com/owncloud/web/pull/6090
   https://github.com/owncloud/owncloud-design-system/releases/tag/v11.3.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v11.3.1

Changelog for ownCloud Web [4.5.0] (2021-11-16)
=======================================
The following sections list the changes in ownCloud web 4.5.0 relevant to
ownCloud admins and users.

[4.5.0]: https://github.com/owncloud/web/compare/v4.4.0...v4.5.0

Summary
-------

* Bugfix - Fix location picker breadcrumb url encoding: [#5940](https://github.com/owncloud/web/pull/5940)
* Bugfix - Correct capabilities URL when server run in a subfolder: [#6010](https://github.com/owncloud/web/issues/6010)
* Bugfix - Context menu rendering: [#5952](https://github.com/owncloud/web/pull/5952)
* Bugfix - Use search app translations: [#5955](https://github.com/owncloud/web/issues/5955)
* Enhancement - Accentuate new files: [#6020](https://github.com/owncloud/web/pull/6020)
* Enhancement - Use default info from app provider: [#5962](https://github.com/owncloud/web/issues/5962)
* Enhancement - Rename `_chunks` folder to `chunks`: [#5988](https://github.com/owncloud/web/pull/5988)
* Enhancement - Default action order: [#5952](https://github.com/owncloud/web/pull/5952)
* Enhancement - Reduced sidebar width: [#5981](https://github.com/owncloud/web/issues/5981)
* Enhancement - Automatically show oC 10 apps in the app switcher menu: [#5980](https://github.com/owncloud/web/issues/5980)
* Enhancement - App provider and archiver on public links: [#5924](https://github.com/owncloud/web/pull/5924)
* Enhancement - Update ODS to v11.2.2: [#6009](https://github.com/owncloud/web/pull/6009)

Details
-------

* Bugfix - Fix location picker breadcrumb url encoding: [#5940](https://github.com/owncloud/web/pull/5940)

   The breadcrumb urls in location-picker were encoded. We've fixed this by removing the
   encoding.

   https://github.com/owncloud/web/issues/5938
   https://github.com/owncloud/web/pull/5940
   https://github.com/owncloud/web/pull/5715

* Bugfix - Correct capabilities URL when server run in a subfolder: [#6010](https://github.com/owncloud/web/issues/6010)

   We fixed an issue where the capabilities where requested from a wrong URL in the case the server
   is running in a subfolder e.g. `http://localhost/owncloud`

   https://github.com/owncloud/web/issues/6010

* Bugfix - Context menu rendering: [#5952](https://github.com/owncloud/web/pull/5952)

   We fixed that the context menu was being created for each and every file row of the current page
   (it was just not made visible). Now it only gets created when it gets activated by the user for a
   file row.

   https://github.com/owncloud/web/pull/5952

* Bugfix - Use search app translations: [#5955](https://github.com/owncloud/web/issues/5955)

   We fixed that the search app was not using its translations properly.

   https://github.com/owncloud/web/issues/5955
   https://github.com/owncloud/web/pull/5956

* Enhancement - Accentuate new files: [#6020](https://github.com/owncloud/web/pull/6020)

   We've added a visual highlighting of newly created (or uploaded) resources in the
   OcFilesTable.

   https://github.com/owncloud/web/pull/6020

* Enhancement - Use default info from app provider: [#5962](https://github.com/owncloud/web/issues/5962)

   The app provider returns information about the default application per mime type. This
   information is now respected when triggering the default action for a file.

   https://github.com/owncloud/web/issues/5962
   https://github.com/owncloud/web/pull/5970

* Enhancement - Rename `_chunks` folder to `chunks`: [#5988](https://github.com/owncloud/web/pull/5988)

   We've renamed the `_chunks` folder to `chunks` in the ownCloud Web build output in order to make
   it more easily embedable with the Go embed directive.

   https://github.com/owncloud/web/pull/5988

* Enhancement - Default action order: [#5952](https://github.com/owncloud/web/pull/5952)

   We've changed the order of actions which are being considered as default action. The order is
   now 1) installed editors, 2) external apps from the app provider, 3) system default actions.
   Previously the external apps took precedence.

   https://github.com/owncloud/web/pull/5952

* Enhancement - Reduced sidebar width: [#5981](https://github.com/owncloud/web/issues/5981)

   We reduced the sidebar width to give the files list more horizontal room, especially on medium
   sized screens.

   https://github.com/owncloud/web/issues/5981
   https://github.com/owncloud/web/pull/5983

* Enhancement - Automatically show oC 10 apps in the app switcher menu: [#5980](https://github.com/owncloud/web/issues/5980)

   When using the ownCloud 10 app of web the configuration automatically gets augmented with all
   menu items / apps from the classic UI. They open in a new tab in the classic UI and have a generic
   icon.

   https://github.com/owncloud/web/issues/5980
   https://github.com/owncloud/web/pull/5996

* Enhancement - App provider and archiver on public links: [#5924](https://github.com/owncloud/web/pull/5924)

   We made the app provider and archiver services available on public links. As a prerequisite for
   this we needed to make backend capabilities available on public links, which will be
   beneficial for all future extension development.

   https://github.com/owncloud/web/issues/5884
   https://github.com/owncloud/ocis/issues/2479
   https://github.com/owncloud/web/issues/2479
   https://github.com/owncloud/web/issues/5901
   https://github.com/owncloud/web/pull/5924

* Enhancement - Update ODS to v11.2.2: [#6009](https://github.com/owncloud/web/pull/6009)

   We updated the ownCloud Design System to version 11.2.2. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   - Bugfix - Limit select event in OcTableFiles:
   https://github.com/owncloud/owncloud-design-system/pull/1753 - Bugfix - Add
   word-break rule to OcNotificationMessage component:
   https://github.com/owncloud/owncloud-design-system/issues/1712 - Bugfix - OcTable
   sorting case sensitivity:
   https://github.com/owncloud/owncloud-design-system/issues/1698 - Bugfix - Drag and
   Drop triggers wrong actions: https://github.com/owncloud/web/issues/5808 - Bugfix - Fix
   files table event: https://github.com/owncloud/web/issues/1777 - Bugfix - Fix extension
   icon rendering: https://github.com/owncloud/web/issues/1779 - Enhancement - Make
   OcDatepicker themable:
   https://github.com/owncloud/owncloud-design-system/issues/1679 - Enhancement -
   Streamline OcTextInput:
   https://github.com/owncloud/owncloud-design-system/pull/1636 - Enhancement - Add
   accentuated class for OcTable:
   https://github.com/owncloud/owncloud-design-system/pull/5967 - Enhancement - Add
   Ghost Element for Drag & Drop:
   https://github.com/owncloud/owncloud-design-system/pull/5788 - Enhancement - Add
   "extension" svg icon: https://github.com/owncloud/owncloud-design-system/pull/1771 -
   Enhancement - Add closure to mutate resource dom selector:
   https://github.com/owncloud/owncloud-design-system/pull/1766 - Enhancement - Reduce
   filename text weight: https://github.com/owncloud/owncloud-design-system/pull/1759

   https://github.com/owncloud/web/pull/6009
   https://github.com/owncloud/owncloud-design-system/releases/tag/v11.2.2

Changelog for ownCloud Web [4.4.0] (2021-10-26)
=======================================
The following sections list the changes in ownCloud web 4.4.0 relevant to
ownCloud admins and users.

[4.4.0]: https://github.com/owncloud/web/compare/v4.3.0...v4.4.0

Summary
-------

* Bugfix - Fix duplicated event subscriptions: [#5910](https://github.com/owncloud/web/pull/5910)
* Bugfix - External apps by shares: [#5907](https://github.com/owncloud/web/pull/5907)
* Bugfix - New Collaborator removes wrong autocomplete items: [#5857](https://github.com/owncloud/web/issues/5857)
* Bugfix - Fix overlapping requests in files app: [#5917](https://github.com/owncloud/web/pull/5917)
* Bugfix - Clean router path handling: [#5894](https://github.com/owncloud/web/pull/5894)
* Bugfix - Unnecessary redirects on personal page: [#5893](https://github.com/owncloud/web/pull/5893)
* Enhancement - Accessible, themeable media viewer: [#5900](https://github.com/owncloud/web/pull/5900)
* Enhancement - Datepicker in Dropdown: [#5806](https://github.com/owncloud/web/pull/5806)
* Enhancement - Sorting out dependencies: [#5898](https://github.com/owncloud/web/pull/5898)
* Enhancement - Update ODS to v11.0.0: [#5806](https://github.com/owncloud/web/pull/5806)

Details
-------

* Bugfix - Fix duplicated event subscriptions: [#5910](https://github.com/owncloud/web/pull/5910)

   In some cases it happened that subscriptions to certain topics happened multiple times. This
   is problematic in cases where it should happen only once, for example loading a resource which
   can result in multiple requests and a overlapping state.

   This is fixes by introducing the option to unsubscribe a event individually by a given token or
   for all on a given topic.

   https://github.com/owncloud/web/issues/5875
   https://github.com/owncloud/web/pull/5910

* Bugfix - External apps by shares: [#5907](https://github.com/owncloud/web/pull/5907)

   Opening shares in "Shared with me" section was broken. We have added property `mimeType` by the
   build of a shared resource, so that the external apps can be found for it.

   We fixed passing the fileId property for the context actions.

   https://github.com/owncloud/web/issues/5906
   https://github.com/owncloud/web/pull/5907

* Bugfix - New Collaborator removes wrong autocomplete items: [#5857](https://github.com/owncloud/web/issues/5857)

   We've addressed that when you add new collaborators in the autocomplete and remove one from the
   autocompletion it always removes the last element.

   https://github.com/owncloud/web/issues/5857
   https://github.com/owncloud/web/pull/5931

* Bugfix - Fix overlapping requests in files app: [#5917](https://github.com/owncloud/web/pull/5917)

   In some cases the files app tended to display the wrong resources when navigating quickly
   through the views. This happened because the resource provisioning step wasn't canceled.
   This is now fixed by using vue-concurrency which on a high level wraps iterable generators
   which are cancelable. We're using it to wrap the resource loading and cancel it as soon as the
   resource set is not needed anymore.

   It also improves the overall performance for the files app.

   https://github.com/owncloud/web/issues/5085
   https://github.com/owncloud/web/issues/5875
   https://github.com/owncloud/web/pull/5917

* Bugfix - Clean router path handling: [#5894](https://github.com/owncloud/web/pull/5894)

   This patch was already introduced earlier for the files application only. In the meantime we
   found out that this is also needed on different places across the ecosystem.

   We've refactored the way how the patch gets applied to the routes: It is now possible to set an
   individual route's `meta.patchCleanPath` to true.

   https://github.com/owncloud/web/issues/4595#issuecomment-938587035
   https://github.com/owncloud/web/pull/5894

* Bugfix - Unnecessary redirects on personal page: [#5893](https://github.com/owncloud/web/pull/5893)

   Navigating to all files could lead to loading resources twice, first resources from root (/)
   and second the resources from the homeFolder (options.homeFolder). We've fixed this by
   detecting those cases and only load resources for the homeFolder.

   https://github.com/owncloud/web/issues/5085
   https://github.com/owncloud/web/issues/5875
   https://github.com/owncloud/web/pull/5893

* Enhancement - Accessible, themeable media viewer: [#5900](https://github.com/owncloud/web/pull/5900)

   We have updated the media viewer app to respect theme colors and fulfill accessibility
   requirements (e.g. keyboard navigation, semantic HTML, font size).

   https://github.com/owncloud/web/pull/5900

* Enhancement - Datepicker in Dropdown: [#5806](https://github.com/owncloud/web/pull/5806)

   We have moved the datepicker for share expiration in the right sidebar into a dropdown to align
   it with the other elements when creating/editing shares.

   https://github.com/owncloud/web/pull/5806

* Enhancement - Sorting out dependencies: [#5898](https://github.com/owncloud/web/pull/5898)

   We have cleaned and simplified the dependency structure in our apps.

   https://github.com/owncloud/web/pull/5898

* Enhancement - Update ODS to v11.0.0: [#5806](https://github.com/owncloud/web/pull/5806)

   We updated the ownCloud Design System to version 11.0.0. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary:

   - Bugfix - Prevent hover style on footer of OcTableFiles:
   https://github.com/owncloud/owncloud-design-system/pull/1667 - Change - Replace
   vue-datetime with v-calendar in our datepicker component:
   https://github.com/owncloud/owncloud-design-system/pull/1661 - Enhancement - Allow
   hover option in OcTableFiles:
   https://github.com/owncloud/owncloud-design-system/pull/1632

   https://github.com/owncloud/web/pull/5806
   https://github.com/owncloud/owncloud-design-system/releases/tag/v11.0.0

Changelog for ownCloud Web [4.3.0] (2021-10-07)
=======================================
The following sections list the changes in ownCloud web 4.3.0 relevant to
ownCloud admins and users.

[4.3.0]: https://github.com/owncloud/web/compare/v4.2.0...v4.3.0

Summary
-------

* Enhancement - Download as archive: [#5832](https://github.com/owncloud/web/pull/5832)
* Enhancement - Early store initialization: [#5874](https://github.com/owncloud/web/pull/5874)
* Enhancement - Add wrapper app for external apps: [#5805](https://github.com/owncloud/web/pull/5805)
* Enhancement - Add AppProvider actions to fileactions: [#5805](https://github.com/owncloud/web/pull/5805)
* Enhancement - Move custom permissions to roles drop: [#5764](https://github.com/owncloud/web/issues/5764)
* Enhancement - Refactor runtime boot process: [#5752](https://github.com/owncloud/web/pull/5752)
* Enhancement - Multiple shared with me tables: [#5814](https://github.com/owncloud/web/pull/5814)

Details
-------

* Enhancement - Download as archive: [#5832](https://github.com/owncloud/web/pull/5832)

   We've introduced archive downloads based on whether or not an archiver capability is present.
   The current implementation supports the archiver v2 (a.k.a. the REVA implementation).
   Archive downloads are available in two different ways: - as action on a folder (right-click
   context menu or actions panel in the right sidebar) - as batch action for all selected files The
   implementation is currently limited to authenticated contexts. A public links
   implementation will follow soon.

   https://github.com/owncloud/web/issues/3913
   https://github.com/owncloud/web/issues/5809
   https://github.com/owncloud/web/pull/5832

* Enhancement - Early store initialization: [#5874](https://github.com/owncloud/web/pull/5874)

   We made sure that the store and auth get initialized as early as possible. With this we ensured
   that capabilities are always loaded as soon as applications start their initialization
   process.

   https://github.com/owncloud/web/pull/5874

* Enhancement - Add wrapper app for external apps: [#5805](https://github.com/owncloud/web/pull/5805)

   We have added a `external` app that can render apps coming from the oCIS AppProvider via iFrame.

   https://github.com/owncloud/web/pull/5805

* Enhancement - Add AppProvider actions to fileactions: [#5805](https://github.com/owncloud/web/pull/5805)

   If the AppProvider within oCIS communicates a matching application for the mime type of a file,
   there are now additional actions in the default actions and actions in both the contextmenu and
   the right sidebar.

   https://github.com/owncloud/web/pull/5805

* Enhancement - Move custom permissions to roles drop: [#5764](https://github.com/owncloud/web/issues/5764)

   We've moved all the custom permissions (previously advanced permissions) in the sharing
   dialog into a dropdown which gets triggered by selecting the Custom permissions item in the
   roles dropdown.

   https://github.com/owncloud/web/issues/5764
   https://github.com/owncloud/web/pull/5647

* Enhancement - Refactor runtime boot process: [#5752](https://github.com/owncloud/web/pull/5752)

   We have updated the way applications are being loaded in the web runtime. It does now feature a
   dedicated boot process, providing hooks that other applications can take advantage of.

   https://github.com/owncloud/web/issues/2891
   https://github.com/owncloud/web/issues/3726
   https://github.com/owncloud/web/issues/3771
   https://github.com/owncloud/web/issues/4735
   https://github.com/owncloud/web/issues/5135
   https://github.com/owncloud/web/issues/5460
   https://github.com/owncloud/web/pull/5752
   (tbd)
   (tbd)
   (tbd,
   %22needs
   api
   tweak%22%29
   (tbd)
   (tbd)
   (tbd)

* Enhancement - Multiple shared with me tables: [#5814](https://github.com/owncloud/web/pull/5814)

   We have separated the single table on the shared with me page into up to three different tables: -
   pending shares - accepted shares - declined shares By default we show pending and accepted
   shares. There is navigation in place to switch over from the accepted to the declined shares and
   the other way around. Pending shares stay visible all the time since it's expected that users
   take immediate action on pending shares anyway.

   https://github.com/owncloud/web/pull/5814
   https://github.com/owncloud/web/pull/5177

Changelog for ownCloud Web [4.2.0] (2021-09-14)
=======================================
The following sections list the changes in ownCloud web 4.2.0 relevant to
ownCloud admins and users.

[4.2.0]: https://github.com/owncloud/web/compare/v4.1.0...v4.2.0

Summary
-------

* Bugfix - Pagination on Locationpicker: [#5715](https://github.com/owncloud/web/pull/5715)
* Enhancement - Add robots.txt file: [#5762](https://github.com/owncloud/web/pull/5762)
* Enhancement - Fetch file info in the Files sidebar: [#5570](https://github.com/owncloud/web/issues/5570)
* Enhancement - Add missing tooltips: [#5723](https://github.com/owncloud/web/issues/5723)
* Enhancement - Re-design recipients role select: [#5632](https://github.com/owncloud/web/pull/5632)
* Enhancement - Show sharees as collapsed list of avatars: [#5758](https://github.com/owncloud/web/pull/5758)
* Enhancement - Show sharing information in details sidebar: [#5735](https://github.com/owncloud/web/issues/5735)
* Enhancement - Switch filesize calculation base: [#5739](https://github.com/owncloud/web/pull/5739)
* Enhancement - Update ODS to 10.0.0: [#5725](https://github.com/owncloud/web/pull/5725)
* Enhancement - URL encoding / decoding: [#5714](https://github.com/owncloud/web/issues/5714)

Details
-------

* Bugfix - Pagination on Locationpicker: [#5715](https://github.com/owncloud/web/pull/5715)

   Pagination on copying/moving files as well as page reloads when copying/moving files were
   broken. When changing the Vue router encoding, we fixed both issues.

   https://github.com/owncloud/web/pull/5715

* Enhancement - Add robots.txt file: [#5762](https://github.com/owncloud/web/pull/5762)

   Added a robots.txt for ocis-web

   https://github.com/owncloud/web/pull/5762

* Enhancement - Fetch file info in the Files sidebar: [#5570](https://github.com/owncloud/web/issues/5570)

   We've started fetching the file info when a single item is selected and the Files sidebar is
   opened. With this change we have more information available in different lists e.g. private
   link in shared lists.

   https://github.com/owncloud/web/issues/5570
   https://github.com/owncloud/web/pull/5665

* Enhancement - Add missing tooltips: [#5723](https://github.com/owncloud/web/issues/5723)

   We've added tooltips to the "view option dropdown" and "toggle sidebar" buttons.

   https://github.com/owncloud/web/issues/5723
   https://github.com/owncloud/web/pull/5724

* Enhancement - Re-design recipients role select: [#5632](https://github.com/owncloud/web/pull/5632)

   We've redesigned recipient role select in the Files app sidebar.

   https://github.com/owncloud/web/pull/5632

* Enhancement - Show sharees as collapsed list of avatars: [#5758](https://github.com/owncloud/web/pull/5758)

   We've introduced a collapsed list of avatars of sharees in the `People` panel of the right
   sidebar. On click we switch to showing the full list of sharees. With this additional
   intermediate state we were able to clean up the UI a bit for easier cognitive load.

   https://github.com/owncloud/web/issues/5736
   https://github.com/owncloud/web/pull/5758

* Enhancement - Show sharing information in details sidebar: [#5735](https://github.com/owncloud/web/issues/5735)

   We've added sharing information like from whom, when and where a file was shared to the detail
   view in the right sidebar.

   https://github.com/owncloud/web/issues/5735
   https://github.com/owncloud/web/pull/5730

* Enhancement - Switch filesize calculation base: [#5739](https://github.com/owncloud/web/pull/5739)

   We've switched from base-2 to base-10 when calculating the displayed file-size to align it
   better with user expectations.

   https://github.com/owncloud/web/pull/5739

* Enhancement - Update ODS to 10.0.0: [#5725](https://github.com/owncloud/web/pull/5725)

   We updated the ownCloud Design System to version 10.0.0. Please refer to the full changelog in
   the ODS release (linked) for more details. Summary: - Bugfix - Fix search for options provided
   as objects: https://github.com/owncloud/owncloud-design-system/pull/1602 - Bugfix -
   Contextmenu button triggered wrong event:
   https://github.com/owncloud/owncloud-design-system/pull/1610 - Bugfix - Use pointer
   cursor for OcSelect actions:
   https://github.com/owncloud/owncloud-design-system/pull/1604 - Bugfix - Reset
   droptarget background color in OcTableFiles:
   https://github.com/owncloud/owncloud-design-system/pull/1625 - Enhancement -
   OcTableFiles Contextmenu Tooltip:
   https://github.com/owncloud/owncloud-design-system/pull/1610 - Enhancement -
   Highlight droptarget in OcTableFiles:
   https://github.com/owncloud/owncloud-design-system/pull/1610 - Enhancement - Remove
   "Showdetails" button in OcTableFiles:
   https://github.com/owncloud/owncloud-design-system/pull/1610 - Enhancement - Switch
   filesize calculation base:
   https://github.com/owncloud/owncloud-design-system/pull/1598 - Change - Use route
   query to store active page:
   https://github.com/owncloud/owncloud-design-system/pull/1626 - Change - Refactor
   OcAvatarGroup and rename to OcAvatars:
   https://github.com/owncloud/owncloud-design-system/pull/5736 - Change - Add label prop
   to OcSelect: https://github.com/owncloud/owncloud-design-system/pull/1633

   https://github.com/owncloud/web/pull/5725
   https://github.com/owncloud/web/pull/5769
   https://github.com/owncloud/owncloud-design-system/releases/tag/v9.3.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v10.0.0

* Enhancement - URL encoding / decoding: [#5714](https://github.com/owncloud/web/issues/5714)

   We have updated the Vue router (prior to version 4) encoding from `files%2Fall%2Ffolder` to
   `files/all/folder`. It was also needed to use the router query object instead of the params to
   store the current page pagination information.

   https://github.com/owncloud/web/issues/5714
   https://github.com/owncloud/web/pull/5715

Changelog for ownCloud Web [4.1.0] (2021-08-20)
=======================================
The following sections list the changes in ownCloud web 4.1.0 relevant to
ownCloud admins and users.

[4.1.0]: https://github.com/owncloud/web/compare/v4.0.0...v4.1.0

Summary
-------

* Bugfix - Escape file name in Media viewer: [#5593](https://github.com/owncloud/web/issues/5593)
* Bugfix - Handle loading and parsing errors when loading themes: [#5669](https://github.com/owncloud/web/pull/5669)
* Bugfix - Load folder in Media viewer: [#5427](https://github.com/owncloud/web/issues/5427)
* Enhancement - Add multiple selection Sidebar: [#5164](https://github.com/owncloud/web/issues/5164)
* Enhancement - Enable live reload for changes to themes: [#5668](https://github.com/owncloud/web/pull/5668)
* Enhancement - Move file via drag and drop: [#5592](https://github.com/owncloud/web/issues/5592)
* Enhancement - Refresh files list via breadcrumbs: [#2018](https://github.com/owncloud/web/issues/2018)
* Enhancement - Signout icon: [#5681](https://github.com/owncloud/web/pull/5681)
* Enhancement - Toggle right sidebar: [#5165](https://github.com/owncloud/web/issues/5165)
* Enhancement - Update ODS to 9.2.0: [#5689](https://github.com/owncloud/web/pull/5689)

Details
-------

* Bugfix - Escape file name in Media viewer: [#5593](https://github.com/owncloud/web/issues/5593)

   We've started escaping the file name in the Media viewer extension so that a file with special
   characters in the name can still be loaded.

   https://github.com/owncloud/web/issues/5593
   https://github.com/owncloud/web/pull/5655

* Bugfix - Handle loading and parsing errors when loading themes: [#5669](https://github.com/owncloud/web/pull/5669)

   Adds graceful error handling of json parse errors when loading custom themes.

   https://github.com/owncloud/web/pull/5669

* Bugfix - Load folder in Media viewer: [#5427](https://github.com/owncloud/web/issues/5427)

   We've fixed the loading of a folder in the Media viewer extension. If a user reloads the Media
   viewer now, it load all the medias both in private and public context.

   https://github.com/owncloud/web/issues/5427
   https://github.com/owncloud/web/pull/5585
   https://github.com/owncloud/web/pull/5710

* Enhancement - Add multiple selection Sidebar: [#5164](https://github.com/owncloud/web/issues/5164)

   We've changed the sidebar so if a user selects multiple files or folders he sees a detailed view
   of his selection in the sidebar.

   https://github.com/owncloud/web/issues/5164
   https://github.com/owncloud/web/pull/5630

* Enhancement - Enable live reload for changes to themes: [#5668](https://github.com/owncloud/web/pull/5668)

   This allows live reloads to be triggered by changes to themes defined within the
   'packages/web-runtime/themes/**/*' folders, to facilitate efficient WYSIWYG
   development when wanting to customise the look and feel of the frontend.

   https://github.com/owncloud/web/pull/5668

* Enhancement - Move file via drag and drop: [#5592](https://github.com/owncloud/web/issues/5592)

   We've added moving files and folders via drag and drop to the files table view.

   https://github.com/owncloud/web/issues/5592
   https://github.com/owncloud/web/pull/5588

* Enhancement - Refresh files list via breadcrumbs: [#2018](https://github.com/owncloud/web/issues/2018)

   In the personal and public files lists we've added a click handler to the last breadcrumb item
   representing the current folder that reloads the files list.

   https://github.com/owncloud/web/issues/2018
   https://github.com/owncloud/web/pull/5659

* Enhancement - Signout icon: [#5681](https://github.com/owncloud/web/pull/5681)

   We changed the icon in the personal menu nav item for signing out based on recent user feedback.

   https://github.com/owncloud/web/pull/5681

* Enhancement - Toggle right sidebar: [#5165](https://github.com/owncloud/web/issues/5165)

   We introduced a button above the files list to toggle the right sidebar (open/close). It always
   opens for the current selection model. If nothing is selected, the current folder will be shown
   in the right sidebar. With this we now allow sharing a folder when the user already navigated
   into it.

   https://github.com/owncloud/web/issues/5165
   https://github.com/owncloud/web/pull/5678
   https://github.com/owncloud/web/pull/5709

* Enhancement - Update ODS to 9.2.0: [#5689](https://github.com/owncloud/web/pull/5689)

   We updated the ownCloud Design System to version 9.2.0.

   https://github.com/owncloud/web/pull/5689
   https://github.com/owncloud/owncloud-design-system/releases/tag/v9.0.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v9.0.1
   https://github.com/owncloud/owncloud-design-system/releases/tag/v9.1.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v9.2.0

Changelog for ownCloud Web [4.0.0] (2021-08-04)
=======================================
The following sections list the changes in ownCloud web 4.0.0 relevant to
ownCloud admins and users.

[4.0.0]: https://github.com/owncloud/web/compare/v3.4.1...v4.0.0

Summary
-------

* Bugfix - Left sidebar visibility in public links: [#5602](https://github.com/owncloud/web/pull/5602)
* Bugfix - Check names also for folders or files that currently are not visible: [#5583](https://github.com/owncloud/web/pull/5583)
* Bugfix - Content Security Policy for OpenID Connect authentication: [#5536](https://github.com/owncloud/web/pull/5536)
* Bugfix - Send authentication on manifests.json: [#5553](https://github.com/owncloud/web/pull/5553)
* Bugfix - Unnecessary quota requests: [#5539](https://github.com/owncloud/web/pull/5539)
* Bugfix - Use profile picture capability in avatars: [#5178](https://github.com/owncloud/web/pull/5178)
* Change - Add custom search service: [#5415](https://github.com/owncloud/web/pull/5415)
* Enhancement - New layout for context menu: [#5160](https://github.com/owncloud/web/issues/5160)
* Enhancement - Dropdown actions in FilesTable: [#5102](https://github.com/owncloud/web/issues/5102)
* Enhancement - Refactor recipient autocomplete in people panel: [#5554](https://github.com/owncloud/web/pull/5554)
* Enhancement - Load only opened panels: [#5569](https://github.com/owncloud/web/issues/5569)
* Enhancement - Prevent binding to only loopback IP when running in watch mode: [#5515](https://github.com/owncloud/web/pull/5515)
* Enhancement - Add filter & search to files app: [#5415](https://github.com/owncloud/web/pull/5415)
* Enhancement - Define the number of visible share recipients: [#5506](https://github.com/owncloud/web/pull/5506)
* Enhancement - Sidebar sliding panels navigation: [#5549](https://github.com/owncloud/web/pull/5549)

Details
-------

* Bugfix - Left sidebar visibility in public links: [#5602](https://github.com/owncloud/web/pull/5602)

   We fixed that the left sidebar was showing the navigation items of an authenticated context
   when visiting a public link as authenticated user.

   https://github.com/owncloud/web/pull/5602

* Bugfix - Check names also for folders or files that currently are not visible: [#5583](https://github.com/owncloud/web/pull/5583)

   We've changed the way how web checks if a file or folder exists. From now on it also include files
   from the current folder that actually are not visible.

   This was problematic in situations like the pagination, where a file or folder was not
   available in the current set of resources and the user tried to create a folder with the same
   name.

   https://github.com/owncloud/web/pull/5583

* Bugfix - Content Security Policy for OpenID Connect authentication: [#5536](https://github.com/owncloud/web/pull/5536)

   We added CSP rules for allowing OpenID Connect authentication when running ownCloud Web as app
   in ownCloud 10.

   https://github.com/owncloud/web/pull/5536

* Bugfix - Send authentication on manifests.json: [#5553](https://github.com/owncloud/web/pull/5553)

   We've changed that requests to manifest.json will use authentication, too.

   https://github.com/owncloud/web/pull/5553

* Bugfix - Unnecessary quota requests: [#5539](https://github.com/owncloud/web/pull/5539)

   We've removed requests that checked for a user's quota on pages where it was not relevant.

   https://github.com/owncloud/web/pull/5539

* Bugfix - Use profile picture capability in avatars: [#5178](https://github.com/owncloud/web/pull/5178)

   Requests for loading avatar profile pictures now only get sent if the backend communicates
   their availability in the capabilities.

   https://github.com/owncloud/web/pull/5178

* Change - Add custom search service: [#5415](https://github.com/owncloud/web/pull/5415)

   We've added `search` as another core app that can be utilized by other (third-party) frontend
   extensions to provide filter and search functionality. Please note that you need to add
   `search` to the `apps` array of your config.json file, otherwise the search bar with its global
   file search capabilities will disappear.

   https://github.com/owncloud/web/pull/5415

* Enhancement - New layout for context menu: [#5160](https://github.com/owncloud/web/issues/5160)

   The new context menu in the files list received additional menu items and a clear separation
   into three sections.

   https://github.com/owncloud/web/issues/5160
   https://github.com/owncloud/web/pull/5576

* Enhancement - Dropdown actions in FilesTable: [#5102](https://github.com/owncloud/web/issues/5102)

   Users can now access quick actions in a dropdown by clicking on the three-dots button or
   right-clicking on rows in the files table.

   We've also bumped the ownCloud Design System to version 8.3.0

   https://github.com/owncloud/web/issues/5102
   https://github.com/owncloud/web/issues/5103
   https://github.com/owncloud/web/pull/5551
   https://github.com/owncloud/web/pull/5554
   https://github.com/owncloud/owncloud-design-system/releases/tag/v8.3.0

* Enhancement - Refactor recipient autocomplete in people panel: [#5554](https://github.com/owncloud/web/pull/5554)

   We've refactored the recipient autocomplete in people panel so that selected recipients are
   displayed directly in the autocomplete instead of the list below it.

   https://github.com/owncloud/web/pull/5554

* Enhancement - Load only opened panels: [#5569](https://github.com/owncloud/web/issues/5569)

   Do not load panels in the Files extension sidebar until they are opened.

   https://github.com/owncloud/web/issues/5569
   https://github.com/owncloud/web/pull/5573

* Enhancement - Prevent binding to only loopback IP when running in watch mode: [#5515](https://github.com/owncloud/web/pull/5515)

   This is required when running the acceptance tests on Windows, it allows the selenium docker
   containers to access the frontend due to the host binding in rollup (when running `yarn
   serve`). Does not break any existing functionality.

   https://github.com/owncloud/web/pull/5515

* Enhancement - Add filter & search to files app: [#5415](https://github.com/owncloud/web/pull/5415)

   We've changed the existing searchbar to use the custom search service. It is now able to be used
   at the same time as a filter (on the frontend) and, if the backend is capable of search, as a search
   input.

   https://github.com/owncloud/web/pull/5415

* Enhancement - Define the number of visible share recipients: [#5506](https://github.com/owncloud/web/pull/5506)

   We've added a new configuration option `sharingRecipientsPerPage` to define how many
   recipients should be shown in the share recipients dropdown.

   https://github.com/owncloud/web/pull/5506

* Enhancement - Sidebar sliding panels navigation: [#5549](https://github.com/owncloud/web/pull/5549)

   The sidebar now uses a ios like concept for navigate through the different actions in the
   sidebar. It replaces the accordion navigation entirely.

   https://github.com/owncloud/web/issues/5523
   https://github.com/owncloud/web/pull/5549

Changelog for ownCloud Web [3.4.1] (2021-07-12)
=======================================
The following sections list the changes in ownCloud web 3.4.1 relevant to
ownCloud admins and users.

[3.4.1]: https://github.com/owncloud/web/compare/v3.4.0...v3.4.1

Summary
-------

* Bugfix - Load preview in right sidebar: [#5501](https://github.com/owncloud/web/pull/5501)
* Bugfix - Align view options to the right: [#5493](https://github.com/owncloud/web/pull/5493)

Details
-------

* Bugfix - Load preview in right sidebar: [#5501](https://github.com/owncloud/web/pull/5501)

   We fixed a bug that caused previews not being loaded in the details accordion of the right
   sidebar.

   https://github.com/owncloud/web/pull/5501

* Bugfix - Align view options to the right: [#5493](https://github.com/owncloud/web/pull/5493)

   We've fixed the position of the view options button which would appear in any screen where
   actions are missing on the left.

   https://github.com/owncloud/web/pull/5493

Changelog for ownCloud Web [3.4.0] (2021-07-09)
=======================================
The following sections list the changes in ownCloud web 3.4.0 relevant to
ownCloud admins and users.

[3.4.0]: https://github.com/owncloud/web/compare/v3.3.1...v3.4.0

Summary
-------

* Bugfix - Batch action for deleting adhering permissions: [#5441](https://github.com/owncloud/web/pull/5441)
* Enhancement - Add page size view option: [#5470](https://github.com/owncloud/web/pull/5470)
* Enhancement - Add view options: [#5408](https://github.com/owncloud/web/pull/5408)
* Enhancement - Details in Sharing Sidebar: [#5161](https://github.com/owncloud/web/issues/5161)
* Enhancement - Feedback link: [#5468](https://github.com/owncloud/web/pull/5468)
* Enhancement - Content Security Policy for known iframe integrations: [#5420](https://github.com/owncloud/web/pull/5420)
* Enhancement - Batch actions for accepting and declining shares: [#5204](https://github.com/owncloud/web/issues/5204)
* Enhancement - Update Design System to 8.0.0: [#5465](https://github.com/owncloud/web/pull/5465)

Details
-------

* Bugfix - Batch action for deleting adhering permissions: [#5441](https://github.com/owncloud/web/pull/5441)

   We fixed that the batch actions for deleting files and folders was showing for shares that only
   have viewer permissions.

   https://github.com/owncloud/web/pull/5441

* Enhancement - Add page size view option: [#5470](https://github.com/owncloud/web/pull/5470)

   We've added a new item into the view options which can be used to set the number of items displayed
   per page. This value is persisted in the local storage so that the user doesn't have to update it
   every time he visits the app.

   https://github.com/owncloud/web/pull/5470

* Enhancement - Add view options: [#5408](https://github.com/owncloud/web/pull/5408)

   We've added view options above the files lists so that the user can customise them. Currently,
   it is possible to toggle visibility of hidden files. Changes in view options are persisted in
   local storage.

   https://github.com/owncloud/web/pull/5408
   https://github.com/owncloud/web/pull/5450

* Enhancement - Details in Sharing Sidebar: [#5161](https://github.com/owncloud/web/issues/5161)

   We're now displaying more information about the highlighted file in the sharing sidebar,
   including a preview (if applicable) as well as sharing and version information in one place.

   https://github.com/owncloud/web/issues/5161
   https://github.com/owncloud/web/pull/5284
   https://github.com/owncloud/web/pull/5483

* Enhancement - Feedback link: [#5468](https://github.com/owncloud/web/pull/5468)

   We've added a feedback link in the topbar which opens a survey in a new tab. The intention is to
   gather feedback from users. There is a config option to disable the link (see docs "getting
   started").

   https://github.com/owncloud/web/pull/5468

* Enhancement - Content Security Policy for known iframe integrations: [#5420](https://github.com/owncloud/web/pull/5420)

   We added CSP rules for allowing iframe integrations of the onlyoffice and richdocuments
   documentservers.

   https://github.com/owncloud/web/pull/5420

* Enhancement - Batch actions for accepting and declining shares: [#5204](https://github.com/owncloud/web/issues/5204)

   We've added batch actions for accepting and declining multiple selected incoming shares at
   once.

   https://github.com/owncloud/web/issues/5204
   https://github.com/owncloud/web/issues/2513
   https://github.com/owncloud/web/issues/3101
   https://github.com/owncloud/web/issues/5435
   https://github.com/owncloud/web/pull/5374

* Enhancement - Update Design System to 8.0.0: [#5465](https://github.com/owncloud/web/pull/5465)

   The ownCloud design system has been updated to its latest version.

   https://github.com/owncloud/web/pull/5465
   https://github.com/owncloud/web/pull/5483
   https://github.com/owncloud/web/pull/5408
   https://github.com/owncloud/owncloud-design-system/releases/tag/v8.0.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v7.5.0

Changelog for ownCloud Web [3.3.1] (2021-06-28)
=======================================
The following sections list the changes in ownCloud web 3.3.1 relevant to
ownCloud admins and users.

[3.3.1]: https://github.com/owncloud/web/compare/v3.3.0...v3.3.1

Summary
-------

* Bugfix - Image-source directive did not handle updates correctly: [#5364](https://github.com/owncloud/web/pull/5364)

Details
-------

* Bugfix - Image-source directive did not handle updates correctly: [#5364](https://github.com/owncloud/web/pull/5364)

   When using v-image-source to bind an image source it did not handle changes to the image source
   url.

   This has been fixed by implementing the update hook in the directive.

   https://github.com/owncloud/web/pull/5364

Changelog for ownCloud Web [3.3.0] (2021-06-23)
=======================================
The following sections list the changes in ownCloud web 3.3.0 relevant to
ownCloud admins and users.

[3.3.0]: https://github.com/owncloud/web/compare/v3.2.0...v3.3.0

Summary
-------

* Bugfix - Avoid duplicate loading of resources: [#5194](https://github.com/owncloud/web/pull/5194)
* Bugfix - Center MediaViewer loading spinner: [#5270](https://github.com/owncloud/web/pull/5270)
* Bugfix - Keyboard navigation for copy to clipboard: [#5147](https://github.com/owncloud/web/pull/5147)
* Bugfix - Hide left sidebar navigation when switching routes: [#5025](https://github.com/owncloud/web/pull/5025)
* Bugfix - Hide "Create new public link" button: [#5126](https://github.com/owncloud/web/pull/5126)
* Bugfix - Add docs link & fix translations on error page: [#5034](https://github.com/owncloud/web/pull/5034)
* Bugfix - Make skip to main content link visible: [#5118](https://github.com/owncloud/web/pull/5118)
* Bugfix - Add index route for the OC10 integration: [#5201](https://github.com/owncloud/web/pull/5201)
* Bugfix - Reduced Thumbnail Size: [#5194](https://github.com/owncloud/web/pull/5194)
* Bugfix - Do not call Vuex create store multiple times: [#5254](https://github.com/owncloud/web/pull/5254)
* Bugfix - Prevent scrolling issues: [#5131](https://github.com/owncloud/web/pull/5131)
* Bugfix - Show `0` as used quota if a negative number is given: [#5229](https://github.com/owncloud/web/pull/5229)
* Bugfix - Resizeable html container: [#5052](https://github.com/owncloud/web/pull/5052)
* Bugfix - Translated user menu items: [#5042](https://github.com/owncloud/web/pull/5042)
* Bugfix - Prevent `fileTypeIcon` to throw a TypeError: [#5253](https://github.com/owncloud/web/pull/5253)
* Bugfix - Make sure IDs in HTML are unique: [#5028](https://github.com/owncloud/web/pull/5028)
* Bugfix - Remove unnecessary Propfind requests: [#5340](https://github.com/owncloud/web/pull/5340)
* Bugfix - Upsert resource in filestable: [#5130](https://github.com/owncloud/web/pull/5130)
* Enhancement - Improve a11y colors: [#5138](https://github.com/owncloud/web/pull/5138)
* Enhancement - Accessible status indicators: [#5182](https://github.com/owncloud/web/pull/5182)
* Enhancement - Use a proper definition list for the account settings page: [#5012](https://github.com/owncloud/web/pull/5012)
* Enhancement - Add pagination: [#5224](https://github.com/owncloud/web/pull/5224)
* Enhancement - Asynchronous loading of images: [#4973](https://github.com/owncloud/web/issues/4973)
* Enhancement - Update owncloud Design System to v7.1.2: [#5002](https://github.com/owncloud/web/pull/5002)
* Enhancement - Button appearance: [#5053](https://github.com/owncloud/web/pull/5053)
* Enhancement - Confirmation message when copying links: [#5147](https://github.com/owncloud/web/pull/5147)
* Enhancement - File editor mode: [#5226](https://github.com/owncloud/web/issues/5226)
* Enhancement - Improve accessibility for the files sidebar: [#5000](https://github.com/owncloud/web/pull/5000)
* Enhancement - Improve a11y in the files sidebar peoples & shares section: [#5034](https://github.com/owncloud/web/pull/5034)
* Enhancement - Focus breadcrumb on route change: [#5166](https://github.com/owncloud/web/pull/5166)
* Enhancement - Enable focus trap in oc-modal: [#5013](https://github.com/owncloud/web/pull/5013)
* Enhancement - Hide left sidebar if no navitems are present: [#5149](https://github.com/owncloud/web/pull/5149)
* Enhancement - Introduce image cache: [#3098](https://github.com/owncloud/web/issues/3098)
* Enhancement - Do not reset file selection when cancelling batch delete: [#5107](https://github.com/owncloud/web/pull/5107)
* Enhancement - Move breadcrumbs out of location picker heading: [#5020](https://github.com/owncloud/web/pull/5020)
* Enhancement - Move hint in the Location picker under breadcrumbs: [#5008](https://github.com/owncloud/web/pull/5008)
* Enhancement - Improve accessibility on new file menu: [#5058](https://github.com/owncloud/web/pull/5058)
* Enhancement - OcTooltip: [#5055](https://github.com/owncloud/web/pull/5055)
* Enhancement - Send focus to "Add people" btn after closing Add/Edit panels: [#5129](https://github.com/owncloud/web/pull/5129)
* Enhancement - Remove autoclose on notifications: [#5040](https://github.com/owncloud/web/pull/5040)
* Enhancement - Request cancellation: [#5163](https://github.com/owncloud/web/issues/5163)
* Enhancement - Ability to update file resource fields: [#5311](https://github.com/owncloud/web/pull/5311)
* Enhancement - Use `oc-select` for role select: [#4937](https://github.com/owncloud/web/pull/4937)
* Enhancement - Add focus trap to left sidebar: [#5027](https://github.com/owncloud/web/pull/5027)
* Enhancement - Improve accessibility on trash bin: [#5046](https://github.com/owncloud/web/pull/5046)
* Enhancement - TypeScript Support: [#5194](https://github.com/owncloud/web/pull/5194)
* Enhancement - Update ownCloud Design System to v7.4.2: [#5224](https://github.com/owncloud/web/pull/5224)
* Enhancement - Use slots in the navigation sidebar: [#5105](https://github.com/owncloud/web/pull/5105)
* Enhancement - Improve accessibility on user menu: [#5010](https://github.com/owncloud/web/pull/5010)
* Enhancement - Visibility observer: [#5194](https://github.com/owncloud/web/pull/5194)

Details
-------

* Bugfix - Avoid duplicate loading of resources: [#5194](https://github.com/owncloud/web/pull/5194)

   On the personal route, we had a redirect case where resources would be loaded twice, which now is
   fixed.

   https://github.com/owncloud/web/pull/5194

* Bugfix - Center MediaViewer loading spinner: [#5270](https://github.com/owncloud/web/pull/5270)

   The loading spinner in the media viewer app wasn't centered vertically since the wrapping
   element was to small. It has now been given a min-height of the current screen size.

   https://github.com/owncloud/web/issues/5196
   https://github.com/owncloud/web/pull/5270

* Bugfix - Keyboard navigation for copy to clipboard: [#5147](https://github.com/owncloud/web/pull/5147)

   We've fixed that the buttons for copying (private/public) links to the clipboard were not
   usable via keyboard.

   https://github.com/owncloud/web/pull/5147

* Bugfix - Hide left sidebar navigation when switching routes: [#5025](https://github.com/owncloud/web/pull/5025)

   On smaller screens, the left sidebar containing the extension navigation is collapsed. We've
   fixed that when the user expanded the sidebar and navigated to a different route the sidebar is
   collapsed again.

   https://github.com/owncloud/web/pull/5025

* Bugfix - Hide "Create new public link" button: [#5126](https://github.com/owncloud/web/pull/5126)

   The button to create new public links was visible even if the user lacked the permissions to
   create one. It is now being hidden unless the user is allowed to create a share of the respective
   file.

   https://github.com/owncloud/web/pull/5126

* Bugfix - Add docs link & fix translations on error page: [#5034](https://github.com/owncloud/web/pull/5034)

   The MissingConfigPage had a translated paragraph that didn't work because of an presumably
   unallowed `<br/>` tag inside the text.

   Also, the link to the GitHub repo was replace with a link to the web docs and public rocket chat.

   https://github.com/owncloud/web/pull/5034

* Bugfix - Make skip to main content link visible: [#5118](https://github.com/owncloud/web/pull/5118)

   We've fixed the z-index of the skip to main content link so that it is not hidden under different
   content anymore and is again visible on focus, with a visible focus border.

   https://github.com/owncloud/web/pull/5118
   https://github.com/owncloud/web/pull/5167

* Bugfix - Add index route for the OC10 integration: [#5201](https://github.com/owncloud/web/pull/5201)

   Added an index route for the OC10 integration which gets called when opening
   http://your-server/index.php/apps/web. The route basically redirects to the same URL
   while appending /index.html, as this is the correct URL for accessing the Web UI. Setting Web as
   default layout would result in an endless redirect loop otherwise.

   https://github.com/owncloud/core/issues/38799
   https://github.com/owncloud/web/pull/5201

* Bugfix - Reduced Thumbnail Size: [#5194](https://github.com/owncloud/web/pull/5194)

   We have greatly reduced the size of the images we request from the backend to display as
   thumbnail previews in order to minimize loading times.

   https://github.com/owncloud/web/pull/5194

* Bugfix - Do not call Vuex create store multiple times: [#5254](https://github.com/owncloud/web/pull/5254)

   We've moved the create Vuex store logic into the index file of Web runtime to prevent
   initialising the store multiple times.

   https://github.com/owncloud/web/pull/5254

* Bugfix - Prevent scrolling issues: [#5131](https://github.com/owncloud/web/pull/5131)

   In cases where the browser-window space was not enough to render all views the ui ended up with
   weird scrolling behavior.

   This has been fixed by restructuring the dom elements and giving them proper styles.

   https://github.com/owncloud/web/pull/5131

* Bugfix - Show `0` as used quota if a negative number is given: [#5229](https://github.com/owncloud/web/pull/5229)

   In the case if the server returns a negative number as used quota (what should not happen) show `0
   B of 2 GB` and not only of ` 2 GB`

   https://github.com/owncloud/web/pull/5229

* Bugfix - Resizeable html container: [#5052](https://github.com/owncloud/web/pull/5052)

   We removed a critical accessibility offense by removing the hardcoded maximum-scale and
   allowing for user-scalable viewsizes.

   https://github.com/owncloud/web/pull/5052

* Bugfix - Translated user menu items: [#5042](https://github.com/owncloud/web/pull/5042)

   Some of the user menu items were not correctly translated, which is now fixed.

   https://github.com/owncloud/web/pull/5042

* Bugfix - Prevent `fileTypeIcon` to throw a TypeError: [#5253](https://github.com/owncloud/web/pull/5253)

   The function would die with `TypeError: file.extension.toLowerCase is not a function` if
   `file.extension` was set to something that is not a string.

   https://github.com/owncloud/web/pull/5253

* Bugfix - Make sure IDs in HTML are unique: [#5028](https://github.com/owncloud/web/pull/5028)

   Quick action button IDs were repeated in every row of the file table, which isn't allowed in HTML
   (IDs must be unique per document). By changing to classes, this offense was resolved.

   The same goes for IDs in the people shares part of the sidebar where IDs are now appended with the
   share ID, which is necessary since they need to be both unique and referenced by ID for
   accessibility reasons.

   https://github.com/owncloud/web/pull/5028
   https://github.com/owncloud/web/pull/5148

* Bugfix - Remove unnecessary Propfind requests: [#5340](https://github.com/owncloud/web/pull/5340)

   In the the files-app views `Favorites`, `SharedViaLink`, `SharedWithMe` and
   `SharedWithOthers` we did a unnecessary propfind request to obtain the rootFolder which is
   not required there.

   This has been fixed by removing those requests.

   https://github.com/owncloud/web/pull/5340

* Bugfix - Upsert resource in filestable: [#5130](https://github.com/owncloud/web/pull/5130)

   When uploading an already existing resource in the filestable, we sometimes displayed both
   files in the filestable until the page got refreshed. We now check when uploading a file if it
   exists in the filestable and replace it there if that is the case.

   https://github.com/owncloud/web/pull/5130

* Enhancement - Improve a11y colors: [#5138](https://github.com/owncloud/web/pull/5138)

   To get a11y compliant it's required that colors match a given contrast ratio to it's
   back-/fore-/ground. We improved this on:

   - all ODS components - all oc-color variables - oc-star in sidebar

   https://github.com/owncloud/web/pull/5138

* Enhancement - Accessible status indicators: [#5182](https://github.com/owncloud/web/pull/5182)

   To make both the clickable (button) and the visible (icon) part of the status indicators in the
   files table accessible, we have added a description, in addition to the tooltip and
   `aria-label`.

   https://github.com/owncloud/web/pull/5182

* Enhancement - Use a proper definition list for the account settings page: [#5012](https://github.com/owncloud/web/pull/5012)

   https://github.com/owncloud/web/pull/5012

* Enhancement - Add pagination: [#5224](https://github.com/owncloud/web/pull/5224)

   We've added pagination to all files lists. Current limit for displayed resources is 100.

   https://github.com/owncloud/web/pull/5224
   https://github.com/owncloud/web/pull/5309

* Enhancement - Asynchronous loading of images: [#4973](https://github.com/owncloud/web/issues/4973)

   Thumbnail and avatar images now get loaded in the background and don't block the main rendering
   of the user interface.

   https://github.com/owncloud/web/issues/4973
   https://github.com/owncloud/web/pull/5194

* Enhancement - Update owncloud Design System to v7.1.2: [#5002](https://github.com/owncloud/web/pull/5002)

   - Lots of updates regarding accessibility topics - Removal of home icon in breadcrumbs,
   changed to "All files" link as breadcrumb root - Added aria-labels to all landmarks in sidebar
   and proper logo-alt attribute to image in sidebar

   https://github.com/owncloud/web/pull/5002
   https://github.com/owncloud/web/pull/5044
   https://github.com/owncloud/web/pull/5074
   https://github.com/owncloud/web/pull/5186
   https://github.com/owncloud/web/pull/5189

* Enhancement - Button appearance: [#5053](https://github.com/owncloud/web/pull/5053)

   Changed the appearance of the "accept/decline share" buttons in the "Shared With Me" file list
   so they actually look like buttons.

   Also changed the "Clear selection" button in the files table batch actions from `raw` to
   `outline` appearance.

   https://github.com/owncloud/web/pull/5053
   https://github.com/owncloud/web/pull/5148

* Enhancement - Confirmation message when copying links: [#5147](https://github.com/owncloud/web/pull/5147)

   We've added confirmation messages (toasts) when a private or public link is copied to the
   clipboard.

   https://github.com/owncloud/web/pull/5147

* Enhancement - File editor mode: [#5226](https://github.com/owncloud/web/issues/5226)

   We've added a parameter called `mode` to the different ways of opening a file editor. The mode
   can be `edit` or `create` and reflects whether the file editor was opened in an editing mode or in
   a creation mode.

   https://github.com/owncloud/web/issues/5226
   https://github.com/owncloud/web/pull/5256

* Enhancement - Improve accessibility for the files sidebar: [#5000](https://github.com/owncloud/web/pull/5000)

   We've did several improvements to enhance the accessibility on the files sidebar: -
   Transformed the file name to a h2 element - Transformed the "Open folder"-action to a link
   instead of a button - Transformed the favorite-star to a button-element - Adjusted aria-label
   of the favorite-star to describe what it does instead of its current state - Added a more
   descriptive close button label - Clicking outside of the sidebar now closes it - Removed the
   aria-label on the action buttons as they already include proper labels - Added a hint for screen
   readers if an action opens a new window/tab - Make sidebar header sticky

   https://github.com/owncloud/web/pull/5000
   https://github.com/owncloud/web/pull/5266

* Enhancement - Improve a11y in the files sidebar peoples & shares section: [#5034](https://github.com/owncloud/web/pull/5034)

   We've did several improvements to enhance the accessibility on the files sidebar: - Gave
   `role="presentation" to the collaborator avatar - Refactored `<span>` and `<div>` tags into
   `<p>` tags and unified translations a bit - Enhanced hints in the collaborator quick action
   buttons with collaborator name - Hide private links if the capability is not enabled - Set
   avatar-images to `:aria-hidden="true"` since they're only visual elements and can be hidden
   from screenreaders - Changed `<section>` wrapper around private link shares - Removed
   `<section>` wrapper around public link shares - Removed `<section>` wrapper around
   collaborators - Added screenreader-only explain texts regarding collaborator/share
   ownership - Added aria-label for share receiver section - Worked on unifying the way we handle
   translations: Focus on v-translate and $gettext() - Turn tags into `<ul> & <li>` list, add
   aria-labelledby to both tag list and resharer tag list - Translated "Open with $appName" for
   sidebar quick actions

   https://github.com/owncloud/web/pull/5034
   https://github.com/owncloud/web/pull/5043
   https://github.com/owncloud/web/pull/5121

* Enhancement - Focus breadcrumb on route change: [#5166](https://github.com/owncloud/web/pull/5166)

   We now focus the current breadcrumb item when navigating to another page and announce the
   amount of files and folders in the folder the user has navigated to.

   https://github.com/owncloud/web/pull/5166

* Enhancement - Enable focus trap in oc-modal: [#5013](https://github.com/owncloud/web/pull/5013)

   After the recent changes in ODS, the oc-modal can now use a focus-trap which is a feature needed
   for accessibility-reasons.

   https://github.com/owncloud/web/pull/5013

* Enhancement - Hide left sidebar if no navitems are present: [#5149](https://github.com/owncloud/web/pull/5149)

   For extensions / pages without nav items and public link pages, we now hide the left sidebar to
   not confuse screen readers and give more screen space for the content.

   https://github.com/owncloud/web/pull/5149

* Enhancement - Introduce image cache: [#3098](https://github.com/owncloud/web/issues/3098)

   We have added a (configurable) cache for thumbnails and avatar images to avoid loading the same
   files over and over again.

   https://github.com/owncloud/web/issues/3098
   https://github.com/owncloud/web/pull/5194

* Enhancement - Do not reset file selection when cancelling batch delete: [#5107](https://github.com/owncloud/web/pull/5107)

   We've removed the reset selection method call when cancelling batch delete. If the user now
   cancels the delete dialog, the file selection stays as it was before displaying the dialog.

   https://github.com/owncloud/web/pull/5107

* Enhancement - Move breadcrumbs out of location picker heading: [#5020](https://github.com/owncloud/web/pull/5020)

   We've moved the breadcrumbs element out of the location picker heading and moved it under it.
   The heading is now also reflecting the page title. We've also decreased the size of both
   breadcrumbs and action buttons so that they fit better together.

   https://github.com/owncloud/web/pull/5020

* Enhancement - Move hint in the Location picker under breadcrumbs: [#5008](https://github.com/owncloud/web/pull/5008)

   We've moved the hint that is describing how to use the Location picker from sidebar under the
   breadcrumbs. There is navigation of the Files extension displayed in the sidebar now instead.

   https://github.com/owncloud/web/pull/5008

* Enhancement - Improve accessibility on new file menu: [#5058](https://github.com/owncloud/web/pull/5058)

   We now use buttons instead of a-tags in the new file menu. Also fixed the double-focus per item
   when navigating via tab.

   https://github.com/owncloud/web/pull/5058

* Enhancement - OcTooltip: [#5055](https://github.com/owncloud/web/pull/5055)

   We've changed the tooltip implementation to use oc-tooltip directive from ODS instead of
   uikit's.

   https://github.com/owncloud/web/issues/4654
   https://github.com/owncloud/web/issues/2623
   https://github.com/owncloud/web/issues/4597
   https://github.com/owncloud/web/issues/4332
   https://github.com/owncloud/web/issues/4300
   https://github.com/owncloud/web/issues/5155
   https://github.com/owncloud/web/pull/5055

* Enhancement - Send focus to "Add people" btn after closing Add/Edit panels: [#5129](https://github.com/owncloud/web/pull/5129)

   We've started sending the focus to "Add people" button after the `Add` panel in the people
   accordion has been closed. Also, when editing a share the focus jumps back to the "Edit" button
   in the respective share after cancelling or confirming the action.

   https://github.com/owncloud/web/pull/5129
   https://github.com/owncloud/web/pull/5146

* Enhancement - Remove autoclose on notifications: [#5040](https://github.com/owncloud/web/pull/5040)

   The autoclose is now being handled in the design system component. The timeout can be set via
   property.

   https://github.com/owncloud/web/pull/5040

* Enhancement - Request cancellation: [#5163](https://github.com/owncloud/web/issues/5163)

   Requests (e.g. loading of images) can now be pragmatically cancelled from the client side.
   Before, obsolete requests would still create load on the server and return results that then
   would be discarded by the web frontend.

   https://github.com/owncloud/web/issues/5163
   https://github.com/owncloud/web/pull/5194

* Enhancement - Ability to update file resource fields: [#5311](https://github.com/owncloud/web/pull/5311)

   We've introduced the ability to update individual resource fields only instead of updating
   the whole resource at once.

   https://github.com/owncloud/web/pull/5311

* Enhancement - Use `oc-select` for role select: [#4937](https://github.com/owncloud/web/pull/4937)

   We've used the new `oc-select` component from ODS for selecting role in people and public links
   accordions in the right sidebar. We are using this component to enable keyboard navigation
   when selecting the role.

   https://github.com/owncloud/web/pull/4937

* Enhancement - Add focus trap to left sidebar: [#5027](https://github.com/owncloud/web/pull/5027)

   We've added a focus trap to the left sidebar on smaller resolutions when it's collapsible. If
   the sidebar is opened and focused, the focus stays within the sidebar.

   https://github.com/owncloud/web/pull/5027

* Enhancement - Improve accessibility on trash bin: [#5046](https://github.com/owncloud/web/pull/5046)

   Add more context to the empty trash bin button text and only render it, if resources are present.

   https://github.com/owncloud/web/pull/5046

* Enhancement - TypeScript Support: [#5194](https://github.com/owncloud/web/pull/5194)

   We have added support for TypeScript and started to refactor parts of the codebase. This will
   help us provide clearer interfaces and catch bugs earlier.

   https://github.com/owncloud/web/pull/5194

* Enhancement - Update ownCloud Design System to v7.4.2: [#5224](https://github.com/owncloud/web/pull/5224)

   We've updated ownCloud Design System to version 7.4.2 to bring the new pagination component.

   https://github.com/owncloud/web/pull/5224
   https://github.com/owncloud/web/pull/5292
   https://github.com/owncloud/web/pull/5319
   https://github.com/owncloud/owncloud-design-system/releases/tag/v7.4.1
   https://github.com/owncloud/owncloud-design-system/releases/tag/v7.4.2

* Enhancement - Use slots in the navigation sidebar: [#5105](https://github.com/owncloud/web/pull/5105)

   In the new sidebar content is defined solely via slots. We've moved all the content into those
   slots so that the sidebar still gets displayed correctly.

   https://github.com/owncloud/web/pull/5105

* Enhancement - Improve accessibility on user menu: [#5010](https://github.com/owncloud/web/pull/5010)

   Wrapped the user menu button in a nav element and added an aria-label which describes it as main
   navigation.

   https://github.com/owncloud/web/pull/5010

* Enhancement - Visibility observer: [#5194](https://github.com/owncloud/web/pull/5194)

   By adding a visibility observer, we now only load image previews for those files that are close
   to the user's viewport. It is also equipped with a short waiting period so scrolling doesn't
   lead to an overload of requests.

   https://github.com/owncloud/web/pull/5194

Changelog for ownCloud Web [3.2.0] (2021-05-31)
=======================================
The following sections list the changes in ownCloud web 3.2.0 relevant to
ownCloud admins and users.

[3.2.0]: https://github.com/owncloud/web/compare/v3.1.0...v3.2.0

Summary
-------

* Bugfix - Correct navigation through "via"-tags: [#5122](https://github.com/owncloud/web/pull/5122)
* Bugfix - Correct sharee tag: [#5112](https://github.com/owncloud/web/pull/5112)
* Enhancement - Confirmation for public link deletion: [#5125](https://github.com/owncloud/web/pull/5125)
* Enhancement - Continuously deployed demo instance with latest Web: [#5145](https://github.com/owncloud/web/pull/5145)
* Enhancement - Configure previews: [#5159](https://github.com/owncloud/web/pull/5159)
* Enhancement - Prompts leaving user about pending uploads: [#2590](https://github.com/owncloud/web/issues/2590)

Details
-------

* Bugfix - Correct navigation through "via"-tags: [#5122](https://github.com/owncloud/web/pull/5122)

   The "shared via X" link in the indirect share tag in the sidebar was navigating to the parent
   directory of the indirect share entry. This has been fixed for the collaborators sidebar
   section and the link target is the share entry itself now.

   https://github.com/owncloud/web/pull/5122

* Bugfix - Correct sharee tag: [#5112](https://github.com/owncloud/web/pull/5112)

   The tag _inside_ a shared folder always announced the current user as "owner", since the shares
   lookup didn't check for the parent folders' ownership. This has been fixed now and users get the
   correct tag (e.g. "Viewer", "Editor" etc) in the sidebar.

   https://github.com/owncloud/web/pull/5112

* Enhancement - Confirmation for public link deletion: [#5125](https://github.com/owncloud/web/pull/5125)

   The deletion of public links is an irreversible interaction and should be handled with more
   care since users might have bookmarked or shared with other people. We have added a
   confirmation modal now to prevent users from accidentally deleting public links.

   https://github.com/owncloud/web/pull/5125

* Enhancement - Continuously deployed demo instance with latest Web: [#5145](https://github.com/owncloud/web/pull/5145)

   Whenever a commit or merge to master happens, a demo instance with the latest Web build will be
   deployed.

   https://github.com/owncloud/web/pull/5145

* Enhancement - Configure previews: [#5159](https://github.com/owncloud/web/pull/5159)

   We introduced a new config option to configure which file will be previewed. To do so, add
   `"options.previewFileExtensions": ["jpg", "txt"]` in the config.json file.

   https://github.com/owncloud/web/issues/5079
   https://github.com/owncloud/web/pull/5159

* Enhancement - Prompts leaving user about pending uploads: [#2590](https://github.com/owncloud/web/issues/2590)

   Added an unload event listener that detects closes/ reloads/ navigates to another URL. Added
   prompt that ask for confirmation to leave site on unload events if uploads pending. Removed the
   event listener before destroy of component.

   https://github.com/owncloud/web/issues/2590
   https://github.com/owncloud/web/pull/4840

Changelog for ownCloud Web [3.1.0] (2021-05-12)
=======================================
The following sections list the changes in ownCloud web 3.1.0 relevant to
ownCloud admins and users.

[3.1.0]: https://github.com/owncloud/web/compare/v3.0.0...v3.1.0

Summary
-------

* Bugfix - Editors for all routes: [#5095](https://github.com/owncloud/web/pull/5095)
* Bugfix - Improve web container: [#4942](https://github.com/owncloud/web/pull/4942)
* Bugfix - Display navigation for resolved private link: [#5023](https://github.com/owncloud/web/pull/5023)
* Bugfix - Fix z-index on the new file menu: [#5056](https://github.com/owncloud/web/pull/5056)
* Enhancement - Accessibility improvements: [#4965](https://github.com/owncloud/web/pull/4965)
* Enhancement - Implement proper direct delete: [#4991](https://github.com/owncloud/web/pull/4991)
* Enhancement - Enable files app search bar to be toggleable on a per-route basis: [#4815](https://github.com/owncloud/web/pull/4815)
* Enhancement - Extension config: [#5024](https://github.com/owncloud/web/pull/5024)
* Enhancement - Focus management: [#4993](https://github.com/owncloud/web/pull/4993)
* Enhancement - Align headline hierarchy: [#5003](https://github.com/owncloud/web/issues/5003)
* Enhancement - Lazy file avatar loading: [#5073](https://github.com/owncloud/web/pull/5073)
* Enhancement - Use list for displaying added people: [#4915](https://github.com/owncloud/web/pull/4915)
* Enhancement - Use real page title for location picker: [#5009](https://github.com/owncloud/web/pull/5009)
* Enhancement - Show search button in search bar: [#4985](https://github.com/owncloud/web/pull/4985)

Details
-------

* Bugfix - Editors for all routes: [#5095](https://github.com/owncloud/web/pull/5095)

   If an extension doesn't define valid routes it should be allowed for all routes by default. That
   behaviour was not working properly and is fixed now.

   https://github.com/owncloud/web/pull/5095

* Bugfix - Improve web container: [#4942](https://github.com/owncloud/web/pull/4942)

   The wrapping `index.html.ejs` had some minor problems with HTML validators which are now
   fixed.

   https://github.com/owncloud/web/pull/4942

* Bugfix - Display navigation for resolved private link: [#5023](https://github.com/owncloud/web/pull/5023)

   We've fixed that the navigation in the left sidebar is visible for a resolved private link as
   well

   https://github.com/owncloud/web/pull/5023

* Bugfix - Fix z-index on the new file menu: [#5056](https://github.com/owncloud/web/pull/5056)

   Added a z-index to files-view because it prevented the new file menu from having a higher
   z-index than the table headers. As a result the new file menu was being overlapped by them.

   https://github.com/owncloud/web/pull/5056

* Enhancement - Accessibility improvements: [#4965](https://github.com/owncloud/web/pull/4965)

   A lot of random changes: - Extracted some helper classes to ODS & unified their usage - Removed
   `<br>` tags that were incorrectly used for spacing - Used `<h4>` tags for headings in the files
   sidebar - Make skip-to-main button translate-able - Update searchbar label string - Renamed
   "personal files" to "all files" in routes (soft rename, due to changes in the future) - Updated
   ODS to v6.0.3, making row heights theme-able and bringing a more accessible avatar component
   that improves loading of users' profile pictures - Translate quick action labels/tooltips
   properly - Added a note about actions being available above the file list to the live region
   update for selection

   https://github.com/owncloud/web/pull/4965
   https://github.com/owncloud/web/pull/4975
   https://github.com/owncloud/web/pull/5030
   https://github.com/owncloud/web/pull/5088

* Enhancement - Implement proper direct delete: [#4991](https://github.com/owncloud/web/pull/4991)

   We implemented a proper delete action for a single file instead of reusing the batch action for
   deleting multiple files. This also solves the issue with the checkbox being checked when
   opening the delete modal, which was not a11y compliant.

   https://github.com/owncloud/web/pull/4991

* Enhancement - Enable files app search bar to be toggleable on a per-route basis: [#4815](https://github.com/owncloud/web/pull/4815)

   Permits the search bar in the files app to be toggleable on a per-route basis as shown or hidden.

   https://github.com/owncloud/web/pull/4815

* Enhancement - Extension config: [#5024](https://github.com/owncloud/web/pull/5024)

   Loading extension specific config was only possible for file editors. We now also load it in the
   general app information, so that it's available in the `apps` getter of the global vuex store.

   https://github.com/owncloud/web/pull/5024

* Enhancement - Focus management: [#4993](https://github.com/owncloud/web/pull/4993)

   We added a mixin that makes it able to manage, record and reverse-replay the focus for the
   current document. The first components that using it are modal and sidebar in the files app.

   https://github.com/owncloud/web/issues/4992
   https://github.com/owncloud/web/pull/4993

* Enhancement - Align headline hierarchy: [#5003](https://github.com/owncloud/web/issues/5003)

   Streamlined headline tags so that pages have a h1 tag and the headline hierarchy is adhered.

   https://github.com/owncloud/web/issues/5003
   https://github.com/owncloud/web/pull/5004
   https://github.com/owncloud/web/pull/5005

* Enhancement - Lazy file avatar loading: [#5073](https://github.com/owncloud/web/pull/5073)

   We've changed the way how large file lists get rendered. In some cases where we had a long list of
   files, the loading of avatars could lead to long waiting times till the first paint happens.

   Now we first render the list of files, load the associated avatars in the background and then
   update the ui.

   https://github.com/owncloud/web/issues/4973
   https://github.com/owncloud/web/pull/5073

* Enhancement - Use list for displaying added people: [#4915](https://github.com/owncloud/web/pull/4915)

   We've changed the HTML elements in the people accordion when adding new people. People added
   via people autocomplete are now displayed in a list element to use correct structure for screen
   readers.

   https://github.com/owncloud/web/pull/4915

* Enhancement - Use real page title for location picker: [#5009](https://github.com/owncloud/web/pull/5009)

   We've added real page titles to the location picker. The title is consisted of the current
   action, target and product name.

   https://github.com/owncloud/web/pull/5009

* Enhancement - Show search button in search bar: [#4985](https://github.com/owncloud/web/pull/4985)

   https://github.com/owncloud/web/pull/4985

Changelog for ownCloud Web [3.0.0] (2021-04-21)
=======================================
The following sections list the changes in ownCloud web 3.0.0 relevant to
ownCloud admins and users.

[3.0.0]: https://github.com/owncloud/web/compare/v2.1.0...v3.0.0

Summary
-------

* Bugfix - Avatar url without double slash: [#4610](https://github.com/owncloud/web/issues/4610)
* Bugfix - Open mediaviewer for upper case file extensions: [#4647](https://github.com/owncloud/web/issues/4647)
* Bugfix - Only one `<main>` tag per HTML document: [#1652](https://github.com/owncloud/web/issues/1652)
* Bugfix - Parent paths traversal for shares: [#4860](https://github.com/owncloud/web/issues/4860)
* Change - Update owncloud Design System to v6.0.1: [#4940](https://github.com/owncloud/web/pull/4940)
* Change - New files list: [#4627](https://github.com/owncloud/web/pull/4627)
* Enhancement - A11y improvements for files app bar: [#4786](https://github.com/owncloud/web/issues/4786)
* Enhancement - Enable files app search bar to be toggleable on a per-route basis: [#4815](https://github.com/owncloud/web/pull/4815)
* Enhancement - Add web-pkg package: [#4907](https://github.com/owncloud/web/pull/4907)
* Enhancement - Implement live region updates on route changes: [#4812](https://github.com/owncloud/web/pull/4812)
* Enhancement - Use list for displaying added people: [#4915](https://github.com/owncloud/web/pull/4915)
* Enhancement - Runtime theming: [#4822](https://github.com/owncloud/web/pull/4822)
* Enhancement - Add "Shared via link" page: [#4881](https://github.com/owncloud/web/pull/4881)
* Enhancement - Use ODS translations: [#4934](https://github.com/owncloud/web/pull/4934)

Details
-------

* Bugfix - Avatar url without double slash: [#4610](https://github.com/owncloud/web/issues/4610)

   The avatar url added another superfluous slash after the instance url which resulted in the
   avatar not being able to load.

   https://github.com/owncloud/web/issues/4610
   https://github.com/owncloud/web/pull/4849

* Bugfix - Open mediaviewer for upper case file extensions: [#4647](https://github.com/owncloud/web/issues/4647)

   We fixed a bug where the mediaviewer didn't open for files which had an uppercase (or mixed case)
   file extension.

   https://github.com/owncloud/web/issues/4647
   https://github.com/owncloud/web/pull/4627

* Bugfix - Only one `<main>` tag per HTML document: [#1652](https://github.com/owncloud/web/issues/1652)

   Only one `<main>` tag is allowed per HTML document. This change removes the ones in
   `web-container` and `web-runtime` and adds one to each extension (files-list, mediaviewer,
   markdowneditor, drawio) since they can't be loaded at the same time.

   https://github.com/owncloud/web/issues/1652
   https://github.com/owncloud/web/pull/4627

* Bugfix - Parent paths traversal for shares: [#4860](https://github.com/owncloud/web/issues/4860)

   We fixed a bug in parent paths traversals for loading shares. A path with a trailing slash was
   twice in the result of (parent-)paths, leading to fetching the existing shares on the current
   folder twice. Since we fetch incoming and outgoing shares this caused 2 unnecessary requests
   on every page load that changed into a child folder or a folder unrelated to the current path.

   https://github.com/owncloud/web/issues/4860
   https://github.com/owncloud/web/pull/4918

* Change - Update owncloud Design System to v6.0.1: [#4940](https://github.com/owncloud/web/pull/4940)

   - Lots of updates regarding accessibility topics, an updated color palette and custom CSS
   properties to allow for (runtime) theming. - ODS started to use peerDependencies now, we
   adopted this and added the required packages

   https://github.com/owncloud/web/issues/4331
   https://github.com/owncloud/web/pull/4940
   https://github.com/owncloud/web/pull/4925
   https://github.com/owncloud/web/pull/4862
   https://github.com/owncloud/web/pull/4983

* Change - New files list: [#4627](https://github.com/owncloud/web/pull/4627)

   We integrated the new oc-table-files component from our design system. This includes
   breaking changes in how we load resources in our files app. We refactored our files app codebase
   into views, so that only subcomponents live in the components directory.

   https://github.com/owncloud/web/pull/4627

* Enhancement - A11y improvements for files app bar: [#4786](https://github.com/owncloud/web/issues/4786)

   If we select resources in the files list, an action context menu appears, to improve a11y we need
   an aria live region element to announce that.

   https://github.com/owncloud/web/issues/4786
   https://github.com/owncloud/web/pull/4833

* Enhancement - Enable files app search bar to be toggleable on a per-route basis: [#4815](https://github.com/owncloud/web/pull/4815)

   Permits the search bar in the files app to be toggleable on a per-route basis as shown or hidden.

   https://github.com/owncloud/web/pull/4815

* Enhancement - Add web-pkg package: [#4907](https://github.com/owncloud/web/pull/4907)

   We added web-pkg as a new package. It is supposed to be the central location for reuse of generic
   functionality.

   https://github.com/owncloud/web/pull/4907

* Enhancement - Implement live region updates on route changes: [#4812](https://github.com/owncloud/web/pull/4812)

   https://github.com/owncloud/web/issues/4346
   https://github.com/owncloud/web/pull/4812

* Enhancement - Use list for displaying added people: [#4915](https://github.com/owncloud/web/pull/4915)

   We've changed the HTML elements in the people accordion when adding new people. People added
   via people autocomplete are now displayed in a list element to use correct structure for screen
   readers.

   https://github.com/owncloud/web/pull/4915

* Enhancement - Runtime theming: [#4822](https://github.com/owncloud/web/pull/4822)

   It's now possible to specify a custom theme and have logos, brand slogan and colors changed to
   modify the appearance of your ownCloud web frontend.

   https://github.com/owncloud/web/issues/2362
   https://github.com/owncloud/web/pull/4822

* Enhancement - Add "Shared via link" page: [#4881](https://github.com/owncloud/web/pull/4881)

   We've added a new page called "Shared via link". This page displays a files list containing only
   resources shared via public links.

   https://github.com/owncloud/web/pull/4881

* Enhancement - Use ODS translations: [#4934](https://github.com/owncloud/web/pull/4934)

   Some ODS components were using their own translation strings which were available in the ODS
   but not exported there/imported in the web project. Now, we import the translation strings
   from the ODS package and merge them with the web translations.

   https://github.com/owncloud/web/pull/4934

Changelog for ownCloud Web [2.1.0] (2021-03-24)
=======================================
The following sections list the changes in ownCloud web 2.1.0 relevant to
ownCloud admins and users.

[2.1.0]: https://github.com/owncloud/web/compare/v2.0.2...v2.1.0

Summary
-------

* Bugfix - Fix missing translations in application menu: [#4830](https://github.com/owncloud/web/pull/4830)
* Bugfix - NODE_ENV based on rollup mode: [#4819](https://github.com/owncloud/web/issues/4819)
* Bugfix - Remove unsupported shareType: [#4809](https://github.com/owncloud/web/pull/4809)
* Enhancement - A11y improvements for meta attributes: [#4342](https://github.com/owncloud/web/issues/4342)
* Enhancement - Set locale on moment-js to render translated strings: [#4826](https://github.com/owncloud/web/pull/4826)
* Enhancement - Use pre-signed url download for password protected shares: [#38376](https://github.com/owncloud/core/pull/38376)

Details
-------

* Bugfix - Fix missing translations in application menu: [#4830](https://github.com/owncloud/web/pull/4830)

   https://github.com/owncloud/web/pull/4830

* Bugfix - NODE_ENV based on rollup mode: [#4819](https://github.com/owncloud/web/issues/4819)

   The NODE_ENV was set to production by default, now we use development if rollup is started in
   watch mode so that the vue devtools can be used.

   https://github.com/owncloud/web/issues/4819
   https://github.com/owncloud/web/pull/4820

* Bugfix - Remove unsupported shareType: [#4809](https://github.com/owncloud/web/pull/4809)

   We don't support 'userGroup' (originally 'contact', shareType `2`) on the backend side
   anymore, so we delete it on the frontend, too.

   https://github.com/owncloud/web/pull/4809

* Enhancement - A11y improvements for meta attributes: [#4342](https://github.com/owncloud/web/issues/4342)

   For a11y the html language attribute will be set dynamically <html lang="xx"/>. For a11y the
   title will be set automatically following the schema: sub item (e.G file) - route (e.g All
   Files) - general name (e.g ownCloud)

   https://github.com/owncloud/web/issues/4342
   https://github.com/owncloud/web/issues/4338
   https://github.com/owncloud/web/pull/4811

* Enhancement - Set locale on moment-js to render translated strings: [#4826](https://github.com/owncloud/web/pull/4826)

   For i18n purposes we set the moment-js locale to the current selected locale (language) this
   allows us to show translated string for example in the updated column in the All files list
   (web-app-files package)

   https://github.com/owncloud/web/pull/4826

* Enhancement - Use pre-signed url download for password protected shares: [#38376](https://github.com/owncloud/core/pull/38376)

   Replaced the blob download with a normal download using a pre-signed url provided by the
   backend.

   https://github.com/owncloud/core/pull/38376
   https://github.com/owncloud/web/pull/4689

Changelog for ownCloud Web [2.0.2] (2021-03-08)
=======================================
The following sections list the changes in ownCloud web 2.0.2 relevant to
ownCloud admins and users.

[2.0.2]: https://github.com/owncloud/web/compare/v2.0.1...v2.0.2

Summary
-------

* Change - Suppress redirect error during authorization: [#4759](https://github.com/owncloud/web/pull/4759)

Details
-------

* Change - Suppress redirect error during authorization: [#4759](https://github.com/owncloud/web/pull/4759)

   We've suppressed the error appearing in the console which warned about redirect happening
   after the oidc callback page. This error is being shown because after the oidc callback has
   successfully processed the authorization request we are redirecting to the `/` path which
   immediately does another redirect to the extension set as default one. In the context of Vue
   router, this is considered an error even though for us it is a valid use case. The error is only
   informative thus no issue is going to surface if we suppress it. This way we are getting closer to
   a clean console without errors.

   https://github.com/owncloud/web/pull/4759

Changelog for ownCloud Web [2.0.1] (2021-02-18)
=======================================
The following sections list the changes in ownCloud web 2.0.1 relevant to
ownCloud admins and users.

[2.0.1]: https://github.com/owncloud/web/compare/v2.0.0...v2.0.1

Summary
-------

* Bugfix - Fix oc10 deployment after switch to rollup: [#4757](https://github.com/owncloud/web/pull/4757)
* Bugfix - Fix showing white page with no message if the config could not be parsed: [#4636](https://github.com/owncloud/web/issues/4636)
* Bugfix - Allow search in additional share info: [#1656](https://github.com/owncloud/ocis/issues/1656)

Details
-------

* Bugfix - Fix oc10 deployment after switch to rollup: [#4757](https://github.com/owncloud/web/pull/4757)

   Our first release of the oc10 app after the switch to rollup as bundler had a bug as it didn't
   reflect the new folder structure of the app in the allowed folders. This has been fixed by
   updating the allowed folders.

   https://github.com/owncloud/web/pull/4757

* Bugfix - Fix showing white page with no message if the config could not be parsed: [#4636](https://github.com/owncloud/web/issues/4636)

   When the config file could not be parsed because of some mistake in the JSON, an empty page
   without any error message would be shown to the user. We've fixed that behavior and showing now
   an error page and details of the error in the console.

   https://github.com/owncloud/web/issues/4636
   https://github.com/owncloud/web/pull/4749

* Bugfix - Allow search in additional share info: [#1656](https://github.com/owncloud/ocis/issues/1656)

   We fixed that searching for a potential sharee didn't look at the additional share info.

   https://github.com/owncloud/ocis/issues/1656
   https://github.com/owncloud/web/pull/4753

Changelog for ownCloud Web [2.0.0] (2021-02-16)
=======================================
The following sections list the changes in ownCloud web 2.0.0 relevant to
ownCloud admins and users.

[2.0.0]: https://github.com/owncloud/web/compare/v1.0.1...v2.0.0

Summary
-------

* Change - Switch from webpack to rollup: [#4584](https://github.com/owncloud/web/pull/4584)
* Change - Update ODS to 2.1.2: [#4594](https://github.com/owncloud/web/pull/4594)

Details
-------

* Change - Switch from webpack to rollup: [#4584](https://github.com/owncloud/web/pull/4584)

   We replaced the bundler that we used so far (webpack) with rollup and reorganized the project
   structure. This hopefully makes the project structure easier to understand and thus help with
   onboarding. Another improvement is that the overall bundle size is much smaller now.

   https://github.com/owncloud/web/pull/4584

* Change - Update ODS to 2.1.2: [#4594](https://github.com/owncloud/web/pull/4594)

   We updated the ownCloud Design System to 2.1.2. See the linked releases for details.

   https://github.com/owncloud/web/pull/4594
   https://github.com/owncloud/owncloud-design-system/releases/tag/v2.1.0
   https://github.com/owncloud/owncloud-design-system/releases/tag/v2.1.1
   https://github.com/owncloud/owncloud-design-system/releases/tag/v2.1.2

Changelog for ownCloud Web [1.0.1] (2021-01-08)
=======================================
The following sections list the changes in ownCloud web 1.0.1 relevant to
ownCloud admins and users.

[1.0.1]: https://github.com/owncloud/web/compare/v1.0.0...v1.0.1

Summary
-------

* Bugfix - Fully clickable sidebar toggle button: [#4130](https://github.com/owncloud/web/issues/4130)
* Bugfix - Allow server URL without trailing slash: [#4536](https://github.com/owncloud/web/pull/4536)
* Change - Rename confirmation of copy action: [#4590](https://github.com/owncloud/web/pull/4590)
* Change - Allow to disable previews in file lists: [#4513](https://github.com/owncloud/web/pull/4513)
* Change - Add controllers for oc10 app deployment: [#4537](https://github.com/owncloud/web/pull/4537)

Details
-------

* Bugfix - Fully clickable sidebar toggle button: [#4130](https://github.com/owncloud/web/issues/4130)

   The button for hiding/showing the left sidebar (burger menu) was not fully clickable. We fixed
   this by removing a negative margin that pulled the rest of the topbar over the button.

   https://github.com/owncloud/web/issues/4130
   https://github.com/owncloud/web/pull/4572

* Bugfix - Allow server URL without trailing slash: [#4536](https://github.com/owncloud/web/pull/4536)

   The server URL in the config was leading to issues resolving resources when it had no trailing
   slash. We are now checking if the trailing slash is missing and add it upon applying the config if
   needed.

   https://github.com/owncloud/web/pull/4536

* Change - Rename confirmation of copy action: [#4590](https://github.com/owncloud/web/pull/4590)

   We've changed the label of the confirmation button in copy view. Instead of "Copy here", we used
   "Paste here".

   https://github.com/owncloud/web/pull/4590

* Change - Allow to disable previews in file lists: [#4513](https://github.com/owncloud/web/pull/4513)

   We introduced a new config option to disable previews. To do so, set `"disablePreviews": true`
   to the config.json file.

   https://github.com/owncloud/web/pull/4513

* Change - Add controllers for oc10 app deployment: [#4537](https://github.com/owncloud/web/pull/4537)

   We added a config endpoint for when ownCloud Web is deployed as ownCloud 10 app. The config.json
   file must not be placed in the apps folder because it would cause the app integrity check to fail.
   In addition to the config endpoint we added a wildcard endpoint for serving static assets (js
   bundles, css, etc) of the ownCloud Web javascript application by their paths.

   https://github.com/owncloud/web/pull/4537

Changelog for ownCloud Web [1.0.0] (2020-12-16)
=======================================
The following sections list the changes in ownCloud web 1.0.0 relevant to
ownCloud admins and users.

[1.0.0]: https://github.com/owncloud/web/compare/v0.29.0...v1.0.0

Summary
-------

* Bugfix - Do not use origin location to open editors: [#4500](https://github.com/owncloud/web/pull/4500)
* Bugfix - Enable route checks for file actions: [#986](https://github.com/owncloud/ocis/issues/986)
* Bugfix - Fix role selection for public links: [#4504](https://github.com/owncloud/web/pull/4504)
* Bugfix - Fix navigation rendering: [#1031](https://github.com/owncloud/ocis/issues/1031)
* Bugfix - Hide modals on logout: [#1064](https://github.com/owncloud/ocis/issues/1064)
* Enhancement - Add the option to decline accepted shares: [#985](https://github.com/owncloud/ocis/issues/985)
* Enhancement - Show status of accepted shares: [#985](https://github.com/owncloud/ocis/issues/985)
* Enhancement - Add oc10 app build artifact: [#4427](https://github.com/owncloud/web/pull/4427)
* Enhancement - Extend default apps: [#4493](https://github.com/owncloud/web/pull/4493)
* Enhancement - Add custom configuration to the draw.io app: [#4337](https://github.com/owncloud/phoenix/pull/4337)
* Enhancement - Add support for .vsdx files in the draw.io app: [#4337](https://github.com/owncloud/phoenix/pull/4337)
* Enhancement - Position of main dom node: [#1052](https://github.com/owncloud/ocis/issues/1052)
* Enhancement - Wait for all required data: [#884](https://github.com/owncloud/ocis/issues/884)
* Enhancement - Update ODS to 2.0.3: [#4488](https://github.com/owncloud/web/pull/4488)
* Enhancement - Update ODS to 2.0.4: [#45001](https://github.com/owncloud/web/pull/45001)

Details
-------

* Bugfix - Do not use origin location to open editors: [#4500](https://github.com/owncloud/web/pull/4500)

   When opening the editors view in a new tab, we were using the origin of location. This would break
   in case we have Web deployed to a different path than root e.g. `http://owncloud/apps/web`.

   https://github.com/owncloud/web/pull/4500

* Bugfix - Enable route checks for file actions: [#986](https://github.com/owncloud/ocis/issues/986)

   The checks on which route an extension is enabled were not active (and inverted). We fixed this
   so that editors only appear on configured routes now.

   https://github.com/owncloud/ocis/issues/986
   https://github.com/owncloud/web/pull/4436

* Bugfix - Fix role selection for public links: [#4504](https://github.com/owncloud/web/pull/4504)

   The dropdown for the role selection in public links was not working anymore - the model didn't
   react to selections. Fixed it by bringing back a field that was accidentally removed.

   https://github.com/owncloud/web/pull/4504

* Bugfix - Fix navigation rendering: [#1031](https://github.com/owncloud/ocis/issues/1031)

   - ADD_NAV_ITEM mutation now gets copied instead of referenced to trigger a state change. -
   applicationsList navItem item needs a copy instead of mutating the base item - check for
   route.path instead of route name in ADD_NAV_ITEM which can change over time

   https://github.com/owncloud/ocis/issues/1031
   https://github.com/owncloud/ocis/issues/1043
   https://github.com/owncloud/phoenix/pull/4430

* Bugfix - Hide modals on logout: [#1064](https://github.com/owncloud/ocis/issues/1064)

   Hide shown modal if user gets logged out while it's visible

   https://github.com/owncloud/ocis/issues/1064
   https://github.com/owncloud/web/pull/4472

* Enhancement - Add the option to decline accepted shares: [#985](https://github.com/owncloud/ocis/issues/985)

   Declined shares could be accepted retroactively but accepted shares could not be declined.

   https://github.com/owncloud/ocis/issues/985

* Enhancement - Show status of accepted shares: [#985](https://github.com/owncloud/ocis/issues/985)

   The status column of accepted shares was blank.

   https://github.com/owncloud/ocis/issues/985

* Enhancement - Add oc10 app build artifact: [#4427](https://github.com/owncloud/web/pull/4427)

   We've added a build step to the release process which creates an ownCloud Web bundle which can be
   deployed as an app to ownCloud 10.

   https://github.com/owncloud/web/pull/4427

* Enhancement - Extend default apps: [#4493](https://github.com/owncloud/web/pull/4493)

   When release tarballs are created, we are copying the config.json.dist into them as a default
   config. In that file were so far only "files" app enabled. This adds also "media viewer" and
   "draw-io" into apps enabled by default.

   https://github.com/owncloud/web/pull/4493

* Enhancement - Add custom configuration to the draw.io app: [#4337](https://github.com/owncloud/phoenix/pull/4337)

   Added mechanism to specify custom configuration instead of using a hardcoded one. The new
   settings include support for a custom draw.io server, enabling autosave and using a specific
   theme.

   https://github.com/owncloud/phoenix/issues/4328
   https://github.com/owncloud/phoenix/pull/4337

* Enhancement - Add support for .vsdx files in the draw.io app: [#4337](https://github.com/owncloud/phoenix/pull/4337)

   Added the support to open .vsdx files (Microsoft Visio Files) directly from OwnCloud, instead
   of creating a new diagram to import the file from local storage.

   https://github.com/owncloud/phoenix/issues/4327
   https://github.com/owncloud/phoenix/pull/4337

* Enhancement - Position of main dom node: [#1052](https://github.com/owncloud/ocis/issues/1052)

   Div#main is now positioned relative, this way child apps are able to orientate their
   containers absolute to it.

   https://github.com/owncloud/ocis/issues/1052
   https://github.com/owncloud/web/pull/4489
   https://github.com/owncloud/owncloud-design-system/pull/1002

* Enhancement - Wait for all required data: [#884](https://github.com/owncloud/ocis/issues/884)

   Before this we rendered the ui no matter if every required data already is loaded or not. For
   example the current users language from the ocis settings service. One potential problem was
   the flickering in the ui or that the default language was shown before it switches to the
   settings language of current user. Instead we now show a loading screen and wait for everything
   that is required before rendering anything else.

   https://github.com/owncloud/ocis/issues/884
   https://github.com/owncloud/ocis/issues/1043

* Enhancement - Update ODS to 2.0.3: [#4488](https://github.com/owncloud/web/pull/4488)

   We've updated the ownCloud design system to version 2.0.3.

   https://github.com/owncloud/web/pull/4488
   https://github.com/owncloud/owncloud-design-system/releases/tag/v2.0.3

* Enhancement - Update ODS to 2.0.4: [#45001](https://github.com/owncloud/web/pull/45001)

   We've updated the ownCloud design system to version 2.0.4.

   https://github.com/owncloud/web/pull/45001
   https://github.com/owncloud/owncloud-design-system/releases/tag/v2.0.4

Changelog for ownCloud Web [0.29.0] (2020-12-07)
=======================================
The following sections list the changes in ownCloud web 0.29.0 relevant to
ownCloud admins and users.

[0.29.0]: https://github.com/owncloud/web/compare/v0.28.0...v0.29.0

Summary
-------

* Bugfix - Public link glitches: [#1028](https://github.com/owncloud/ocis/issues/1028)
* Change - Use labels to display share info: [#4410](https://github.com/owncloud/web/pull/4410)
* Enhancement - Display full public and private links: [#4410](https://github.com/owncloud/web/pull/4410)

Details
-------

* Bugfix - Public link glitches: [#1028](https://github.com/owncloud/ocis/issues/1028)

   We fixed a couple of glitches with public links: - Creating a folder in a public link context was
   showing an error message although the folder was created correctly. This was happening
   because reloading the current folder didn't take the public link context into account. - For
   public links with editor role the batch actions at the top of the files list were not showing. The
   public links route didn't have a specific flag for showing the batch actions. - Quick actions
   for sharing are not available in public link contexts by design. The check printed an error in
   the javascript console though. We made this check silent now.

   https://github.com/owncloud/ocis/issues/1028
   https://github.com/owncloud/web/pull/4425

* Change - Use labels to display share info: [#4410](https://github.com/owncloud/web/pull/4410)

   We've changed the way of displaying share information for public links and people. Every
   information is now displayed in its own label.

   https://github.com/owncloud/web/pull/4410

* Enhancement - Display full public and private links: [#4410](https://github.com/owncloud/web/pull/4410)

   Below the names of public and private links we've added the respective full URL so that users can
   copy it without the copy to clipboard button.

   https://github.com/owncloud/web/pull/4410

Changelog for ownCloud Web [0.28.0] (2020-12-04)
=======================================
The following sections list the changes in ownCloud web 0.28.0 relevant to
ownCloud admins and users.

[0.28.0]: https://github.com/owncloud/web/compare/v0.27.0...v0.28.0

Summary
-------

* Bugfix - Don't break file/folder names in text editor: [#4391](https://github.com/owncloud/web/pull/4391)
* Change - Configurable home path: [#4411](https://github.com/owncloud/web/pull/4411)
* Change - Show dedicated 404 page for invalid resource references: [#4411](https://github.com/owncloud/web/pull/4411)

Details
-------

* Bugfix - Don't break file/folder names in text editor: [#4391](https://github.com/owncloud/web/pull/4391)

   The label in the text editor that displays the path of the active file was removing the first
   character instead of trimming leading slashes. This might have lead to situations where
   actual characters were removed. We fixed this by only removing leading slashes instead of
   blindly removing the first character.

   https://github.com/owncloud/web/pull/4391

* Change - Configurable home path: [#4411](https://github.com/owncloud/web/pull/4411)

   We introduced a config.json option `homeFolder` which let's you specify a default location
   when opening the `All files` view. Please refer to the documentation for details.

   https://github.com/owncloud/web/pull/4411
   https://owncloud.github.io/clients/web/getting-started/

* Change - Show dedicated 404 page for invalid resource references: [#4411](https://github.com/owncloud/web/pull/4411)

   When visiting a public link or the `All files` page with an invalid resource in the URL (e.g.
   because it was deleted in the meantime) we now show a dedicated page which explains that the
   resource could not be found and offers a link to go back to the respective root (»All files«
   home location or the root of the public link). The breadcrumbs have been made available on
   invalid resources as well, so that those could be used for more precise navigation instead of
   jumping back to the root.

   https://github.com/owncloud/web/pull/4411

Changelog for ownCloud Web [0.27.0] (2020-11-24)
=======================================
The following sections list the changes in ownCloud web 0.27.0 relevant to
ownCloud admins and users.

[0.27.0]: https://github.com/owncloud/web/compare/v0.26.0...v0.27.0

Summary
-------

* Bugfix - Unavailable extensions causing route duplication: [#4382](https://github.com/owncloud/web/pull/4382)
* Change - Configurable default extension: [#4382](https://github.com/owncloud/web/pull/4382)
* Change - Load extensions config: [#4380](https://github.com/owncloud/web/pull/4380)

Details
-------

* Bugfix - Unavailable extensions causing route duplication: [#4382](https://github.com/owncloud/web/pull/4382)

   There was an error in the extension loading handlers which caused routes to be loaded multiple
   times when extensions from the config.json were unavailable. We hardened the extension
   loading handlers to just skip those extensions.

   https://github.com/owncloud/web/pull/4382

* Change - Configurable default extension: [#4382](https://github.com/owncloud/web/pull/4382)

   We introduced a config option in the config.json file which allows to configure the default
   extension for ownCloud Web. Any of the configured extension ids can be chosen as default
   extension. If none is provided, we fall back to the files extension.

   https://github.com/owncloud/web/pull/4382

* Change - Load extensions config: [#4380](https://github.com/owncloud/web/pull/4380)

   We've started loading the config of extensions which can now be defined as an object in the
   `external_apps` in the config.json.

   https://github.com/owncloud/web/pull/4380

Changelog for ownCloud Web [0.26.0] (2020-11-23)
=======================================
The following sections list the changes in ownCloud web 0.26.0 relevant to
ownCloud admins and users.

[0.26.0]: https://github.com/owncloud/web/compare/v0.25.0...v0.26.0

Summary
-------

* Bugfix - Fix edit public link view: [#4374](https://github.com/owncloud/web/pull/4374)
* Bugfix - Icon mappings: [#4357](https://github.com/owncloud/web/pull/4357)
* Enhancement - Use handler of file editors: [#4324](https://github.com/owncloud/web/pull/4324)
* Enhancement - Add custom icons in the new file menu: [#4375](https://github.com/owncloud/web/pull/4375)
* Enhancement - Theme redirect and access denied pages: [#4373](https://github.com/owncloud/web/pull/4373)
* Enhancement - Update ODS to 2.0.0: [#4373](https://github.com/owncloud/web/pull/4373)

Details
-------

* Bugfix - Fix edit public link view: [#4374](https://github.com/owncloud/web/pull/4374)

   We've fixed the issue that edit public link view in the sidebar was overlapping with the
   versions accordion.

   https://github.com/owncloud/web/pull/4374

* Bugfix - Icon mappings: [#4357](https://github.com/owncloud/web/pull/4357)

   The file type icon mappings contained some mappings to non-existing icon files. We fixed
   those.

   https://github.com/owncloud/ocis/issues/905
   https://github.com/owncloud/web/pull/4357

* Enhancement - Use handler of file editors: [#4324](https://github.com/owncloud/web/pull/4324)

   In case the extension is a file editor which defines a custom handler, we are triggering that
   handler instead of trying to open any assigned route.

   https://github.com/owncloud/web/pull/4324

* Enhancement - Add custom icons in the new file menu: [#4375](https://github.com/owncloud/web/pull/4375)

   We've added an option to display own icon in the new file menu.

   https://github.com/owncloud/web/pull/4375

* Enhancement - Theme redirect and access denied pages: [#4373](https://github.com/owncloud/web/pull/4373)

   We've adjusted the theme on OIDC redirect and access denied pages to use correct logo and
   background. We've also added those two values into the theming capabilities.

   https://github.com/owncloud/web/pull/4373

* Enhancement - Update ODS to 2.0.0: [#4373](https://github.com/owncloud/web/pull/4373)

   We've updated the ownCloud design system to version 2.0.0.

   https://github.com/owncloud/web/pull/4373
   https://github.com/owncloud/owncloud-design-system/releases/tag/v2.0.0

Changelog for ownCloud Web [0.25.0] (2020-11-16)
=======================================
The following sections list the changes in ownCloud web 0.25.0 relevant to
ownCloud admins and users.

[0.25.0]: https://github.com/owncloud/web/compare/v0.24.0...v0.25.0

Summary
-------

* Bugfix - Make available file actions (more) aware of the page context: [#4255](https://github.com/owncloud/web/pull/4255)
* Bugfix - Fix loginAsUser: [#4297](https://github.com/owncloud/web/pull/4297)
* Change - File actions as accordion item in right sidebar: [#4255](https://github.com/owncloud/web/pull/4255)
* Enhancement - Added support for OpenID Connect Dynamic Client Registration 1.0: [#4286](https://github.com/owncloud/web/pull/4286)

Details
-------

* Bugfix - Make available file actions (more) aware of the page context: [#4255](https://github.com/owncloud/web/pull/4255)

   The list of available file actions sometimes contained actions which should not be possible
   and sometimes was missing actions that should be possible. Most important examples are that
   copy/move should not be available on `shared with me` and `shared with others` pages (but they
   were) and that the set of file actions from the `All files` page should also be available for the
   favorites page (but were not).

   https://github.com/owncloud/web/pull/4255

* Bugfix - Fix loginAsUser: [#4297](https://github.com/owncloud/web/pull/4297)

   LoginAsUser wasn't waiting until the loading finished. Added an additional check

   https://github.com/owncloud/web/pull/4297

* Change - File actions as accordion item in right sidebar: [#4255](https://github.com/owncloud/web/pull/4255)

   We moved the menu items from `file actions` dropdown menu (the "three dots menu") as accordion
   item into the right sidebar and made it the default item to be opened when clicking the three
   dots. For the sake of consistency we now also made the right sidebar available for the `Deleted
   files` page, where we offer the actions accordion item with a `Restore` and `Delete` action.

   https://github.com/owncloud/web/pull/4255

* Enhancement - Added support for OpenID Connect Dynamic Client Registration 1.0: [#4286](https://github.com/owncloud/web/pull/4286)

   OwnCloud Web can use the dynamic client registration protocol to exchange client id and client
   secret with the IdP

   https://github.com/owncloud/web/pull/4286
   https://github.com/owncloud/web/pull/4306

Changelog for ownCloud Web [0.24.0] (2020-11-06)
=======================================
The following sections list the changes in ownCloud web 0.24.0 relevant to
ownCloud admins and users.

[0.24.0]: https://github.com/owncloud/web/compare/v0.23.0...v0.24.0

Summary
-------

* Bugfix - Fix browse to files page in the ui tests: [#4281](https://github.com/owncloud/web/issues/4281)
* Enhancement - Display collaborators type: [#4203](https://github.com/owncloud/web/pull/4203)

Details
-------

* Bugfix - Fix browse to files page in the ui tests: [#4281](https://github.com/owncloud/web/issues/4281)

   When the ui tests where executing the "the user has browsed to the files page" step then it
   wouldn't wait until the files were loaded.

   https://github.com/owncloud/web/issues/4281

* Enhancement - Display collaborators type: [#4203](https://github.com/owncloud/web/pull/4203)

   We've added a new line into the collaborators autocomplete and list in the sidebar to display
   their type.

   https://github.com/owncloud/web/pull/4203

Changelog for ownCloud Web [0.23.0] (2020-10-30)
=======================================
The following sections list the changes in ownCloud web 0.23.0 relevant to
ownCloud admins and users.

[0.23.0]: https://github.com/owncloud/web/compare/v0.22.0...v0.23.0

Summary
-------

* Change - App sidebar accordion instead of tabs: [#4249](https://github.com/owncloud/web/pull/4249)

Details
-------

* Change - App sidebar accordion instead of tabs: [#4249](https://github.com/owncloud/web/pull/4249)

   We replaced the tabs in the right app-sidebar with an accordion.

   https://github.com/owncloud/web/pull/4249

Changelog for ownCloud Web [0.22.0] (2020-10-26)
=======================================
The following sections list the changes in ownCloud web 0.22.0 relevant to
ownCloud admins and users.

[0.22.0]: https://github.com/owncloud/web/compare/v0.21.0...v0.22.0

Summary
-------

* Change - Set icon for unknown file types to "file": [#4237](https://github.com/owncloud/web/pull/4237)
* Change - Attach share permission to roles: [#4216](https://github.com/owncloud/web/pull/4216)
* Change - Update ODS to v1.12.2: [#4239](https://github.com/owncloud/web/pull/4239)
* Enhancement - Auto-close alerts: [#4236](https://github.com/owncloud/web/pull/4236)

Details
-------

* Change - Set icon for unknown file types to "file": [#4237](https://github.com/owncloud/web/pull/4237)

   We've changed the icon for unknown file types to "file".

   https://github.com/owncloud/web/pull/4237
   https://owncloud.design/#/Design%20Tokens/Icon

* Change - Attach share permission to roles: [#4216](https://github.com/owncloud/web/pull/4216)

   We've attached the share permission of collaborators to roles. There is no longer a share
   additional permission.

   https://github.com/owncloud/web/pull/4216

* Change - Update ODS to v1.12.2: [#4239](https://github.com/owncloud/web/pull/4239)

   We updated ODS to v1.12.2. Please refer to the changelog of ODS.

   https://github.com/owncloud/web/pull/4239
   https://github.com/owncloud/owncloud-design-system/releases/tag/v1.12.2

* Enhancement - Auto-close alerts: [#4236](https://github.com/owncloud/web/pull/4236)

   We've added a property which enables alerts to be automatically closed. When enabling the
   auto-close, it will get assigned timeout of 5 seconds. Default timeout can be overwritten
   inside of the `autoClose` object.

   https://github.com/owncloud/web/pull/4236

Changelog for ownCloud Web [0.21.0] (2020-10-21)
=======================================
The following sections list the changes in ownCloud web 0.21.0 relevant to
ownCloud admins and users.

[0.21.0]: https://github.com/owncloud/web/compare/v0.20.0...v0.21.0

Summary
-------

* Bugfix - OIDC logout: [#266](https://github.com/owncloud/product/issues/266)
* Bugfix - Do not display "empty folder" message when there is any content: [#263](https://github.com/owncloud/product/issues/263)
* Change - Sensible default apps in example configs: [#4155](https://github.com/owncloud/web/pull/4155)

Details
-------

* Bugfix - OIDC logout: [#266](https://github.com/owncloud/product/issues/266)

   We've fixed the bug that the user sometimes got immediately logged back into the web UI after
   clicking on logout.

   https://github.com/owncloud/product/issues/266
   https://github.com/owncloud/web/pull/4211

* Bugfix - Do not display "empty folder" message when there is any content: [#263](https://github.com/owncloud/product/issues/263)

   We've fixed that when some of the file/share lists were being loaded, the "empty folder"
   message sometimes briefly appeared even though the list wasn't empty.

   https://github.com/owncloud/product/issues/263
   https://github.com/owncloud/web/pull/4162

* Change - Sensible default apps in example configs: [#4155](https://github.com/owncloud/web/pull/4155)

   We adapted the example configs for oc10 and owncloud so that the files and media-viewer apps are
   enabled by default.

   https://github.com/owncloud/web/pull/4155

Changelog for ownCloud Web [0.20.0] (2020-10-08)
=======================================
The following sections list the changes in ownCloud web 0.20.0 relevant to
ownCloud admins and users.

[0.20.0]: https://github.com/owncloud/web/compare/v0.19.0...v0.20.0

Summary
-------

* Change - Enable autoredirect to the IdP: [#4138](https://github.com/owncloud/web/pull/4138)

Details
-------

* Change - Enable autoredirect to the IdP: [#4138](https://github.com/owncloud/web/pull/4138)

   We've added a key into the theme to enable autoredirect to the IdP when entering ocis-web
   instead of displaying the login page first. The default value is set to true.

   https://github.com/owncloud/web/pull/4138

Changelog for ownCloud Web [0.19.0] (2020-10-06)
=======================================
The following sections list the changes in ownCloud web 0.19.0 relevant to
ownCloud admins and users.

[0.19.0]: https://github.com/owncloud/web/compare/v0.18.0...v0.19.0

Summary
-------

* Change - Customizable menu association: [#4133](https://github.com/owncloud/web/pull/4133)

Details
-------

* Change - Customizable menu association: [#4133](https://github.com/owncloud/web/pull/4133)

   We now allow the redirect navItems and links into the user menu. This can be done by simply
   assigning the `"menu": "user"` to the respective navItem. It works for both extensions and
   external links (`applications` key in config.json).

   https://github.com/owncloud/web/pull/4133

Changelog for ownCloud Web [0.18.0] (2020-10-05)
=======================================
The following sections list the changes in ownCloud web 0.18.0 relevant to
ownCloud admins and users.

[0.18.0]: https://github.com/owncloud/web/compare/v0.17.0...v0.18.0

Summary
-------

* Change - Change sharing wording: [#4120](https://github.com/owncloud/web/pull/4120)
* Enhancement - Update owncloud-design-system to v1.12.1: [#4120](https://github.com/owncloud/web/pull/4120)

Details
-------

* Change - Change sharing wording: [#4120](https://github.com/owncloud/web/pull/4120)

   Renamed "Share" action to "Add people" and header column in the shared with list from "People"
   to "Shared with".

   https://github.com/owncloud/web/pull/4120

* Enhancement - Update owncloud-design-system to v1.12.1: [#4120](https://github.com/owncloud/web/pull/4120)

   We've updated our design system to version 1.12.1. To see all new changes which this update
   brings, please check the changelog below.

   https://github.com/owncloud/web/pull/4120
   https://github.com/owncloud/owncloud-design-system/releases/tag/v1.12.1

Changelog for ownCloud Web [0.17.0] (2020-09-25)
=======================================
The following sections list the changes in ownCloud web 0.17.0 relevant to
ownCloud admins and users.

[0.17.0]: https://github.com/owncloud/web/compare/v0.16.0...v0.17.0

Summary
-------

* Bugfix - Added missing tooltips: [#4081](https://github.com/owncloud/web/pull/4081)
* Bugfix - Make file previews properly fit: [#232](https://github.com/owncloud/product/issues/232)
* Bugfix - Adjust behavior of public link password field: [#4077](https://github.com/owncloud/web/pull/4077)
* Change - Adjustments to roles selection dropdown: [#4080](https://github.com/owncloud/web/pull/4080)
* Change - Rename "trash bin" to "deleted files": [#4071](https://github.com/owncloud/web/pull/4071)
* Change - Add default action to click on file name: [#234](https://github.com/owncloud/product/issues/234)
* Change - Improve external links in app switcher: [#4092](https://github.com/owncloud/web/pull/4092)
* Change - More descriptive loading state: [#4099](https://github.com/owncloud/web/pull/4099)
* Change - Moved bottom actions menu into actions dropdown: [#234](https://github.com/owncloud/product/issues/234)
* Change - Renamed collaborators to people: [#4070](https://github.com/owncloud/web/pull/4070)
* Change - Update ODS to 1.11.0: [#4086](https://github.com/owncloud/web/pull/4086)
* Change - Shortened button label for creating public links: [#4072](https://github.com/owncloud/web/pull/4072)
* Enhancement - Remember public link password on page refresh: [#4083](https://github.com/owncloud/web/pull/4083)

Details
-------

* Bugfix - Added missing tooltips: [#4081](https://github.com/owncloud/web/pull/4081)

   We've added tooltips for the following:

   - top bar: notifications button and application switcher - file list: share indicators and
   quick actions - sharing in sidebar: action icons like edit, delete, copy

   https://github.com/owncloud/product/issues/231
   https://github.com/owncloud/web/pull/4081

* Bugfix - Make file previews properly fit: [#232](https://github.com/owncloud/product/issues/232)

   We've fixed the file preview to prevent overflowing vertically and also added CSS property to
   make sure the ratio is preserved

   https://github.com/owncloud/product/issues/232
   https://github.com/owncloud/web/pull/4073

* Bugfix - Adjust behavior of public link password field: [#4077](https://github.com/owncloud/web/pull/4077)

   The UX of the public link password field has been improved. The field is focussed automatically
   and the enter key submits the password. Also, in case of wrong password, an error message is now
   displayed.

   https://github.com/owncloud/product/issues/231
   https://github.com/owncloud/web/pull/4077

* Change - Adjustments to roles selection dropdown: [#4080](https://github.com/owncloud/web/pull/4080)

   The role description text from the roles selection button has been removed, but is still
   visible when opening the dropdown. The dropdown now also has a chevron icon to make it clearer
   that it is a dropdown.

   https://github.com/owncloud/product/issues/231
   https://github.com/owncloud/web/pull/4080

* Change - Rename "trash bin" to "deleted files": [#4071](https://github.com/owncloud/web/pull/4071)

   We've renamed the "trash bin" to the more appropriate wording "deleted files".

   https://github.com/owncloud/product/issues/231
   https://github.com/owncloud/web/pull/4071

* Change - Add default action to click on file name: [#234](https://github.com/owncloud/product/issues/234)

   When clicking on the file name in the files list, a default action is triggered which opens the
   first available file editor or viewer. If no file editor or viewer is available, the default
   action falls back to download.

   https://github.com/owncloud/product/issues/234
   https://github.com/owncloud/web/pull/4076
   https://github.com/owncloud/web/pull/4097

* Change - Improve external links in app switcher: [#4092](https://github.com/owncloud/web/pull/4092)

   We have added an option to set the link target in external application links (defaults to
   `_blank`). The app switcher now shows all native extensions first and items based on
   application links last.

   https://github.com/owncloud/web/pull/4092

* Change - More descriptive loading state: [#4099](https://github.com/owncloud/web/pull/4099)

   When browsing the different variations of the files list we removed the loader component at the
   top in favor of a spinner in the center of the viewport. The spinner has one line of text which
   describes what kind of data is being loaded.

   https://github.com/owncloud/web/pull/4099

* Change - Moved bottom actions menu into actions dropdown: [#234](https://github.com/owncloud/product/issues/234)

   We've removed the bottom file actions menu and moved all actions into the actions dropdown in
   the files list.

   https://github.com/owncloud/product/issues/234
   https://github.com/owncloud/web/pull/4076

* Change - Renamed collaborators to people: [#4070](https://github.com/owncloud/web/pull/4070)

   All visible occurrences of "collaborator" or "collaborators" have been replaced by "person"
   or "people" respectively. Additionally, the action "Add Collaborator" was changed to
   "Share".

   https://github.com/owncloud/product/issues/231
   https://github.com/owncloud/web/pull/4070

* Change - Update ODS to 1.11.0: [#4086](https://github.com/owncloud/web/pull/4086)

   We updated owncloud design system (ODS) to 1.11.0. This brings some features and required some
   changes: - Buttons: - require to be placed in a grid or with uk-flex for side by side positioning,
   - don't have an icon property anymore, - have a slot so that content of the button can be just
   anything - placement of the content in the button can be modified with new props
   `justify-content` and `gap` - new icons, which are used in the sidebar and for quick actions -
   sidebar has a property for hiding the navigation. It doesn't have internal logic anymore for
   hiding the navigation automatically.

   https://github.com/owncloud/web/pull/4086

* Change - Shortened button label for creating public links: [#4072](https://github.com/owncloud/web/pull/4072)

   The label of the button for creating public links in the links panel has been shortened to
   "Public link" instead of "Add public link" since the plus sign already implies adding. An Aria
   label has been added for clarification when using screen readers.

   https://github.com/owncloud/web/issues/231
   https://github.com/owncloud/web/pull/4072

* Enhancement - Remember public link password on page refresh: [#4083](https://github.com/owncloud/web/pull/4083)

   When refreshing the page in the file list of a public link share, the user doesn't need to enter
   the password again. This only applies for the current page and the password is forgotten by the
   browser again upon closing or switching to another site.

   https://github.com/owncloud/product/issues/231
   https://github.com/owncloud/web/pull/4083

Changelog for ownCloud Web [0.16.0] (2020-08-24)
=======================================
The following sections list the changes in ownCloud web 0.16.0 relevant to
ownCloud admins and users.

[0.16.0]: https://github.com/owncloud/web/compare/v0.15.0...v0.16.0

Summary
-------

* Change - Add default external apps for ocis: [#3967](https://github.com/owncloud/web/pull/3967)
* Enhancement - Add info about number of selected items and their size: [#122](https://github.com/owncloud/product/issues/122)

Details
-------

* Change - Add default external apps for ocis: [#3967](https://github.com/owncloud/web/pull/3967)

   We are enabling the settings-ui and accounts-ui by default now for ocis.

   https://github.com/owncloud/web/pull/3967

* Enhancement - Add info about number of selected items and their size: [#122](https://github.com/owncloud/product/issues/122)

   We've added information about the number of selected items and their size above the files list
   next to batch actions.

   https://github.com/owncloud/product/issues/122
   https://github.com/owncloud/web/pull/3850

Changelog for ownCloud Web [0.15.0] (2020-08-19)
=======================================
The following sections list the changes in ownCloud web 0.15.0 relevant to
ownCloud admins and users.

[0.15.0]: https://github.com/owncloud/web/compare/v0.14.0...v0.15.0

Summary
-------

* Change - Adapt to new ocis-settings data model: [#3806](https://github.com/owncloud/web/pull/3806)

Details
-------

* Change - Adapt to new ocis-settings data model: [#3806](https://github.com/owncloud/web/pull/3806)

   Ocis-settings introduced UUIDs and less verbose endpoint and message type names. This PR
   adjusts web accordingly.

   https://github.com/owncloud/web/pull/3806
   https://github.com/owncloud/owncloud-sdk/pull/520
   https://github.com/owncloud/ocis-settings/pull/46

Changelog for ownCloud Web [0.14.0] (2020-08-17)
=======================================
The following sections list the changes in ownCloud web 0.14.0 relevant to
ownCloud admins and users.

[0.14.0]: https://github.com/owncloud/web/compare/v0.13.0...v0.14.0

Summary
-------

* Bugfix - Fix display name when using oCIS as backend: [#3938](https://github.com/owncloud/web/pull/3938)
* Change - Differentiate between user-id and username: [#440](https://github.com/owncloud/ocis/issues/440)
* Change - Provide option for hiding the search bar: [#116](https://github.com/owncloud/product/issues/116)
* Change - Move information about current folder below the files list: [#120](https://github.com/owncloud/product/issues/120)
* Change - Use pre-signed URLs in media viewer: [#3803](https://github.com/owncloud/web/pull/3803)
* Change - Move quota indication to the left sidebar: [#121](https://github.com/owncloud/product/issues/121)
* Change - Move docs about hugo usage to ocis: [#3828](https://github.com/owncloud/web/pull/3828)
* Change - Get rid of static "Shared with:" label: [#123](https://github.com/owncloud/product/issues/123)
* Change - Large file downloads support with URL signing: [#3797](https://github.com/owncloud/web/pull/3797)
* Enhancement - Enable playing videos in media viewer: [#3803](https://github.com/owncloud/web/pull/3803)

Details
-------

* Bugfix - Fix display name when using oCIS as backend: [#3938](https://github.com/owncloud/web/pull/3938)

   We've fixed the display name when running ocis-web with oCIS as backend. The display name is now
   again displayed in the top bar and in the account page.

   https://github.com/owncloud/web/pull/3938

* Change - Differentiate between user-id and username: [#440](https://github.com/owncloud/ocis/issues/440)

   With oCIS user-id and username are not the same as is the case in ownCloud 10. We've started
   differentiating between them to correctly display all information in the accounts page. If
   the username is not available (oC10), we fall back to using user-id as the username.

   https://github.com/owncloud/ocis/issues/440
   https://github.com/owncloud/web/pull/3938

* Change - Provide option for hiding the search bar: [#116](https://github.com/owncloud/product/issues/116)

   We introduced a new `options.hideSearchBar` config variable which can be used to disable the
   search bar entirely.

   https://github.com/owncloud/product/issues/116
   https://github.com/owncloud/web/pull/3817

* Change - Move information about current folder below the files list: [#120](https://github.com/owncloud/product/issues/120)

   We've moved the information about current folder directly below the files list. Previously
   this information was always displayed on the bottom of the screen.

   https://github.com/owncloud/product/issues/120
   https://github.com/owncloud/web/pull/3849

* Change - Use pre-signed URLs in media viewer: [#3803](https://github.com/owncloud/web/pull/3803)

   We've started using pre-signed URLs if supported in media viewer to display images instead of
   fetching them.

   https://github.com/owncloud/web/pull/3803
   https://github.com/owncloud/web/pull/3844

* Change - Move quota indication to the left sidebar: [#121](https://github.com/owncloud/product/issues/121)

   We've moved the quota indication from the bottom of the files list to the footer of the left
   sidebar.

   https://github.com/owncloud/product/issues/121
   https://github.com/owncloud/web/pull/3849

* Change - Move docs about hugo usage to ocis: [#3828](https://github.com/owncloud/web/pull/3828)

   Since our documentation about how to work with hugo (for documentation) is a cross-extension
   topic, we have moved it to our main ocis docs.

   https://github.com/owncloud/web/pull/3828

* Change - Get rid of static "Shared with:" label: [#123](https://github.com/owncloud/product/issues/123)

   We removed the static "Shared with:" text label in the indicator row of file items. From now on,
   if a file item has no indicators, it will fall back to the one-row layout (resource name
   vertically centered).

   https://github.com/owncloud/product/issues/123
   https://github.com/owncloud/web/pull/3808

* Change - Large file downloads support with URL signing: [#3797](https://github.com/owncloud/web/pull/3797)

   When the backend supports URL signing we now download with a signed url instead of downloading
   as BLOB.

   https://github.com/owncloud/web/pull/3797

* Enhancement - Enable playing videos in media viewer: [#3803](https://github.com/owncloud/web/pull/3803)

   We've added a capability to the media viewer extension to play videos.

   https://github.com/owncloud/web/pull/3803
   https://github.com/owncloud/web/pull/3833
   https://github.com/owncloud/web/pull/3844
   https://github.com/owncloud/web/pull/3848

Changelog for ownCloud Web [0.13.0] (2020-07-17)
=======================================
The following sections list the changes in ownCloud web 0.13.0 relevant to
ownCloud admins and users.

[0.13.0]: https://github.com/owncloud/web/compare/v0.12.0...v0.13.0

Summary
-------

* Bugfix - Fix translations string: [#3766](https://github.com/owncloud/web/pull/3766)
* Enhancement - Add dev docs for releases: [#3186](https://github.com/owncloud/web/pull/3186)
* Enhancement - Enable changing sidebar logo via theming: [#3782](https://github.com/owncloud/web/issues/3782)

Details
-------

* Bugfix - Fix translations string: [#3766](https://github.com/owncloud/web/pull/3766)

   Allow better translations of various strings.

   https://github.com/owncloud/web/pull/3766
   https://github.com/owncloud/web/pull/3769

* Enhancement - Add dev docs for releases: [#3186](https://github.com/owncloud/web/pull/3186)

   We added documentation on the steps involved to release web.

   https://github.com/owncloud/web/pull/3186
   https://github.com/owncloud/web/pull/3767

* Enhancement - Enable changing sidebar logo via theming: [#3782](https://github.com/owncloud/web/issues/3782)

   We've added a key into the theme which enables using different logo in the sidebar.

   https://github.com/owncloud/web/issues/3782
   https://github.com/owncloud/web/pull/3783

Changelog for ownCloud Web [0.12.0] (2020-07-10)
=======================================
The following sections list the changes in ownCloud web 0.12.0 relevant to
ownCloud admins and users.

[0.12.0]: https://github.com/owncloud/web/compare/v0.11.2...v0.12.0

Summary
-------

* Bugfix - Fix navigation to the root folder from location picker: [#3756](https://github.com/owncloud/web/pull/3756)
* Change - Don't fallback to appId in case the route of file action is not defined: [#69](https://github.com/owncloud/product/issues/69)
* Change - Do not display outline when the files list is focused: [#3747](https://github.com/owncloud/web/issues/3747)
* Change - No file drop if upload is not allowed or no space is left: [#3677](https://github.com/owncloud/web/pull/3677)
* Enhancement - Add ability to copy files and folders into a different location: [#102](https://github.com/owncloud/product/issues/102)
* Enhancement - Add favorites capabilities: [#354](https://github.com/owncloud/ocis/issues/354)
* Enhancement - Add ability to move files and folders into a different location: [#101](https://github.com/owncloud/product/issues/101)

Details
-------

* Bugfix - Fix navigation to the root folder from location picker: [#3756](https://github.com/owncloud/web/pull/3756)

   The target location in the location picker was appending a whitespace when trying to go to root
   folder. This resulted in an error when trying to load such folder. We've removed the whitespace
   to fix the navigation.

   https://github.com/owncloud/web/pull/3756

* Change - Don't fallback to appId in case the route of file action is not defined: [#69](https://github.com/owncloud/product/issues/69)

   When opening a file in a editor or a viewer the path was falling back to an appId. This made it
   impossible to navigate via the file actions into an app which doesn't have duplicate appId in
   the route. We've stopped falling back to this value and in case that the route of the file action
   is not defined, we use the root path of the app.

   https://github.com/owncloud/product/issues/69
   https://github.com/owncloud/ocis/issues/356
   https://github.com/owncloud/web/pull/3740

* Change - Do not display outline when the files list is focused: [#3747](https://github.com/owncloud/web/issues/3747)

   The files list was displaying outline when it received focus after a click. Since the focus is
   meant only programmatically, the outline was not supposed to be displayed.

   https://github.com/owncloud/web/issues/3747
   https://github.com/owncloud/web/issues/3551
   https://github.com/owncloud/web/pull/3752

* Change - No file drop if upload is not allowed or no space is left: [#3677](https://github.com/owncloud/web/pull/3677)

   https://github.com/owncloud/web/pull/3677

* Enhancement - Add ability to copy files and folders into a different location: [#102](https://github.com/owncloud/product/issues/102)

   We've added copy action to the files list. The copy action is executed via a new page called
   location picker.

   https://github.com/owncloud/product/issues/102
   https://github.com/owncloud/product/issues/108
   https://github.com/owncloud/web/pull/3749

* Enhancement - Add favorites capabilities: [#354](https://github.com/owncloud/ocis/issues/354)

   We've added a check of favorites capabilities to enable disabling of favorites list and
   favorite action.

   https://github.com/owncloud/ocis/issues/354
   https://github.com/owncloud/web/pull/3754

* Enhancement - Add ability to move files and folders into a different location: [#101](https://github.com/owncloud/product/issues/101)

   We've added move action to the files list which enables move of resources into different
   locations. The move operation is executed in a new page called Location picker.

   https://github.com/owncloud/product/issues/101
   https://github.com/owncloud/web/pull/3739

Changelog for ownCloud Web [0.11.2] (2020-07-03)
=======================================
The following sections list the changes in ownCloud web 0.11.2 relevant to
ownCloud admins and users.

[0.11.2]: https://github.com/owncloud/web/compare/v0.11.1...v0.11.2

Summary
-------

* Bugfix - Remove anchor on last breadcrumb segment: [#3722](https://github.com/owncloud/web/issues/3722)

Details
-------

* Bugfix - Remove anchor on last breadcrumb segment: [#3722](https://github.com/owncloud/web/issues/3722)

   The last segment of the breadcrumb was clickable, while it's expected that nothing happens (as
   it is the current path). We fixed that, the last breadcrumb element is not clickable anymore.

   https://github.com/owncloud/web/issues/3722
   https://github.com/owncloud/web/issues/2965
   https://github.com/owncloud/web/issues/1883
   https://github.com/owncloud/web/pull/3723

Changelog for ownCloud Web [0.11.1] (2020-06-29)
=======================================
The following sections list the changes in ownCloud web 0.11.1 relevant to
ownCloud admins and users.

[0.11.1]: https://github.com/owncloud/web/compare/v0.11.0...v0.11.1

Summary
-------

* Bugfix - Public upload now keeps modified time: [#3686](https://github.com/owncloud/web/pull/3686)
* Bugfix - Do not expand the width of resource name over it's content: [#3685](https://github.com/owncloud/web/issues/3685)
* Change - Use "Shared with" as a label for indicators: [#3688](https://github.com/owncloud/web/pull/3688)
* Enhancement - Update owncloud-sdk to 1.0.0-663: [#3690](https://github.com/owncloud/web/pull/3690)

Details
-------

* Bugfix - Public upload now keeps modified time: [#3686](https://github.com/owncloud/web/pull/3686)

   The public upload for public links now keeps the modification time of local files. This aligns
   the behavior with non-public file upload.

   https://github.com/owncloud/web/pull/3686

* Bugfix - Do not expand the width of resource name over it's content: [#3685](https://github.com/owncloud/web/issues/3685)

   The width of the resource name in the files list was expanded more than the actual width of it's
   content. This caused that when clicked outside of the resource name, the action to navigate or
   open the resource has been triggered instead of opening the sidebar. We've fixed the width that
   it is now equal to the width of the content.

   https://github.com/owncloud/web/issues/3685
   https://github.com/owncloud/web/pull/3687

* Change - Use "Shared with" as a label for indicators: [#3688](https://github.com/owncloud/web/pull/3688)

   Instead of "State" we've started using the "Shared with" as a label for the indicators in the
   files list. This is only intermediate solution because the indicators can be extended by other
   indicators which don't have to be related to sharing.

   https://github.com/owncloud/web/pull/3688

* Enhancement - Update owncloud-sdk to 1.0.0-663: [#3690](https://github.com/owncloud/web/pull/3690)

   We've updated the owncloud-sdk to version 1.0.0-663. This version stops rejecting sharing
   promises if the passed shareID is not an integer.

   https://github.com/owncloud/web/pull/3690

Changelog for ownCloud Web [0.11.0] (2020-06-26)
=======================================
The following sections list the changes in ownCloud web 0.11.0 relevant to
ownCloud admins and users.

[0.11.0]: https://github.com/owncloud/web/compare/v0.10.0...v0.11.0

Summary
-------

* Bugfix - Fix file type icons for uppercase file extensions: [#3670](https://github.com/owncloud/web/pull/3670)
* Bugfix - Fix empty settings values: [#3602](https://github.com/owncloud/web/pull/3602)
* Bugfix - Set default permissions to public link quick action: [#3675](https://github.com/owncloud/web/issues/3675)
* Bugfix - Set empty object when resetting current sidebar tab: [#3676](https://github.com/owncloud/web/issues/3676)
* Bugfix - Set expiration date only if it is supported: [#3674](https://github.com/owncloud/web/issues/3674)
* Bugfix - Add missing question mark to delete confirmation dialog in trashbin: [#3566](https://github.com/owncloud/web/pull/3566)
* Change - Bring new modal component: [#2263](https://github.com/owncloud/web/issues/2263)
* Change - Move create new button: [#3622](https://github.com/owncloud/web/pull/3622)
* Change - Move status indicators under the resource name: [#3617](https://github.com/owncloud/web/pull/3617)
* Change - Remove sidebar quickAccess: [#80](https://github.com/owncloud/product/issues/80)
* Change - Rework account dropdown: [#82](https://github.com/owncloud/product/issues/82)
* Change - Unite files list status indicators: [#3567](https://github.com/owncloud/web/pull/3567)
* Change - Use correct logo: [#786](https://github.com/owncloud/owncloud-design-system/issues/786)
* Enhancement - Send mtime with uploads: [#2969](https://github.com/owncloud/web/issues/2969)
* Enhancement - Use TUS settings from capabilities: [#177](https://github.com/owncloud/ocis-reva/issues/177)
* Enhancement - Add collaborators quick action: [#3573](https://github.com/owncloud/web/pull/3573)
* Enhancement - Dynamically loaded nav items: [#3497](https://github.com/owncloud/web/issues/3497)
* Enhancement - Load and display quick actions: [#3573](https://github.com/owncloud/web/pull/3573)

Details
-------

* Bugfix - Fix file type icons for uppercase file extensions: [#3670](https://github.com/owncloud/web/pull/3670)

   https://github.com/owncloud/web/pull/3670

* Bugfix - Fix empty settings values: [#3602](https://github.com/owncloud/web/pull/3602)

   We've updated owncloud-sdk to version 1.0.0-638 which makes sure that an empty array gets
   returned whenever there are no settings values for the authenticated user. Previously having
   no settings values broke our detection of whether settings values finished loading.

   https://github.com/owncloud/ocis-settings/issues/24
   https://github.com/owncloud/web/pull/3602

* Bugfix - Set default permissions to public link quick action: [#3675](https://github.com/owncloud/web/issues/3675)

   We've set a default permissions when creating a new public link via the quick actions. The
   permissions are set to `1`.

   https://github.com/owncloud/web/issues/3675
   https://github.com/owncloud/web/pull/3678

* Bugfix - Set empty object when resetting current sidebar tab: [#3676](https://github.com/owncloud/web/issues/3676)

   We've changed the argument from `null` to an empty object when resetting the current tab of the
   sidebar.

   https://github.com/owncloud/web/issues/3676
   https://github.com/owncloud/web/pull/3678

* Bugfix - Set expiration date only if it is supported: [#3674](https://github.com/owncloud/web/issues/3674)

   We've stopped setting expiration date in collaborators panel if it is not supported.

   https://github.com/owncloud/web/issues/3674
   https://github.com/owncloud/web/pull/3679

* Bugfix - Add missing question mark to delete confirmation dialog in trashbin: [#3566](https://github.com/owncloud/web/pull/3566)

   We've added missing question mark to the delete confirmation dialog inside of the trashbin.

   https://github.com/owncloud/web/pull/3566

* Change - Bring new modal component: [#2263](https://github.com/owncloud/web/issues/2263)

   We've updated our modal component with a new one coming from ODS.

   https://github.com/owncloud/web/issues/2263
   https://github.com/owncloud/web/pull/3378

* Change - Move create new button: [#3622](https://github.com/owncloud/web/pull/3622)

   We've moved the create new button in the files app bar to the left directly next to breadcrumbs.

   https://github.com/owncloud/web/pull/3622

* Change - Move status indicators under the resource name: [#3617](https://github.com/owncloud/web/pull/3617)

   We've moved the sharing status indicators from an own column in the files list to a second row
   under the resource name.

   https://github.com/owncloud/web/pull/3617

* Change - Remove sidebar quickAccess: [#80](https://github.com/owncloud/product/issues/80)

   We have removed the sidebar quickAccess extension point. To create an quick access to the
   sidebar, we need to use the quickActions extension point.

   https://github.com/owncloud/product/issues/80
   https://github.com/owncloud/web/pull/3586

* Change - Rework account dropdown: [#82](https://github.com/owncloud/product/issues/82)

   We've removed user avatar, user email and version from the account dropdown. The log out button
   has been changed into a link. All links in account dropdown are now inside of a list.

   https://github.com/owncloud/product/issues/82
   https://github.com/owncloud/web/pull/3605

* Change - Unite files list status indicators: [#3567](https://github.com/owncloud/web/pull/3567)

   We've merged direct and indirect status indicators in the files list. With this change, we
   focus on the important information of the indicator (e.g. resource is shared). Any additional
   information can then be displayed in the related tab of the sidebar.

   https://github.com/owncloud/web/pull/3567

* Change - Use correct logo: [#786](https://github.com/owncloud/owncloud-design-system/issues/786)

   We've changed the ownCloud logo which is used in the default theme. The previous logo had an
   incorrect font-weight.

   https://github.com/owncloud/owncloud-design-system/issues/786
   https://github.com/owncloud/web/pull/3604

* Enhancement - Send mtime with uploads: [#2969](https://github.com/owncloud/web/issues/2969)

   When uploading a file, the modification time is now sent along. This means that the uploaded
   file will have the same modification time like the one it had on disk. This aligns the behavior
   with the desktop client which also keeps the mtime.

   https://github.com/owncloud/web/issues/2969
   https://github.com/owncloud/web/pull/3377

* Enhancement - Use TUS settings from capabilities: [#177](https://github.com/owncloud/ocis-reva/issues/177)

   The TUS settings advertise the maximum chunk size, so we now use the smallest chunk size from the
   one configured in config.json and the one from the capabilities.

   If the capabilities report that one should use the X-HTTP-Override-Method header, the upload
   will now use a POST request for uploads with that header set instead of PATCH.

   https://github.com/owncloud/ocis-reva/issues/177
   https://github.com/owncloud/web/pull/3568

* Enhancement - Add collaborators quick action: [#3573](https://github.com/owncloud/web/pull/3573)

   We've added a new quick action which opens the new collaborators tab in the files list sidebar.

   https://github.com/owncloud/web/pull/3573

* Enhancement - Dynamically loaded nav items: [#3497](https://github.com/owncloud/web/issues/3497)

   We have moved the navItems from application configuration into a store module. We extended
   it's functionality by introducing statically and dynamically loaded navItems. This way
   navItems can be loaded based on extension data, as soon as the extension becomes active. Please
   note that having at least one static navItem (coming from the appInfo object of an extension) is
   still a requirement for the extension appearing in the app switcher.

   https://github.com/owncloud/web/issues/3497
   https://github.com/owncloud/web/pull/3570

* Enhancement - Load and display quick actions: [#3573](https://github.com/owncloud/web/pull/3573)

   We've added an extension point into files apps for quick actions. By creating and exporting an
   object called quickActions, developers can define an action which will be then displayed in
   the files list.

   https://github.com/owncloud/web/pull/3573

Changelog for ownCloud Web [0.10.0] (2020-05-26)
=======================================
The following sections list the changes in ownCloud web 0.10.0 relevant to
ownCloud admins and users.

[0.10.0]: https://github.com/owncloud/web/compare/v0.9.0...v0.10.0

Summary
-------

* Bugfix - Fix share indicators click to open the correct panel: [#3324](https://github.com/owncloud/web/issues/3324)
* Bugfix - Set server config to ocis proxy in example config file: [#3454](https://github.com/owncloud/web/pull/3454)
* Change - Removed favorite button from file list and added it in the sidebar: [#1987](https://github.com/owncloud/web/issues/1987)
* Change - Make settings available in web: [#3484](https://github.com/owncloud/web/pull/3484)
* Change - Use language setting: [#3484](https://github.com/owncloud/web/pull/3484)
* Change - Permanently visible branded left navigation sidebar: [#3395](https://github.com/owncloud/web/issues/3395)

Details
-------

* Bugfix - Fix share indicators click to open the correct panel: [#3324](https://github.com/owncloud/web/issues/3324)

   When clicking on a share indicator inside a file list row, the correct share panel will now be
   displayed.

   https://github.com/owncloud/web/issues/3324
   https://github.com/owncloud/web/pull/3420

* Bugfix - Set server config to ocis proxy in example config file: [#3454](https://github.com/owncloud/web/pull/3454)

   We fixed the ocis example config to point to the default oCIS Proxy address instead of the
   default Web service address.

   https://github.com/owncloud/web/pull/3454

* Change - Removed favorite button from file list and added it in the sidebar: [#1987](https://github.com/owncloud/web/issues/1987)

   We've removed the favorite star button in the file list and added instead a functionality to the
   before non-working star button in the file's sidebar. We also added a new action in the file
   action dropdown menu which allows you to toggle the favorite status of your file.

   https://github.com/owncloud/web/issues/1987
   https://github.com/owncloud/web/pull/3336

* Change - Make settings available in web: [#3484](https://github.com/owncloud/web/pull/3484)

   We upgraded to a new owncloud-sdk version which provides loading settings from the settings
   service, if available. The settings values are available throughout web and all extensions.

   https://github.com/owncloud/web/pull/3484

* Change - Use language setting: [#3484](https://github.com/owncloud/web/pull/3484)

   We've changed web to make use of the language the authenticated user has chosen in the settings.

   https://github.com/owncloud/web/pull/3484

* Change - Permanently visible branded left navigation sidebar: [#3395](https://github.com/owncloud/web/issues/3395)

   We've made left navigation sidebar permanently visible and moved branding (logo and brand
   color) into it.

   https://github.com/owncloud/web/issues/3395
   https://github.com/owncloud/web/pull/3442

Changelog for ownCloud Web [0.9.0] (2020-04-27)
=======================================
The following sections list the changes in ownCloud web 0.9.0 relevant to
ownCloud admins and users.

[0.9.0]: https://github.com/owncloud/web/compare/v0.8.0...v0.9.0

Summary
-------

* Bugfix - Remove deleted files from search result: [#3266](https://github.com/owncloud/web/pull/3266)
* Bugfix - Show token string if link name is empty in FileLinkSidebar: [#3297](https://github.com/owncloud/web/pull/3297)
* Bugfix - Remove duplicate error display in input prompt: [#3342](https://github.com/owncloud/web/pull/3342)
* Bugfix - Fix translation message extraction from plain javascript files: [#3346](https://github.com/owncloud/web/pull/3346)
* Bugfix - Fix name of selected extension on broken apps: [#3376](https://github.com/owncloud/web/pull/3376)
* Change - Update owncloud-sdk: [#3369](https://github.com/owncloud/web/pull/3369)
* Enhancement - Add chunked upload with tus-js-client: [#67](https://github.com/owncloud/web/issues/67)

Details
-------

* Bugfix - Remove deleted files from search result: [#3266](https://github.com/owncloud/web/pull/3266)

   Deleted file has been removed from filesSearched state by adding a new mutation. Also, filter
   condition in remove file mutations has been changed from object reference to unique file id.

   https://github.com/owncloud/web/issues/3043
   https://github.com/owncloud/web/issues/3044
   https://github.com/owncloud/web/pull/3266

* Bugfix - Show token string if link name is empty in FileLinkSidebar: [#3297](https://github.com/owncloud/web/pull/3297)

   Owncloud-js-client was parsing empty link name xml attribute as empty object. The empty
   object was changed with an empty string. Also, FileLinkSidebar behaviour fixed by showing
   token as name for the link shares without a name.

   https://github.com/owncloud/web/issues/2517
   https://github.com/owncloud/web/pull/3297

* Bugfix - Remove duplicate error display in input prompt: [#3342](https://github.com/owncloud/web/pull/3342)

   Validation errors within the input prompt dialog were showing up twice. One of them is a
   leftover from the old version. We've fixed the dialog by removing the old validation error
   type.

   https://github.com/owncloud/web/pull/3342

* Bugfix - Fix translation message extraction from plain javascript files: [#3346](https://github.com/owncloud/web/pull/3346)

   https://github.com/Polyconseil/easygettext/issues/81
   https://github.com/owncloud/web/pull/3346

* Bugfix - Fix name of selected extension on broken apps: [#3376](https://github.com/owncloud/web/pull/3376)

   With the edge case of a broken app in config.json, the top bar is broken, because appInfo can't be
   loaded. We made ocis-web more robust by just showing the extension id in the top bar when the
   appInfo is not available.

   https://github.com/owncloud/web/pull/3376

* Change - Update owncloud-sdk: [#3369](https://github.com/owncloud/web/pull/3369)

   Updated owncloud-sdk to v1.0.0-604

   https://github.com/owncloud/web/pull/3369

* Enhancement - Add chunked upload with tus-js-client: [#67](https://github.com/owncloud/web/issues/67)

   Whenever the backend server advertises TUS support, uploading files will use TUS as well for
   uploading, which makes it possible to resume failed uploads. It is also possible to optionally
   set a chunk size by setting a numeric value for "uploadChunkSize" in bytes in config.json.

   https://github.com/owncloud/web/issues/67
   https://github.com/owncloud/web/pull/3345

Changelog for ownCloud Web [0.8.0] (2020-04-14)
=======================================
The following sections list the changes in ownCloud web 0.8.0 relevant to
ownCloud admins and users.

[0.8.0]: https://github.com/owncloud/web/compare/v0.7.0...v0.8.0

Summary
-------

* Bugfix - Display errors when saving collaborator fails: [#3176](https://github.com/owncloud/web/issues/3176)
* Bugfix - Fix media-viewer on private pages: [#3288](https://github.com/owncloud/web/pull/3288)
* Bugfix - Fix oidc redirect after logout: [#3285](https://github.com/owncloud/web/issues/3285)
* Bugfix - Update owncloud-sdk 1.0.0-544: [#3292](https://github.com/owncloud/web/pull/3292)
* Bugfix - Set a higher timeout for requirejs: [#3293](https://github.com/owncloud/web/pull/3293)
* Enhancement - Visual improvement to errors in input prompts: [#1906](https://github.com/owncloud/web/issues/1906)
* Enhancement - Add state to app urls: [#3294](https://github.com/owncloud/web/pull/3294)

Details
-------

* Bugfix - Display errors when saving collaborator fails: [#3176](https://github.com/owncloud/web/issues/3176)

   When saving a collaborator has failed, the UI was still behaving like it saved everything
   successfully. This has been fixed by displaying the errors at the top of the collaborator
   editing form and staying in the editing view.

   https://github.com/owncloud/web/issues/3176
   https://github.com/owncloud/web/pull/3241

* Bugfix - Fix media-viewer on private pages: [#3288](https://github.com/owncloud/web/pull/3288)

   Media-viewer incorrectly assumed it was on a public page when opened from a private page.

   https://github.com/owncloud/web/pull/3288

* Bugfix - Fix oidc redirect after logout: [#3285](https://github.com/owncloud/web/issues/3285)

   After the logout the idp sent a redirect to `<redirectUri>?state=` which was then redirected
   to `<redirectUri>?state=#/login` by web. Having the query parameters in between broke the
   application. To prevent the whole login url `<baseUrl>#/login` should be sent then the query
   parameter will be appended to the end.

   https://github.com/owncloud/web/issues/3285

* Bugfix - Update owncloud-sdk 1.0.0-544: [#3292](https://github.com/owncloud/web/pull/3292)

   This sdk version is much smaller in size

   https://github.com/owncloud/web/pull/3292

* Bugfix - Set a higher timeout for requirejs: [#3293](https://github.com/owncloud/web/pull/3293)

   In slow networks requirejs requests can timeout. The timeout is now set to a higher value (200
   secs)

   https://github.com/owncloud/web/pull/3293

* Enhancement - Visual improvement to errors in input prompts: [#1906](https://github.com/owncloud/web/issues/1906)

   We've adjusted the input prompts to show a visually less prominent text below the input field.
   Also, error messages now appear with a small delay, so that those happening during typing get
   ignored (e.g. trailing whitespace is not allowed in folder names and previously caused an
   error to show on every typed blank).

   https://github.com/owncloud/web/issues/1906
   https://github.com/owncloud/web/pull/3240

* Enhancement - Add state to app urls: [#3294](https://github.com/owncloud/web/pull/3294)

   Currently opened file can be added to app routes so reloading the page can be made to work For now
   it's only implemented in mediaviewer

   https://github.com/owncloud/web/pull/3294

Changelog for ownCloud Web [0.7.0] (2020-03-30)
=======================================
The following sections list the changes in ownCloud web 0.7.0 relevant to
ownCloud admins and users.

[0.7.0]: https://github.com/owncloud/web/compare/v0.6.0...v0.7.0

Summary
-------

* Bugfix - Fix logout when no tokens are known anymore: [#2961](https://github.com/owncloud/web/pull/2961)
* Bugfix - Files list status indicators are now appearing without any delay: [#2973](https://github.com/owncloud/web/issues/2973)
* Bugfix - Fix file actions menu when using OCIS backend: [#3214](https://github.com/owncloud/web/issues/3214)
* Bugfix - Do not remove first character of etag: [#3274](https://github.com/owncloud/web/pull/3274)
* Change - Don't import whole core-js bundle directly into core: [#3173](https://github.com/owncloud/web/pull/3173)
* Enhancement - Added thumbnails in file list: [#276](https://github.com/owncloud/web/issues/276)

Details
-------

* Bugfix - Fix logout when no tokens are known anymore: [#2961](https://github.com/owncloud/web/pull/2961)

   Single Log Out requires the id_token and in cases where this token is no longer known calling the
   SLO endpoint will result in an error.

   This has been fixed.

   https://github.com/owncloud/web/pull/2961

* Bugfix - Files list status indicators are now appearing without any delay: [#2973](https://github.com/owncloud/web/issues/2973)

   We've stopped loading file list status indicators asynchronously to prevent them from
   appearing delayed. They appear now at the same time as the file list.

   https://github.com/owncloud/web/issues/2973
   https://github.com/owncloud/web/pull/3213

* Bugfix - Fix file actions menu when using OCIS backend: [#3214](https://github.com/owncloud/web/issues/3214)

   When using OCIS as backend, the ids of resources is a string instead of integer. So we cannot
   embed those into DOM node ids and need to use another alternative. This fix introduces a unique
   viewId which is only there to provide uniqueness across the current list and should not be used
   for any data related operation.

   This fixes the file actions menu when using OCIS as backend.

   https://github.com/owncloud/web/issues/3214
   https://github.com/owncloud/ocis-web/issues/51

* Bugfix - Do not remove first character of etag: [#3274](https://github.com/owncloud/web/pull/3274)

   When stripping away double quotes in etag of the file thumbnails, we accidentally removed
   first character as well. We've stopped removing that character.

   https://github.com/owncloud/web/pull/3274

* Change - Don't import whole core-js bundle directly into core: [#3173](https://github.com/owncloud/web/pull/3173)

   We've stopped importing whole core-js bundle directly into core and instead load only used
   parts with babel.

   https://github.com/owncloud/web/pull/3173

* Enhancement - Added thumbnails in file list: [#276](https://github.com/owncloud/web/issues/276)

   Thumbnails are now displayed in the file list for known file types. When no thumbnail was
   returned, fall back to the file type icon.

   https://github.com/owncloud/web/issues/276
   https://github.com/owncloud/web/pull/3187

Changelog for ownCloud Web [0.6.0] (2020-03-16)
=======================================
The following sections list the changes in ownCloud web 0.6.0 relevant to
ownCloud admins and users.

[0.6.0]: https://github.com/owncloud/web/compare/v0.5.0...v0.6.0

Summary
-------

* Bugfix - Indirect share info now visible in favorite and other file lists: [#3040](https://github.com/owncloud/web/issues/3040)
* Bugfix - Fixed layout of file lists: [#3100](https://github.com/owncloud/web/pull/3100)
* Bugfix - Changed share icons to collaborators icons: [#3116](https://github.com/owncloud/web/pull/3116)
* Bugfix - Sorted collaborators column, deduplicate public entry: [#3137](https://github.com/owncloud/web/issues/3137)
* Bugfix - Use end of the day in expiration date: [#3158](https://github.com/owncloud/web/pull/3158)
* Change - Moved collaborators additional info on own row and removed type row: [#3130](https://github.com/owncloud/web/pull/3130)
* Change - New sort order for collaborators and public links: [#3136](https://github.com/owncloud/web/pull/3136)
* Change - Stop support for deployment of Web as an ownCloud app: [#3162](https://github.com/owncloud/web/pull/3162)
* Change - Align columns in file lists to the right: [#3036](https://github.com/owncloud/web/issues/3036)
* Enhancement - Expiration date for collaborators: [#2543](https://github.com/owncloud/web/issues/2543)

Details
-------

* Bugfix - Indirect share info now visible in favorite and other file lists: [#3040](https://github.com/owncloud/web/issues/3040)

   When open the share panel of other flat file lists like the favorites, the collaborators list
   and link list are now showing the same entries like in the "All files" list, which includes
   indirect shares (via) that were previously missing.

   https://github.com/owncloud/web/issues/3040
   https://github.com/owncloud/web/pull/3135

* Bugfix - Fixed layout of file lists: [#3100](https://github.com/owncloud/web/pull/3100)

   A recent library update in ODS for the recycle scroller seem to have changed the logic or
   calculation of the height.

   This fix accommodates for that change and restores the row height to a correct value.

   The shared file lists are now more responsive, the collaborators/owner and share time columns
   are now hidden on small screens.

   https://github.com/owncloud/web/pull/3100

* Bugfix - Changed share icons to collaborators icons: [#3116](https://github.com/owncloud/web/pull/3116)

   Adjust icon in files app navigation bar and also in the file actions dropdown to use the group
   icon.

   https://github.com/owncloud/web/pull/3116

* Bugfix - Sorted collaborators column, deduplicate public entry: [#3137](https://github.com/owncloud/web/issues/3137)

   The collaborators column that appears in the "shared with others" section are now sorted:
   first by share type (user, group, link, remote) and then by display name using natural sort.
   Additionally, if there is more than one public link for the resource, the text "Public" only
   appears once in the collaborators column.

   https://github.com/owncloud/web/issues/3137
   https://github.com/owncloud/web/pull/3171

* Bugfix - Use end of the day in expiration date: [#3158](https://github.com/owncloud/web/pull/3158)

   We've changed the expiration date field in the collaborators list to the end of the day.

   https://github.com/owncloud/web/pull/3158

* Change - Moved collaborators additional info on own row and removed type row: [#3130](https://github.com/owncloud/web/pull/3130)

   We've moved collaborators additional info on own row under the name of collaborator and
   removed collaborator type row.

   https://github.com/owncloud/web/pull/3130

* Change - New sort order for collaborators and public links: [#3136](https://github.com/owncloud/web/pull/3136)

   We've changed the sort order for collaborators and public links. Collaborators are now sorted
   by: collaborator type, is collaborator direct, display name and creation date. Public links
   are now sorted by: is public link direct, display name and creation date.

   https://github.com/owncloud/web/pull/3136

* Change - Stop support for deployment of Web as an ownCloud app: [#3162](https://github.com/owncloud/web/pull/3162)

   We've stopped supporting deployment of Web as an ownCloud app. In the release is no longer
   available Web ownCloud 10 app package.

   https://github.com/owncloud/web/pull/3162

* Change - Align columns in file lists to the right: [#3036](https://github.com/owncloud/web/issues/3036)

   We've aligned columns in all file lists to the right so it is easier for the user to compare them.

   https://github.com/owncloud/web/issues/3036
   https://github.com/owncloud/web/pull/3163

* Enhancement - Expiration date for collaborators: [#2543](https://github.com/owncloud/web/issues/2543)

   We've added an expiration date for collaborators. Users can choose an expiration date for
   users and groups. After the date is reached the collaborator is automatically removed. Admins
   can set default expiration date or enforce it.

   https://github.com/owncloud/web/issues/2543
   https://github.com/owncloud/web/pull/3086

Changelog for ownCloud Web [0.5.0] (2020-03-02)
=======================================
The following sections list the changes in ownCloud web 0.5.0 relevant to
ownCloud admins and users.

[0.5.0]: https://github.com/owncloud/web/compare/v0.4.0...v0.5.0

Summary
-------

* Bugfix - Various fixes for files app in responsive mode: [#2998](https://github.com/owncloud/web/issues/2998)
* Bugfix - Responsive buttons layout in app bar when multiple files are selected: [#3011](https://github.com/owncloud/web/issues/3011)
* Bugfix - Fix accessible labels that said $gettext: [#3039](https://github.com/owncloud/web/pull/3039)
* Bugfix - Fix console warning about search query in public page: [#3041](https://github.com/owncloud/web/pull/3041)
* Bugfix - Moved resharers to the top of owner collaborator entry: [#3850](https://github.com/owncloud/web/issues/3850)
* Change - Moved sidebar navigation under top bar: [#3077](https://github.com/owncloud/web/pull/3077)
* Enhancement - Added ability to click file list columns for sorting: [#1854](https://github.com/owncloud/web/issues/1854)
* Enhancement - Improved collaborators column in shared file lists: [#2924](https://github.com/owncloud/web/issues/2924)
* Enhancement - Display decimals in resource size column only for MBs or higher: [#2986](https://github.com/owncloud/web/issues/2986)
* Enhancement - Different message in overwrite dialog when versioning is enabled: [#3047](https://github.com/owncloud/web/issues/3047)
* Enhancement - Current user entry in collaborators list in sidebar: [#3808](https://github.com/owncloud/web/issues/3808)

Details
-------

* Bugfix - Various fixes for files app in responsive mode: [#2998](https://github.com/owncloud/web/issues/2998)

   Fixed properly alignment of header columns with the body of the files table which stays even
   after resizing. Removed the column label for the actions column as it looks nicer.

   https://github.com/owncloud/web/issues/2998
   https://github.com/owncloud/web/pull/2999

* Bugfix - Responsive buttons layout in app bar when multiple files are selected: [#3011](https://github.com/owncloud/web/issues/3011)

   We've fixed the responsive buttons layout in files app bar when multiple files are selected
   where bulk actions where overlapping and height of the buttons was increased.

   https://github.com/owncloud/web/issues/3011
   https://github.com/owncloud/web/pull/3083

* Bugfix - Fix accessible labels that said $gettext: [#3039](https://github.com/owncloud/web/pull/3039)

   Fixed three accessible aria labels that were saying "$gettext" instead of their actual
   translated text.

   https://github.com/owncloud/web/pull/3039

* Bugfix - Fix console warning about search query in public page: [#3041](https://github.com/owncloud/web/pull/3041)

   Fixed console warning about the search query attribute not being available whenever the
   search fields are not visible, for example when accessing a public link page.

   https://github.com/owncloud/web/pull/3041

* Bugfix - Moved resharers to the top of owner collaborator entry: [#3850](https://github.com/owncloud/web/issues/3850)

   For received shares, the resharers user display names are now shown on top of the owner entry in
   the collaborators list, with a reshare icon, instead of having their own entry in the
   collaborators list.

   This makes the reshare situation more clear and removes the ambiguity about the formerly
   displayed "resharer" role which doesn't exist.

   https://github.com/owncloud/web/issues/3850

* Change - Moved sidebar navigation under top bar: [#3077](https://github.com/owncloud/web/pull/3077)

   We've adjusted the position of the sidebar navigation to be under the top bar.

   https://github.com/owncloud/web/pull/3077

* Enhancement - Added ability to click file list columns for sorting: [#1854](https://github.com/owncloud/web/issues/1854)

   The sorting mode of the file list can now be changed by clicking on the column headers.

   https://github.com/owncloud/web/issues/1854

* Enhancement - Improved collaborators column in shared file lists: [#2924](https://github.com/owncloud/web/issues/2924)

   Fixed issue with the collaborators column where only one was being displayed in the "shared
   with you" file list. This is done by properly aggregating all share entries under each file
   entry for the list, which now also includes group shares and link shares.

   Improved the look of the collaborators by adding avatars and icons there for the shares in the
   collaborators and owner columns.

   https://github.com/owncloud/web/issues/2924
   https://github.com/owncloud/web/pull/3049

* Enhancement - Display decimals in resource size column only for MBs or higher: [#2986](https://github.com/owncloud/web/issues/2986)

   We've stopped displaying decimals in resource size column for sizes smaller than 1 MB. We've
   also started displaying only one decimal.

   https://github.com/owncloud/web/issues/2986
   https://github.com/owncloud/web/pull/3051

* Enhancement - Different message in overwrite dialog when versioning is enabled: [#3047](https://github.com/owncloud/web/issues/3047)

   We've added a new message in the overwrite dialog when versioning is enabled. This message is
   intended to make it clear that the resource won't be overwritten but a new version of it will be
   created.

   https://github.com/owncloud/web/issues/3047
   https://github.com/owncloud/web/pull/3050

* Enhancement - Current user entry in collaborators list in sidebar: [#3808](https://github.com/owncloud/web/issues/3808)

   We've added a new entry into the collaborators list in sidebar which contains current user.

   https://github.com/owncloud/web/issues/3808
   https://github.com/owncloud/web/pull/3060

Changelog for ownCloud Web [0.4.0] (2020-02-14)
=======================================
The following sections list the changes in ownCloud web 0.4.0 relevant to
ownCloud admins and users.

[0.4.0]: https://github.com/owncloud/web/compare/v0.3.0...v0.4.0

Summary
-------

* Bugfix - Fix collaborator selection on new collaborator shares: [#1186](https://github.com/owncloud/web/issues/1186)
* Bugfix - Prevent loader in sidebar on add/remove: [#2937](https://github.com/owncloud/web/issues/2937)
* Bugfix - Fix issue with translate function for pending shares: [#3012](https://github.com/owncloud/web/issues/3012)
* Bugfix - Properly manage escaping of all translations: [#3032](https://github.com/owncloud/web/pull/3032)
* Change - Improve UI/UX of collaborator forms: [#1186](https://github.com/owncloud/web/issues/1186)
* Change - Display only items for current extension in sidebar menu: [#2746](https://github.com/owncloud/web/issues/2746)
* Change - Removed filter button in files list header: [#2971](https://github.com/owncloud/web/issues/2971)
* Change - File actions now always behind three dots button: [#2974](https://github.com/owncloud/web/pull/2974)
* Change - Improve ownCloud Design System (ODS): [#2989](https://github.com/owncloud/web/issues/2989)
* Change - Improve visual appearance of upload progress: [#3742](https://github.com/owncloud/enterprise/issues/3742)
* Enhancement - Add empty folder message in file list views: [#1910](https://github.com/owncloud/web/issues/1910)
* Enhancement - Fixed header for files tables: [#1952](https://github.com/owncloud/web/issues/1952)

Details
-------

* Bugfix - Fix collaborator selection on new collaborator shares: [#1186](https://github.com/owncloud/web/issues/1186)

   When typing text into the search box for new collaborators, selecting a user and a group with
   identical names was not possible. This was due to the fact that when one (group or user) got
   selected, the other was excluded because of a matching name. Fixed by including the share type
   (group or user) in matching.

   https://github.com/owncloud/web/issues/1186

* Bugfix - Prevent loader in sidebar on add/remove: [#2937](https://github.com/owncloud/web/issues/2937)

   When adding or removing a public link or collaborator, the respective list view sidebar panels
   briefly hid the panel and showed a loader instead. The UI is supposed to show a visual transition
   of a new list item into the list on adding, as well as a visual transition out of the list on
   deletion. This is fixed now by not triggering the loading state on add and remove actions
   anymore. A loading state is only meant to appear when the user navigates to the shares of another
   file/folder.

   https://github.com/owncloud/web/issues/2937
   https://github.com/owncloud/web/pull/2952

* Bugfix - Fix issue with translate function for pending shares: [#3012](https://github.com/owncloud/web/issues/3012)

   The pending shares was wrongly passing in a translation function, which caused translations
   to be missing in the error message but also it broke the general translation sync process with
   Transifex. Thanks to this change the translations will be up to date again.

   https://github.com/owncloud/web/issues/3012
   https://github.com/owncloud/web/pull/3014

* Bugfix - Properly manage escaping of all translations: [#3032](https://github.com/owncloud/web/pull/3032)

   We've stopped escaping translations which contained resource names or user names because
   they can contain special characters which were then not properly displayed. We've done this
   only with translations which are using mustache syntax which does escaping on its own so we
   don't introduce potential XSS vulnerability. For all other translations, we've explicitly
   set the escaping.

   https://github.com/owncloud/web/pull/3032

* Change - Improve UI/UX of collaborator forms: [#1186](https://github.com/owncloud/web/issues/1186)

   Applied several UI/UX improvements to the collaborator forms (adding and editing). - Showing
   avatars for selected collaborators on a new share and fixed styling/layouting of said
   collaborators in the list. - Added sensible margins on text about missing permissions for
   re-sharing in the sharing sidebar. - Fixed alignment of displayed collaborator in editing
   view for collaborators. - Removed separators from the forms that were cluttering the view. -
   Moved role description on role selection (links and collaborators) into the form element. Not
   shown below the form element anymore.

   https://github.com/owncloud/web/issues/1186

* Change - Display only items for current extension in sidebar menu: [#2746](https://github.com/owncloud/web/issues/2746)

   We've filtered out nav items in the sidebar menu. Now only items for current extension will be
   displayed. In case the extension has only one nav item, the sidebar menu is hidden and instead of
   menu button is displayed the name of extension.

   https://github.com/owncloud/web/issues/2746
   https://github.com/owncloud/web/pull/3013

* Change - Removed filter button in files list header: [#2971](https://github.com/owncloud/web/issues/2971)

   Removed the confusing filter button in the files list header, so the following are now removed
   as well: - ability to toggle files and folders visibility which wasn't that useful and not
   really a requirement - filter text box as it is is redundant as one can already use the global
   search box - ability to hide dot files, we'll look into providing this again in the future with an
   improved UI

   https://github.com/owncloud/web/issues/2971

* Change - File actions now always behind three dots button: [#2974](https://github.com/owncloud/web/pull/2974)

   The inline file actions button didn't look very nice and made the UI look cluttered. This change
   hides them behind a three dots button on the line, the same that was already visible in
   responsive mode. The three dots button also now has no more border and looks nicer.

   https://github.com/owncloud/web/issues/2998
   https://github.com/owncloud/web/pull/2974

* Change - Improve ownCloud Design System (ODS): [#2989](https://github.com/owncloud/web/issues/2989)

   During the work on this release, there have been several changes in ODS which directly affect
   Web. - Proper text truncate in breadcrumb component. This fixes the mobile view of the current
   folder breadcrumb in the top bar. - New icon sizes `xlarge` and `xxlarge` in oc-icon component.
   Those are used for the `No content` messages e.g. when navigating to an empty folder. - Provide
   new icon size `xsmall` and align spinner-sizes with icon-sizes. The `xsmall` icon size turned
   out to be prettier in some places. The size alignments fixed layout glitches when removing
   collaborators or public links. - Fix aria label on spinner in oc-autocomplete. Warning were
   cluttering the JavaScript console when adding collaborators. - Reset input on selection in
   oc-autocomplete, when `fillOnSelection=false`. This makes sure that when a new
   collaborator has been selected, the search input field goes back to being blank for a new
   search.

   https://github.com/owncloud/web/issues/2989
   https://github.com/owncloud/owncloud-design-system/pull/630
   https://github.com/owncloud/owncloud-design-system/pull/632
   https://github.com/owncloud/owncloud-design-system/pull/633
   https://github.com/owncloud/owncloud-design-system/pull/634
   https://github.com/owncloud/owncloud-design-system/pull/635

* Change - Improve visual appearance of upload progress: [#3742](https://github.com/owncloud/enterprise/issues/3742)

   - Changed the layout of the upload progress to be a narrow standalone full width row below the app
   top bar. - Transformed textual information into a single row below the progress bar and made it
   very clear that it can be clicked to show upload progress details. - Changed layout of upload
   progress details list items, so that the progress bars always have the same width. - Changed
   visuals of all progress bars in upload context to have a narrow outline and the percentage
   numbers inside of the progress bars. - Fixed the calculation of the overall upload progress to
   be weighted by file sizes instead of just adding up percentages and dividing by number of
   uploads.

   https://github.com/owncloud/enterprise/issues/3742

* Enhancement - Add empty folder message in file list views: [#1910](https://github.com/owncloud/web/issues/1910)

   Whenever a folder contains no entries in any of the file list views, a message is now shown
   indicating that the folder is empty, or that there are no favorites, etc.

   https://github.com/owncloud/web/issues/1910
   https://github.com/owncloud/web/pull/2975

* Enhancement - Fixed header for files tables: [#1952](https://github.com/owncloud/web/issues/1952)

   We've made the header of files tables fixed so it is easier to know the meaning of table columns.

   https://github.com/owncloud/web/issues/1952
   https://github.com/owncloud/web/pull/2995

Changelog for ownCloud Web [0.3.0] (2020-01-31)
=======================================
The following sections list the changes in ownCloud web 0.3.0 relevant to
ownCloud admins and users.

[0.3.0]: https://github.com/owncloud/web/compare/v0.2.7...v0.3.0

Summary
-------

* Bugfix - Transform route titles into real h1 headings: [#2681](https://github.com/owncloud/web/pull/2681)
* Bugfix - Prevent jumpy behavior when loading user avatars: [#2921](https://github.com/owncloud/web/issues/2921)
* Change - Bring UI/UX of file links sidebar in line with sharing sidebar: [#1907](https://github.com/owncloud/web/issues/1907)
* Change - Join users and groups into a single list in collaborators sidebar: [#2900](https://github.com/owncloud/web/issues/2900)
* Change - Adjusted labels in files list: [#2902](https://github.com/owncloud/web/pull/2902)
* Enhancement - Add share indicator for direct and indirect shares in file list: [#2060](https://github.com/owncloud/web/issues/2060)
* Enhancement - Add files list status indicators extension point: [#2895](https://github.com/owncloud/web/issues/2895)
* Enhancement - Add theme option to disable default files list status indicators: [#2895](https://github.com/owncloud/web/issues/2895)
* Enhancement - Show indirect outgoing shares in shares panel: [#2897](https://github.com/owncloud/web/issues/2897)
* Enhancement - Add owner and resharer in collaborators list: [#2898](https://github.com/owncloud/web/issues/2898)

Details
-------

* Bugfix - Transform route titles into real h1 headings: [#2681](https://github.com/owncloud/web/pull/2681)

   We transformed spans that held the page title to h1 elements. In the case of the file list, a h1 is
   existing for accessibility reasons but can only be perceived via a screen reader.

   https://github.com/owncloud/web/pull/2681

* Bugfix - Prevent jumpy behavior when loading user avatars: [#2921](https://github.com/owncloud/web/issues/2921)

   When loading a user avatar, the container size was smaller so as soon as the avatar was loaded, it
   resulted in jumpy behavior. This is fixed now by applying the same size to the loading spinner
   element.

   https://github.com/owncloud/web/issues/2921
   https://github.com/owncloud/web/pull/2927

* Change - Bring UI/UX of file links sidebar in line with sharing sidebar: [#1907](https://github.com/owncloud/web/issues/1907)

   We adapted the UI/UX of the file links sidebar to be in line with the UI/UX of the collaborators
   sidebar. The order of the two sidebars has been reversed (collaborators first, file links
   second). We added info messages to support a clear understanding of the purpose of both private
   and public links. Most notably the file links sidebar has no inline forms anymore.

   https://github.com/owncloud/web/issues/1907
   https://github.com/owncloud/web/issues/1307
   https://github.com/owncloud/web/pull/2841
   https://github.com/owncloud/web/pull/2917

* Change - Join users and groups into a single list in collaborators sidebar: [#2900](https://github.com/owncloud/web/issues/2900)

   Users and groups were shown as two separate lists (users, then groups) in the collaborators
   sidebar. This separation is now removed, i.e. there is only one list with all collaborators,
   sorted by display name (lower case, ascending). On equal names groups are shown first.

   https://github.com/owncloud/web/issues/2900

* Change - Adjusted labels in files list: [#2902](https://github.com/owncloud/web/pull/2902)

   Renamed "Modification time" to "Updated" to make it look less technical. Replace "Create new"
   with "New" in the "New" menu as it makes it look less cluttered when trying to spot a matching
   entry.

   https://github.com/owncloud/web/pull/2902
   https://github.com/owncloud/web/pull/2905

* Enhancement - Add share indicator for direct and indirect shares in file list: [#2060](https://github.com/owncloud/web/issues/2060)

   We've added the ability for the user to directly see whether a resource is shared in the file
   list. For this, share indicators in the form of a group icon and link icon will appear in a new
   column near the shared resource. The blue color of an icon tells whether outgoing shares exist
   directly on the resource. The grey color of an icon tells that incoming or outgoing shares exist
   on any of the parent folders.

   https://github.com/owncloud/web/issues/2060
   https://github.com/owncloud/web/issues/2894
   https://github.com/owncloud/web/pull/2877

* Enhancement - Add files list status indicators extension point: [#2895](https://github.com/owncloud/web/issues/2895)

   We've added the ability for the extension to inject custom status indicator into files list.
   New indicators will then appear next to the default one.

   https://github.com/owncloud/web/issues/2895
   https://github.com/owncloud/web/pull/2928

* Enhancement - Add theme option to disable default files list status indicators: [#2895](https://github.com/owncloud/web/issues/2895)

   We've added the option into the theme to disable default files list status indicators.

   https://github.com/owncloud/web/issues/2895
   https://github.com/owncloud/web/pull/2928

* Enhancement - Show indirect outgoing shares in shares panel: [#2897](https://github.com/owncloud/web/issues/2897)

   Whenever outgoing shares exist on any parent resource from the currently viewed resource, the
   shares panel will now show these outgoing shares with a link to jump to the matching parent
   resource. This applies to both indirect collaborators shares and also to indirect public link
   shares.

   https://github.com/owncloud/web/issues/2897
   https://github.com/owncloud/web/pull/2929
   https://github.com/owncloud/web/pull/2932

* Enhancement - Add owner and resharer in collaborators list: [#2898](https://github.com/owncloud/web/issues/2898)

   The top of the collaborators list now display new entries for the resource owner and the
   resharer when applicable, and also visible when viewing a child resource of a shared folder
   (indirect share).

   https://github.com/owncloud/web/issues/2898
   https://github.com/owncloud/web/pull/2915
   https://github.com/owncloud/web/pull/2918

Changelog for ownCloud Web [0.2.7] (2020-01-14)
=======================================
The following sections list the changes in ownCloud web 0.2.7 relevant to
ownCloud admins and users.

[0.2.7]: https://github.com/owncloud/web/compare/v0.2.6...v0.2.7

Summary
-------

* Bugfix - Display files list only if there is at least one item: [#2745](https://github.com/owncloud/web/issues/2745)
* Bugfix - Register store which is imported instead of required: [#2837](https://github.com/owncloud/web/issues/2837)
* Enhancement - Internal links in app switcher: [#2838](https://github.com/owncloud/web/issues/2838)

Details
-------

* Bugfix - Display files list only if there is at least one item: [#2745](https://github.com/owncloud/web/issues/2745)

   Vue virtual scroll was throwing an error in console in case that the files list was empty. We
   prevent this error by displaying the files list only if there is at least one item.

   https://github.com/owncloud/web/issues/2745

* Bugfix - Register store which is imported instead of required: [#2837](https://github.com/owncloud/web/issues/2837)

   As some extensions export store not as a module we need to handle that case as well.

   https://github.com/owncloud/web/issues/2837

* Enhancement - Internal links in app switcher: [#2838](https://github.com/owncloud/web/issues/2838)

   In case extensions integrates itself into Phoenix core and not as own SPA we need to handle the
   navigation via router-link inside of Web core SPA.

   https://github.com/owncloud/web/issues/2838

## [0.2.6]
### Added
- Skip to component, id attribute for <main> https://github.com/owncloud/web/pull/2326
- Focus management regarding off canvas main nav https://github.com/owncloud/web/pull/2101
- Publish docker on tag https://github.com/owncloud/web/pull/2485
- New collaborators flow https://github.com/owncloud/web/pull/2450
- Hide quota on external storage https://github.com/owncloud/web/pull/2652
- Focus management for uploads https://github.com/owncloud/web/pull/2542
- File actions can be defined using config settings https://github.com/owncloud/web/pull/2651
- Files table virtual scroller https://github.com/owncloud/web/pull/2280
- Virtual scroll in trash bin https://github.com/owncloud/web/pull/2809

### Fixed
- Wrong method for copy action of public link https://github.com/owncloud/web/pull/2363
- Token refresh flow https://github.com/owncloud/web/pull/2472
- App tar balls need to contain top level folder named like the app itself https://github.com/owncloud/web/pull/2449
- Scroll behavior on mozilla firefox https://github.com/owncloud/web/pull/2475
- Steps order on release/publish https://github.com/owncloud/web/pull/2491
- Don't re-filter autocomplete collaborators results for remote user https://github.com/owncloud/web/pull/2569
- Limit concurrent uploads to one https://github.com/owncloud/web/pull/2653
- Extend share id check in public links https://github.com/owncloud/web/pull/2494
- Made the trashbin table responsive https://github.com/owncloud/web/pull/2287
- Hide checkbox label in files list https://github.com/owncloud/web/pull/2680
- Share flow accessibility https://github.com/owncloud/web/pull/2622
- Remove empty parentheses in shared with others list https://github.com/owncloud/web/pull/2725
- Do not hide collaborator if another entry with the same name exists if they are not the same type https://github.com/owncloud/web/pull/2724
- Display breadcrumb if rootFolder is set with no value https://github.com/owncloud/web/pull/2811
- Include avatar placeholder in relevant places https://github.com/owncloud/web/pull/2783

### Changed
- Decouple base file list into a separate component https://github.com/owncloud/web/pull/2318
- Switched the storage of the auth service from local to session storage https://github.com/owncloud/web/pull/2416
- Don't build the docker image in the release make file https://github.com/owncloud/web/pull/2495
- Use owncloud-sdk for uploading files https://github.com/owncloud/web/pull/2239
- Refactor collaborators to use helper classes and to map permissions https://github.com/owncloud/web/pull/2373
- Moved private link icon to "links" section https://github.com/owncloud/web/pull/2496
- Separate app switcher from app navigation sidebar https://github.com/owncloud/web/pull/2669

## [0.2.5]
### Added
- IE11 support https://github.com/owncloud/web/pull/2082
- Draw.io app integration https://github.com/owncloud/web/pull/2083
- New file menu entries for different file types https://github.com/owncloud/web/pull/2111
- Drone starlark https://github.com/owncloud/web/pull/2112
- Rename and delete will be disallowed in case the parent folder has no permissions fot these two operations https://github.com/owncloud/web/pull/2129
- Progress bar for upload https://github.com/owncloud/web/pull/2176
- Handle errors while deleting and renaming files https://github.com/owncloud/web/pull/2177
- Logout option on access denied page https://github.com/owncloud/web/pull/2178
- Download feedback spinner https://github.com/owncloud/web/pull/2179
- Remove rootFolder from breadcrumbs https://github.com/owncloud/web/pull/2196
- Send header X-Requested-With: XMLHttpRequest in all requests https://github.com/owncloud/web/pull/2197
- X-Frame-Options and Content-Security-Policy https://github.com/owncloud/web/pull/2311

### Fixed
- IE11 support for media viewer app https://github.com/owncloud/web/pull/2086
- Files drop when link password is set https://github.com/owncloud/web/pull/2096
- Detection of public pages despite existing auth https://github.com/owncloud/web/pull/2097
- Public link access in incognito mode https://github.com/owncloud/web/pull/2110
- Password handling in public links https://github.com/owncloud/web/pull/2117
- More close options to file actions menu https://github.com/owncloud/web/pull/2161
- Reset search value on clear action https://github.com/owncloud/web/pull/2198
- Prevent duplicate token refresh calls https://github.com/owncloud/web/pull/2205
- Use PQueue to run only one create folder promise in folder upload https://github.com/owncloud/web/pull/2210
- Upon token refresh do not perform full login on sdk level https://github.com/owncloud/web/pull/2211
- Exit link on access denied page https://github.com/owncloud/web/pull/2220
- Structure of folders in folder upload https://github.com/owncloud/web/pull/2224
- Remove file from progress after download on IE11 https://github.com/owncloud/web/pull/2310
- Properly reset capabilities on logout https://github.com/owncloud/web/pull/2116

### Changed
- For mounted folders use the full url as private link https://github.com/owncloud/web/pull/2170
- Store route in vuex before login in case user is unauthorized https://github.com/owncloud/web/pull/2170
- Use currentFolder path in breadcrumbs https://github.com/owncloud/web/pull/2196
- Switch to show instead of if in upload progress bar https://github.com/owncloud/web/pull/2206
- Key of file action buttons to ariaLabel https://github.com/owncloud/web/pull/2219
- Trigger add to progress before the folders creation https://github.com/owncloud/web/pull/2221
- Handle remove from progress in its own mutation https://github.com/owncloud/web/pull/2225
- Use oidc-client 1.9.1 https://github.com/owncloud/web/pull/2261

### Security
- Added sanitization to markdown editor app https://github.com/owncloud/web/pull/2233

### Removed
- Drag and drop in ie11 because of compatibility issues https://github.com/owncloud/web/pull/2128

## [0.2.4]
### Added
- Private link for the current folder to the app bar https://github.com/owncloud/web/pull/2009

### Fixed
- Clear state in case of error in authorisation https://github.com/owncloud/web/pull/2079
- Hide comma before mdate if there is no size https://github.com/owncloud/web/pull/2073
- Don't perform OIDC logout in case of error in authorisation https://github.com/owncloud/web/pull/2072


### Changed
- Use sharetype keys that are human readable instead of number https://github.com/owncloud/web/pull/2071

## [0.2.3]
### Added
- Set X-Requested-With header - required ownCloud 10.3 https://github.com/owncloud/web/pull/1984
- Use 2 spaces instead of tab for feature files https://github.com/owncloud/web/pull/2004
- Handle OAuth/OpenIdConnect error in callback request query string https://github.com/owncloud/web/pull/2011
- Enable loading apps from external sites https://github.com/owncloud/web/pull/1986
- Add default client side sort https://github.com/owncloud/web/pull/1972

### Fixed
- Public link permissions mix up https://github.com/owncloud/web/pull/1985
- Downgrade vuex-persist to 2.0.1 to fix IE11 issues https://github.com/owncloud/web/pull/2007

## [0.2.2]
### Added
- Show error message when user tries to upload a folder in IE11 https://github.com/owncloud/web/pull/1956
- Error message if the folder or file name is empty in create dialog and added default value https://github.com/owncloud/web/pull/1938
- Bookmarks to menu https://github.com/owncloud/web/pull/1949

### Fixed
- Redirect to access denied page if the user doesn't have access to Web instance https://github.com/owncloud/web/pull/1939
- Redirect to private link after user has logged in https://github.com/owncloud/web/pull/1900
- Breaking of link to help desk on new line https://github.com/owncloud/web/pull/1940

## [0.2.1]
### Added
- Download feedback https://github.com/owncloud/web/pull/1895

### Fixed
- Download of files shared with password-protected public links https://github.com/owncloud/web/issues/1808
- Search button on mobile devices https://github.com/owncloud/web/pull/1893
- Collapsing of alert messages after they have been closed https://github.com/owncloud/web/pull/1881

## [0.2.0]
### Added
- Collaborators (replacement for shares)
- Public and private links
- Shared with me and Shared with others lists
- Favorites page
- Trash bin page

## [0.1.0]
### Added
- Initial early alpha release

[Unreleased]: https://github.com/owncloud/web/compare/0.1.0...master
[0.1.0]: https://github.com/owncloud/web/compare/d1cfc2d5f82202ac30c91e903e4810f42650c183...0.1.0
