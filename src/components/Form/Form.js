/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';
import { Creators as UserActions } from '../../store/ducks/user';

import {
  Form as StyledForm, Button, Backdrop, ConfirmButton,
} from './FormStyle';

class Form extends Component {
  static propTypes = {
    form: PropTypes.shape({
      hideModal: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      addRequest: PropTypes.func.isRequired,
    }).isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  };

  state = {
    // eslint-disable-next-line react/no-unused-state
    userInput: '',
  };

  componentDidMount() {
    console.log(this.props);
  }

  onChangeInputHandler = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      userInput: e.target.value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { addRequest } = this.props.user;
    const { userInput } = this.state;
    const { coordinates } = this.props;
    addRequest(userInput, coordinates);
  };

  render() {
    const { hideModal } = this.props.form;
    return (
      <Fragment>
        <Backdrop onClick={hideModal} />
        <StyledForm onSubmit={this.onHandleSubmit}>
          <h3>Adicionar novo usuário</h3>
          <input type="text" placeholder="Digite o usuário" onChange={this.onChangeInputHandler} />
          <div>
            <Button onClick={hideModal}>Cancelar</Button>
            <ConfirmButton onClick={this.onHandleSubmit}>Salvar</ConfirmButton>
          </div>
        </StyledForm>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  formVisible: state.form.formVisible,
  coordinates: state.form.coordinates,
});

const mapDispatchToProps = dispatch => ({
  form: bindActionCreators(FormActions, dispatch),
  user: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
