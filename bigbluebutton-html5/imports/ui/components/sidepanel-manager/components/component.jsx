import React, { PureComponent } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BreakoutRoomActionContainer from './../../breakout-room-action/container';
import UserPollActionContainer from './../../userpoll-action/container';
import PublicUserActionContainer from '../../public-chat/container';

import { styles } from "./styles";

export default class SubSidebar extends PureComponent {
    render() {
        const { hideSubMenuHandler } = this.props;
        return (
            <div className={styles.subSidebarBox} onClick={() => hideSubMenuHandler()}>
                <div className={styles.subSidebarContent}>
                    <div className={styles.gutter} onClick={() => hideSubMenuHandler()}>
                        <BreakoutRoomActionContainer />
                    </div>
                    <div className={styles.gutter} onClick={() => hideSubMenuHandler()}>
                        <UserPollActionContainer />
                    </div> 
                    <div className={styles.gutter} onClick={() => hideSubMenuHandler()}>
                        <Tooltip title="Public Chat" className={styles.icon}>
                            <PublicUserActionContainer />
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title="Share Notes" className={styles.icon} onClick={() => hideSubMenuHandler()}>
                            <IconButton>
                                <PostAddIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}
