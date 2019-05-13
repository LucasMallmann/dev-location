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
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
    console.log(this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  onChangeShowForm = (e) => {
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
    console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`);
    const { showModal } = this.props;
    showModal({ latitude, longitude });
  };

  render() {
    const { viewport } = this.state;
    const { formVisible } = this.props;
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
          <Marker latitude={-23.5439948} longitude={-46.6065452} offsetLeft={-20} offsetTop={-10}>
            <Image
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src="https://avatars2.githubusercontent.com/u/23031413?v=4"
              alt="img"
            />
          </Marker>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
