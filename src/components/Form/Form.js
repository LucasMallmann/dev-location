/* eslint-disable react/button-has-type */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/ducks/form';

import {
  Form as StyledForm, Button, Backdrop, ConfirmButton,
} from './FormStyle';

class Form extends Component {
  static propTypes = {
    onChangeShowForm: PropTypes.func.isRequired,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
  };

  state = {
    // eslint-disable-next-line react/no-unused-state
    userInput: '',
  };

  onChangeInputHandler = (e) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      userInput: e.target.value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { hideModal } = this.props;
    return (
      <Fragment>
        <Backdrop onClick={hideModal} />
        <StyledForm onSubmit={this.onHandleSubmit}>
          <h3>Adicionar novo usuário</h3>
          <input type="text" placeholder="Digite o usuário" onChange={this.onChangeInputHandler} />
          <div>
            <Button onClick={hideModal}>Cancelar</Button>
            <ConfirmButton onClick={() => console.log('salvei')}>Salvar</ConfirmButton>
          </div>
        </StyledForm>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  formVisible: state.form.formVisible,
});

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
