import { Team } from '@/app/interfaces'
import Image from 'next/image'
import React from 'react'
import style from './style.module.css'
interface PropTeamCard {
  key: any
  team: Team
}

export const TeamCard = ({ key, team }: PropTeamCard) => {
  return (
    <div
      key={key}
      className={`${style.containerCard} cardTeam position-relative`}
    >
      <Image
        src={team.picture.large}
        width={300}
        height={300}
        alt={team.name.first}
        priority
      />
      <div className={`${style.contain} cardTeam-body position-absolute`}>
        <h5>
          {team.name.first} {team.name.last}
        </h5>
        <p>{team.email}</p>
      </div>
    </div>
  )
}
