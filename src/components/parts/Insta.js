import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
import Feed from "react-instagram-authless-feed"
import IG from '../img/ig.svg'
import './Styles.css'
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography'




export default function Insta() {
    return (
        <>
            <div>
                <Typography variant="h4" className='Instatext' onClick={event => (window.location.href = 'https://www.instagram.com/ql_grupo_azortca/')}
                >Síguenos en nuestro instagram, @ql_grupo_azortca</Typography>
                <img
                    src={IG}
                    className='iglogo'
                    onClick={event => (window.location.href = 'https://www.instagram.com/ql_grupo_azortca/')}
                    alt='Instagram'
                />
            </div>

            <InstagramEmbed
  clientAccessToken='805845400042106|4b242985700a225287bfb40021b88015'
  url='https://www.instagram.com/servilecvalencia/'
  maxWidth={375}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
        </>
    )
}