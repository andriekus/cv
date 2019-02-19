import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import EducationInfoItem from './EducationInfoItem';
import WorkInfoItem from './WorkInfoItem';
import Skills from './Skills';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';

const schools = [
    {
        title: 'Kauno technologijos universitetas',
        startDate: '2017',
        endDate: 'Dabar',
        note: 'Programų sistemos'
    },
    {
        title: 'Mažeikių Merkelio Račkausko gimnazija',
        startDate: '2013',
        endDate: '2017',
        note: ''
    },
];

const workPlaces = [
    {
        title: 'Park Inn by Radisson Kaunas',
        position: 'Barmenas - padavėjas',
        startDate: '2017 09',
        endDate: 'Dabar',
        duration: '1-eri metai ir 5 mėnėsiai',
        learned: 'Šiame viešbutyje tenka aptarnauti aukštas pareigas užimančius asmenis, kurie yra sektinas pavyzdys ir skatina siekti karjeros aukštumų. Nuolatinis bendravimas su svečiais iš užsienio lavina anglų kalbos žinias.'
    },
    {
        title: 'IĮ MVK-3 "Viliošiai"',
        position: 'Barmenas - padavėjas',
        startDate: '2017 06',
        endDate: '2017 09',
        duration: '3 mėnėsiai',
        learned: 'Dirbdamas aptarnavimo srityje susidurdavau su įvairiomis situacijomis, kuriose reikėdavo greito sprendimo. Ši darbovietė išmokė mane priimti tinkamus sprendimus ir tolerantiškumo įvairiems žmonėms.'
    },
    {
        title: 'UAB "Nailtex"',
        position: 'Darbininkas',
        startDate: '2016 06',
        endDate: '2016 09',
        duration: '3 mėnesiai',
        learned: 'Pirma darbovietė išmokė atsakingai žiūrėti į darbą. Dirbdamas su vyresnio amžiaus žmonėmis išmokau komunikuoti ir prisitaikyti prie kolegų. Kadangi darbas buvo fiziškai sunkus, tapau ištvermingesnis.'
    }
];

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%'
    }
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
                <div className={classes.root}>
                    <AppBar position="static" color="primary">
                        <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        fullWidth
                        >
                            <Tab label="Išsilavinimas" />
                            <Tab label="Darbo patirtis" />
                            <Tab label="Savybės" />
                        </Tabs>
                        <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer dir={theme.direction}>{schools.map((school) => {
                                return <EducationInfoItem key={uuid()} {...school} />
                            })}</TabContainer>
                            <TabContainer dir={theme.direction}>
                            <div className="row">
                                {workPlaces.map((workPlace) => {
                                    return <WorkInfoItem key={uuid()} {...workPlace} />
                                })}
                            </div>
                            </TabContainer>
                            <TabContainer dir={theme.direction}><Skills /></TabContainer>
                        </SwipeableViews>
                    </AppBar>
                </div>
        );
    }

}
export default withStyles(styles, { withTheme: true })(FullWidthTabs);