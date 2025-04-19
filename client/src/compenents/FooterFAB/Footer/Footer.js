
import React, { Fragment } from 'react';
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';
import { Box } from '@mui/material';
import classes from './Footer.module.css';
import { SERVER_LINK } from '../../../dev-server-link';

const Footer = () => {

    const propagate = name => {
        fetch(`${SERVER_LINK}/api/experimental/log`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ msg: `Visited ${name}` }),
            credentials: 'include',
        }).catch(error => console.error(error));
    };

    const clickHandler = (link, name) => {
        window.open(link, '_blank');
        propagate(name);
    };

    return (
        <Fragment>
            <Box sx={{ borderBottom: '1.5px solid rgba(0,0,0,0.1)' }}>
                <span onClick={() => clickHandler("https://www.instagram.com/agarwal.haarsh", 'Instagram')}>
                    <Instagram className={classes.logos} />
                </span>
                <span onClick={() => clickHandler("https://github.com/Harsh8084", 'GitHub')}>
                    <GitHub className={classes.logos} />
                </span>
                <span onClick={() => clickHandler("https://www.linkedin.com/in/agarwalharsh9/", 'LinkedIn')}>
                    <LinkedIn className={classes.logos} />
                </span>
                <span onClick={() => clickHandler("mailto:harshagarwal9771@gmail.com", 'Mail')}>
                    <Mail className={classes.logos} />
                </span>
            </Box>
            <div>
                Copyright© {new Date().getFullYear()} All rights reserved
            </div>
            <div>
                Made with ❤️ by{' '}
                <a
                    onClick={() => propagate("Name-LinkedIn")}
                    style={{ textDecoration: 'none' }}
                    href="https://www.linkedin.com/in/agarwalharsh9/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Harsh Agarwal
                </a>
            </div>
            <div>
                Give this website a{' '}
                <a
                    onClick={() => propagate("Star-Github")}
                    style={{ textDecoration: 'none' }}
                    href="https://github.com/Harsh8084"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ⭐ <span style={{ color: 'black' }}> on </span> GitHub
                </a>
            </div>
        </Fragment>
    );
};

export default Footer;
