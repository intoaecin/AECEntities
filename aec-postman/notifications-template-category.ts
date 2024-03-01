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
export class NotificationTemplateCategory extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  notificationTemplateCategoryId!: string;

  @Column({ type: "varchar", unique: true })
  notificationTemplateCategoryValue: string;

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
