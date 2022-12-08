import { DateTime } from 'luxon'
import { Share } from 'web-client/src/helpers/share'
import { Store } from 'vuex'
import { clientService } from 'web-pkg/src/services'
import copyToClipboard from 'copy-to-clipboard'

interface CreateQuicklink {
  store: Store<any>
  storageId?: any
  resource: any
  password?: string
  $gettext: (string) => string
}

export const createQuicklink = async (args: CreateQuicklink): Promise<Share> => {
  const { resource, store, password, $gettext } = args
  const params: { [key: string]: unknown } = {
    name: $gettext('Quicklink'),
    permissions: 1,
    quicklink: true
  }

  if (password) {
    params.password = password
  }

  const expirationDate = store.state.user.capabilities.files_sharing.public.expire_date

  if (expirationDate.enforced) {
    params.expireDate = DateTime.now()
      .plus({ days: parseInt(expirationDate.days, 10) })
      .endOf('day')
      .toISO()
  }

  // needs check for enforced password for default role (viewer?)
  // and concept to what happens if it is enforced

  params.spaceRef = resource.fileId || resource.id

  const link = await store.dispatch('Files/addLink', {
    path: resource.path,
    client: clientService.owncloudSdk,
    params,
    storageId: resource.fileId || resource.id
  })

  copyToClipboard(link.url)

  await store.dispatch('showMessage', {
    title: $gettext('The quicklink has been copied to your clipboard.')
  })

  return link
}
