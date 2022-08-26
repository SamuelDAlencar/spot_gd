import PropTypes from 'prop-types';
import React from 'react';
import StyledCard from './style';
import FormattedCurrency from '../FormattedPrice';
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

// Creditos da imagem: https://www.pngwing.com/en/free-png-zytve
import foodIcon from '../../images/food.jpg';
// Creditos da imagem: https://flyclipart.com/gps-location-map-pin-pin-restaurant-icon-restaurant-icon-png-237324
import restaurantIcon from '../../images/restaurant.jpg';

export default function ItemCard({ name, address, phone, description, price }) {
  return (
    price
      ? (
        <StyledCard>
          <img src={foodIcon} />
          <section>
            <p className='card_name'>{name}</p>
            <p className='card_description'>{description}</p>
            <FormattedCurrency price={price} />
          </section>
        </StyledCard>)
      : (
        <StyledCard>
          <img src={restaurantIcon} />
          <section>
            <p className='card_name'>{name}</p>
            <p className='card_address'>
              <IoLocationSharp
                className='card_icon'
              />
              {address}
            </p>
            <a className='card_phone'>
              <BsFillTelephoneFill
                className='card_icon'
              />
              {phone}
            </a>
          </section>
        </StyledCard>
      )
  );
}

ItemCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  address: PropTypes.string,
  phone: PropTypes.string
};
