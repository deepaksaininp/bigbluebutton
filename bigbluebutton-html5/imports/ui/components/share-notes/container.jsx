import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ShareNotes from './component';

const ShareNotesContainer = props => <ShareNotes {...props} />;

export default withTracker(() => ({

}))(ShareNotesContainer);
