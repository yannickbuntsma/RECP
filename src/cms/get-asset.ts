import client from './contentful-client'

export default (assetId: string) => {
  return client
    .getAsset(assetId)
    .then((asset) => `${asset.fields.file.url}?fm=jpg&fl=progressive`)
}
