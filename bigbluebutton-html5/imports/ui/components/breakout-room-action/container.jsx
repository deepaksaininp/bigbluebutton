import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import Auth from '/imports/ui/services/auth';
import UserContent from './component';
import Service from '/imports/ui/components/user-list/service';
import Users from '/imports/api/users';

const BreakoutRoomActionContainer = props => <UserContent {...props} />;

export default withTracker(() => ({   
  hasBreakoutRoom: Service.hasBreakoutRoom(),
  currentUser: Users.findOne({ userId: Auth.userID }, {
    fields: {
      userId: 1,
      role: 1,
      guest: 1,
      locked: 1,
      presenter: 1,
    },
  })   
}))(BreakoutRoomActionContainer);
