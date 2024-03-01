import {
  Entity,
  Column,
  Index,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from "typeorm";

@Entity()
@Index(["activityId"])
@Index(["targetUserId"])
export class AlertsAndNotifications extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  aanId!: string;

  @Column({ type: "uuid", nullable: false })
  activityId: string;

  @Column({ type: "uuid", nullable: true })
  targetUserId: string;

  @Column({ type: "uuid", nullable: true })
  targetUserName: string;

  @Column({ type: "boolean", default: false })
  isNotification: boolean;

  @Column({ type: "boolean", default: false })
  isNotificationRead: boolean;

  @Column({ type: "varchar", nullable: true })
  notificationRedirectUrl: string;

  @Column({ type: "boolean", default: false })
  isAlert: boolean;

  @Column({ type: "boolean", default: false })
  isAlertRead: boolean;

  @Column({ type: "varchar", nullable: true })
  alertRedirectUrl: string;

  @Column({ type: "varchar", nullable: false })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @BeforeInsert()
  updateTimestampsOnInsert() {
    const now = Date.now();
    this.createdAt = now;
  }
}
