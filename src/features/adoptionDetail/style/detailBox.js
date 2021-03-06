import styled from 'styled-components'
import { media } from '../../../globalStyle'
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  ${media.md`
    flex-direction: row;
  `}
`

export const DetailImg = styled.div`
  width: 100%;
  background: #c5c5c5;
  display: grid;
  align-content: center;
  ${media.md`
    width: 40%;
  `}
  img {
    max-width: 100%;
    max-height: 100%;
  }
`

export const DetailInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 0;
  ${media.md`
    width: 60%;
    padding-left: 2rem;
    padding-top: 0;
    line-height: 1.5;
  `}
`
