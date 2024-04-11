import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { FetchUserCheckInHistoryUseCase } from './fetch-user-check-ins-history.use-case'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymUseCase } from './search-gyms.use-case'

let gymRepository: InMemoryGymsRepository
let sut: SearchGymUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymsRepository()
    sut = new SearchGymUseCase(gymRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymRepository.create({
      title: 'Javascript Gym',
      description: null,
      phone: null,
      latitude: -23.540018,
      longitude: -46.1963264,
    })

    await gymRepository.create({
      title: 'Typescript Gym',
      description: null,
      phone: null,
      latitude: -23.540018,
      longitude: -46.1963264,
    })

    const { gyms } = await sut.execute({
      query: 'Javascript',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Javascript Gym' })])
  })

  it.skip('should be able to fetch paginated gym search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymRepository.create({
        title: `Javascript Gym ${i}`,
        description: null,
        phone: null,
        latitude: -23.540018,
        longitude: -46.1963264,
      })
    }

    const { gyms } = await sut.execute({
      query: 'JavaScript',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Javascript Gym 21' }),
      expect.objectContaining({ tiele: 'Javascript Gym 22' }),
    ])
  })
})
