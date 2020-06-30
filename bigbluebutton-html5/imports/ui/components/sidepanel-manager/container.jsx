import React from 'react';  
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from '../actions-bar/desktop-share/node_modules/react-intl'; 

import Sidepanel from './component';

const SidepanelContainer = props => <Sidepanel {...props} />



export default withTracker(() => ({ 
}))(injectIntl(SidepanelContainer));
