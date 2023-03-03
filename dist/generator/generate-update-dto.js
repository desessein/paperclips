"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUpdateDto = void 0;
const generateUpdateDto = ({ model, fields, imports, extraClasses, apiExtraModels, exportRelationModifierClasses, templateHelpers: t, annotateAllDtoProperties, }) => `
${t.importStatements(imports)}

${t.each(extraClasses, exportRelationModifierClasses ? (content) => `export ${content}` : t.echo, '\n')}

${t.if(apiExtraModels.length, t.apiExtraModels(apiExtraModels))}
export ${t.config.outputType} ${t.updateDtoName(model.name)} {
  ${t.fieldsToDtoProps(fields, true, false, annotateAllDtoProperties)}
}
`;
exports.generateUpdateDto = generateUpdateDto;
