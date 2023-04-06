import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// eslint-disable-next-line react/function-component-definition
const Header = () => (
    <AppBar position="absolute" style={{ backgroundColor: '#CC0033', textAlign: 'center' }}>
        <Toolbar
        sx={{
            pr: '24px', // keep right padding when drawer closed
        }}
        >
        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
            marginRight: '36px',
            // eslint-disable-next-line no-restricted-globals
            ...(open() && { display: 'none' }),
            }}
         />
        <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
        >
            Dashboard
        </Typography>
        <IconButton color="inherit">
            <AccountCircleIcon />
        </IconButton>
        </Toolbar>
    </AppBar>
    )

export default Header;
