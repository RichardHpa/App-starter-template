import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  heading: {
    textDecoration: 'none',
    flexGrow: 1,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  container: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <Typography
            className={classes.heading}
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            App Home
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
    </>
  );
}
