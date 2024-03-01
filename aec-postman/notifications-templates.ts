import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";

@Entity()
@Index(
  [
    "notificationTemplateName",
    "notificationTemplateType",
    "organizationId",
    "organizationType",
  ],
  {
    unique: true,
  }
)
export class NotificationTemplates extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  notificationTemplateId!: string;

  @PrimaryColumn("uuid")
  organizationId!: string;

  @Column({ type: "varchar" })
  organizationType: string;

  @Column({ type: "varchar" })
  notificationTemplateName: string;

  @Column({ type: "varchar", default: "LEAD" })
  notificationTemplateType: string;

  @Column({ type: "varchar" })
  notificationTemplateCategory: string;

  @Column({ type: "varchar" })
  subject: string;

  @Column({ type: "varchar" })
  notificationTemplateUrl: string;

  @Column({ type: "json", nullable: true })
  macros: any;

  @Column({ type: "json", nullable: true })
  themes: any;

  @Column({ type: "boolean", default: false })
  isDefault: boolean;

  @Column({ type: "boolean", default: false })
  hidden: boolean;

  @Column({ type: "varchar", nullable: true })
  defaultTemplateUrl: string;

  @Column({ type: "boolean", default: true })
  isActive: boolean;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @Column({ type: "bigint", nullable: true })
  deletedAt: number;

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
