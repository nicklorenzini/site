import * as React from 'react';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';

import { media } from '../../utils/css-utils';
import Diamond from '../../components/diamond';
import BlockHeader from '../../components/common/block-header';
import {
    pastTalksSelector,
    loadEvents,
} from './events-reducer';

const PastEventsContainer = styled.section`
    padding: 6rem 2rem;
    ${media.tablet`padding: 9rem 7rem;`}
    ${media.desktop`padding: 10rem;`}
`;

const DiamondsRow = styled.div`
    display: flex;
    justify-content: center;
`;

const DiamondsColumn = styled.div`
    flex-direction: column;
    justify-content: flex-start;
`;

const middleDiamondTopShift = '18.5rem';

class PastEvents extends React.Component {

    static propTypes = {
        talks: React.PropTypes.array,
        theme: React.PropTypes.object.isRequired,
        loadEvents: React.PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        const { talks, theme } = this.props;

        if (!talks || talks.length < 7) {
            return null;
        }

        const [talk1, talk2, talk3, talk4, talk5, talk6, talk7] = talks;

        return (
            <PastEventsContainer>
                <BlockHeader>Passed events</BlockHeader>
                <DiamondsRow style={{ marginTop: '16rem' }}>
                    { /* Left part */}
                    <div>
                        <DiamondsRow>
                            <Diamond
                                color={theme.rouge}
                                backSrc="https://pp.vk.me/c604521/v604521206/36c32/HtwS8cHJZes.jpg"
                                backPosition="120% 0%"
                                header={talk1.event.title}
                                text={talk1.title}
                                speakerPhoto={talk1.speaker.vkPhotoUrl}
                                speakerName={talk1.speaker.displayName} />
                            <Diamond
                                isTurnLeft="true"
                                color={theme.lipstick}
                                header={talk2.event.title}
                                text={talk2.title}
                                speakerPhoto={talk2.speaker.vkPhotoUrl}
                                speakerName={talk2.speaker.displayName} />
                        </DiamondsRow>
                        <DiamondsRow>
                            <Diamond
                                color={theme.cerise}
                                header={talk3.event.title}
                                text={talk3.title}
                                speakerPhoto={talk3.speaker.vkPhotoUrl}
                                speakerName={talk3.speaker.displayName} />
                            <Diamond isEmpty="true" />
                        </DiamondsRow>
                        <DiamondsRow>
                            <Diamond isEmpty="true" />
                            <Diamond
                                isTurnLeft="true"
                                color={theme.vividPurpleTwo}
                                backSrc="https://pp.vk.me/c636319/v636319206/17ded/P0Ku4LJZznI.jpg"
                                backPosition="40% 20%"
                                header={talk4.event.title}
                                text={talk4.title}
                                speakerPhoto={talk4.speaker.vkPhotoUrl}
                                speakerName={talk4.speaker.displayName} />
                        </DiamondsRow>
                    </div>
                    { /* Right part */}
                    <DiamondsRow>
                        <DiamondsRow style={{ paddingTop: middleDiamondTopShift }}>
                            <Diamond
                                isTurnLeft="true"
                                color={theme.grape}
                                backSrc="https://pp.vk.me/c604521/v604521206/36c32/HtwS8cHJZes.jpg"
                                backPosition="120% 0%"
                                header={talk5.event.title}
                                text={talk5.title}
                                speakerPhoto={talk5.speaker.vkPhotoUrl}
                                speakerName={talk5.speaker.displayName} />
                        </DiamondsRow>
                        <DiamondsColumn>
                            <Diamond
                                isTurnLeft="true"
                                color={theme.vividPurple}
                                header={talk6.event.title}
                                text={talk6.title}
                                speakerPhoto={talk6.speaker.vkPhotoUrl}
                                speakerName={talk6.speaker.displayName} />
                            <Diamond
                                isTurnLeft="true"
                                color={theme.warmPurple}
                                header={talk7.event.title}
                                text={talk7.title}
                                speakerPhoto={talk7.speaker.vkPhotoUrl}
                                speakerName={talk7.speaker.displayName} />
                        </DiamondsColumn>
                    </DiamondsRow>
                </DiamondsRow>
            </PastEventsContainer>
        );
    }
}

const mapStateToProps = state => ({
    talks: pastTalksSelector(state),
});

const mapDispatchToProps = dispatch => ({
    loadEvents: () => dispatch(loadEvents()),
});

export default withTheme(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(PastEvents),
);
