import { Resource } from 'web-client'

export const files: Resource[] = [
  {
    id: '1',
    fileId: '1',
    name: 'folder',
    extension: '',
    path: '/',
    type: 'folder',
    isFolder: true,
    mdate: 'Mon, 12 Jul 2021 11:04:33 GMT',
    size: '0',
    indicators: [],
    permissions: 'RDNVW',
    starred: false,
    etag: '"89128c0e8122002db57bd19c9ec33004"',
    shareTypes: [],
    downloadURL: '',
    ownerDisplayName: 'admin',
    ownerId: 'admin',
    canDownload: () => true,
    isReceivedShare: () => false,
    canBeDeleted: () => false,
    canRename: () => false,
    canShare: () => false,
    canDeny: () => false,
    getDomSelector: jest.fn()
  },
  {
    id: '2',
    fileId: '2',
    name: 'someFile.txt',
    extension: 'txt',
    path: '/',
    type: 'file',
    isFolder: false,
    mdate: 'Mon, 12 Jul 2021 11:04:33 GMT',
    size: '12',
    indicators: [],
    permissions: 'RDNVW',
    starred: false,
    etag: '"99128c0e8122002db57bd19c9ec33004"',
    shareTypes: [],
    downloadURL: '',
    ownerDisplayName: 'admin',
    ownerId: 'admin',
    canDownload: () => true,
    isReceivedShare: () => false,
    canBeDeleted: () => true,
    canRename: () => true,
    canShare: () => true,
    canDeny: () => false,
    getDomSelector: jest.fn()
  }
]
