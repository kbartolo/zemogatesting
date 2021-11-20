export const timeElapsed = (lastUpdated) => {
  const lastDate = new Date(lastUpdated)
  const currentDate = new Date()
  const oneDay = 1000 * 60 * 60 * 24
  const diffDate = currentDate.getTime() - lastDate.getTime()
  let vTimeElapsed = Math.round(diffDate / oneDay)
  let format =
    vTimeElapsed === 1 ? `${vTimeElapsed} day` : `${vTimeElapsed} days`
  if (vTimeElapsed > 30 && vTimeElapsed < 365) {
    vTimeElapsed = Math.floor(vTimeElapsed / 30.4)
    format =
      vTimeElapsed === 1 ? `${vTimeElapsed} month` : `${vTimeElapsed} months`
  } else if (vTimeElapsed >= 365) {
    vTimeElapsed = Math.floor(vTimeElapsed / 365)
    format =
      vTimeElapsed === 1 ? `${vTimeElapsed} year` : `${vTimeElapsed} years`
  }
  return format
}

export const limitText = (text, limit) =>
  text.length <= limit ? text : `${text.slice(0, limit)}...`
