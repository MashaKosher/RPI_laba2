import React from 'react';
import {useParams} from "react-router-dom";
import {persons} from "../data/persons";
import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "../components/Slider/Slider";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';

const PersonalPage = () => {
    const params = useParams();
    const {t} = useTranslation();

    const death = "death" + params.id;
    const birth = "birth" + params.id;
    const life = "life" + params.id;

    console.log(params)
    return (
        <div>
            <VerticalTimeline lineColor={'#000000'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#0a0a0a', color: '#fff'}}
                    contentArrowStyle={{borderRight: '1px solid  #fff'}}
                    iconStyle={{background: '#0a0a0a', color: '#0a0a0a', width: '4px', height: '4px'}}
                >
                    <h4 className="vertical-timeline-element-title">{t('birth')}</h4>
                    <p>
                        {/*{personsData[params.id].birth}*/}
                        {t(birth)}
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#0a0a0a', color: '#fff'}}
                    contentArrowStyle={{borderRight: '1px solid  #fff'}}
                    iconStyle={{background: '#0a0a0a', color: '#0a0a0a', width: '4px', height: '4px'}}



                >
                    <h4 className="vertical-timeline-element-title">{t('life')}</h4>
                    <p>
                        {/*{personsData[params.id].live}*/}
                        {t(life)}
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#0a0a0a', color: '#fff'}}
                    contentArrowStyle={{borderRight: '1px solid  #fff'}}
                    iconStyle={{background: '#0a0a0a', color: '#0a0a0a', width: '4px', height: '4px'}}
                >

                    <h4 className="vertical-timeline-element-title">{t('death')}</h4>
                    <p>
                        {/*{personsData[params.id].death}*/}
                        {t(death)}

                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <h3 className="galery-header" style={{textAlign:"center", margin:"10px"}}>{t('gal')}</h3>

            <div className={"galery"}>
                <Slider photo1={persons[params.id].foto1} photo2={persons[params.id].foto2}
                        photo3={persons[params.id].foto3}></Slider>
            </div>

            <div className={"video"}>
                <h1>{t("video")}</h1>
                <iframe width="560" height="315" src={persons[params.id].video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

            </div>

            <div className={"map"}>
                <h1>{t("map")}</h1>
                <iframe
                    src={persons[params.id].map}
                    width="600" height="450" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default PersonalPage;