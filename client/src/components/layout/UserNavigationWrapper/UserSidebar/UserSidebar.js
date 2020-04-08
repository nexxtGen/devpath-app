import React from 'react';
import clsx from 'clsx';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WorkIcon from '@material-ui/icons/Work';
import ListItemText from '@material-ui/core/ListItemText';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import SchoolIcon from '@material-ui/icons/School';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ProfileList from './ProfileList';
import LinkWithoutDefaultStyles from '../../../../shared/LinkWithoutDefaultStyles';
import { routes } from '../../../../static/routesUrl';
import { primaryLight } from '../../../../shared/colors';

const drawerWidth = 230;

const styles = createStyles({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    zIndex: 0
  },
  drawerOpen: {
    width: drawerWidth,
    transition: 'width 0.3s, ease-in',
    background: '#F3F3F8'
  },
  drawerClose: {
    transition: 'width 0.3s, ease-in',
    overflowX: 'hidden',
    width: 65,
    background: '#F3F3F8'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8
  },
  content: {
    flexGrow: 1,
    padding: 60
  }
});

const UserSidebar = ({ classes, handleDrawerClose, open, user }) => {
  return (
    <div className={classes.root}>
      {user && (
        <Drawer
          variant='permanent'
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <ProfileList user={user} />
          <Divider />
          <List>
            <LinkWithoutDefaultStyles to={routes.userKanban}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon style={{ color: primaryLight }} />
                </ListItemIcon>
                <ListItemText primary='Kanban' />
              </ListItem>
            </LinkWithoutDefaultStyles>
            <LinkWithoutDefaultStyles to={routes.userLearn}>
              <ListItem button>
                <ListItemIcon>
                  <SchoolIcon style={{ color: primaryLight }} />
                </ListItemIcon>
                <ListItemText primary='Learn Sources' />
              </ListItem>
            </LinkWithoutDefaultStyles>
            <LinkWithoutDefaultStyles to={routes.userFlashcards}>
              <ListItem button>
                <ListItemIcon>
                  <SubtitlesIcon style={{ color: primaryLight }} />
                </ListItemIcon>
                <ListItemText primary='Flashcards' />
              </ListItem>
            </LinkWithoutDefaultStyles>
            <LinkWithoutDefaultStyles to={routes.userJobs}>
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon style={{ color: primaryLight }} />
                </ListItemIcon>
                <ListItemText primary='User Jobs' />
              </ListItem>
            </LinkWithoutDefaultStyles>
          </List>
        </Drawer>
      )}
    </div>
  );
};

export default withStyles(styles)(UserSidebar);
