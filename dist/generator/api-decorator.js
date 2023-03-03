"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateApiProperty = exports.parseApiProperty = exports.extractAnnotation = exports.isAnnotatedWithDoc = void 0;
const _1 = require(".");
const template_helpers_1 = require("./template-helpers");
const ApiProps = [
    'description',
    'example',
    'exclusiveMaximum',
    'exclusiveMinimum',
    'maximum',
    'maxItems',
    'maxLength',
    'minimum',
    'minItems',
    'minLength',
    'oneOf',
];
const PrismaScalarToFormat = {
    Int: { type: 'integer', format: 'int32' },
    BigInt: { type: 'integer', format: 'int64' },
    Float: { type: 'number', format: 'float' },
    Decimal: { type: 'number', format: 'double' },
    DateTime: { type: 'string', format: 'date-time' },
};
function isAnnotatedWithDoc(field) {
    return ApiProps.some((prop) => new RegExp(`@${prop}\\s+(.+)\\s*$`, 'm').test(field.documentation || ''));
}
exports.isAnnotatedWithDoc = isAnnotatedWithDoc;
function getDefaultValue(field) {
    if (!field.hasDefaultValue)
        return undefined;
    switch (typeof field.default) {
        case 'string':
        case 'number':
        case 'boolean':
            return field.default;
        case 'object':
            if (field.default.name) {
                return field.default.name;
            }
        default:
            return undefined;
    }
}
function extractAnnotation(field, prop) {
    const regexp = new RegExp(`@${prop}\\s+(.+)\\s*$`, 'm');
    const matches = regexp.exec(field.documentation || '');
    if (matches && matches[1]) {
        return {
            name: prop,
            value: matches[1],
        };
    }
    return null;
}
exports.extractAnnotation = extractAnnotation;
function encapsulateString(value) {
    return /^$|^(?!true$|false$)[^0-9\[]/.test(value)
        ? `\`${value.replace(/`/g, "\\'")}\``
        : value;
}
function parseApiProperty(field, include = {}) {
    const incl = Object.assign({
        default: true,
        doc: true,
        enum: true,
        type: true,
    }, include);
    const properties = [];
    if (incl.doc && field.documentation) {
        for (const prop of ApiProps) {
            const property = extractAnnotation(field, prop);
            if (property) {
                if (property.name === 'oneOf') {
                    const cls = JSON.parse(property.value);
                    property.value = `[${(0, template_helpers_1.each)(cls, (x) => `{ $ref: getSchemaPath(${_1.theHelper.createDtoName(x)}) },`)}]`;
                }
                properties.push(property);
            }
        }
        if (!properties.some((p) => p.name === 'description')) {
            const doc_ = field.documentation.replace(/^\s*@.*$/gm, '');
            const d = doc_.trim();
            if (d.length > 0) {
                properties.push({
                    name: 'description',
                    value: d,
                });
            }
        }
    }
    const scalarFormat = PrismaScalarToFormat[field.type];
    if (incl.type && scalarFormat) {
        properties.push({ name: 'type', value: scalarFormat.type }, { name: 'format', value: scalarFormat.format });
    }
    if (incl.enum && field.kind === 'enum') {
        properties.push({ name: 'enum', value: field.type });
    }
    const defaultValue = getDefaultValue(field);
    if (incl.default && defaultValue !== undefined) {
        properties.push({ name: 'default', value: `${defaultValue}` });
    }
    return properties;
}
exports.parseApiProperty = parseApiProperty;
function decorateApiProperty(field, annotateAllProps = false) {
    console.log("field is", field);
    console.log("is list", field.isList);
    let decorator = '';
    if (field.apiProperties) {
        if (field.apiProperties.length) {
            decorator += '@ApiProperty({\n';
            field.apiProperties.forEach((prop) => {
                decorator += `  ${prop.name}: ${prop.name === 'enum' || prop.name === 'oneOf'
                    ? prop.value
                    : encapsulateString(prop.value)},\n`;
            });
            decorator += field.isList ? 'isArray: true,' : '';
            decorator += '})\n';
        }
        else if (field.kind !== 'enum' && annotateAllProps) {
            decorator += `@ApiProperty({${field.isList ? 'isArray: true,' : ''}})\n`;
        }
    }
    return decorator;
}
exports.decorateApiProperty = decorateApiProperty;
