"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeEntityParams = void 0;
const node_path_1 = __importDefault(require("node:path"));
const slash_1 = __importDefault(require("slash"));
const annotations_1 = require("../annotations");
const field_classifiers_1 = require("../field-classifiers");
const helpers_1 = require("../helpers");
const api_decorator_1 = require("../api-decorator");
const computeEntityParams = ({ model, allModels, templateHelpers, }) => {
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
        if ((0, field_classifiers_1.isRelation)(field)) {
            overrides.isRequired = false;
            overrides.isNullable = field.isList
                ? false
                : field.isRequired
                    ? false
                    : !(0, field_classifiers_1.isAnnotatedWith)(field, annotations_1.DTO_RELATION_REQUIRED);
            if (field.type !== model.name) {
                const modelToImportFrom = allModels.find(({ name }) => name === field.type);
                if (!modelToImportFrom)
                    throw new Error(`related model '${field.type}' for '${model.name}.${field.name}' not found`);
                const importName = templateHelpers.entityName(field.type);
                const importFrom = (0, slash_1.default)(`${(0, helpers_1.getRelativePath)(model.output.entity, modelToImportFrom.output.entity)}${node_path_1.default.sep}${templateHelpers.entityFilename(field.type)}`);
                if (!imports.some((item) => Array.isArray(item.destruct) &&
                    item.destruct.includes(importName) &&
                    item.from === importFrom)) {
                    imports.push({
                        destruct: [importName],
                        from: importFrom,
                    });
                }
            }
        }
        if (relationScalarFieldNames.includes(name)) {
            const { [name]: relationNames } = relationScalarFields;
            const isAnyRelationRequired = relationNames.some((relationFieldName) => {
                const relationField = model.fields.find((anyField) => anyField.name === relationFieldName);
                if (!relationField)
                    return false;
                return ((0, field_classifiers_1.isRequired)(relationField) ||
                    (0, field_classifiers_1.isAnnotatedWith)(relationField, annotations_1.DTO_RELATION_REQUIRED));
            });
            overrides.isRequired = true;
            overrides.isNullable = !isAnyRelationRequired;
        }
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
exports.computeEntityParams = computeEntityParams;
