import { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';
import Swal from 'sweetalert2';

export default class App extends Component {

  handleSubmit = (values) => {
    console.log(values);
    Swal.fire({
      title: 'Valores enviados',
      text: 'Sucesso, tudo funcionou!',
      icon: 'success',
      html: `Nome: ${values.nome}<br>
      Telefone: ${values.telefone}<br>
      Email: ${values.email}`,
      confirmButtonText: 'Nice'
    })
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            nome: '',
            telefone: '',
            email: ''
          }}
          
          onSubmit={this.handleSubmit}>
          <Form>
            <label for="nome">Nome</label>
            <Field type={'text'} className="form-control" id="nome" name="nome" placeholder="Digite seu nome" />
            
            <label for="telefone">Telefone</label>
            <Field type={'text'} className="form-control" id="telefone" name="telefone" placeholder="Digite seu telefone" />

            <label for="email">Email</label>
            <Field type={"text"} className="form-control" id="email" name="email" placeholder="Digite sua email" />
            
            <button className="btn my-3 btn-primary" type="submit">Enviar</button>
          </Form>
        </Formik>
      </>
    );
  }
}
