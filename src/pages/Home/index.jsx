import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

import Logements from '../../datas/logements.json'

import BannerImageTitre from '../../components/Banner/BannerImageTitre/index.jsx'
import Card from '../../components/Card/index.jsx'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 63px 0;
  @media only screen and (max-width: 768px) {
    margin: 16px 0;
  }
`

const CardsContainer = styled.div`
  background-color: ${colors.bgCards};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 43px;
  padding: 56px 50px;
  box-sizing: border-box;
  gap: 60px;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    background-color: ${colors.bg};
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    padding: 22px 0px;
    box-sizing: border-box;
    gap: 20px;
  }
`

function Home() {
  return (
    <main>
      <HomeContainer>
        <BannerImageTitre></BannerImageTitre>
        <CardsContainer>
          {Logements &&
            Logements.map((result, index) => (
              <Card
                key={`id-${result.id}`}
                id={result.id}
                picture={result.cover}
              >
                {result.title}
              </Card>
            ))}
        </CardsContainer>
      </HomeContainer>
    </main>
  )
}

export default Home
