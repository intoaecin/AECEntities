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
exports.LeadOrganizationPermissions = void 0;
const typeorm_1 = require("typeorm");
const leads_1 = require("./leads");
let LeadOrganizationPermissions = class LeadOrganizationPermissions extends typeorm_1.BaseEntity {
    updateManagedAt() {
        this.updatedAt = new Date().getTime();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], LeadOrganizationPermissions.prototype, "lorId", void 0);
__decorate([
    (0, typeorm_1.Column)("uuid"),
    __metadata("design:type", String)
], LeadOrganizationPermissions.prototype, "leadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], LeadOrganizationPermissions.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "bigint", default: new Date().getTime() }),
    __metadata("design:type", Number)
], LeadOrganizationPermissions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], LeadOrganizationPermissions.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "bigint", default: new Date().getTime() }),
    __metadata("design:type", Number)
], LeadOrganizationPermissions.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => leads_1.Leads, (leads) => leads.leadOrganizationPermission, {
        cascade: ["insert"],
    }),
    (0, typeorm_1.JoinColumn)({ name: "leadId" }),
    __metadata("design:type", leads_1.Leads)
], LeadOrganizationPermissions.prototype, "leads", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeadOrganizationPermissions.prototype, "updateManagedAt", null);
LeadOrganizationPermissions = __decorate([
    (0, typeorm_1.Entity)()
], LeadOrganizationPermissions);
exports.LeadOrganizationPermissions = LeadOrganizationPermissions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZC1vcmdhbml6YXRpb24tcGVybWlzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sZWFkLW1hbmFnZXIvbGVhZC1vcmdhbml6YXRpb24tcGVybWlzc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBVWlCO0FBQ2pCLG1DQUFnQztBQUd6QixJQUFNLDJCQUEyQixHQUFqQyxNQUFNLDJCQUE0QixTQUFRLG9CQUFVO0lBMEJ6RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBO0FBNUJDO0lBQUMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7OzBEQUNoQjtBQUVmO0lBQUMsSUFBQSxnQkFBTSxFQUFDLE1BQU0sQ0FBQzs7MkRBQ0E7QUFFZjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs4REFDMUI7QUFFbEI7SUFBQyxJQUFBLDBCQUFnQixFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOzs4REFDbEQ7QUFFbEI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7OERBQzFCO0FBRWxCO0lBQUMsSUFBQSwwQkFBZ0IsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7OERBQ2xEO0FBRWxCO0lBQUMsSUFBQSxrQkFBUSxFQUFDLEdBQUcsRUFBRSxDQUFDLGFBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFO1FBQ2xFLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztLQUNwQixDQUFDO0lBQ0QsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOzhCQUN4QixhQUFLOzBEQUFDO0FBRWI7SUFBQyxJQUFBLHNCQUFZLEdBQUU7Ozs7a0VBR2Q7QUE1QlUsMkJBQTJCO0lBRHZDLElBQUEsZ0JBQU0sR0FBRTtHQUNJLDJCQUEyQixDQTZCdkM7QUE3Qlksa0VBQTJCIn0=