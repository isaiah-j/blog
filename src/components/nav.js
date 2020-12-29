import React, {useState} from 'react'
import { Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CodeIcon from '@material-ui/icons/Code';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
import HomeIcon from '@material-ui/icons/Home';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import { useNavigate } from "@reach/router"

    const useStyles = makeStyles((theme) => ({
        appBar: {
            backgroundColor: "rgba(255, 255, 255, 0)",
        }
    }));

const NavBar = () => {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <div className='navbar-container'>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.appBar}
            >
                <BottomNavigationAction onClick={() => navigate('/')} className={value == 0 ? 'selected' : 'icon'} label="Home" icon={<HomeIcon />}></BottomNavigationAction>
                
                <BottomNavigationAction onClick={() => navigate('/projects')} className={value == 1 ? 'selected' : 'icon'} label="Projects" icon={<GavelRoundedIcon />}></BottomNavigationAction>

                <BottomNavigationAction onClick={() => navigate('/contact')} className={value == 2 ? 'selected' : 'icon'} label="Contact" icon={<AddIcCallIcon />} />
            </BottomNavigation>
        </div>
    )
}

export default NavBar