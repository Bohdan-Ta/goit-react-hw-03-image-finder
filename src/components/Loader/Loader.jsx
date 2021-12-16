import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import s from './Loader.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Circles"
        color="#3f51b5"
        height={150}
        width={150}
        timeout={3000}
      />
    );
  }
}
