import { InboxOutlined } from '@mui/icons-material';
import {
    Box,
    Button,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
    const { closeSideMenu, sidemenuOpen } = useContext(UIContext);

    return (
        <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
            <Box sx={{ width: 250 }}>
                <Box sx={{ p: '5px 10px' }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <InboxOutlined />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
