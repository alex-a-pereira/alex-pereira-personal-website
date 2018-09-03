// Modules
import React from "react";
import { Grid, Image } from "semantic-ui-react";
// Components
import ContentRow from "./content-row";
// Misc
import { EDUCATION, EXPERIENCE } from "../../assets/personal-info";

const ContentRowImage = props => {
  return <Image fluid src={props.imgUrl} centered />;
};

export const EducationContent = () => {
  return (
    <Grid>
      <ContentRow
        borderClassName="dark-border-thin"
        leftContent={<ContentRowImage imgUrl={EDUCATION.school1.imageURL} />}
      >
        <h3 className="content-heading">{EDUCATION.school1.name}</h3>
        <div className="content-subheading">
          <p style={{ margin: 0 }}>{EDUCATION.school1.subtitle}</p>
          <p>{EDUCATION.school1.subtitle_ext}</p>
        </div>
        <p>{EDUCATION.school1.p1}</p>
        <p>{EDUCATION.school1.p2}</p>
        <p>{EDUCATION.school1.p3}</p>
      </ContentRow>
      <ContentRow
        leftContent={<ContentRowImage imgUrl={EDUCATION.school2.imageURL} />}
      >
        <h3 className="content-heading">{EDUCATION.school2.name}</h3>
        <div className="content-subheading">
          <p style={{ margin: 0 }}>{EDUCATION.school2.subtitle}</p>
          <p>{EDUCATION.school2.subtitle_ext}</p>
        </div>
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
        <h3 className="content-heading">{EXPERIENCE.company1.name}</h3>
        <div className="content-subheading">
          <p style={{ margin: 0 }}>{EXPERIENCE.company1.subtitle}</p>
          <p>{EXPERIENCE.company1.subtitle_ext}</p>
        </div>
        <p>{EXPERIENCE.company1.p1}</p>
        <p>{EXPERIENCE.company1.p2}</p>
        <p>{EXPERIENCE.company1.p3}</p>
      </ContentRow>
      
      <ContentRow
        leftContent={<ContentRowImage imgUrl={EXPERIENCE.company2.imageURL} />}
      >
        <h3 className="content-heading">{EXPERIENCE.company2.name}</h3>
        <div className="content-subheading">
          <p style={{ margin: 0 }}>{EXPERIENCE.company2.subtitle}</p>
          <p>{EXPERIENCE.company2.subtitle_ext}</p>
        </div>
        <p>{EXPERIENCE.company2.p1}</p>
        <p>{EXPERIENCE.company2.p2}</p>
        <p>{EXPERIENCE.company2.p3}</p>
      </ContentRow>
    </Grid>
  );
};
