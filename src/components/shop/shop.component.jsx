import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../preview-collection/preview-collection.component';

const ShopPage = () => {
  const state = {
    collections: SHOP_DATA,
  };
  const { collections } = state;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
