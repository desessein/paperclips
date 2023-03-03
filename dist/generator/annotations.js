"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTO_RELATION_MODIFIERS_ON_UPDATE = exports.DTO_RELATION_MODIFIERS_ON_CREATE = exports.DTO_RELATION_MODIFIERS = exports.DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_UPDATE = exports.DTO_RELATION_CAN_CONNECT_ON_UPDATE = exports.DTO_RELATION_CAN_CREATE_ON_UPDATE = exports.DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_CREATE = exports.DTO_RELATION_CAN_CONNECT_ON_CREATE = exports.DTO_RELATION_CAN_CREATE_ON_CREATE = exports.DTO_RELATION_AS_PROPERTY_ON_CREATE = exports.DTO_GEN_ENUM_MAPPING = exports.DTO_ENUM_MAPPING = exports.DTO_RELATION_REQUIRED = exports.DTO_UPDATE_OPTIONAL = exports.DTO_CREATE_OPTIONAL = exports.DTO_ENTITY_HIDDEN = exports.DTO_READ_ONLY = exports.DTO_IGNORE_MODEL = exports.DTO_EXPLICIT_GENERATE = void 0;
exports.DTO_EXPLICIT_GENERATE = /@DtoExplicitGenerate/;
exports.DTO_IGNORE_MODEL = /@DtoIgnoreModel/;
exports.DTO_READ_ONLY = /@DtoReadOnly/;
exports.DTO_ENTITY_HIDDEN = /@DtoEntityHidden/;
exports.DTO_CREATE_OPTIONAL = /@DtoCreateOptional/;
exports.DTO_UPDATE_OPTIONAL = /@DtoUpdateOptional/;
exports.DTO_RELATION_REQUIRED = /@DtoRelationRequired/;
exports.DTO_ENUM_MAPPING = /@DtoMap/;
exports.DTO_GEN_ENUM_MAPPING = /@DtoGenMapping/;
exports.DTO_RELATION_AS_PROPERTY_ON_CREATE = /@DtoRelationAsPropertyOnCreate/;
exports.DTO_RELATION_CAN_CREATE_ON_CREATE = /@DtoRelationCanCreateOnCreate/;
exports.DTO_RELATION_CAN_CONNECT_ON_CREATE = /@DtoRelationCanConnectOnCreate/;
exports.DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_CREATE = /@DtoRelationCanConnectOrCreateOnCreate/;
exports.DTO_RELATION_CAN_CREATE_ON_UPDATE = /@DtoRelationCanCreateOnUpdate/;
exports.DTO_RELATION_CAN_CONNECT_ON_UPDATE = /@DtoRelationCanConnectOnUpdate/;
exports.DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_UPDATE = /@DtoRelationCanConnectOrCreateOnUpdate/;
exports.DTO_RELATION_MODIFIERS = [
    exports.DTO_RELATION_AS_PROPERTY_ON_CREATE,
    exports.DTO_RELATION_CAN_CREATE_ON_CREATE,
    exports.DTO_RELATION_CAN_CONNECT_ON_CREATE,
    exports.DTO_RELATION_CAN_CREATE_ON_UPDATE,
    exports.DTO_RELATION_CAN_CONNECT_ON_UPDATE,
];
exports.DTO_RELATION_MODIFIERS_ON_CREATE = [
    exports.DTO_RELATION_AS_PROPERTY_ON_CREATE,
    exports.DTO_RELATION_CAN_CREATE_ON_CREATE,
    exports.DTO_RELATION_CAN_CONNECT_ON_CREATE,
];
exports.DTO_RELATION_MODIFIERS_ON_UPDATE = [
    exports.DTO_RELATION_CAN_CREATE_ON_UPDATE,
    exports.DTO_RELATION_CAN_CONNECT_ON_UPDATE,
];
