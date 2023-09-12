import React, { useEffect } from "react";
import "./_showcase.scss";
import bootstrap from "../assets/technolgogies/bootstrap-svgrepo-com.svg";
import css from "../assets/technolgogies/css-3-svgrepo-com.svg";
import html from "../assets/technolgogies/html-5-logo-svgrepo-com.svg";
import javascript from "../assets/technolgogies/javascript-svgrepo-com.svg";
import jquery from "../assets/technolgogies/jquery-1-logo-svgrepo-com.svg";
import laravel from "../assets/technolgogies/laravel-svgrepo-com.svg";
import mysql from "../assets/technolgogies/mysql-logo-svgrepo-com.svg";
import php from "../assets/technolgogies/php-svgrepo-com.svg";
import react from "../assets/technolgogies/react-svgrepo-com.svg";
import scss2 from "../assets/technolgogies/scss2-svgrepo-com.svg";
import vue from "../assets/technolgogies/vue-9-logo-svgrepo-com.svg";

const Showcase = () => {
    return (
        <div className='wrapper'>
            <h2>Technical capabilities</h2>
            <div className='technologies-wrapper'>
                <img
                    src={html}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={css}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={scss2}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={bootstrap}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={javascript}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={jquery}
                    className='logo animated-section'
                    alt=''
                    height='120'
                />
                <img
                    src={vue}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={react}
                    className='logo animated-section'
                    alt=''
                    height='60'
                />
                <img
                    src={php}
                    className='logo animated-section'
                    alt=''
                    height='80'
                />
                <img
                    src={laravel}
                    className='logo animated-section'
                    alt=''
                    height='100'
                />
                <img
                    src={mysql}
                    className='logo animated-section'
                    alt=''
                    height='100'
                />
            </div>
        </div>
    );
};

export default Showcase;
