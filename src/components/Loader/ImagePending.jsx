import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './ImagePending.module.css';

export default class ImagePending extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Rings"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}
