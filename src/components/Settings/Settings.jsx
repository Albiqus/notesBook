import classes from './Settings.module.css';
import { connect } from 'react-redux';
import { setIsShow, setSearchSetting, setSorting, setTheme } from '../../redux/settings-reducer';

const Settings = (props) => {
    const onThemeSelectChange = (e) => {
        e.target.value === 'тёмная'
            ? props.setTheme('тёмная')
            : props.setTheme('светлая')
    }
    const onSortingSelectChange = (e) => {
        e.target.value === 'вкл'
            ? props.setSorting('вкл')
            : props.setSorting('выкл')
    }
    const onSearchSelectChange = (e) => {
        e.target.value === 'вкл'
            ? props.setSearchSetting('вкл')
            : props.setSearchSetting('выкл')
    }
    const onSettingsButtonClick = () => {
        props.setIsShow(!props.isShow)
    }
    const onResetSettingsButton = () => {
        props.setTheme('тёмная')
        props.setSorting('вкл')
        props.setSearchSetting('вкл')
    }
    return (
        <div className={
            props.theme === 'тёмная'
                ? props.isShow === true
                    ? classes.settingsBox
                    : `${classes.settingsBox} ${classes.hide}`
                : props.isShow === true
                    ? `${classes.settingsBox} ${classes.lightTheme}`
                    : `${classes.settingsBox} ${classes.lightTheme} ${classes.hide}`
                }>
            <div onClick={onSettingsButtonClick} className={
                props.theme === 'тёмная'
                    ? props.isShow !== true
                        ? classes.settingsButton
                        : `${classes.settingsButton} ${classes.hide}`
                    : props.isShow !== true
                        ? `${classes.settingsButton} ${classes.lightTheme}`
                        : `${classes.settingsButton} ${classes.lightTheme} ${classes.hide}`
                    }>
            </div>
            <div className={props.isShow === true ? classes.settingsList : `${classes.settingsList} ${classes.hide}`}>
            <p className={props.theme === 'тёмная' ? classes.settingsThemeText : `${classes.settingsThemeText} ${classes.lightTheme}`}>тема</p>
                <select value={props.theme} className={props.theme === 'тёмная' ? classes.themeSelect : `${classes.themeSelect} ${classes.lightTheme}`} onChange={onThemeSelectChange}>
                <option>тёмная</option>
                <option>светлая</option>
            </select>
                <p className={props.theme === 'тёмная' ? classes.sortingText : `${classes.sortingText} ${classes.lightTheme}`}>сортировка</p>
                <select value={props.sorting} className={props.theme === 'тёмная' ? classes.sortingSelect : `${classes.sortingSelect} ${classes.lightTheme}`} onChange={onSortingSelectChange}>
                <option>вкл</option>
                <option>выкл</option>
            </select>
                <p className={props.theme === 'тёмная' ? classes.searchSettingText : `${classes.searchSettingText} ${classes.lightTheme}`}>поиск</p>
                <select value={props.searchSetting} className={props.theme === 'тёмная' ? classes.searchSettingSelect : `${classes.searchSettingSelect} ${classes.lightTheme}`} onChange={onSearchSelectChange}>
                <option>вкл</option>
                <option>выкл</option>
                </select>
                <button value={props.sortingSelectOption} onClick={onResetSettingsButton} className={props.theme === 'тёмная' ? classes.resetSettingsButton : `${classes.resetSettingsButton} ${classes.lightTheme}`}>по умолчанию</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme,
        sorting: state.settings.sorting,
        searchSetting: state.settings.searchSetting,
        isShow: state.settings.isShow
        
    }
}

const SettingsContainer = connect(mapStateToProps, { setTheme, setSorting, setSearchSetting, setIsShow })(Settings)

export { SettingsContainer }

