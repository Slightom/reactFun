import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Li, NavLink, Ul } from './Elements';

const Navbar = () => {

    return (
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
    )
}

export default Navbar;