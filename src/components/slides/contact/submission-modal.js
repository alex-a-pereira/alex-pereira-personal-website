// Modules
import React from "react";
import { Checkbox, Message, Button, Modal } from "semantic-ui-react";

class SubmitFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acknowledgementChecked: false, error: false };
  }

  handleToggleAcknowledgement = () => {
    this.setState({
      acknowledgementChecked: !this.state.acknowledgementChecked
    });
  };

  handleSubmit = () => {
    if (this.state.acknowledgementChecked) {
      this.props.onSubmit();
      this.props.onClose();
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Modal open={true}>
        <Modal.Header>Before can send your information...</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <h3>
              Please review your your contact info and acknowledge that you
              understand where you data is going.
            </h3>
            <h4>You supplied this information:</h4>
            <ul>
              <li>
                Name:
                <b>{this.props.contactInfo.fullName}</b>
              </li>
              <li>
                Email address:
                <b>{this.props.contactInfo.email}</b>
              </li>
              <li>
                Phone number (optional):
                <b>{this.props.contactInfo.phone}</b>
              </li>
              <li>
                Contact method (optional):
                <b>{this.props.contactInfo.preferred}</b>
              </li>
              <li>
                Message (optional):
                <b>{this.props.contactInfo.message}</b>
              </li>
            </ul>
            <Message warning>
              <Message.Header>Where is your information going?</Message.Header>
              <p>
                This is a great question and I get why you're curious.{" "}
                <b>Your information is secure.</b> The data from this form is
                transfered through a few Amazon Web Services.
              </p>
              <p>
                Data validation is done on the front end. When the form is
                submitted, a <i>POST</i> request is made to an API that I
                created through AWS's API Gateway. This API then invokes an
                Lambda function, which securely delivers an email to <b>only</b>{" "}
                my inbox. These services are secure, and I will never share your
                information.
              </p>
            </Message>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleToggleAcknowledgement}
              toggle
              label={
                <label>
                  I've ensured that my information above is correct and I
                  understand where my information is going
                </label>
              }
            />
            {this.state.error ? (
              <Message error>
                Please confirm that you've reviewed the above information
              </Message>
            ) : null}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.props.onClose}>Never mind</Button>
          <Button positive onClick={this.handleSubmit}>
            Submit Form
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default SubmitFormModal;
