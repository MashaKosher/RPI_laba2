import React, {useMemo} from 'react';
import "../styles/App.css"
import spaik from "../img/spaik.jpg"
import spaik2 from "../img/spaik2.jpg"
import spaik3 from "../img/spaik3.jpg"
import spaik4 from "../img/spaik4.jpg"

import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

import {persons} from "../data/persons";
import {useTranslation} from "react-i18next";
import PersonCard from "../components/PersonCard";

const About = () => {

    const {t} = useTranslation();

    const temp = useMemo(()=>{
            return Math.floor(Math.random() * 5)
    },[])




    return (
        <div className={"FirstPage"}>
            <section className={"second"}>
                <p className={"about"}>{t('about')}</p>
                <p>
                    {t('aboutInfo')}
                </p>
            </section>

            <PersonCard years={persons[temp].years} temp={temp} img={persons[temp].image}></PersonCard>

            <footer className={"footer"}>
                <div className={"foot1"}>
                    <Card>
                        <img src={spaik}/>
                        <CardContent>
                            <Typography><a href={"https://github.com/MashaKosher"}>MashaKosher</a></Typography>
                            <p>front-dev</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <img src={spaik2}/>
                        <CardContent>
                            <Typography><a href={"https://github.com/strCarne"}>StrCarne</a></Typography>
                            <p>Back-dev</p>
                        </CardContent>
                    </Card>
                </div>
                <div className={"foot2"}>
                    <Card>
                        <img src={spaik4}/>
                        <CardContent>
                            <Typography><a href={"https://github.com/krispy-tuff"}>Krispy-tuff</a></Typography>
                            <p>Designer</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <img src={spaik3}/>
                        <CardContent>
                            <Typography><a href={"https://github.com/PimpGangster1337"}>PimpGangster</a></Typography>
                            <p>PM</p>
                        </CardContent>
                    </Card>
                </div>

            </footer>
        </div>
    );
};

export default About;