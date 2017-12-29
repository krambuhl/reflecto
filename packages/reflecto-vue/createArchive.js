const findIndex = require('lodash.findindex')

const getFile = (files, path) => {
  const contents = files[path].default || files[path]
  const directory = path.substr(0, path.lastIndexOf('/'))
  const folder = directory.substr(directory.lastIndexOf('/') + 1)
  const filename = path.substr(path.lastIndexOf('/') + 1)

  return {
    path,
    directory,
    folder,
    filename,
    contents
  }
}

const groupCollections = (list, file, _, fileList) => {
  const directoryFiles = fileList.filter(f => f.directory === file.directory)
  const hasReadme = findIndex(directoryFiles, f => f.filename === 'README.md') >= 0
  const hasComponent = findIndex(directoryFiles, f => f.filename === `${file.folder}.vue`) >= 0

  // if there is a readme and component we consider it a collection
  if (hasReadme && hasComponent) {
    const { directory, folder } = file
    let index = findIndex(list, { directory })

    if (index === -1) {
      index = list.length
      list.push({
        isCollection: true,
        directory,
        folder,
        files: []
      })
    }

    list[index].files.push(file)
    return list
  }

  // otherwise it is a page
  list.push(Object.assign({}, file, {
    isPage: true,
    pageName: file.filename.substr(0, file.filename.lastIndexOf('.'))
  }))

  return list
}

// transforms an file object into an array
module.exports = (files) =>
  Object.keys(files)
    .map(path => getFile(files, path))
    .reduce(groupCollections, [])
