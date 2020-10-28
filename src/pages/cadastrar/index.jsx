import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button } from 'react-bootstrap';
import logo from '../../assets/img/sun.png';
import './index.css';

const Cadastrar = () => {
    return (
        <div>
            <Menu />
                <Container className='form-height'>
                    <Form className='form-signin'>
                        <div className='text-center'>
                            <img src={logo} alt="NYOUS" style={{ width : '64px'}}/>
                        </div>
                        <br/>
                        <small>Informe os dados abaixo</small>
                        <hr/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' placeholder='Nome Completo' required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Informe o seu email' required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>text</Form.Label>
                            <Form.Control type='password' placeholder='Senha' required></Form.Control>
                        </Form.Group>
                        <Button>
                            Enviar
                        </Button>
                        <br/><br/>
                        <a href="/cadastrar" style={{ marginTop : '30px'}}>Nao tenho conta</a>
                        
                    </Form>    
                </Container>
            <Rodape />
        </div>
    )
}

export default Cadastrar;