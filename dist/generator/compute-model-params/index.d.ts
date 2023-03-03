import { TemplateHelpers } from '../template-helpers';
import type { Model, ModelParams } from '../types';
import { DMMF } from '@prisma/generator-helper';
interface ComputeModelParamsParam {
    model: Model;
    allModels: Model[];
    templateHelpers: TemplateHelpers;
    dmmf: DMMF.Document;
    annotateAllDtoProperties: boolean;
}
export declare const computeModelParams: ({ model, allModels, templateHelpers, dmmf, annotateAllDtoProperties, }: ComputeModelParamsParam) => ModelParams;
export {};
