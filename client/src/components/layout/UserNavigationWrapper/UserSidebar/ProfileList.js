import React from 'react';
import { withStyles, createStyles, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { routes } from '../../../../static/routesUrl';
import LinkWithoutDefaultStyles from '../../../../shared/LinkWithoutDefaultStyles';

const styles = createStyles({
  summaryRoot: {
    padding: '0 12px',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  heading: {},
  small: {
    width: 32,
    height: 32,
    marginRight: '20px'
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  }
});

const ProfileList = ({ classes, user }) => {
  return (
    <Grid>
      <ExpansionPanel>
        <ExpansionPanelSummary
          classes={{ root: classes.summaryRoot }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Grid className={classes.profile}>
            <Avatar alt='Avatar' src={user.avatar} className={classes.small} />

            <Typography className={classes.heading}>{user.name}</Typography>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ padding: 0, width: '100%' }}>
          <List style={{ width: '100%' }}>
            <LinkWithoutDefaultStyles to={routes.userProfile}>
              <ListItem button style={{ width: '100%' }}>
                <ListItemIcon>MP</ListItemIcon>
                <ListItemText primary='My Profile' />
              </ListItem>
            </LinkWithoutDefaultStyles>
            <LinkWithoutDefaultStyles to={routes.createEditProfile}>
              <ListItem button style={{ width: '100%' }}>
                <ListItemIcon>EP</ListItemIcon>
                <ListItemText primary='Edit Profile' />
              </ListItem>
            </LinkWithoutDefaultStyles>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default withStyles(styles)(ProfileList);
