import React from 'react';
import { Loader } from '../newstyles';
import { ReactComponent as LoadImage } from '../../assets/loader.svg';
const SearchLoader = ({
  loading
}) => {
  if (!loading) return null;
  return /*#__PURE__*/React.createElement(Loader, {
    id: "loader-for-data"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => {}
  }, /*#__PURE__*/React.createElement(LoadImage, null)));
};
export default SearchLoader;