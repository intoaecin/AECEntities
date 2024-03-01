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
exports.LeadSources = void 0;
const typeorm_1 = require("typeorm");
let LeadSources = class LeadSources {
    updateManagedAt() {
        this.updatedAt = new Date().getTime();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], LeadSources.prototype, "leadSourceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], LeadSources.prototype, "leadSourceCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], LeadSources.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "bigint", default: new Date().getTime() }),
    __metadata("design:type", Number)
], LeadSources.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], LeadSources.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "bigint", default: new Date().getTime() }),
    __metadata("design:type", Number)
], LeadSources.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], LeadSources.prototype, "leadSourceSubCategory", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadSources.prototype, "updateManagedAt", null);
LeadSources = __decorate([
    (0, typeorm_1.Entity)()
], LeadSources);
exports.LeadSources = LeadSources;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZC1zb3VyY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xlYWQtc291cmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FPaUI7QUFHVixJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBdUJ0QixlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBO0FBekJDO0lBQUMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O2lEQUNUO0FBRXRCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VEQUNqQjtBQUUzQjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7OENBQ1Y7QUFFbEI7SUFBQyxJQUFBLDBCQUFnQixFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOzs4Q0FDbEQ7QUFFbEI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OENBQzFCO0FBRWxCO0lBQUMsSUFBQSwwQkFBZ0IsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7OENBQ2xEO0FBRWxCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7OzBEQUNmO0FBRTlCO0lBQUMsSUFBQSxzQkFBWSxHQUFFOzs7O2tEQUdkO0FBekJVLFdBQVc7SUFEdkIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksV0FBVyxDQTBCdkI7QUExQlksa0NBQVcifQ==