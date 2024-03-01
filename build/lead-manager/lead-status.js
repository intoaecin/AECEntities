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
exports.LeadStatus = void 0;
const typeorm_1 = require("typeorm");
let LeadStatus = class LeadStatus extends typeorm_1.BaseEntity {
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
], LeadStatus.prototype, "leadStatusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], LeadStatus.prototype, "leadStatusValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], LeadStatus.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], LeadStatus.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], LeadStatus.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], LeadStatus.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadStatus.prototype, "updateTimestampsOnInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadStatus.prototype, "updateTimestampsOnUpdate", null);
LeadStatus = __decorate([
    (0, typeorm_1.Entity)()
], LeadStatus);
exports.LeadStatus = LeadStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZC1zdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sZWFkLW1hbmFnZXIvbGVhZC1zdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBT2lCO0FBR1YsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVyxTQUFRLG9CQUFVO0lBb0J4Qyx3QkFBd0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCx3QkFBd0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBO0FBOUJDO0lBQUMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O2dEQUNUO0FBRXRCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzttREFDSjtBQUV4QjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7NkNBQ1Y7QUFFbEI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7NkNBQzFCO0FBRWxCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUMxQjtBQUVsQjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzs2Q0FDMUI7QUFFbEI7SUFBQyxJQUFBLHNCQUFZLEdBQUU7Ozs7MERBS2Q7QUFFRDtJQUFDLElBQUEsc0JBQVksR0FBRTs7OzswREFJZDtBQTlCVSxVQUFVO0lBRHRCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLFVBQVUsQ0ErQnRCO0FBL0JZLGdDQUFVIn0=