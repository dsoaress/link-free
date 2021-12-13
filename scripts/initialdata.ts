import fs from 'fs'

import { fetchData } from '../src/services/fetchData'

async function initialdata() {
  const dataDir = './temp'
  const data = await fetchData()

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir)
  }

  fs.writeFileSync(`${dataDir}/data.json`, JSON.stringify(data, null, 2))
}

initialdata().catch(e => {
  console.error(e)
  process.exit(1)
})
