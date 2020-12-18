import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import * as moment from 'moment';
import { FormatHelper } from '../format.helpers';

export class BaseComponent {
  formatHelper = FormatHelper.getInstance();
  filteredList = [];
  searchCriteria = '';
  pageOfItems: Array<any> = [];
  currentDateTime = moment();
  currentPath = '';
  loading = false;
  userLoggedIn: any;

  constructor() {}

  filter(sourceList, property) {
    // TODO: Multiple properties
    // const searchItem: any = {};
    // searchItem[property] = this.searchCriteria;
    // const filtered = _.where(sourceList, searchItem);

    if (this.searchCriteria !== '' && sourceList != null && sourceList.length > 0) {
      const elm = sourceList[0];
      if (Object.prototype.hasOwnProperty.call(elm, property)) {
        this.filteredList = sourceList.filter(item => {
          if (item[property] != null) {
            return item[property].trim().toLowerCase().includes(this.searchCriteria.trim().toLowerCase());
          }
        });
      } else {
        this.filteredList = sourceList;
      }
    } else {
      this.filteredList = sourceList;
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  shortenDescription(text: string) {
    if (text !== undefined && text !== null && text.length > 50) {
      return `${text.substring(0, 49)}...`;
    } else {
      return text;
    }
  }

  displayAlert(title, message, alertType) {
    Swal.fire(title, message, alertType);
  }

  getUserLogged() {
    this.userLoggedIn = this.formatHelper.getUserLogged();
  }
}
