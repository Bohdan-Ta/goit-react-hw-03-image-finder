import { Component } from "react";
// import Button from "../Button";
import Modal from "../Modal";
import s from "../Button/Button.module.css";

export default class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        {/* <Button /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>hello</h1>
            <button
              className={s.button}
              type="button"
              onClick={this.toggleModal}
            >
              close Modal
            </button>
          </Modal>
        )}

        <button className={s.button} type="button" onClick={this.toggleModal}>
          close Modal
        </button>
      </>
    );
  }
}
