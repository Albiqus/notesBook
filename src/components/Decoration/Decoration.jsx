import classes from './Decoration.module.css';
import { connect } from 'react-redux';

const Decoration = (props) => {
    return (
        <div className={props.theme === 'тёмная' ? classes.decorationBox : `${classes.decorationBox} ${classes.lightTheme}`} >
         
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme
    }
}

const DecorationContainer = connect(mapStateToProps, {})(Decoration)


export { DecorationContainer }
