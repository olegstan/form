import React from 'react';
import {Loader} from '../../styles';
import {ReactComponent as LoadImage} from '../../../assets/loader.svg';

const SearchLoader = ({ loading }) => {
  if (!loading) return null;

  return (
    <Loader id="loader-for-data">
      <div onClick={() => {}}>
        <LoadImage />
      </div>
    </Loader>
  );
};

export default SearchLoader;
