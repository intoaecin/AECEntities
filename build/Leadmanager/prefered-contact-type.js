"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferedContactTypes = void 0;
const typeorm_1 = require("typeorm");
let PreferedContactTypes = class PreferedContactTypes extends typeorm_1.BaseEntity {
    updateTimestampsOnInsert() {
        const now = Date.now();
        this.createdAt = now;
        this.updatedAt = now;
    }
    updateTimestampsOnUpdate() {
        const now = Date.now();
        this.updatedAt = now;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PreferedContactTypes.prototype, "preferedContactTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], PreferedContactTypes.prototype, "preferedContactTypeValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], PreferedContactTypes.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], PreferedContactTypes.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], PreferedContactTypes.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], PreferedContactTypes.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreferedContactTypes.prototype, "updateTimestampsOnInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreferedContactTypes.prototype, "updateTimestampsOnUpdate", null);
PreferedContactTypes = __decorate([
    (0, typeorm_1.Entity)()
], PreferedContactTypes);
exports.PreferedContactTypes = PreferedContactTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZWQtY29udGFjdC10eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0xlYWRtYW5hZ2VyL3ByZWZlcmVkLWNvbnRhY3QtdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FPaUI7QUFHVixJQUFNLG9CQUFvQixHQUExQixNQUFNLG9CQUFxQixTQUFRLG9CQUFVO0lBb0JsRCx3QkFBd0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCx3QkFBd0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBO0FBOUJDO0lBQUMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O21FQUNBO0FBRS9CO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NFQUNUO0FBRWpDO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzt1REFDVjtBQUVsQjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzt1REFDMUI7QUFFbEI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dURBQzFCO0FBRWxCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7O3VEQUMxQjtBQUVsQjtJQUFDLElBQUEsc0JBQVksR0FBRTs7OztvRUFLZDtBQUVEO0lBQUMsSUFBQSxzQkFBWSxHQUFFOzs7O29FQUlkO0FBOUJVLG9CQUFvQjtJQURoQyxJQUFBLGdCQUFNLEdBQUU7R0FDSSxvQkFBb0IsQ0ErQmhDO0FBL0JZLG9EQUFvQiJ9