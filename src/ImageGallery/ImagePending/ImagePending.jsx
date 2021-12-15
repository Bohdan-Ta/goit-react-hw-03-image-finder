import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './ImagePending.module.css';

export default class ImagePending extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
