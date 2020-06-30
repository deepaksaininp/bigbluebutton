import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CaptionsService from './service';
import Captions from './component';

const CaptionsContainer = props => (
  <Captions {...props} />
);

export default withTracker(() => {
  const {
    padId,
    revs,
    data,
  } = CaptionsService.getCaptionsData();
  console.log('padId')
  console.log(padId)

  return {
    padId,
    revs,
    data,
  };
})(CaptionsContainer);
