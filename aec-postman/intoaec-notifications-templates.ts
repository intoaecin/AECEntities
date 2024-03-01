import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@Index(["notificationTemplateName", "notificationTemplateType"], {
  unique: true,
})
export class IntoAecNotificationTemplates extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  notificationTemplateId!: string;

  @Column({ type: "varchar" })
  notificationTemplateName: string;

  @Column({ type: "varchar" })
  notificationTemplateCategory: string;

  @Column({ type: "varchar", nullable: true })
  subject?: string;

  @Column({ type: "varchar", default: "LEAD" })
  notificationTemplateType: string;

  @Column({ type: "varchar" })
  notificationTemplateUrl: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "json", nullable: true })
  macros: any;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

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
