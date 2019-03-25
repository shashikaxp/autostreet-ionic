import _ from "lodash";

export class ErrorLogger {

  info(message, data?) {
    if (_.isEmpty(data)) {
      console.info(message)
    } else {
      console.info(message, data)
    }
  }

  warn(message, data?) {
    if (_.isEmpty(data)) {
      console.warn(message)
    } else {
      console.warn(message, data)
    }
  }

  error(message, data?) {
    if (_.isEmpty(data)) {
      console.error(message)
    } else {
      console.error(message, data)
    }
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
}
