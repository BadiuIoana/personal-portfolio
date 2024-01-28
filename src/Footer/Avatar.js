import React, { Fragment } from "react";
import "./_avatar.scss";
export const Avatar = () => {
    return (
        <div class='box'>
            <div class='girl-container'>
                <div class='girl-body'></div>
                <div class='girl-head'></div>
                <div class='girl-neck'></div>
                <div class='girl-hair'></div>
                <div class='girl-bangs-right'></div>
                <div class='girl-bangs-left'></div>
                <div class='girl-face'>
                    <div class='eyes'>
                        <div class='eye-left'></div>
                        <div class='eye-right'></div>
                    </div>
                    <div className='nose'></div>
                    <div class='mouth'>
                        <div class='tongue'></div>
                    </div>
                </div>
            </div>
            <div class='laptop-container'>
                <div class='laptop'></div>
            </div>
        </div>
    );
};
