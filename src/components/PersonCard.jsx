import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {persons} from "../data/persons";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
const PersonCard = ({img, years, temp}) => {

    const {t} = useTranslation();
    const router = useNavigate();
    return (
        <Card sx={{marginTop: "20px", Padding: "10px"}} key={temp}>
            <CardMedia
                component="img"
                height="auto"
                image={img}
                alt="photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center'}}>
                    {t("name" + temp)}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
                    {years}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{textAlign: 'center'}}>
                    {t("description" + temp)}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{textAlign: 'center', margin: "10px"}}>
                    <button onClick={() => router("/persons/" + persons[temp].id)} type="button"
                            className="btn btn-outline-dark">{t('btnInfo')}</button>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PersonCard;