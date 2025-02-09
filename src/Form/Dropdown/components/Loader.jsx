import React from 'react';
import {StyledLoader} from './styles';
import {ReactComponent as LoadImage} from '../../../assets/loader.svg';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <StyledLoader id="loader-for-data">
      <div onClick={() => {}}>
        <LoadImage />
      </div>
    </StyledLoader>
  );
};

export default Loader;
