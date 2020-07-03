import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Auth from '/imports/ui/services/auth';
import UserCaptionsNote from './component';
import Users from '/imports/api/users';

const UserCaptionNoteContainer = props => <UserCaptionsNote {...props} />;

export default withTracker(() => ({
    currentUser: Users.findOne({ userId: Auth.userID }, {
        fields: {
            userId: 1,
            role: 1,
            guest: 1,
            locked: 1,
            presenter: 1,
        },
    }),
}))(UserCaptionNoteContainer);
