"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateConnectDto = void 0;
const generateConnectDto = ({ model, fields, templateHelpers: t, }) => {
    return `
  export ${t.config.outputType} ${t.connectDtoName(model.name)} {
    ${t.fieldsToDtoProps(fields, true, false)}
  }
  `;
};
exports.generateConnectDto = generateConnectDto;
