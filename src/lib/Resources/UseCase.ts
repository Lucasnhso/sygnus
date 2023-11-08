import { ResourceRepository } from './Repository'

export class ResourceUseCase<T extends ResourceRepository = ResourceRepository> {
  protected repository: T

  constructor(repository: T) {
    this.repository = repository

    this.load = this.load.bind(this)
    this.loadById = this.loadById.bind(this)
    this.save = this.save.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  public async load() {
    try {
      const result = await this.repository.findMany()
      return result
    } catch (error) {
      throw new Error(String(error))
    }
  }

  public async loadById(id: string) {
    try {
      const result = await this.repository.findById(id)
      return result
    } catch (error) {
      throw new Error(String(error))
    }
  }

  public async save(data: any) {
    try {
      const result = await this.repository.create(data)
      return result
    } catch (error) {
      throw new Error(String(error))
    }
  }

  public async update(id: string, data: any) {
    try {
      const result = await this.repository.update(id, data)
      return result
    } catch (error) {
      throw new Error(String(error))
    }
  }

  public async delete(id: string) {
    try {
      const result = await this.repository.delete(id)
      return result
    } catch (error) {
      throw new Error(String(error))
    }
  }
}
