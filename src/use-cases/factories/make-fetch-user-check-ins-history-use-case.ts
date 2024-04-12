import { FetchUserCheckInHistoryUseCase } from '../fetch-user-check-ins-history.use-case'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeFetchCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchUserCheckInHistoryUseCase(checkInsRepository)

  return useCase
}
