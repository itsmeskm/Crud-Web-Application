import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import { addEvent } from '../redux/slice/AddEvent';

function AddEventModal(props) {
  const [show, setShow] = useState(true);
  const [vehicleType , setVehicleType] = useState("");
  const [amount,setAmount] = useState();
  const [grace,setGrace]= useState("");

  const location = useLocation();
  const propsData = location.state;

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    const data = {
      vehicleType,
      amount,
      grace
    }
    dispatch(addEvent(data));
  } 
  const handleChangeVehicle = (e) => {
    e.preventDefault();
    setVehicleType(e.target.value);
  }
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }
  const handleGraceChange = (e) => {
    setGrace(e.target.value);
  }

  useEffect(() => {
    if(propsData){
      setVehicleType(propsData.vehicleType);
      setAmount(propsData.amount);
      setGrace(propsData.grace);
    }
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vehicle Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="vehicle type"
                  value={vehicleType}
                  autoFocus
                  onChange={handleChangeVehicle}
                  required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="amount"
                value={amount}
                onChange={handleAmountChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Grace</Form.Label>
              <Form.Control
                type="text"
                placeholder="Grace"
                value={grace}
                onChange={handleGraceChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Link to="/">
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModal ;