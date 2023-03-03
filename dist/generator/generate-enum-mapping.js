"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEnumMapping = void 0;
const path_1 = __importDefault(require("path"));
const regexp = new RegExp(`@DtoGenMapping\\s+\\((.+)\\)\\s*$`, 'm');
function genEnumMapping(enums, base) {
    const rtv = [];
    enums.forEach((enum_) => {
        const rstr = (enum_.documentation || '').replace(/[\n\r]/g, ' ') + '\n';
        const matches = regexp.exec(rstr);
        if (matches && matches[1]) {
            rtv.push({
                fileName: path_1.default.join(base, `${enum_.name}.ts`),
                content: `export function map${enum_.name}(key: string): string {
  const obj = ${matches[1]};
  return obj[key];
}`,
            });
        }
    });
    return rtv;
}
exports.genEnumMapping = genEnumMapping;
