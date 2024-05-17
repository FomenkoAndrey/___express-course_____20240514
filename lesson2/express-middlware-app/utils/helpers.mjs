import chalk from 'chalk'

export const log = (...args) => {
  const color = args.pop()

  if (typeof chalk[color] !== 'function') {
    console.error(`Invalid color provided: ${color}`)
    return
  }

  const message = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ')

  console.log(chalk[color](message))
}
