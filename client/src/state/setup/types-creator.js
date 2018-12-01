export default function typesCreator(namespace, ...constants) {
  return Object.freeze(
    constants.reduce((acc, type) => {
      return {
        ...acc,
        [type]: `${namespace}/${type}`
      }
    }, {})
  )
}
