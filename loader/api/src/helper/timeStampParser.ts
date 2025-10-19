export const timeStampParsed = (): Date => {
  const time = new Date().getTime()
  const timestampUpdate = new Date(time)

  return timestampUpdate
}