import React, { Component } from 'react';
import {Modal,Form,Button}from 'react-bootstrap'

export class ModalForm extends Component {
    render() {
        return (
            <div>

      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={(e)=>{this.props.handleUpdate(e)}}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Edit Name</Form.Label>
                            <Form.Control type="text" name="title" defaultValue={this.props.title} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Edit image_url</Form.Label>
                            <Form.Control type="text" name="image_url" defaultValue={this.props.image_url} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Edit description</Form.Label>
                            <Form.Control type="text" name="description" defaultValue={this.props.description} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Edit price</Form.Label>
                            <Form.Control type="text" name="price" defaultValue={this.props.toUSD} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                       
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>


        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
  
  


                    

                    

            </div>
        )
    }
}

export default ModalForm
