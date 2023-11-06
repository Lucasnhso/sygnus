import { GluegunToolbox } from 'gluegun'

function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
function lowerFirstLetter(value: string) {
  return value.charAt(0).toLowerCase() + value.slice(1)
}

module.exports = {
  name: 'generate',
  describe: 'Create a sygnus modules',
  alias: ['g'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { success, error },
    } = toolbox

    if (!parameters.first) {
      error('Module must be specified')
      return
    }
    if (!parameters.second) {
      error('Module name must be specified')
      return
    }

    const module = parameters.first
    const name = lowerFirstLetter(parameters.second)
    const pCaseName = capitalizeFirstLetter(name)

    if (module === 'resource') {
      let target = `src/repositories/${pCaseName}Repository.ts`
      await generate({
        template: 'repository.ts.ejs',
        target,
        props: { pCaseName, name },
      })
      success(`Generated repository file at ${target}`)

      target = `src/useCases/${pCaseName}UseCase.ts`
      await generate({
        template: 'useCase.ts.ejs',
        target,
        props: { pCaseName, name },
      })
      success(`Generated usecase file at ${target}`)

      target = `src/controller/${pCaseName}Controller.ts`
      await generate({
        template: 'controller.ts.ejs',
        target,
        props: { pCaseName, name },
      })
      success(`Generated controller file at ${target}`)
    } else if (module === 'repository') {
      const target = `src/repositories/${pCaseName}Repository.ts`
      await generate({
        template: 'repository.ts.ejs',
        target,
        props: { pCaseName, name },
      })

      success(`Generated file at ${target}`)
    } else if (module === 'usecase') {
      const target = `src/useCases/${pCaseName}UseCase.ts`

      await generate({
        template: 'useCase.ts.ejs',
        target,
        props: { pCaseName, name },
      })
      success(`Generated file at ${target}`)
    } else if (module === 'controller') {
      const target = `src/controller/${pCaseName}Controller.ts`
      await generate({
        template: 'controller.ts.ejs',
        target,
        props: { pCaseName, name },
      })
      success(`Generated file at ${target}`)
    } else {
      error('Inexistent module')
    }
  },
}
