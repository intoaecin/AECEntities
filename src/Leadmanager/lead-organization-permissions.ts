import {
  BaseEntity,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Leads } from "./leads";

@Entity()
export class LeadOrganizationPermissions extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  lorId!: string;

  @Column("uuid")
  leadId: string;

  @Column({ type: "varchar", nullable: true })
  createdBy: string;

  @CreateDateColumn({ type: "bigint", default: new Date().getTime() })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @UpdateDateColumn({ type: "bigint", default: new Date().getTime() })
  updatedAt: number;

  @OneToOne(() => Leads, (leads) => leads.leadOrganizationPermission, {
    cascade: ["insert"],
  })
  @JoinColumn({ name: "leadId" })
  leads: Leads;

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = new Date().getTime();
  }
}
