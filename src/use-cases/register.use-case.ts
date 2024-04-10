import { prisma } from '@/lib/prisma'
import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExists } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
  email: string
  name: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExists()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
