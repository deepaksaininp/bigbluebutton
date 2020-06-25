import React from 'react'; 
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from 'react-intl';
import PollDropdown from './component';

const PollDropdownContainer = props => <PollDropdown {...props} />;

export default withTracker(() => ({
  activePoll: Session.get('pollInitiated') || false,
}))(injectIntl(PollDropdownContainer));
