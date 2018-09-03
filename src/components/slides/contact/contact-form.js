// Modules
import React from "react";
import { Form, Message, Icon } from "semantic-ui-react";
import axios from "axios";
// Components
import SubmitFormModal from "./submission-modal";
// Misc
import { API_ROOT_URL } from "../../../assets/personal-info";

// Error messages
const RESPONSE_SUCCESS = "success";
const RESPONSE_ERROR = "error";
const INPUT_ERROR = "input";

const FormMessage = props => {
  switch (props.message) {
    case INPUT_ERROR:
      return (
        <Message error>
          <Message.Header>
            Please make sure your contact info is correct!
          </Message.Header>
          <p>
            The form's looking for your first and last name (must be at least 3
            character) and your full email address (for example,
            local-part@domain.com). Please double check that you entered your
            information correctly, and if my algorithm has a bug please reach
            out to me!
          </p>
        </Message>
      );
    case RESPONSE_SUCCESS:
      return (
        <Message positive>
          <Message.Header>
            Thanks for submitting your contact information!
          </Message.Header>
          <p>
            This message indicates that my API was successfully called, and your
            information will be delivered securely to only my inbox. Thanks
            again and talk soon!
          </p>
        </Message>
      );
    case RESPONSE_ERROR:
      return (
        <Message error>
          <Message.Header>
            I'm sorry, something went wrong with my backend{" "}
            <Icon name="frown outline" />
          </Message.Header>
          <Message.Header>
            Please try reaching me through my email, phone number, or LinkedIn
            profile!
          </Message.Header>
          <p>
            If you're seeing this, the API call returned an error! I'll look
            into what went wrong shortly, so in the meantime please contact me
            using my information on this page!
          </p>
        </Message>
      );
    default:
      return (
        <Message error>
          <Message.Header>
            I'm sorry, something went wrong somewhere{" "}
            <Icon name="frown outline" />
          </Message.Header>
          <p>
            Please try reaching me through my email, phone number, or LinkedIn
            profile and I promise you'll hear from me shortly.
          </p>
        </Message>
      );
  }
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        fullName: "",
        email: "",
        phone: "",
        preferred: "",
        message: ""
      },
      invalid: {}
    };
  }

  componentDidMount() {
    this.setState({ blankInputs: this.state.inputs });
  }

  //  Form methods
  handleChange = (e, { name, value }) => {
    let inputs = Object.assign({}, this.state.inputs);
    inputs[name] = value;
    this.setState({ inputs }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let invalid = this.state.invalid;
    switch (fieldName) {
      case "fullName":
        invalid.name = value.length < 4;
        break;
      case "email":
        invalid.email = !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      default:
        console.log("fieldName didn't match any existing case");
        break;
    }
    this.setState({ invalid: invalid });
  }

  handleOpenConfirmation = () => {
    if (!this.state.invalid.name && !this.state.invalid.email) {
      this.setState({
        errorMessage: undefined,
        modalOpen: true
      });
    } else {
      this.setState({ errorMessage: INPUT_ERROR });
    }
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleSubmit = () => {
    axios // Send a POST request to my endpoint.
      .post(API_ROOT_URL, this.state.inputs)
      .then(response => {
        console.log(response);
        this.setState({ errorMessage: RESPONSE_SUCCESS });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMessage: RESPONSE_ERROR });
      });
    // Clear the form, as data has been submitted to API
    this.setState({
      inputs: this.state.blankInputs
    });
  };

  render() {
    return (
      <div>
        {this.state.errorMessage !== undefined ? (
          <FormMessage message={this.state.errorMessage} />
        ) : null}

        {this.state.modalOpen ? (
          <SubmitFormModal
            contactInfo={this.state.inputs}
            onSubmit={this.handleSubmit}
            onClose={this.handleCloseModal}
          />
        ) : null}

        <Form onSubmit={this.handleOpenConfirmation}>
          <Form.Group widths="equal">
            <Form.Input
              required
              fluid
              error={this.state.invalid.name}
              name="fullName"
              value={this.state.inputs.fullName}
              label="Your full name"
              placeholder="Richard Hendricks"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              required
              error={this.state.invalid.email}
              name="email"
              label="Email address"
              value={this.state.inputs.email}
              placeholder="local-part@domain.com"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="phone"
              label="Phone number"
              value={this.state.inputs.phone}
              placeholder="(123) 867-5309"
              onChange={this.handleChange}
            />
            <Form.Select
              fluid
              name="preferred"
              label="Preferred contact method"
              value={this.state.inputs.preferred}
              options={[
                { key: "e", text: "Email", value: "Email" },
                { key: "t", text: "Text Message", value: "Text Message" },
                { key: "p", text: "Phone Call", value: "Phone Call" }
              ]}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.TextArea
            name="message"
            label="Include a message"
            value={this.state.inputs.message}
            placeholder="A good message will introduce yourself and give me any additional information required to contact you."
            onChange={this.handleChange}
          />
          <Form.Button content="Submit" />
        </Form>
      </div>
    );
  }
}
export default ContactForm;
