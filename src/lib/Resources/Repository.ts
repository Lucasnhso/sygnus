import { PrismaClient, Prisma } from '@prisma/client'

export default class ResourceRepository {
  protected model
  protected prismaClient: PrismaClient

  constructor(prismaClient: PrismaClient, modelName: Prisma.ModelName) {
    this.prismaClient = prismaClient
    this.model = this.prismaClient[modelName]
    this.findMany = this.findMany.bind(this)
    this.create = this.create.bind(this)
    this.findById = this.findById.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  public async findMany() {
    return await this.model.findMany()
  }

  public async findById(id: string) {
    return await this.model.findUnique({
      where: {
        id
      }
    })
  }
  public async create(data: any) {
    return await this.model.create({
      data: {
        ...data
      }
    })
  }

  public async update(id: string, data: any) {
    return await this.model.update({
      where: { id },
      data: {
        ...data
      }
    })
  }

  public async delete(id: string) {
    return await this.model.delete({
      where: { id }
    })
  }
}
