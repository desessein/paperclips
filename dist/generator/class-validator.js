"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateClassValidators = exports.parseClassValidators = void 0;
const template_helpers_1 = require("./template-helpers");
const availableValidators = [
    'Allow',
    'ArrayContains',
    'ArrayMaxSize',
    'ArrayMinSize',
    'ArrayNotContains',
    'ArrayNotEmpty',
    'ArrayUnique',
    'Contains',
    'Equals',
    'IsAlpha',
    'IsAlphaNumeric',
    'IsArray',
    'IsAscii',
    'IsBase32',
    'IsBase64',
    'IsBIC',
    'IsBooleanString',
    'IsBtcAddress',
    'IsByteLength',
    'IsCreditCard',
    'IsCurrency',
    'IsDataURI',
    'IsDate',
    'IsDateString',
    'IsDecimal',
    'IsDefined',
    'IsDivisibleBy',
    'IsEAN',
    'IsEmail',
    'IsEmpty',
    'IsEthereumAddress',
    'IsFirebasePushId',
    'IsFQDN',
    'IsFullWidth',
    'IsHash',
    'IsHexadecimal',
    'IsHSLColor',
    'IsIBAN',
    'IsIdentityCard',
    'IsIn',
    'IsInstance',
    'IsIP',
    'IsISBN',
    'IsIsHalfWidth',
    'IsIsHexColor',
    'IsISIN',
    'IsISO31661Alpha2',
    'IsISO31661Alpha3',
    'IsISO8601',
    'IsISRC',
    'IsISSN',
    'IsIsVariableWidth',
    'IsJWT',
    'IsLatitude',
    'IsLatLong',
    'IsLocale',
    'IsLongitude',
    'IsLowercase',
    'IsMACAddress',
    'IsMagnetURI',
    'IsMilitaryTime',
    'IsMimeType',
    'IsMobilePhone',
    'IsMongoId',
    'IsMultiByte',
    'IsNegative',
    'IsNotEmptyObject',
    'IsNotIn',
    'IsNumberString',
    'IsNumberString',
    'IsObject',
    'IsOctal',
    'IsPassportNumber',
    'IsPhoneNumber',
    'IsPort',
    'IsPositive',
    'IsPostalCode',
    'IsRgbColor',
    'IsSemVer',
    'IsSurrogatePair',
    'IsUppercase',
    'IsUrl',
    'IsUUID',
    'Length',
    'Matches',
    'Max',
    'MaxDate',
    'MaxLength',
    'Min',
    'MinDate',
    'MinLength',
    'MinLength',
    'NotContains',
    'NotEquals',
];
const PrismaScalarToValidator = {
    String: { name: 'IsString' },
    Boolean: { name: 'IsBoolean' },
    Int: { name: 'IsInt' },
    BigInt: { name: 'IsInt' },
    Float: { name: 'IsNumber' },
    Decimal: { name: 'IsDecimal', transformTo: 'String' },
    DateTime: { name: 'IsRFC3339' },
};
function scalarToValidator(scalar) {
    return PrismaScalarToValidator[scalar];
}
function extractValidator(field, prop) {
    const regexp = new RegExp(`@${prop}(?:\\(([^)]*)\\))?\s*$`, 'm');
    const matches = regexp.exec(field.documentation || '');
    if (matches) {
        return {
            name: prop,
            value: matches[1],
        };
    }
    return null;
}
function parseClassValidators(field, dmmf) {
    const validators = [];
    if (field.isRequired) {
        validators.push({ name: 'IsNotEmpty' });
    }
    else {
        validators.push({ name: 'IsOptional' });
    }
    if (field.isList) {
        validators.push({ name: 'IsArray' });
        if (field.kind === 'object') {
            validators.push({ name: 'ValidateNested', value: '{ each: true }' });
        }
    }
    else {
        const typeValidator = scalarToValidator(field.type);
        if (typeValidator) {
            validators.push(typeValidator);
        }
        if (field.kind === 'object') {
            validators.push({ name: 'ValidateNested' });
        }
    }
    if (field.kind === 'object') {
        validators.push({ name: 'Type', value: `()=>${field.type}` });
    }
    if (field.documentation) {
        for (const prop of availableValidators) {
            const validator = extractValidator(field, prop);
            if (validator) {
                validators.push(validator);
            }
        }
    }
    if (field.kind === 'enum') {
        const enumtype = dmmf.datamodel.enums.find((x) => x.name === field.type);
        const evalue = enumtype === null || enumtype === void 0 ? void 0 : enumtype.values.map((x) => {
            return x.name;
        });
        validators.push({ name: 'IsIn', value: JSON.stringify(evalue) });
    }
    return validators;
}
exports.parseClassValidators = parseClassValidators;
function decorateClassValidators(field) {
    var _a;
    if (!((_a = field.classValidators) === null || _a === void 0 ? void 0 : _a.length))
        return '';
    let output = '';
    field.classValidators.forEach((prop) => {
        output += `@${prop.name}(${prop.value ? prop.value : ''})\n${(0, template_helpers_1.when)(prop.transformTo, `@Type(()=>${prop.transformTo})\n`)}`;
    });
    return output;
}
exports.decorateClassValidators = decorateClassValidators;
