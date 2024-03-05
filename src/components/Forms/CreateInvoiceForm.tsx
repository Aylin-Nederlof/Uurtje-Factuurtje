import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Label from './Label';
import FormGroup from './FormGroup';
import { Button } from '../Buttons/Button';
import jsPDF from 'jspdf';



const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  gap: 16px;
`;

interface CreateInvoicFormData {
  invoiceNumber: string;
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  businessName: string;
  businessAddress: string;
  businessEmail: string;
}

const CreateInvoiceForm: React.FC = () => {
    const [formData, setFormData] = useState<CreateInvoicFormData>({
    invoiceNumber: '',
    clientName: '',
    clientAddress: '',
    clientEmail: '',
    businessName: '',
    businessAddress: '',
    businessEmail: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text(`Invoice Number: ${formData.invoiceNumber}`, 10, 10);
    doc.text(`Client Name: ${formData.clientName}`, 10, 40);
    doc.text(`Client Address: ${formData.clientAddress}`, 10, 50);
    doc.text(`Client Email: ${formData.clientEmail}`, 10, 60);
    doc.text(`Business Name: ${formData.businessName}`, 10, 70);
    doc.text(`Business Address: ${formData.businessAddress}`, 10, 80);
    doc.text(`Business Email: ${formData.businessEmail}`, 10, 90);
    doc.save('invoice.pdf');
  };

  return (
    <>
    <Form>
        <FormGroup data-test-id="invoiceNumber">
            <Label htmlFor="invoiceNumber">Invoice Number:</Label>
            <Input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup data-test-id="clientName">
            <Label htmlFor="clientName">Client Name:</Label>
            <Input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup data-test-id="clientAddress">
            <Label htmlFor="clientAddress">Client Address:</Label>
            <Input
            type="text"
            id="clientAddress"
            name="clientAddress"
            value={formData.clientAddress}
            onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup data-test-id="clientEmail">
            <Label htmlFor="clientEmail">Client Email:</Label>
            <Input
            type="email"
            id="clientEmail"
            name="clientEmail"
            value={formData.clientEmail}
            onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup data-test-id="businessName">
            <Label htmlFor="businessName">Business Name:</Label>
            <Input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup data-test-id="businessAddress">
            <Label htmlFor="businessAddress">Business Address:</Label>
            <Input
            type="text"
            id="businessAddress"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleInputChange}
            />
        </FormGroup>
        <FormGroup data-test-id="businessEmail">
            <Label htmlFor="businessEmail">Business Email:</Label>
            <Input
            type="email"
            id="businessEmail"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleInputChange}
            />
        </FormGroup>
        <Button $variant='primary' onClick={handleDownloadPDF}>Download PDF</Button>
    </Form>
</>
  );
};

export default CreateInvoiceForm;
