import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import { FORM_SCHEMA } from '../../helpers/validationsSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaExclamationCircle } from 'react-icons/fa';

const Contacto = () => {
  const [userNotFound, setUserNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FORM_SCHEMA),
  });
  const form = useRef();

  const onSubmit = async (data) => {
    setLoading(true);

    const sendEmail = await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    );
    try {
      if (sendEmail.text === 'OK') {
        Swal.fire({
          icon: 'success',
          title: '¡El formulario se mandó correctamente!',
          text: 'Gracias por ponerse en contacto',
        });
      }
      setLoading(false);
    } catch (error) {
      setUserNotFound(true);
      Swal.fire({
        icon: 'error',
        title: `Ocurrió un problema! Error${error.text}`,
        text: `${error.text}`,
      });
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className='contactoContainer py-5' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
            <h2 className='mb-4'>Contactame</h2>
            <h5 className='subtitleBlack mb-4'>
              Si quieres contactarme puedes enviarme un mensaje
            </h5>
            <Form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className='d-flex flex-column gap-3 formulario'
            >
              <Row className='mb-3'>
                <Col>
                  <Form.Label></Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Nombre completo'
                    name='user_name'
                    {...register('user_name')}
                  />
                  {errors.user_name && (
                  <p className='text-danger my-1'><FaExclamationCircle />{errors.user_name?.message}</p>
                  )}
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Label></Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='E-mail'
                    name='user_email'
                    {...register('user_email')}
                  />
                  {errors.user_email && (
                  <p className='text-danger my-1'><FaExclamationCircle />{errors.user_email?.message}</p>
                  )}
                </Col>
              </Row>
              <Row className='mb-3'>
                <Col>
                  <Form.Label></Form.Label>
                  <Form.Control
                    as='textarea'
                    placeholder='Escriba su mensaje'
                    style={{ height: '100px' }}
                    className='textarea'
                    name='message'
                    {...register('message')}
                  />
                   {errors.message && (
                  <p className='text-danger my-1'><FaExclamationCircle />{errors.message?.message}</p>
                   )}
                </Col>
              </Row>
              <Row>
                {loading ? (
                  <div className='text-center'>
                    <Spinner animation='border' role='status' />
                  </div>
                ) : (
                  <Button type='submit' className='btn btn-dark'>
                    Enviar
                  </Button>
                )}
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
