import React, {useEffect, useState} from 'react';
import {persons} from "../data/persons";
import PersonCard from "../components/PersonCard";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


const ListPage = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [personsList, setPersonsList] =useState(persons)

    const filterPer = (searchText, listPerson) =>{
        if (!searchText){
            return listPerson
        }
        return listPerson.filter(({name})=> name.toLowerCase().includes(searchText.toLowerCase()))
    }

    useEffect(()=> {
        const filtertedList = filterPer(searchQuery, persons)
        setPersonsList(filtertedList)
    }, [searchQuery])

    const {t} = useTranslation();
    const router = useNavigate();

    return (
        <div className={"ListPage"}>
            <input value = {searchQuery} onChange = {event => setSearchQuery(event.target.value)}/>

            {personsList.map((person)=>
                <Card sx={{marginTop: "20px", Padding: "10px"}} key={person.id}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={person.image}
                        alt="photo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{textAlign: 'center'}}>
                            {t("name" + person.id)}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
                            {person.years}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{textAlign: 'center'}}>
                            {t("description" + person.id)}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{textAlign: 'center', margin: "10px"}}>
                            <button onClick={() => router("/persons/" + person.id)} type="button"
                                    className="btn btn-outline-dark">{t('btnInfo')}</button>
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default ListPage;