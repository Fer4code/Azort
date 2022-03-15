import React from 'react'
import IG from '../img/ig.svg'
import './Styles.css'
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography'




export default function Insta() {
    return (
        <>
            <div style={{marginBottom: '2%'}}>
                <Typography variant="h6" className='Instatext' onClick={event => (window.location.href = 'https://www.instagram.com/grupo_azort/')}
                >Síguenos en nuestro instagram, @Grupo_Azort</Typography>
                <img
                    src={IG}
                    className='iglogo'
                    onClick={event => (window.location.href = 'https://www.instagram.com/grupo_azort/')}
                    alt='Instagram'
                />
            </div>

        </>
    )
}