import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@Index(["meetingId"], {
  unique: true,
})
export class ScheduleMeetings extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  meetingId!: string;

  @Column("varchar", { nullable: true })
  eventId?: string;

  @Column("uuid", { nullable: true })
  sourceId?: string;

  @Column("uuid")
  entityId: string;

  @Column("uuid")
  organizationId: string;

  @Column({ type: "varchar", nullable: true })
  organizationType: string;

  @Column({ type: "varchar", nullable: true })
  entityName: string;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar", default: "ONLINE" })
  meetingType?: "ONLINE" | "OFFLINE";

  @Column({ type: "varchar", nullable: true })
  description?: string;

  @Column({ type: "varchar", nullable: true })
  meetLink?: string;

  @Column({ type: "varchar", nullable: true })
  location?: string;

  @Column({ type: "varchar", nullable: true })
  notificationType: string;

  @Column({ type: "bigint", nullable: true })
  notifyBefore: number;

  @Column({ type: "bigint" })
  startTime: number;

  @Column({ type: "bigint" })
  endTime: number;

  @Column("text", { array: true, default: null, nullable: true })
  participants?: string[];

  // @Column("uuid")
  // generatedSlotId: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = new Date().getTime();
  }

  @BeforeInsert()
  insertManagedAt(): void {
    this.updatedAt = new Date().getTime();
    this.createdAt = new Date().getTime();
  }
}
