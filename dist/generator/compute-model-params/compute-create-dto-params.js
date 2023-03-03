"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeCreateDtoParams = void 0;
const annotations_1 = require("../annotations");
const field_classifiers_1 = require("../field-classifiers");
const helpers_1 = require("../helpers");
const api_decorator_1 = require("../api-decorator");
const class_validator_1 = require("../class-validator");
const computeCreateDtoParams = ({ model, allModels, templateHelpers, dmmf, annotateAllDtoProperties, }) => {
    let hasApiProperty = false;
    const imports = [];
    const apiExtraModels = [];
    const extraClasses = [];
    const classValidators = [];
    const relationScalarFields = (0, helpers_1.getRelationScalars)(model.fields);
    const relationScalarFieldNames = Object.keys(relationScalarFields);
    const fields = model.fields.reduce((result, field) => {
        const { name } = field;
        const overrides = {};
        const decorators = {};
        if ((0, field_classifiers_1.isReadOnly)(field))
            return result;
        if ((0, field_classifiers_1.isRelation)(field)) {
            if (!(0, field_classifiers_1.isAnnotatedWithOneOf)(field, annotations_1.DTO_RELATION_MODIFIERS_ON_CREATE)) {
                return result;
            }
            const relationInputType = (0, helpers_1.generateRelationInput)({
                field,
                model,
                allModels,
                templateHelpers,
                preAndSuffixClassName: templateHelpers.createDtoName,
                canCreateAnnotation: annotations_1.DTO_RELATION_CAN_CREATE_ON_CREATE,
                canCreateAsPropertyAnnotation: annotations_1.DTO_RELATION_AS_PROPERTY_ON_CREATE,
                canConnectAnnotation: annotations_1.DTO_RELATION_CAN_CONNECT_ON_CREATE,
                canConnectOrCreateAnnotation: annotations_1.DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_CREATE,
            });
            const isDtoRelationRequired = (0, field_classifiers_1.isAnnotatedWith)(field, annotations_1.DTO_RELATION_REQUIRED);
            if (isDtoRelationRequired)
                overrides.isRequired = true;
            if (field.isList)
                overrides.isRequired = false;
            overrides.type = relationInputType.type;
            if (!(0, field_classifiers_1.isAnnotatedWith)(field, annotations_1.DTO_RELATION_AS_PROPERTY_ON_CREATE)) {
                overrides.isList = false;
            }
            (0, helpers_1.concatIntoArray)(relationInputType.imports, imports);
            (0, helpers_1.concatIntoArray)(relationInputType.generatedClasses, extraClasses);
            if (!templateHelpers.config.noDependencies)
                (0, helpers_1.concatIntoArray)(relationInputType.apiExtraModels, apiExtraModels);
        }
        if (relationScalarFieldNames.includes(name))
            return result;
        const isDtoOptional = (0, field_classifiers_1.isAnnotatedWith)(field, annotations_1.DTO_CREATE_OPTIONAL);
        if (!isDtoOptional) {
            if ((0, field_classifiers_1.isIdWithDefaultValue)(field))
                return result;
            if ((0, field_classifiers_1.isUpdatedAt)(field))
                return result;
            if ((0, field_classifiers_1.isRequiredWithDefaultValue)(field))
                return result;
        }
        if (isDtoOptional) {
            overrides.isRequired = false;
        }
        if (templateHelpers.config.classValidation) {
            decorators.classValidators = (0, class_validator_1.parseClassValidators)({
                ...field,
                ...overrides,
            }, dmmf);
            (0, helpers_1.concatUniqueIntoArray)(decorators.classValidators, classValidators, 'name');
        }
        if (!templateHelpers.config.noDependencies) {
            decorators.apiProperties = (0, api_decorator_1.parseApiProperty)(field);
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
    if (apiExtraModels.length || hasApiProperty || annotateAllDtoProperties) {
        const destruct = [];
        if (apiExtraModels.length)
            destruct.push('ApiExtraModels');
        if (hasApiProperty || annotateAllDtoProperties) {
            destruct.push('ApiProperty');
        }
        destruct.push('getSchemaPath');
        imports.unshift({ from: '@nestjs/swagger', destruct });
    }
    if (classValidators.length) {
        imports.unshift({
            from: 'class-validator',
            destruct: classValidators
                .map((v) => {
                return v.name;
            })
                .filter((v) => v != 'Type')
                .sort(),
        });
        imports.unshift({
            from: 'class-transformer',
            destruct: ['Type'],
        });
    }
    const importPrismaClient = (0, helpers_1.makeImportsFromPrismaClient)(fields);
    if (importPrismaClient)
        imports.unshift(importPrismaClient);
    return {
        model,
        fields,
        imports: (0, helpers_1.zipImportStatementParams)(imports),
        extraClasses,
        apiExtraModels,
        annotateAllDtoProperties,
    };
};
exports.computeCreateDtoParams = computeCreateDtoParams;
