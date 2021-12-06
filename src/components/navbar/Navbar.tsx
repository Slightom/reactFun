import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Li, NavLink, Ul } from './Elements';

const Navbar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Ul>
                        <Li>
                            <NavLink to='/' exact={true} >
                                Home
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink to='/useform'>
                                useForm
                            </NavLink>
                        </Li>
                        <Li>
                            <NavLink to='/mui'>
                                mui
                            </NavLink>
                        </Li>
                    </Ul>
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Navbar;