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
        learned: 'Dirbdamas šioje darbovietėje sutinku begales įvairių žmonių, todėl, akivaizdu, jog tenka spręsti ir nemažai problemų. Manau, kad ši darbovietė ugdo mano anglų kalbos, komunikacijos bei problemų sprendimo žinias.'
    },
    {
        title: 'IĮ MVK-3 "Viliošiai"',
        position: 'Barmenas - padavėjas',
        startDate: '2017 06',
        endDate: '2017 09',
        learned: 'Antrasis sezoninis darbas, kuriame išmokau, kaip reikia dirbti komandoje, o tuo pačiu įgavau įgūdžių, kurių pagalba galėjau pretenduoti į geresnę darbo poziciją Kaune.'
    },
    {
        title: 'UAB "Nailtex"',
        position: 'Darbininkas',
        startDate: '2016 06',
        endDate: '2016 09',
        learned: 'Mano pirmas darbas, kuriame kažkiek supratau, ką reiškia "žengti į suaugusių gyvenimą", tuo pačiu darbas buvo fizinis, todėl tada visiškai nusprendžiau, kad sunkus fizinis darbas - ne man, todėl reikia siekti aukštojo mokslo. '
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
                            return <EducationInfoItem {...school} />
                        })}</TabContainer>
                        <TabContainer dir={theme.direction}>
                        <div className="row">
                        {workPlaces.map((workPlace) => {
                            return <WorkInfoItem {...workPlace} />
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