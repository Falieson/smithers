import drivers from '../drivers'

export default function findDriver (input, robot) {
  return {
    label: 'Find driver',
    cb ({ chain, appendToOutput }) {
      return chain
        .then(() => {
          appendToOutput(`Locating correct installation driver for '${input}'`)
          return drivers.find(driver => {
            const driverInfo = driver(input, robot)
            appendToOutput(`\n - [${driverInfo.test() ? 'v' : 'x'}] Testing for ${driverInfo.label} driver`)

            return driverInfo.test()
          })
        })
    }
  }
}
