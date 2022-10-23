import styles from './SearchPage.module.css';
import PropTypes from 'prop-types'
import UiInput from '@UI-Kit/UiInput'
import { getApiResource } from '@utils/network'
import {debounce} from 'lodash'
import {API_SEARCH} from '@constants/api'
import { useCallback, useEffect, useState } from 'react';
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import {getPeopleId, getPeopleImage} from '@services/getPeopleData'
import SearchPageInfo from '@components/SearchPage/SearchPageInfo'
function SearchPage({setErrorApi}) {

    const [inputSearchValue, setInputSerachValue] = useState('')

    const [people, setPeople] = useState([])

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH + param)

        if(res){
            const poepleList = res.results.map(({name, url}) => {

                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(poepleList)
            setErrorApi(false)
        }
        else{
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResponse('')
    }, [])

    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    )
    

    const handleInputChange = (value) =>{
        setInputSerachValue(value)
        debounceGetResponse(value)
    }

  return (

        <div>
            <h1 className='header__text'>Search</h1>
            <UiInput 
                   classes={styles.input__search}
                   value={inputSearchValue}
                   handleInputChange = {handleInputChange}
                   placeholder = 'Input character`s name'
            />
            <SearchPageInfo people = {people}/>
        </div>

  );
}

SearchPage.propTypes = {
// text: PropTypes.string
    setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);