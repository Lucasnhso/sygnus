import UserRepository from '../repositories/UserRepository'
import { ResourceUseCase } from '../../src/lib/Resources/UseCase'

export default class UserUseCase extends ResourceUseCase<UserRepository> {
  constructor() {
    super(new UserRepository())
  }
}
