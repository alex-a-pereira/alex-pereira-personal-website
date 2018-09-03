// Modules
import React from "react";
import Gallery from "react-photo-gallery";
// Components
import SelectedImage from "./selected-image";
// Misc
import { ABOUT_ME } from "../../../assets/personal-info";

class AboutMeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ABOUT_ME.photos
    };
    // bind functions
    this.selectPhoto = this.selectPhoto.bind(this);
  }
  selectPhoto(event, obj) {
    let photos = this.state.photos;
    let lastSelection = this.state.selectedPhotoIndex;
    let newSelection = obj.index;

    if (newSelection === lastSelection) {
      newSelection = undefined;
    } else if (lastSelection !== undefined) {
      photos[lastSelection].selected = false;
    }

    // Regardless of the above conditional, the clicked image's state should now be reversed 
    photos[obj.index].selected = !this.state.photos[obj.index].selected;
    this.setState({ photos: photos, selectedPhotoIndex: newSelection });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 6 }}>
          <h3>This is what's important to me.</h3>

          {this.state.selectedPhotoIndex === undefined ? (
            <p className="content-subheading">
              If you'd like to read more about any of my interests, feel free to
              click on an image.
            </p>
          ) : (
            <div className="dark-border-thin about-me-description">
              <p>{ABOUT_ME.descriptions[this.state.selectedPhotoIndex]}</p>
            </div>
          )}
        </div>
        <Gallery
          photos={this.state.photos}
          onClick={this.selectPhoto}
          ImageComponent={SelectedImage}
          direction={"column"}
        />
      </div>
    );
  }
}
export default AboutMeContent;
