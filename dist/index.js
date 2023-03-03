"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.stringToBoolean = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const make_dir_1 = __importDefault(require("make-dir"));
const generator_helper_1 = require("@prisma/generator-helper");
const sdk_1 = require("@prisma/sdk");
const generator_1 = require("./generator");
const stringToBoolean = (input, defaultValue = false) => {
    if (input === 'true') {
        return true;
    }
    if (input === 'false') {
        return false;
    }
    return defaultValue;
};
exports.stringToBoolean = stringToBoolean;
const generate = (options) => {
    const output = (0, sdk_1.parseEnvValue)(options.generator.output);
    const { connectDtoPrefix = 'Connect', createDtoPrefix = 'Create', updateDtoPrefix = 'Update', dtoSuffix = 'Dto', entityPrefix = '', entitySuffix = '', fileNamingStyle = 'camel', outputType = 'class', } = options.generator.config;
    const exportRelationModifierClasses = (0, exports.stringToBoolean)(options.generator.config.exportRelationModifierClasses, true);
    const explicitGeneration = (0, exports.stringToBoolean)(options.generator.config.explicitGeneration, false);
    const outputToNestJsResourceStructure = (0, exports.stringToBoolean)(options.generator.config.outputToNestJsResourceStructure, false);
    const flatResourceStructure = (0, exports.stringToBoolean)(options.generator.config.flatResourceStructure, false);
    const annotateAllDtoProperties = (0, exports.stringToBoolean)(options.generator.config.annotateAllDtoProperties, false);
    const reExport = (0, exports.stringToBoolean)(options.generator.config.reExport, false);
    const supportedFileNamingStyles = ['kebab', 'camel', 'pascal', 'snake'];
    const isSupportedFileNamingStyle = (style) => supportedFileNamingStyles.includes(style);
    if (!isSupportedFileNamingStyle(fileNamingStyle)) {
        throw new Error(`'${fileNamingStyle}' is not a valid file naming style. Valid options are ${supportedFileNamingStyles
            .map((s) => `'${s}'`)
            .join(', ')}.`);
    }
    const classValidation = (0, exports.stringToBoolean)(options.generator.config.classValidation, false);
    const supportedOutputTypes = ['class', 'interface'];
    if (!supportedOutputTypes.includes(outputType)) {
        throw new Error(`'${outputType}' is not a valid output type. Valid options are 'class' and 'interface'.`);
    }
    const noDependencies = (0, exports.stringToBoolean)(options.generator.config.noDependencies, false);
    if (classValidation && outputType !== 'class') {
        throw new Error(`To use 'validation' validation decorators, 'outputType' must be 'class'.`);
    }
    if (classValidation && noDependencies) {
        throw new Error(`To use 'validation' validation decorators, 'noDependencies' cannot be false.`);
    }
    const results = (0, generator_1.run)({
        output,
        dmmf: options.dmmf,
        exportRelationModifierClasses,
        outputToNestJsResourceStructure,
        flatResourceStructure,
        connectDtoPrefix,
        createDtoPrefix,
        updateDtoPrefix,
        dtoSuffix,
        entityPrefix,
        entitySuffix,
        fileNamingStyle,
        classValidation,
        outputType,
        noDependencies,
        explicitGeneration,
        annotateAllDtoProperties,
    });
    const indexCollections = {};
    if (reExport) {
        results.forEach(({ fileName }) => {
            const dirName = node_path_1.default.dirname(fileName);
            const { [dirName]: fileSpec } = indexCollections;
            indexCollections[dirName] = {
                fileName: (fileSpec === null || fileSpec === void 0 ? void 0 : fileSpec.fileName) || node_path_1.default.join(dirName, 'index.ts'),
                content: [
                    (fileSpec === null || fileSpec === void 0 ? void 0 : fileSpec.content) || '',
                    `export * from './${node_path_1.default.basename(fileName, '.ts')}';`,
                ].join('\n'),
            };
        });
    }
    return Promise.all(results
        .concat(Object.values(indexCollections))
        .map(async ({ fileName, content }) => {
        await (0, make_dir_1.default)(node_path_1.default.dirname(fileName));
        return promises_1.default.writeFile(fileName, content);
    }));
};
exports.generate = generate;
(0, generator_helper_1.generatorHandler)({
    onManifest: () => ({
        defaultOutput: '../src/generated/nestjs-dto',
        prettyName: 'NestJS DTO Generator',
    }),
    onGenerate: exports.generate,
});
