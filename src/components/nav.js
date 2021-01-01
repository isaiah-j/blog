import React, {useState, useEffect} from 'react'
import { navigate } from "gatsby"

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
import {updateBottomAppBarValue} from '../redux/actions'

    const useStyles = makeStyles((theme) => ({
        appBar: {
            backgroundColor: "rgba(255, 255, 255, 0)",
        }
    }));

const NavBar = () => {

    const [value, setValue] = useState(0)

    const classes = useStyles();

    return (
        <div className='navbar-container'>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    showLabels
                    className={classes.appBar}
                >
                    <BottomNavigationAction value='0' onClick={() => navigate('/')} className={value == 0 ? 'selected' : 'icon'} label="Home" icon={<HomeIcon />}></BottomNavigationAction>
                    
                    <BottomNavigationAction value='1' onClick={() => navigate('/portfolio')} className={value == 1 ? 'selected' : 'icon'} label="Portfolio" icon={<GavelRoundedIcon />}></BottomNavigationAction>

                    <BottomNavigationAction value='2' onClick={() => navigate('/contact')} className={value == 2 ? 'selected' : 'icon'} label="Contact" icon={<AddIcCallIcon />} />
                </BottomNavigation>
            
        </div>
    )
}

export default NavBar