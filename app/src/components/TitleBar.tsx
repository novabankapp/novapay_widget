import { h } from 'preact';
import style from './titlebar.css';

interface OwnProps {
    routeTitle: string;
}
const TitleBar = (props: OwnProps) => {
    
    
    return (
        <div className={style.root} >
            <h4>{props.routeTitle}</h4>
            
        </div>);
};

export default TitleBar;
