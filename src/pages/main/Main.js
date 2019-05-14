/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import token from '../../config/mapToken';

import { Image } from './MainStyle';
import Form from '../../components/Form/Form';
import { Creators as FormActions } from '../../store/ducks/form';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  static propTypes = {
    formVisible: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    coordinates: PropTypes.object,
    showModal: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        coordinates: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
        }),
      }),
    ).isRequired,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  onChangeShowForm = () => {
    const { showModal } = this.props;
    showModal();
  };

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;
    showModal({ latitude, longitude });
  };

  render() {
    const { viewport } = this.state;
    const { formVisible, users } = this.props;

    return (
      <Fragment>
        <Sidebar />
        {formVisible && <Form />}
        <ReactMapGL
          {...viewport}
          onViewportChange={view => this.setState({ viewport: view })}
          mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          onClick={this.handleMapClick}
        >
          {users.map(user => (
            <Marker
              latitude={user.coordinates.latitude}
              longitude={user.coordinates.longitude}
              offsetLeft={-20}
              offsetTop={-10}
              key={user.id}
            >
              <Image
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={user.avatar}
                alt="img"
              />
            </Marker>
          ))}
        </ReactMapGL>
      </Fragment>
    );
  }
}

Main.defaultProps = {
  coordinates: null,
};

const mapStateToProps = state => ({
  formVisible: state.form.visible,
  coordinates: state.form.coordinates,
  users: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
