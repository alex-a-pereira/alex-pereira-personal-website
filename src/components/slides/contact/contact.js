// Modules
import React from "react";
import { Grid, List, Form, Message, Button, Icon } from "semantic-ui-react";
import axios from "axios";
// Components
import ContactForm from './contact-form';
// Misc
import { PERSONAL_INFO } from "../../../assets/personal-info";

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
    <div>
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
    </div>
  );
};

export default ContactContent;
