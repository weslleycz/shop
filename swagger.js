const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: 'Api Shop',
      description: 'Essa api consiste em uma loja virtual.',
    },
    host: 'localhost:3000',
    schemes: ['http'],
  };

const outputFile = "./src/swagger/swagger_output.json";
const endpointsFiles = ["./src/routes.ts"];

swaggerAutogen(outputFile, endpointsFiles,doc);
