import styled from 'styled-components'
import colors from '../../utils/style/colors.js'

import BannerImage from '../../components/Banner/BannerImage/index.jsx'
import CollapsibleFull from '../../components/Collapsible/CollapsibleFull/index.jsx'

const AProposContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 63px 0 201px 0;
  @media only screen and (max-width: 768px) {
    margin: 16px 0 168px 0;
  }
`

const CollapsibleContainer = styled.div`
  background-color: ${colors.bg};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 43px;
  box-sizing: border-box;
  gap: 50px;
  border-radius: 25px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-top: 0px;
    padding: 22px 0px;
    box-sizing: border-box;
    gap: 20px;
  }
`

function APropos() {
  return (
    <main>
      <AProposContainer>
        <BannerImage></BannerImage>
        <CollapsibleContainer>
          <CollapsibleFull title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </CollapsibleFull>
          <CollapsibleFull title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </CollapsibleFull>
          <CollapsibleFull title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </CollapsibleFull>
          <CollapsibleFull title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </CollapsibleFull>
        </CollapsibleContainer>
      </AProposContainer>
    </main>
  )
}

export default APropos
