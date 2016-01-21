'use strict';

import $ from 'jquery';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Promise from 'bluebird';

import blocksUri from './blocks.png';

ReactDOM.render(<img src={blocksUri} />, document.querySelector('#root'));
