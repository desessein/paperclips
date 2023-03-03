"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.theHelper = void 0;
const node_path_1 = __importDefault(require("node:path"));
const case_1 = require("case");
const template_helpers_1 = require("./template-helpers");
const compute_model_params_1 = require("./compute-model-params");
const generate_connect_dto_1 = require("./generate-connect-dto");
const generate_create_dto_1 = require("./generate-create-dto");
const generate_update_dto_1 = require("./generate-update-dto");
const generate_entity_1 = require("./generate-entity");
const generate_plain_dto_1 = require("./generate-plain-dto");
const annotations_1 = require("./annotations");
const field_classifiers_1 = require("./field-classifiers");
const generate_enum_mapping_1 = require("./generate-enum-mapping");
let theHelper;
exports.theHelper = theHelper;
const run = ({ output, dmmf, ...options }) => {
    const { exportRelationModifierClasses, outputToNestJsResourceStructure, flatResourceStructure, fileNamingStyle = 'camel', classValidation, outputType, noDependencies, explicitGeneration = false, annotateAllDtoProperties, ...preAndSuffixes } = options;
    const transformers = {
        camel: case_1.camel,
        kebab: case_1.kebab,
        pascal: case_1.pascal,
        snake: case_1.snake,
    };
    const transformFileNameCase = transformers[fileNamingStyle];
    const templateHelpers = (0, template_helpers_1.makeHelpers)({
        transformFileNameCase,
        transformClassNameCase: case_1.pascal,
        classValidation,
        outputType,
        noDependencies,
        ...preAndSuffixes,
    });
    exports.theHelper = theHelper = templateHelpers;
    const allModels = dmmf.datamodel.models;
    const filteredModels = allModels
        .filter((model) => explicitGeneration
        ? (0, field_classifiers_1.isAnnotatedWith)(model, annotations_1.DTO_EXPLICIT_GENERATE)
        : !(0, field_classifiers_1.isAnnotatedWith)(model, annotations_1.DTO_IGNORE_MODEL))
        .map((model) => ({
        ...model,
        output: {
            dto: outputToNestJsResourceStructure
                ? flatResourceStructure
                    ? node_path_1.default.join(output, transformFileNameCase(model.name))
                    : node_path_1.default.join(output, transformFileNameCase(model.name), 'dto')
                : output,
            entity: outputToNestJsResourceStructure
                ? flatResourceStructure
                    ? node_path_1.default.join(output, transformFileNameCase(model.name))
                    : node_path_1.default.join(output, transformFileNameCase(model.name), 'entities')
                : output,
        },
    }));
    const modelFiles = filteredModels.map((model) => {
        const modelParams = (0, compute_model_params_1.computeModelParams)({
            model,
            allModels: filteredModels,
            templateHelpers,
            dmmf,
            annotateAllDtoProperties,
        });
        const connectDto = {
            fileName: node_path_1.default.join(model.output.dto, templateHelpers.connectDtoFilename(model.name, true)),
            content: (0, generate_connect_dto_1.generateConnectDto)({
                ...modelParams.connect,
                templateHelpers,
            }),
        };
        const createDto = {
            fileName: node_path_1.default.join(model.output.dto, templateHelpers.createDtoFilename(model.name, true)),
            content: (0, generate_create_dto_1.generateCreateDto)({
                ...modelParams.create,
                exportRelationModifierClasses,
                templateHelpers,
            }),
        };
        const updateDto = {
            fileName: node_path_1.default.join(model.output.dto, templateHelpers.updateDtoFilename(model.name, true)),
            content: (0, generate_update_dto_1.generateUpdateDto)({
                ...modelParams.update,
                exportRelationModifierClasses,
                templateHelpers,
            }),
        };
        const entity = {
            fileName: node_path_1.default.join(model.output.entity, templateHelpers.entityFilename(model.name, true)),
            content: (0, generate_entity_1.generateEntity)({
                ...modelParams.entity,
                templateHelpers,
            }),
        };
        const plainDto = {
            fileName: node_path_1.default.join(model.output.dto, templateHelpers.plainDtoFilename(model.name, true)),
            content: (0, generate_plain_dto_1.generatePlainDto)({
                ...modelParams.plain,
                templateHelpers,
            }),
        };
        return [connectDto, createDto, updateDto, entity, plainDto];
    });
    const enumFiles = (0, generate_enum_mapping_1.genEnumMapping)(dmmf.datamodel.enums, output + '/enums');
    modelFiles.push(enumFiles);
    return [...modelFiles].flat();
};
exports.run = run;
