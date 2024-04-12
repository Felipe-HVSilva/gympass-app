import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymUseCase } from './search-gyms.use-case'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms.use-case'

let gymRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymRepository)
  })

  it('should be able to fetch nearby gym', async () => {
    await gymRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -23.540018,
      longitude: -46.1963264,
    })

    await gymRepository.create({
      title: 'Far gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.540018,
      userLongitude: -46.1963264,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
