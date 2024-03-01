import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LeadOrganizationPermissions } from "./lead-organization-permissions";
import { Projects } from "./projects";

@Entity()
@Index(["leadId"])
@Index(["leadMobile", "leadEmail", "organizationId", "organizationType"], {
  unique: true,
})
export class Leads extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  leadId!: string;

  @Column({ nullable: false, type: "uuid" })
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  organizationType: string;

  @Column({ type: "varchar", nullable: false })
  leadName: string;

  @Column({ type: "varchar", nullable: false })
  leadEmail: string;

  @Column({ type: "varchar", nullable: false })
  leadMobile: string;

  @Column({ type: "varchar", nullable: true })
  leadAddress: string;

  @Column({ type: "varchar", nullable: true })
  leadCity: string;

  @Column({ type: "varchar", nullable: true })
  leadState: string;

  @Column({ type: "varchar", nullable: true, default: null })
  leadCountry: string;

  @Column({ type: "varchar", nullable: true })
  leadZipcode: string;

  @Column({ type: "varchar", nullable: true })
  preferedContactType: string;

  @Column({ type: "bigint", nullable: true })
  preferedTimeSlot: number;

  @Column({ type: "boolean", default: false })
  unSubscribed: boolean;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @OneToOne(
    () => LeadOrganizationPermissions,
    (leadOrganizationPermission) => leadOrganizationPermission.leads,
  )
  leadOrganizationPermission: LeadOrganizationPermissions;

  @OneToMany(() => Projects, (project) => project.projectId, { cascade: true })
  projects: Projects[];

  // @AfterInsert()
  // async createProfile() {
  //   const leadOrganizationPermissions = new LeadOrganizationPermissions();
  //   leadOrganizationPermissions.leadId = this.leadId;
  //   await leadOrganizationPermissions.save();
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
  }
}
