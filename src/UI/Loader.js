import classes from "./_loader.module.scss";
import { useEffect, useState } from "react";
const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        isLoading && (
            <div className={classes["newtons-cradle"]}>
                <div className={classes["newtons-cradle__dot"]}></div>
                <div className={classes["newtons-cradle__dot"]}></div>
                <div className={classes["newtons-cradle__dot"]}></div>
                <div className={classes["newtons-cradle__dot"]}></div>
            </div>
        )
    );
};

export default Loader;
