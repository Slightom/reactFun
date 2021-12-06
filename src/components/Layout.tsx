import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, styled, Typography } from '@mui/material';
import CSS from 'csstype';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Page = styled('div')`
    background: yellow;
    width: 100%;
`;

const LayoutCnt = styled('div')`
    display: flex;
`;

const styles = {
    drawer: {
        width: drawerWidth,
        ".MuiDrawer-paper": {
            width: drawerWidth,
        },
    },
    active: {
        background: '#f4f4f4'
    }
};

interface IMenuItem {
    text: string;
    icon: any;
    path: string;
}

const Layout = ({ children }: any) => {
    const history = useHistory();
    const location = useLocation();

    const menuItems: IMenuItem[] = [
        {
            text: 'Use Form',
            icon: <SubjectOutlined color='secondary' />,
            path: '/useform'
        },
        {
            text: 'Mui',
            icon: <AddCircleOutlined color='secondary' />,
            path: '/mui'
        }
    ]

    return (
        <LayoutCnt>
            <Drawer
                sx={styles.drawer}
                variant='permanent'
                anchor='left'
            >
                <div>
                    <Typography variant='h5'>
                        Ninja notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(mi => (
                        <ListItem
                            button
                            key={mi.text}
                            sx={location.pathname === mi.path ? styles.active : null}
                            onClick={() => history.push(mi.path)}
                        >
                            <ListItemIcon>{mi.icon}</ListItemIcon>
                            <ListItemText primary={mi.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Page>
                {children}
            </Page>
        </LayoutCnt>
    )
}

export default Layout;