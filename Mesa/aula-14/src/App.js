import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from './services/api';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cep: ''
    }
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`api/cep/v1/${cep}`);
      this.setState({ cep: response.data });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Procure CEP</h2>
            <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Insira o nome do usuário" required type="text" name="cep" id="cep" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.cep && (
              <ol className="list-group list-group-numbered my-3">
                {
                  <>
                    <h1>Cidadezinha: {this.state.cep.city}</h1>
                    <h1>Vizinhança maluca: {this.state.cep.neighborhood}</h1>
                    <h1>Estado nervoso: {this.state.cep.state}</h1>
                    <h1>Rua: {this.state.cep.street}</h1>
                  </>
                }
              </ol>
            )}
          </div>
        </main>
      </>
    );
  }
}