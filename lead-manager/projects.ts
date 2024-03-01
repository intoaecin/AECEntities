import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Leads } from "./leads";

@Entity()
@Index(["projectId", "lead.leadId", "projectOwnerId"], {
  unique: true,
})
@Index(["projectId"])
@Index(["projectOwnerId"])
@Index(["organizationId"])
@Index(["projectStatus"])
export class Projects extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  projectId!: string;

  @ManyToOne(() => Leads, (lead) => lead.projects)
  @JoinColumn()
  lead: Leads;

  @Column({ nullable: false, type: "uuid" })
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  organizationType: string;

  @Column({ type: "varchar", nullable: true })
  projectOwner: string;

  @Column({ nullable: true, type: "uuid" })
  projectOwnerId: string;

  @Column({ type: "varchar", nullable: true })
  projectSource: string;

  @Column({ type: "varchar" })
  projectType: string;

  @Column({ type: "decimal" })
  projectArea: number;

  @Column({ type: "varchar", default: "sqft" })
  projectAreaUnit: string;

  @Column({ type: "varchar", default: "NEW" })
  projectStatus: string;

  @Column({ type: "varchar", default: null, nullable: true })
  previousProjectStatus: string;

  @Column({ type: "boolean", default: false })
  isSnoozed: boolean;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "bigint", nullable: true, default: null })
  snoozedUntil?: number | null;

  @Column({ type: "bigint", nullable: false })
  projectStatusUpdatedAt: number;

  @Column({ type: "varchar", nullable: false })
  projectLocation: string;

  @Column({ type: "varchar", nullable: true })
  projectDescription: string;

  @Column({ type: "varchar", nullable: true })
  priority: string;

  @Column({ type: "varchar", default: "LEAD_CREATED" })
  automationStatus: string;

  @Column({ type: "varchar", default: null })
  previousAutomationStatus: string;

  @Column({ type: "bigint", nullable: true })
  automationStatusUpdatedAt: number;

  @Column({ type: "boolean", nullable: false, default: false })
  isAutomationInFollowUpStatus: boolean;

  @Column({ type: "uuid", nullable: true })
  automationFollowUpSetId: string;

  @Column({ type: "bigint", nullable: false })
  automationFollowUpStartRange: number;

  @Column({ type: "bigint", nullable: false })
  automationFollowUpEndRange: number;

  @Column({ type: "boolean", nullable: false, default: true })
  isSendScheduledAutomationEmail: boolean;

  // @Column({ type: "boolean", nullable: false, default: false })
  // isAutomationEmailSent: boolean;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  // @AfterInsert()
  // async createProfile() {
  //   const projectOrganizationPermissions = new LeadOrganizationPermissions();
  //   projectOrganizationPermissions.projectId = this.projectId;
  //   await projectOrganizationPermissions.save();
  // }

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = Date.now();
  }

  @BeforeInsert()
  updateTimestampsOnInsert() {
    const now = Date.now();
    this.createdAt = now;
    this.updatedAt = now;
    this.projectStatusUpdatedAt = now;
    this.automationStatusUpdatedAt = now;
    this.automationFollowUpStartRange = now;
    this.automationFollowUpEndRange = now;
  }
}
