import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import avatar from '../static/profile.png'

const FaceStyle = styled.div`
  display: flex;
  justify-content: center;
`
export const Face = () => {
  return (
    <FaceStyle>
      <Image
        style={{ width: 240 }}
        src={avatar}
        alt='transon'
      />
    </FaceStyle>
  )
}
