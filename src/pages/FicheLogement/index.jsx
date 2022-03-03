import { useParams, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Logements from '../../datas/logements.json'

import Tags from '../../components/Tags/index.jsx'
import CollapsibleHalf from '../../components/Collapsible/CollapsibleHalf/index.jsx'
import Rating from '../../components/Rating/index.jsx'

import BannerCarousel from '../../components/Banner/BannerCarousel/index.jsx'

const StyledTitleSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
  }
`

const StyledTitle = styled.div`
  max-width: 70%;
  width: 70%;
  margin-bottom: 5px;
  h1 {
    max-width: 100%;
    padding-right: 30px;
    margin: 0;
    color: ${colors.primary};
    font-size: 36px;
    line-height: 51.34px;
    font-weight: 500;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @media only screen and (max-width: 768px) {
      padding-right: 0px;
      width: 100%;
      font-size: 18px;
      line-height: 25.67px;
    }
  }
  p {
    max-width: 100%;
    padding-right: 30px;
    margin: 0;
    color: ${colors.primary};
    line-height: 25.67px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    @media only screen and (max-width: 768px) {
      padding-right: 0px;
      width: 100%;
      font-size: 14px;
      line-height: 19.96px;
    }
  }
  @media only screen and (max-width: 768px) {
  }
`
const StyledOwner = styled.div`
  max-width: 30%;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  @media only screen and (max-width: 768px) {
    max-width: 50%;
    order: 4;
  }
`

const StyledOwnerName = styled.span`
  max-width: 75%;
  white-space: pre-line;
  color: ${colors.primary};
  line-height: 25.67px;
  font-weight: 500;
  word-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  @media only screen and (max-width: 768px) {
    line-height: 17.11px;
    margin-top: 16px;
  }
`
const StyledOwnerPicture = styled.img`
  margin-left: 10px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  @media only screen and (max-width: 768px) {
    margin-top: 16px;
    margin-left: 10.5px;
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }
`

const StyledDescriptionEquipments = styled.section`
  display: flex;
  flex-direction: row;
  gap: 76px;
  margin: 24px 0;
  @media only screen and (max-width: 768px) {
    margin: 16.5px 0 44.5px 0;
    flex-direction: column;
    gap: 0px;
  }
`

function FicheLogement() {
  const { id } = useParams()

  const equal = (element) => element.id === id
  const position = Logements.findIndex(equal)

  return position === -1 ? (
    <Navigate to="/*" replace={true} />
  ) : (
    <main>
      <BannerCarousel pictures={Logements[position].pictures}></BannerCarousel>

      <StyledTitleSection aria-roledescription="the accomodations's title, owner's name with his photo, location, tags and ratings">
        {Logements[position].title && Logements[position].location ? (
          <StyledTitle>
            <h1>{Logements[position].title}</h1>
            <p>{Logements[position].location}</p>
          </StyledTitle>
        ) : null}

        {Logements[position].host.name && Logements[position].host.picture ? (
          <StyledOwner>
            <StyledOwnerName>
              {Logements[position].host.name.split(' ').join('\n')}
            </StyledOwnerName>
            <StyledOwnerPicture
              src={Logements[position].host.picture}
              alt={'The photo of the owner ' + Logements[position].host.name}
            ></StyledOwnerPicture>
          </StyledOwner>
        ) : null}

        <Tags tags={Logements[position].tags}></Tags>
        <Rating value={Logements[position].rating}></Rating>
      </StyledTitleSection>
      <StyledDescriptionEquipments aria-roledescription="the accomodations's description and equipments">
        <CollapsibleHalf title="Description">
          {Logements[position].description}
        </CollapsibleHalf>
        <CollapsibleHalf title="Équipements">
          {Logements[position].equipments.join('\n')}
        </CollapsibleHalf>
      </StyledDescriptionEquipments>
    </main>
  )
}

export default FicheLogement
