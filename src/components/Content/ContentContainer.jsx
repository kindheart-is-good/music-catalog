import React from 'react';
import {connect} from "react-redux";
import {showContentAC} from "../../redux/content-reducer";
import Content from "./Content";

/* В этом файле у нас сразу 2 контейнерных компоненты, вложенных друг в друга.
* Задача UsersContainer выполнять GET-запросы.
* А внешняя контейнерная оборачивает её при помощи функцмм connect()() */

class ContentContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        //debugger;
        return <Content tracks={this.props.tracks} />
    }
}



let mapStateToProps = (state) => {
    return {
        tracks: state.contentPage.tracks,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showMusic: (trackId) => {
            dispatch(showContentAC(trackId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);