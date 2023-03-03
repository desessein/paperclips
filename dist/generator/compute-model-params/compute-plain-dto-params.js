"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computePlainDtoParams = void 0;
const annotations_1 = require("../annotations");
const field_classifiers_1 = require("../field-classifiers");
const helpers_1 = require("../helpers");
const api_decorator_1 = require("../api-decorator");
const computePlainDtoParams = ({ model, allModels, templateHelpers, }) => {
    let hasApiProperty = false;
    const imports = [];
    const apiExtraModels = [];
    const relationScalarFields = (0, helpers_1.getRelationScalars)(model.fields);
    const relationScalarFieldNames = Object.keys(relationScalarFields);
    const fields = model.fields.reduce((result, field) => {
        const { name } = field;
        const overrides = {
            isRequired: true,
            isNullable: !field.isRequired,
        };
        const decorators = {};
        if ((0, field_classifiers_1.isAnnotatedWith)(field, annotations_1.DTO_ENTITY_HIDDEN))
            return result;
        if ((0, field_classifiers_1.isRelation)(field))
            return result;
        if (relationScalarFieldNames.includes(name))
            return result;
        if (!templateHelpers.config.noDependencies) {
            decorators.apiProperties = (0, api_decorator_1.parseApiProperty)(field, { default: false });
            if (decorators.apiProperties.length)
                hasApiProperty = true;
        }
        if (templateHelpers.config.noDependencies) {
            if (field.type === 'Json')
                field.type = 'Object';
            else if (field.type === 'Decimal')
                field.type = 'Float';
        }
        return [...result, (0, helpers_1.mapDMMFToParsedField)(field, overrides, decorators)];
    }, []);
    if (apiExtraModels.length || hasApiProperty) {
        const destruct = [];
        if (apiExtraModels.length)
            destruct.push('ApiExtraModels');
        if (hasApiProperty)
            destruct.push('ApiProperty');
        imports.unshift({ from: '@nestjs/swagger', destruct });
    }
    const importPrismaClient = (0, helpers_1.makeImportsFromPrismaClient)(fields);
    if (importPrismaClient)
        imports.unshift(importPrismaClient);
    return {
        model,
        fields,
        imports: (0, helpers_1.zipImportStatementParams)(imports),
        apiExtraModels,
        annotateAllDtoProperties: false,
    };
};
exports.computePlainDtoParams = computePlainDtoParams;
