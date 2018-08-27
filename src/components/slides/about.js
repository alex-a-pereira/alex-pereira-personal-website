// Modules
import React from "react";
import { Divider } from "semantic-ui-react";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
// Misc
import { ABOUT_ME } from "../../assets/personal-info";

class AboutMeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ABOUT_ME.photos,
      activeDescriptionIndex: 0,
      width: -1
    };
    this.selectPhoto = this.selectPhoto.bind(this);
  }
  selectPhoto(event, obj) {
    // obj.index is the photos's idx. +1 because default description at idx 0
    this.setState({ activeDescriptionIndex: obj.index + 1 });
  }

  render() {
    const width = this.state.width;
    return (
      <div>
        <div style={{ padding: '0 3px 0 3px' }}>
          <h3>This is what's important to me.</h3>
        </div>
        <Measure
          bounds
          onResize={contentRect =>
            this.setState({ width: contentRect.bounds.width })
          }
        >
          {({ measureRef }) => {
            if (width < 1) {
              return <div ref={measureRef} />;
            }
            let columns = 1;
            if (width >= 376) {
              columns = 2;
            }
            if (width >= 800) {
              columns = 3;
            }
            if (width >= 1824) {
              columns = 4;
            }
            return (
              <div ref={measureRef}>
                <Gallery
                  photos={ABOUT_ME.photos}
                  columns={columns}
                  onClick={this.selectPhoto}
                />
              </div>
            );
          }}
        </Measure>
        <Divider />
        <div style={{ padding: '0 3px 0 3px' }}>
          <div className="about-me-description">
            <p>{ABOUT_ME.descriptions[this.state.activeDescriptionIndex]}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMeContent;
