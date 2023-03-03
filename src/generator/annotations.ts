export const DTO_EXPLICIT_GENERATE = /@DtoExplicitGenerate/;
export const DTO_IGNORE_MODEL = /@DtoIgnoreModel/;
export const DTO_READ_ONLY = /@DtoReadOnly/;
export const DTO_ENTITY_HIDDEN = /@DtoEntityHidden/;
export const DTO_CREATE_OPTIONAL = /@DtoCreateOptional/;
export const DTO_UPDATE_OPTIONAL = /@DtoUpdateOptional/;
export const DTO_RELATION_REQUIRED = /@DtoRelationRequired/;
export const DTO_ENUM_MAPPING = /@DtoMap/;
export const DTO_GEN_ENUM_MAPPING = /@DtoGenMapping/;
export const DTO_RELATION_AS_PROPERTY_ON_CREATE =
  /@DtoRelationAsPropertyOnCreate/;
export const DTO_RELATION_CAN_CREATE_ON_CREATE =
  /@DtoRelationCanCreateOnCreate/;
export const DTO_RELATION_CAN_CONNECT_ON_CREATE =
  /@DtoRelationCanConnectOnCreate/;
export const DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_CREATE =
  /@DtoRelationCanConnectOrCreateOnCreate/;
export const DTO_RELATION_CAN_CREATE_ON_UPDATE =
  /@DtoRelationCanCreateOnUpdate/;
export const DTO_RELATION_CAN_CONNECT_ON_UPDATE =
  /@DtoRelationCanConnectOnUpdate/;
export const DTO_RELATION_CAN_CONNECT_OR_CREATE_ON_UPDATE =
  /@DtoRelationCanConnectOrCreateOnUpdate/;
export const DTO_RELATION_MODIFIERS = [
  DTO_RELATION_AS_PROPERTY_ON_CREATE,
  DTO_RELATION_CAN_CREATE_ON_CREATE,
  DTO_RELATION_CAN_CONNECT_ON_CREATE,
  DTO_RELATION_CAN_CREATE_ON_UPDATE,
  DTO_RELATION_CAN_CONNECT_ON_UPDATE,
];
export const DTO_RELATION_MODIFIERS_ON_CREATE = [
  DTO_RELATION_AS_PROPERTY_ON_CREATE,
  DTO_RELATION_CAN_CREATE_ON_CREATE,
  DTO_RELATION_CAN_CONNECT_ON_CREATE,
];
export const DTO_RELATION_MODIFIERS_ON_UPDATE = [
  DTO_RELATION_CAN_CREATE_ON_UPDATE,
  DTO_RELATION_CAN_CONNECT_ON_UPDATE,
];
