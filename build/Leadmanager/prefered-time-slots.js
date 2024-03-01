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
exports.PreferedTimeSlots = void 0;
const typeorm_1 = require("typeorm");
let PreferedTimeSlots = class PreferedTimeSlots extends typeorm_1.BaseEntity {
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
], PreferedTimeSlots.prototype, "preferedTimeSlotId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], PreferedTimeSlots.prototype, "preferedTimeSlotValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], PreferedTimeSlots.prototype, "preferedTimeSlotLabel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], PreferedTimeSlots.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], PreferedTimeSlots.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], PreferedTimeSlots.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: false }),
    __metadata("design:type", Number)
], PreferedTimeSlots.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreferedTimeSlots.prototype, "updateTimestampsOnInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreferedTimeSlots.prototype, "updateTimestampsOnUpdate", null);
PreferedTimeSlots = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(["preferedTimeSlotValue", "preferedTimeSlotLabel"], { unique: true })
], PreferedTimeSlots);
exports.PreferedTimeSlots = PreferedTimeSlots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZWQtdGltZS1zbG90cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MZWFkbWFuYWdlci9wcmVmZXJlZC10aW1lLXNsb3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQVFpQjtBQUlWLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWtCLFNBQVEsb0JBQVU7SUF1Qi9DLHdCQUF3QjtRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUdELHdCQUF3QjtRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUE7QUFqQ0M7SUFBQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7NkRBQ0g7QUFFNUI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O2dFQUNFO0FBRTlCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOztnRUFDRTtBQUU5QjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7b0RBQ1Y7QUFFbEI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7b0RBQzFCO0FBRWxCO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O29EQUMxQjtBQUVsQjtJQUFDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOztvREFDMUI7QUFFbEI7SUFBQyxJQUFBLHNCQUFZLEdBQUU7Ozs7aUVBS2Q7QUFFRDtJQUFDLElBQUEsc0JBQVksR0FBRTs7OztpRUFJZDtBQWpDVSxpQkFBaUI7SUFGN0IsSUFBQSxnQkFBTSxHQUFFO0lBQ1IsSUFBQSxlQUFLLEVBQUMsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0dBQy9ELGlCQUFpQixDQWtDN0I7QUFsQ1ksOENBQWlCIn0=