import React, {useState} from 'react';
import gerb from "../../img/Gerb.png"
import classes from "./NavBar.module.css";
import {Link} from "react-router-dom";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { useTranslation } from 'react-i18next';



const NavBar = () => {
    const [lang2, setLang] = useState('Рус')
    const {t, i18n} = useTranslation();

    const languges = {"Рус": "ru", "Eng": "en"}
    const changeLanguage = (event) =>{
        event.preventDefault();
        let temp = event.target.value
        console.log(languges[temp])
        setLang(temp)
        i18n.changeLanguage(languges[temp])
    }

    return (
        <nav className={classes.nav}>
            <img src={gerb} className={classes.gerb}/>
            <Link to={"/"} >{t('main')}</Link>
            <Link to={"/persons"} > {t('list')}</Link>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">{t('lang')}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value= {lang2}
                    label= {lang2}
                    onChange={changeLanguage}>
                    <MenuItem value={'Рус'}>Рус</MenuItem>
                    <MenuItem value={'Eng'}>Eng</MenuItem>
                </Select>
            </FormControl>
        </nav>

    );
};

export default NavBar;