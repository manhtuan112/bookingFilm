import React, { useCallback, useState } from 'react';
import Input from '../input';
import { useNavigate } from 'react-router-dom';
import { category } from './../../api/tmdbApi';
import { useEffect } from 'react';
import Button from '../button';
import './movie-grid.scss'

// props vaf state khong duoc cung ten

const MovieSearch = (props) => {
    const nav = useNavigate()
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    
    useEffect(()=>{
        setKeyword('')
    },[props.category])

    const goToSearch = useCallback(()=>{
        if(keyword.trim().length > 0){
            nav(`/${category[props.category]}/search/${keyword}`)
        }
    }, [keyword, props.category, nav])

    useEffect(() => {
        const enterEvent = e =>{
            e.preventDefault();
            if(e.keyCode === 13){
                goToSearch()
            }
        }
        document.addEventListener('keyup', enterEvent)

        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
        
    }, [keyword, goToSearch]);
    return (
        <div className='movie-search'>
            <Input type='text' placeholder={`Enter ${props.category === 'tv' ? 'TV Series' : `${props.category}`}`} value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
            <Button className='small' onClick={goToSearch}>Search</Button>
        </div>
    );
}

export default MovieSearch;
