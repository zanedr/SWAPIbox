import React from 'react';
import PropTypes from 'prop-types';

const Card = ( {cardData, clickOnFav} ) => {
  // let favoriteClass ='star-icon';

  const cardContentsArr = []
  Object.keys(cardData).forEach( (property, i) => {
    if(cardData[property] !== null && property !== 'Type' && property !== 'Name') {
      cardContentsArr.push(<h3 key={i}>{ property }: { cardData[property] }</h3>)
    }
  })
  // console.log(cardContentsArr);

  const handleFavoriteClick = (targetElement) => {
    targetElement.classList.toggle('favorited')
    clickOnFav(cardData, targetElement)
  }

  return(
    <div className='card-container'>
      <div className='card-header'>
        <div className='card-title'><h2>{ cardData.Name }</h2></div>
          <div  className='star-icon'
                onClick={ e => { handleFavoriteClick(e.target) } }>
          </div>
      </div>
      <div className='card-contents'>{ cardContentsArr }</div>
    </div>
  )

}

Card.propTypes = {
  cardObj: PropTypes.object
}

export default Card
