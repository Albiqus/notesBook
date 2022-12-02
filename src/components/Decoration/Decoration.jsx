import classes from './Decoration.module.css';
import { connect } from 'react-redux';

const Decoration = (props) => {
    let decorationBoxClassName = classes.decorationBox
    if (props.theme !== 'тёмная') {
        decorationBoxClassName += ` ${classes.lightTheme}`
    }

    return (
        <div className={decorationBoxClassName}></div>
    )
}

const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme
    }
}

const DecorationContainer = connect(mapStateToProps, {})(Decoration)


export { DecorationContainer }
