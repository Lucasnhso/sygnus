import { ResourceRepository } from '../../src/lib/Resources/Repository'
import prismaClient from '../database/prismaClient'

export default class UserRepository extends ResourceRepository {
  constructor() {
    super(prismaClient, 'user')
  }
}
