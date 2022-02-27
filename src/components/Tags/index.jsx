import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'

const StyledTagsContainer = styled.p`
  width: 70%;
  margin: 0px;
  display: flex;
  align-items: end;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const StyledTag = styled.span`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  background-color: ${colors.primary};
  color: #fff;
  font-size: 14px;
  max-width: 115px;
  height: 25px;
  line-height: 142.6%;
  border-radius: 10px;
  padding: 3px 10px 2px 10px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    border-radius: 5px;
    font-size: 10px;
    width: 84px;
    height: 18px;
  }
`

function Tags(props) {
  const tags = props.tags

  return (
    <StyledTagsContainer aria-roledescription="the tags">
      {tags &&
        tags.length > 0 &&
        tags.map((result, index) => (
          <StyledTag key={`index-tags-${index}-${result}`}>{result}</StyledTag>
        ))}
    </StyledTagsContainer>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

Tags.defaultProps = {
  tags: [],
}

export default Tags
