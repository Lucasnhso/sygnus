import { Request, Response } from 'express'
import ResourceUseCase from './UseCase'

export default class ResourceController<T extends ResourceUseCase = ResourceUseCase> {
  protected useCase: T

  constructor(useCase: T) {
    this.useCase = useCase

    this.index = this.index.bind(this)
    this.show = this.show.bind(this)
    this.store = this.store.bind(this)
    this.update = this.update.bind(this)
    this.destroy = this.destroy.bind(this)
  }

  public async index(req: Request, res: Response) {
    try {
      const result = await this.useCase.load()
      res.status(200).send(result)
    } catch (error) {
      // console.log(error);
      res.status(400).send({ error: error })
    }
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params

    try {
      const result = await this.useCase.loadById(id)
      res.status(200).send(result)
    } catch (error) {
      // console.log(error);
      res.status(400).send({ error: error })
    }
  }

  public async store(req: Request, res: Response) {
    try {
      const result = await this.useCase.save(req.body)
      res.status(201).send(result)
    } catch (error) {
      console.log(error)
      res.status(422).send({ error: error })
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params

    try {
      const result = await this.useCase.update(id, req.body)
      res.status(200).send(result)
    } catch (error) {
      // console.log(error);
      res.status(422).send({ error: error })
    }
  }

  public async destroy(req: Request, res: Response) {
    const { id } = req.params

    try {
      const result = await this.useCase.delete(id)
      res.status(200).send(result)
    } catch (error) {
      // console.log(error);
      res.status(400).send({ error: error })
    }
  }
}
