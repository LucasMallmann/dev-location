/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

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
      resetQuery: PropTypes.func.isRequired,
    }).isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  state = {
    userInput: '',
  };

  onChangeInputHandler = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  notify = error => toast(error);

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { addRequest } = this.props.user;
    const { userInput } = this.state;
    const { coordinates, loading } = this.props;

    if (loading) return;
    if (!userInput) return;

    addRequest(userInput, coordinates);
    this.setState({ userInput: '' });
    toast.success('Dev adicionado com sucesso! 🦄', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  notifyError = () => {
    toast.error('Não foi possível obter o usuário.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    const { resetQuery } = this.props.user;
    resetQuery();
  };

  render() {
    const { hideModal } = this.props.form;
    const { loading, error } = this.props;
    return (
      <Fragment>
        <Backdrop onClick={hideModal} />
        {!!error && this.notifyError()}
        <StyledForm onSubmit={this.onHandleSubmit}>
          <h3>Adicionar novo usuário</h3>
          <input
            type="text"
            placeholder="Digite o usuário"
            onChange={this.onChangeInputHandler}
            value={this.state.userInput}
          />
          <div>
            <Button onClick={hideModal}>Cancelar</Button>
            <ConfirmButton onClick={this.onHandleSubmit}>
              {loading ? <FontAwesomeIcon icon="circle-notch" spin /> : 'Salvar'}
            </ConfirmButton>
          </div>
        </StyledForm>
      </Fragment>
    );
  }
}

Form.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  formVisible: state.form.formVisible,
  coordinates: state.form.coordinates,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  form: bindActionCreators(FormActions, dispatch),
  user: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
