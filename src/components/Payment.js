import React from 'react'
import { Table, Form, Row, Col, Button } from 'react-bootstrap'


export const Payment = ({items, handleUser, precioFinal, submit, orderId, userInfo}) => {



    return (
        <div>
                    <Table striped bordered hover className="container mt-5" data-aos="fade-right" data-aos-easing="ease-in-out">
                        <thead>
                            <tr>
                            <th>Descripcion</th>
                            <th>Articulo</th>
                            <th>Precio Unidad</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(x => 
                            <tr key={x.id}>
                                <td>{x.desc}</td>
                                <td>{x.name}</td>
                                <td>{x.price}</td>
                                <td>{x.quantity}</td>
                                <td>{x.quantity * x.price}</td>
                            </tr>
                            )}
                        </tbody>
                        <h2>Precio final: ${ precioFinal()}</h2>
                    </Table>
                  
                    <Form className="container mt-5" onChange={handleUser}>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Nombre" type="text" className="mb-2" name="nombre" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Apellido" type="text" className="mb-2" name="apellido" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Correo Electronico" type="text" className="mb-2" name="correo" />
                            </Col>
                        </Row>
                        <Button className="my-5" type="submit" onClick={submit}>Ingresa la Info</Button>
                    </Form>           

                   { orderId && <React.Fragment>

                                    <Table striped bordered hover className="container mt-5" data-aos="fade-right" data-aos-easing="ease-in-out">
                                        <thead>
                                            <tr>
                                            <th>Numero de Orden</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Correo Electronico</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>{orderId}</td>
                                            <td>{userInfo.nombre}</td>
                                            <td>{userInfo.apellido}</td>
                                            <td>{userInfo.correo}</td>
                                        </tbody>
                                    </Table>
                                </React.Fragment> 
                       }
                    
                
                
                
        </div>
    )
}

export default Payment
