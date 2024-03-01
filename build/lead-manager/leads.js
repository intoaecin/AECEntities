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
exports.Leads = void 0;
const typeorm_1 = require("typeorm");
const lead_organization_permissions_1 = require("./lead-organization-permissions");
const projects_1 = require("./projects");
let Leads = class Leads extends typeorm_1.BaseEntity {
    // @AfterInsert()
    // async createProfile() {
    //   const leadOrganizationPermissions = new LeadOrganizationPermissions();
    //   leadOrganizationPermissions.leadId = this.leadId;
    //   await leadOrganizationPermissions.save();
    // }
    updateManagedAt() {
        this.updatedAt = Date.now();
    }
    updateTimestampsOnInsert() {
        const now = Date.now();
        this.createdAt = now;
        this.updatedAt = now;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Leads.prototype, "leadId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "uuid" }),
    __metadata("design:type", String)
], Leads.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Leads.prototype, "organizationType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Leads.prototype, "leadName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Leads.prototype, "leadEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Leads.prototype, "leadMobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "leadAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "leadCity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "leadState", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, default: null }),
    __metadata("design:type", String)
], Leads.prototype, "leadCountry", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "leadZipcode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "preferedContactType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Leads.prototype, "preferedTimeSlot", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Leads.prototype, "unSubscribed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Leads.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Leads.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Leads.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Leads.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => lead_organization_permissions_1.LeadOrganizationPermissions, (leadOrganizationPermission) => leadOrganizationPermission.leads),
    __metadata("design:type", lead_organization_permissions_1.LeadOrganizationPermissions)
], Leads.prototype, "leadOrganizationPermission", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => projects_1.Projects, (project) => project.projectId, { cascade: true }),
    __metadata("design:type", Array)
], Leads.prototype, "projects", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Leads.prototype, "updateManagedAt", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Leads.prototype, "updateTimestampsOnInsert", null);
Leads = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(["leadId"]),
    (0, typeorm_1.Index)(["leadMobile", "leadEmail", "organizationId", "organizationType"], {
        unique: true,
    })
], Leads);
exports.Leads = Leads;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sZWFkLW1hbmFnZXIvbGVhZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBVWlCO0FBQ2pCLG1GQUE4RTtBQUM5RSx5Q0FBc0M7QUFPL0IsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFNLFNBQVEsb0JBQVU7SUFnRW5DLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMkVBQTJFO0lBQzNFLHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMsSUFBSTtJQUdKLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBR0Qsd0JBQXdCO1FBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUN2QixDQUFDO0NBQ0YsQ0FBQTtBQWpGQztJQUFDLElBQUEsZ0NBQXNCLEVBQUMsTUFBTSxDQUFDOztxQ0FDZjtBQUVoQjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzs2Q0FDbkI7QUFFdkI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7K0NBQ3BCO0FBRXpCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7O3VDQUM1QjtBQUVqQjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzt3Q0FDM0I7QUFFbEI7SUFBQyxJ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