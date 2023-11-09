<h1 align="center">Welcome to sygnus 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://www.npmjs.com/package/sygnus" target="_blank">
    <img alt="Npm package" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  </a>
</p>

> An library to create fast cruds apis with express and prisma

## Install

```sh
npm install sygnus
```

## 🚀 Usage

You can use [sygnus-cli](https://github.com/Lucasnhso/sygnus-cli) to generate automatically new sygnus module

### Recommended Folder Structure

```
├─ src
│ ├─ database
│ │ ├─ prisma
│ │ ├─ prismaClient.ts
│ ├─ controllers
│ ├─ useCases
│ ├─ repositories
│ │
│ ├─ routes.ts
│ └─ server.ts
```

### Example Repository

```typescript
import { ResourceRepository } from 'sygnus'
import prismaClient from '../database/prismaClient'

export default class ExampleRepository extends ResourceRepository {
  constructor() {
    super(prismaClient, 'user')
  }
}
```

### Example UseCase

```typescript
import ExampleRepository from '../repositories/ExampleRepository'
import { ResourceUseCase } from 'sygnus'

export default class ExampleUseCase extends ResourceUseCase<ExampleRepository> {
  constructor() {
    super(new ExampleRepository())
  }
}
```

### Example Controller

```typescript
import ExampleUseCase from '../useCases/ExampleUseCase'
import { ResourceController } from 'sygnus'

export default class ExampleController extends ResourceController {
  constructor() {
    super(new ExampleUseCase())
  }
}
```

## Author

👤 **Lucas Oliveira**

- Github: [@lucasnhso](https://github.com/lucasnhso)
- LinkedIn: [@lucas-h-oliveira](https://linkedin.com/in/lucas-h-oliveira)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/lucasnhso/sygnus/issues).

## Show your support

Give a ⭐️ if this project helped you!
