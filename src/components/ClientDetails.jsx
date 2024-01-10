import PropTypes from 'prop-types';

export const ClientDetails = ({ title, client }) => {

  const { name: nameClient, lastname, address:{ country, city, street, number } } = client;
          //renombrando                //en este caso es una desustruracion anidada

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">
          {nameClient} / {lastname}
        </li>
        <li className="list-group-item"></li>
        <li className="list-group-item">
          {country} / {city}
        </li>
        <li className="list-group-item">
          {street} {number}
        </li>
      </ul>
    </>
  );
}

ClientDetails.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
}