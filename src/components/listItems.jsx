import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import {HomeOutlined, EditNoteOutlined, SupervisorAccountOutlined, AddCardOutlined, PostAddOutlined, BackupTableOutlined, InstallMobileOutlined} from "@mui/icons-material";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Loan Application" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <EditNoteOutlined />
            </ListItemIcon>
            <ListItemText primary="Loan Underwriting" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Collection" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="CRM" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <SupervisorAccountOutlined />
            </ListItemIcon>
            <ListItemText primary="Administration" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PostAddOutlined />
            </ListItemIcon>
            <ListItemText primary="Debt Management" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BackupTableOutlined />
            </ListItemIcon>
            <ListItemText primary="Bridge Loan" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <InstallMobileOutlined />
            </ListItemIcon>
            <ListItemText primary="Mobile App" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                < AddCardOutlined />
            </ListItemIcon>
            <ListItemText primary="General Setup" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
        </ListItemButton>
    </React.Fragment>
);

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItemButton>
//     </React.Fragment>
// );