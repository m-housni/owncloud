// just a dummy function to trick gettext tools
function $gettext(msg) {
  return msg
}
export const empty = {
  text: '',
  list: ['', '', '']
}
export const shareInviteCollaboratorHelp = {
  title: $gettext('Invite specific people'),
  text: $gettext('Enter a name or group to share this item.'),
  list: [
    { text: $gettext('Subfolders'), headline: true },
    {
      text: $gettext(
        'If you share a folder, all of its contents and subfolders will be shared as well.'
      )
    },
    { text: $gettext('Notification'), headline: true },
    {
      text: $gettext('Invited people will be notified via email or in-app notification.')
    },
    { text: $gettext('Incognito'), headline: true },
    {
      text: $gettext('Invited people can not see who else has access..')
    },
    { text: $gettext('“via folder”'), headline: true },
    {
      text: $gettext(
        'The “via folder” is shown next to a share, if access has already been given via a parent folder. Click on the “via folder” to edit the share on its parent folder.'
      )
    }
  ],
  readMoreLink: 'https://doc.owncloud.com/webui/next/owncloud_web/web_for_users.html#sharing'
}
export const shareInviteCollaboratorHelpCern = {
  list: [
    { text: $gettext('Search for service or secondary Account'), headline: true },
    {
      text: $gettext(
        'To search for service or secondary accounts prefix the username with "a:" (like "a:doe") and for guest accounts prefix the username with "l:" (like "l:doe").'
      )
    }
  ]
}
export const shareSpaceAddMemberHelp = {
  title: $gettext('Add members to this Space'),
  text: $gettext('Enter a name to add people or groups as members to this Space.'),
  list: [
    { text: $gettext('What members can do'), headline: true },
    {
      text: $gettext(
        'Members can see who else has access to this space and can access all files in this space. Read or write permissions can be set by the member’s role such as “Viewer” or “Editor”.'
      )
    },
    { text: $gettext('What Space managers can do'), headline: true },
    {
      text: $gettext(
        'Members with the Manager role can edit all properties and content of a Space, such as adding or removing members, sharing subfolders with non-members, or creating links to share.'
      )
    }
  ],
  readMoreLink: 'https://doc.owncloud.com/webui/next/owncloud_web/web_for_users.html#sharing'
}
export const shareViaLinkHelp = {
  title: $gettext('Choose how access is granted'),
  list: [
    {
      text: $gettext('Only invited people can access'),
      headline: true
    },
    {
      text: $gettext(
        'Account and login is required. Only people from the list "Invited people" can access.'
      )
    },
    {
      text: $gettext('Everyone with the link'),
      headline: true
    },
    {
      text: $gettext(
        'No login required. Everyone with the link can access. If you share this link with people from the list "Invited people", they need to login so that their individual assigned permissions can take effect. If they are not logged-in, the permissions of the link take effect.'
      )
    },
    {
      text: $gettext('Quicklink'),
      headline: true
    },
    {
      text: $gettext(
        'The quicklink is the default link that is copied when you select "Get link” from the context menu.'
      )
    }
  ],
  readMoreLink: 'https://doc.owncloud.com/webui/next/owncloud_web/web_for_users.html#sharing'
}
export const shareViaIndirectLinkHelp = {
  title: $gettext('What are indirect links?'),
  text: $gettext('Indirect links are links giving access by a parent folder.'),
  list: [
    {
      text: $gettext('How to edit indirect links'),
      headline: true
    },
    {
      text: $gettext(
        'Indirect links can only be edited in their parent folder. Click on the folder icon below the link to navgate to the parent folder.'
      )
    }
  ],
  readMoreLink: 'https://doc.owncloud.com/webui/next/owncloud_web/web_for_users.html#sharing'
}
