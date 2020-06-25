import React from 'react'; 
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from 'react-intl'; 

import SubSidebar from './component';

const SubSidebarContainer = props => <SubSidebar {...props} />



export default withTracker(() => ({
    
}))(injectIntl(SubSidebarContainer));
