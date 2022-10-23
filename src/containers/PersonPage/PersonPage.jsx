import styles from './PersonPage.module.css';
import PropTypes from 'prop-types'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack';
import {getApiResource} from '@utils/network'
import { API_PERSON } from '@constants/api';
import React, {useEffect, useState, Suspense } from 'react'
import { useSelector } from 'react-redux';
import {withErrorApi} from '@hoc-helpers/withErrorApi'
import { useParams } from 'react-router';
import {getPeopleImage} from '@services/getPeopleData'
import UiLoading from '@UI-Kit/UiLoading';


const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms'))

function PersonPage({ setErrorApi }) {

    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state => state.favoriteReducer)

    const {id} = useParams()
    useEffect(() => {
        (async () => {
            
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            setPersonId(id)

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            if(res){
                
                setPersonInfo([
                    {title: 'Height', data: res.height}, 
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                    
                ])

                
                setPersonName(res.name)
                res.films.length && setPersonFilms(res.films)
                setPersonPhoto(getPeopleImage(id))
                setErrorApi(false)
            }
            else {
                setErrorApi(true)
            }
        })()
        
        
    }, [])

  return (
    <>  
        <PersonLinkBack />
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>
                <PersonPhoto 
                    personPhoto={personPhoto} 
                    personName={personName} 
                    personId = {personId}
                    personFavorite = {personFavorite}
                    setPersonFavorite = {setPersonFavorite}
                />
                {personInfo && <PersonInfo personInfo={personInfo}/>}
                {personFilms && (
                        <Suspense fallback = {<UiLoading theme = 'white'/>}>
                            <PersonFilms  personFilms = {personFilms}/>
                        </Suspense>
                    )}
            </div>
        </div>
    </>
  );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
    match: PropTypes.object
}

export default withErrorApi(PersonPage);