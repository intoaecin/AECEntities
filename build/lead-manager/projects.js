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
exports.Projects = void 0;
const typeorm_1 = require("typeorm");
const leads_1 = require("./leads");
let Projects = class Projects extends typeorm_1.BaseEntity {
    // @AfterInsert()
    // async createProfile() {
    //   const projectOrganizationPermissions = new LeadOrganizationPermissions();
    //   projectOrganizationPermissions.projectId = this.projectId;
    //   await projectOrganizationPermissions.save();
    // }
    updateManagedAt() {
        this.updatedAt = Date.now();
    }
    updateTimestampsOnInsert() {
        const now = Date.now();
        this.createdAt = now;
        this.updatedAt = now;
        this.projectStatusUpdatedAt = now;
        this.automationStatusUpdatedAt = now;
        this.automationFollowUpStartRange = now;
        this.automationFollowUpEndRange = now;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Projects.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => leads_1.Leads, (lead) => lead.projects),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", leads_1.Leads)
], Projects.prototype, "lead", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "uuid" }),
    __metadata("design:type", String)
], Projects.prototype, "organizationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Projects.prototype, "organizationType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "projectOwner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "uuid" }),
    __metadata("design:type", String)
], Projects.prototype, "projectOwnerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "projectSource", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Projects.prototype, "projectType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Projects.prototype, "projectArea", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: "sqft" }),
    __metadata("design:type", String)
], Projects.prototype, "projectAreaUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: "NEW" }),
    __metadata("design:type", String)
], Projects.prototype, "projectStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: null, nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "previousProjectStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Projects.prototype, "isSnoozed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Projects.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true, default: null }),
    __metadata("design:type", Number)
], Projects.prototype, "snoozedUntil", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Projects.prototype, "projectStatusUpdatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Projects.prototype, "projectLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "projectDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: "LEAD_CREATED" }),
    __metadata("design:type", String)
], Projects.prototype, "automationStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: null }),
    __metadata("design:type", String)
], Projects.prototype, "previousAutomationStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Projects.prototype, "automationStatusUpdatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Projects.prototype, "isAutomationInFollowUpStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "uuid", nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "automationFollowUpSetId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Projects.prototype, "automationFollowUpStartRange", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Projects.prototype, "automationFollowUpEndRange", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Projects.prototype, "isSendScheduledAutomationEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Projects.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Projects.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], Projects.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], Projects.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Projects.prototype, "updateManagedAt", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Projects.prototype, "updateTimestampsOnInsert", null);
Projects = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(["projectId", "lead.leadId", "projectOwnerId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)(["projectId"]),
    (0, typeorm_1.Index)(["projectOwnerId"]),
    (0, typeorm_1.Index)(["organizationId"]),
    (0, typeorm_1.Index)(["projectStatus"])
], Projects);
exports.Projects = Projects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sZWFkLW1hbmFnZXIvcHJvamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBVWlCO0FBQ2pCLG1DQUFnQztBQVV6QixJQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVMsU0FBUSxvQkFBVTtJQWtHdEMsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQiw4RUFBOEU7SUFDOUUsK0RBQStEO0lBQy9ELGlEQUFpRDtJQUNqRCxJQUFJO0lBR0osZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFHRCx3QkFBd0I7UUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxHQUFHLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7QUF2SEM7SUFBQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7MkNBQ1o7QUFFbkI7SUFBQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsYUFBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUEsb0JBQVUsR0FBRTs4QkFDUCxhQUFLO3NDQUFDO0FBRVo7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUs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