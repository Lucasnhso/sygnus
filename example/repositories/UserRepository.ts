import BaseRepository from '../../src/lib/Resources/Repository'
import prismaClient from '../database/prismaClient'

export default class UserRepository extends BaseRepository {
  constructor() {
    super(prismaClient, 'user')
  }
}
