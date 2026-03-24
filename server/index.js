
const app = require('./src/app');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const PORT = process.env.PORT || 5000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ResQMap API",
      version: "1.0.0",
      description: "API documentation",
    },
  },
  apis: ["./server/routes/*.js"], // IMPORTANT path fix kiya hai
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
