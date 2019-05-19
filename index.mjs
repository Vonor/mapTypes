const mapTypes = (object, key, options = {}) => {
    const Types = {
      "string": String,
      "object": Object,
      "number": Number,
      "array": Array,
      "boolean": Boolean,
      "bool": Boolean
    }
    const fn = (object) => {
      if (options.regex === true) {
        if (key in object) object[key] = RegExp(object[key]);
      } else {
        if (key in object) object[key] = Types[object[key].toLowerCase()];
      }
      
      for (var property in object) {
        if (object.hasOwnProperty(property)) {
          if (typeof object[property] == "object") {
            fn(object[property]);
          }
        }
      }
    }
    fn(object);
    return object;
  }

  export default mapTypes