import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class FormatHelper {
  protected static formatHelper: FormatHelper;
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

 static getInstance(): FormatHelper {
    if (!this.formatHelper) {
      this.formatHelper = new FormatHelper();
    }

    return this.formatHelper;
  }

  getDateStr(date, format = '') {
    let dateStr = '';

    if (format === undefined || format == null) {
      format = '';
    }

    if (date !== undefined && date != null) {
      if (typeof date === 'string') {
        date = new Date(date);
      }

      if (date) {
        switch (format.toLowerCase()) {
          case 'mdy':
            dateStr = `${this.formatNumberTwoDigits(date.getMonth())}/${this.formatNumberTwoDigits(date.getDate())}/${date.getFullYear()}`;
            break;

          default:
            dateStr = this.monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        }
      }
    }

    return dateStr;
  }

  getTimeStr(date) {
    let timeStr = '';

    if (date !== undefined && date != null) {
      if (typeof date === 'string') {
        date = new Date(date);
      }

      const dateTime = moment(date);

      if (dateTime.isValid) {
        timeStr = dateTime.format('hh:mm a');
      }
    }

    return timeStr;
  }

  getDateTimeStr(date) {
    let dateTimeStr = '';

    if (date !== undefined && date != null && date !== '') {
      if (typeof date === 'string') {
        date = new Date(date);
      }

      if (date) {
        const dateTime = moment(date);

        if (dateTime.isValid) {
          dateTimeStr = `${this.getDateStr(date)} ${this.getTimeStr(date)}`;
        }
      }
    }

    return dateTimeStr;
  }

  private formatNumberTwoDigits(numberToFormat) {
    if (parseInt(numberToFormat, 10) < 10) {
      return `0${numberToFormat.toString()}`;
    } else {
      return numberToFormat.toString();
    }
  }

  hasError(form, field) {
    return form && form[field] && form[field].dirty && form[field].errors;
  }

  isEmpty(form, field) {
    return form[field].errors && form[field].errors.required && (form[field].dirty || form[field].touched);
  }

  mustMatch(form, controlName, matchingControlName) {
    return form[controlName].value === form[matchingControlName].value;
  }

  money(value) {
    return `$ ${value}`;
  }

  autoMapper(from, to) {
    for (const key in from) {
      if (Object.prototype.hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  cloneObject(source) {
    return JSON.parse(JSON.stringify(source));
  }

  maskAccountNumber(accountNumber: string) {
    if (accountNumber != null && accountNumber.length > 0) {
      if (accountNumber.length > 4) {
        return `....${accountNumber.substring(accountNumber.length - 4)}`;
      } else {
        return `....${accountNumber}`;
      }
    } else {
      return '';
    }
  }

  setUserLogged(profile) {
    localStorage.setItem('userLoggedIn', JSON.stringify(profile));
  }

  getUserLogged() {
    return JSON.parse(localStorage.getItem('userLoggedIn'));
  }

  getCurrentPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }

}
