import classes from './Settings.module.css';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/settings-reducer';

const Settings = (props) => {
    const onSelectChange = (e) => {
        e.target.value === 'тёмная'
            ? props.setTheme('dark')
            : props.setTheme('light')
    }
    return (
        <div className={classes.settingsBox}>
         <div className={classes.settingsButton}>
            </div>
            <p className={classes.settingsThemeText}>тема</p>
            <select onChange={onSelectChange}>
                <option>тёмная</option>
                <option>светлая</option>
            </select>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        tasks: state.settings.theme,
    }
}

const SettingsContainer = connect(mapStateToProps, { setTheme })(Settings)

export { SettingsContainer }

