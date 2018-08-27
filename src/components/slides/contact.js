// Modules
import React from "react";
import { Grid, List, Form, Message, Button, Icon } from "semantic-ui-react";
// Misc
import { PERSONAL_INFO } from "../../assets/personal-info";

const contactDropdownOptions = [
  { key: "e", text: "Email", value: "email" },
  { key: "t", text: "Text Message", value: "text" },
  { key: "p", text: "Phone Call", value: "phone" }
];

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      invalid: {},
      initialState: {
        fullName: "",
        email: "",
        phone: "",
        preferred: "",
        message: "",
        acknowledgementChecked: false,
        invalid: {},
        error: false
      }
    };
  }
  // Class Methods
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let invalid = this.state.invalid;
    switch (fieldName) {
      case "fullName":
        let nameInvalid = value.length < 4;
        invalid.name = nameInvalid;
        break;
      case "email":
        let emailInvalid = !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        invalid.email = emailInvalid;
        break;
      default:
        console.log("fieldName didn't match any existing case");
        break;
    }
    this.setState({ invalid: invalid });
  }

  toggleAcknowledgement = () =>
    this.setState({
      acknowledgementChecked: !this.state.acknowledgementChecked
    });

  handleSubmit = () => {
    if (
      !this.state.invalid.name &&
      !this.state.invalid.email &&
      this.state.acknowledgementChecked
    ) {
      this.setState({
        error: false,
        submission: {
          fullName: this.state.fullName,
          phone: this.state.phone,
          email: this.state.email,
          preferred: this.state.preferred,
          message: this.state.message
        }
      });
      this.setState(this.state.initialState); // reset state to defaults
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <Form error={this.state.error} onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            error={this.state.invalid.name}
            name="fullName"
            value={this.state.fullName}
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
            value={this.state.email}
            placeholder="local-part@domain.com"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="phone"
            value={this.state.phone}
            label="Phone number"
            placeholder="(123) 867-5309"
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            name="preferred"
            label="Preferred contact method"
            value={this.state.preferred}
            options={contactDropdownOptions}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.TextArea
          name="message"
          label="Include a message"
          value={this.state.message}
          placeholder="A good message will introduce yourself and give me any additional information required to contact you."
          onChange={this.handleChange}
        />
        <Form.Checkbox
          checked={this.state.acknowledgementChecked}
          onChange={this.toggleAcknowledgement}
          label="You acknowledge that your information will be securely delivered to only me."
          required
        />

        <Message error header="Make sure your contact info is correct!">
          <Message.Content>
            "Please enter your first and last name, full email address (for
            example, emailName@emailDomain.com), and click the acknoledgement
            box."
          </Message.Content>
        </Message>
        <Form.Button content="Submit" />
      </Form>
    );
  }
}

const ContactMeList = () => {
  return (
    <List>
      <List.Item>
        <List.Icon name="mail" />
        <List.Content>
          <List.Header>Email</List.Header>
          <List.List>
            <List.Item
              as="a"
              onClick={() => {
                window.open(`mailto:${PERSONAL_INFO.email}`, "_blank");
              }}
            >
              <List.Icon name="at" />
              <List.Content>
                <List.Header>{PERSONAL_INFO.email}</List.Header>
                <List.Description>Preferred</List.Description>
              </List.Content>
            </List.Item>

            <List.Item
              as="a"
              onClick={() => {
                window.open(`mailto:${PERSONAL_INFO.email}`, "_blank");
              }}
            >
              <List.Icon name="at" />
              <List.Content>
                <List.Header>{PERSONAL_INFO.emailAlt}</List.Header>
                <List.Description>Alternate</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="phone" />
        <List.Content>
          <List.Header>Phone</List.Header>
          <List.List>
            <List.Item>
              <List.Icon name="text telephone" />
              <List.Content>
                <List.Header>{PERSONAL_INFO.phone}</List.Header>
                <List.Description>Call or text me</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="comment alternate" />
        <List.Content>
          <List.Header>Send me a message</List.Header>
          <List.List>
            <List.Item>
              <Button
                icon
                onClick={() => window.open(PERSONAL_INFO.linkedinURL, "_blank")}
              >
                <Icon name="linkedin" color="blue" />
                LinkedIn
              </Button>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  );
};

const ContactContent = () => {
  return (
    <Grid stackable divided>
      <Grid.Row>
        <Grid.Column width={6}>
          <h3 className="heading-main-cell">Reach out to me</h3>
          <ContactMeList />
        </Grid.Column>
        <Grid.Column width={10}>
          <h3 className="heading-main-cell">Or, I can reach out to you</h3>
          <ContactForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ContactContent;
