import React from 'react';
import styled from 'styled-components';
import CreateInvoiceForm from '../components/Forms/CreateInvoiceForm';

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  height: 100vh;
`;

const CreateInvoicePage: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Submitted data:', data);
    // Add logic to handle form submission
  };

  return (
    <Container>
      <CreateInvoiceForm  />
      {/* <InVoicePreview/> */}
    </Container>
  );
};

export default CreateInvoicePage;