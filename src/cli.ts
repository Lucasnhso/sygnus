import { build } from 'gluegun'

async function run(argv) {
  const cli = build()
    .brand('sygnus')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'sygnus-*', hidden: true })
    .help()
    .version()
    .create()
  const toolbox = await cli.run(argv)

  return toolbox
}

module.exports = { run }
