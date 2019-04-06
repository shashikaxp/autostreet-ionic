import _ from "lodash";

export class ErrorLogger {

  info(message, data?) {
   this.handleConsoleMessages('info', message, data);
  }

  warn(message, data?) {
    this.handleConsoleMessages('warn', message, data);
  }

  error(message, data?) {
    this.handleConsoleMessages('error', message, data);
  }

  group(groupName?) {
    if (_.isEmpty(groupName)) {
      console.group()
    } else {
      console.group(groupName)
    }
  }

  groupEnd(groupName?) {
    console.groupEnd()
  }

  handleConsoleMessages(type, message, data?) {
    if (_.isEmpty(data)) {
      console[type](message)
    } else {
      console[type](message, data)
    }
  }

}
