import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Modal from '../Modal';
import ImageGallery from '../ImageGallery';
import Searchbar from '../Searchbar/Searchbar';

// import featch from "../servises/getApi";

export default class App extends Component {
  state = {
    showModal: false,
    searchValue: '',
    modalImg: {
      src: '',
      alt: '',
    },
  };

  getNameImage = searchValue => {
    this.setState({ searchValue });
  };

  toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: {
        src,
        alt,
      },
    }));
  };

  render() {
    const { searchValue, showModal, modalImg } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.getNameImage} />
        <ImageGallery imageName={searchValue} openModal={this.toggleModal} />
        {showModal && <Modal onClose={this.toggleModal} modalImg={modalImg} />}
        {showModal && <Modal onClose={this.toggleModal} />}
        {/* <ToastContainer autoClose={5000} /> */}
      </div>
    );
  }
}
