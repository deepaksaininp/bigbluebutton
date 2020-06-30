import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import Auth from '/imports/ui/services/auth';
import UserPollAction from './component'; 
import Users from '/imports/api/users';

const UserPollActionContainer = props => <UserPollAction {...props} />;

export default withTracker(() => ({
  pollIsOpen: Session.equals('isPollOpen', true),
  forcePollOpen: Session.equals('forcePollOpen', true),
  currentUser: Users.findOne({ userId: Auth.userID }, {
    fields: {
      userId: 1,
      role: 1,
      guest: 1,
      locked: 1,
      presenter: 1,
    },
  }), 
}))(UserPollActionContainer);
