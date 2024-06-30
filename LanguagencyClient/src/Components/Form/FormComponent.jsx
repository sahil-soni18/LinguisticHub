import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../../../public/CSS/FormComponent.css'; // Ensure the CSS file is correctly referenced

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit} className="custom-form">
      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} xs={12} md={6} controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} xs={12} md={6} controlId="formGridSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit" className="custom-button">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;
