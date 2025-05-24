import React from 'react';
import product from '../product';

export const Image = () => (
  <img src={product.image} alt={product.name} style={{ width: '100%' }} />
);
