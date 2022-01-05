[![test](https://github.com/cardinalby/download-release-asset-action/actions/workflows/test.yml/badge.svg)](https://github.com/cardinalby/download-release-asset-action/actions/workflows/test.yml)

## Download release asset by id

Downloads a single release asset and saves it under specified name. Doesn't do additional 
API requests, just downloads the file. If dirs structure doesn't exist, it will be created.

## Example

```yaml
- uses: cardinalby/download-release-asset-action@v1
  with:
    token: ${{ secrets.GITHUB_TOKEN }}  
    assetId: '53281957'
    targetPath: 'path/to/downloaded_file.zip'
```

## Inputs

### `token` **Required**
GitHub token to access releases. Normally, it's `${{ secrets.GITHUB_TOKEN }}`

### `assetId` **Required**
Integer number that denotes asset id.

### `targetPath` **Required**
Path for target file. If dirs structure doesn't exist, it will be created.

### `repo` Default: _empty_
Repository name in format 'owner/name'. Current repo will be used if not specified.