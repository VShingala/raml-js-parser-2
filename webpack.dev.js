module.exports = {
  entry: './dist/index.js',
  output: {
      path: '.',
      filename: 'raml-1-parser.js',
      libraryTarget: "umd",
      globalObject: 'this'
  },
  module: {
      rules: []
  },
  optimization: {
      minimize: true //Update this to true or false
  },
  // externals: [
  //     {
  //         // "buffer" : true,
  //         // "concat-stream" : true,
  //         // "esprima" : true,
  //         "libxml-xsd": true,
  //         "ws": true,
  //         // "http-response-object" : true,
  //         // "json-schema-compatibility" : true,
  //         // "json-stable-stringify" : true,
  //         // "know-your-http-well" : true,
  //         // "loophole" : true,
  //         // "lrucache" : true,
  //         // "media-typer" : true,
  //         // "path" : true,
  //         // "pluralize" : true,
  //         // "then-request" : true,
  //         "typescript": true,
  //         // "raml-xml-validation": "RAML.XmlValidation",
  //         // "raml-json-validation": "RAML.JsonValidation",
  //         // "underscore" : true,
  //         // "url": true,
  //         // "xmldom" : true,
  //         // "xmlhttprequest": true,
  //         // "xhr2": true,
  //         // "z-schema" : true,
  //     }
  // ],
  node: {
      console: false,
      global: true,
      __filename: true,
      __dirname: true
  }
}
