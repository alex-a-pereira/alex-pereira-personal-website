// Modules
import React from "react";
import { Grid, Image } from "semantic-ui-react";
// Components
import ContentRow from "./content-row";
// Misc
import { EDUCATION, EXPERIENCE } from "../../assets/personal-info";

const ContentRowImage = props => {
  return <Image fluid rounded src={props.imgUrl} centered />;
};

export const EducationContent = () => {
  return (
    <Grid>
      <ContentRow
        borderClassName="dark-border-thin"
        leftContent={<ContentRowImage imgUrl={EDUCATION.school1.imageURL} />}
      >
        <h3 >{EDUCATION.school1.name}</h3>
        <h5>{EDUCATION.school1.subtitle}</h5>
        <p>{EDUCATION.school1.p1}</p>
        <p>{EDUCATION.school1.p2}</p>
        <p>{EDUCATION.school1.p3}</p>
      </ContentRow>
      <ContentRow
        leftContent={<ContentRowImage imgUrl={EDUCATION.school2.imageURL} />}
      >
        <h3>{EDUCATION.school2.name}</h3>
        <h5>{EDUCATION.school2.subtitle}</h5>
        <p>{EDUCATION.school2.p1}</p>
        <p>{EDUCATION.school2.p2}</p>
        <p>{EDUCATION.school2.p3}</p>
      </ContentRow>
    </Grid>
  );
};

export const ExperienceContent = () => {
  return (
    <Grid>
      <ContentRow
        borderClassName="dark-border-thin"
        leftContent={<ContentRowImage imgUrl={EXPERIENCE.company1.imageURL} />}
      >
        <h3>{EXPERIENCE.company1.name}</h3>
        <h5>{EXPERIENCE.company1.subtitle}</h5>
        <p>{EXPERIENCE.company1.p1}</p>
        <p>{EXPERIENCE.company1.p2}</p>
        <p>{EXPERIENCE.company1.p3}</p>
      </ContentRow>
      <ContentRow
        leftContent={<ContentRowImage imgUrl={EXPERIENCE.company2.imageURL} />}
      >
        <h3>{EXPERIENCE.company2.name}</h3>
        <h5>{EXPERIENCE.company2.subtitle}</h5>
        <p>{EXPERIENCE.company2.p1}</p>
        <p>{EXPERIENCE.company2.p2}</p>
        <p>{EXPERIENCE.company2.p3}</p>
      </ContentRow>
    </Grid>
  );
};
