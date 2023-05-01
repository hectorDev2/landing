import React from 'react'
import { Team } from '../../interfaces'
import { TeamCard } from './teamCard'

const getTeam = async () => {
  const data = await fetch(
    'https://randomuser.me/api/?results=10&seed=hector'
  ).then(res => res.json())
  return data.results
}
async function Team () {
  const teams = await getTeam()

  return (
    <div className='container py-4'>
      <div className='text text-center'>
        <h2>Our Team Members</h2>
        <p>Team of specialized professionals working with Feha LLC</p>
      </div>
      <div className='gridTeam d-flex flex-wrap justify-content-between'>
        {teams?.map((team: Team) => (
          <TeamCard key={team.email} team={team} />
        ))}
      </div>
    </div>
  )
}

const GetTeam = () => {
  return <>{Team()}</>
}

export default GetTeam
