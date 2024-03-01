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
@Index(["generatedSlotId", "organizationId", "organizationType"], {
  unique: true,
})
export class GeneratedSlots extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  generatedSlotId!: string;

  @Column({ nullable: false, type: "uuid" })
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  organizationType: string;

  // @Column("uuid")
  // ocaId: string;

  @Column({ type: "varchar", nullable: false })
  day: string;

  @Column({ type: "varchar", nullable: false })
  startYear: string;

  @Column({ type: "varchar", nullable: false })
  startMonth: string;

  @Column({ type: "varchar", nullable: false })
  startDate: string;

  @Column({ type: "varchar", nullable: true })
  startHour: string;

  @Column({ type: "varchar", nullable: true })
  startMinutes: string;

  @Column({ type: "bigint", nullable: true })
  startTime: number;

  @Column({ type: "varchar", nullable: false })
  endYear: string;

  @Column({ type: "varchar", nullable: false })
  endMonth: string;

  @Column({ type: "varchar", nullable: false })
  endDate: string;

  @Column({ type: "varchar", nullable: true })
  endHour: string;

  @Column({ type: "varchar", nullable: true })
  endMinutes: string;

  @Column({ type: "bigint", nullable: true })
  endTime: number;

  @Column({ type: "varchar", default: 1 })
  totalSlotCount: number;

  @Column({ type: "varchar", default: 1 })
  availableSlotCount: number;

  @Column({ type: "boolean", default: false })
  isDateSpecificSlot: boolean;

  @Column({ type: "boolean", default: false })
  isMarkedUnavailable: boolean;

  @Column({ type: "boolean", default: false })
  isActive: boolean;

  @Column({ type: "varchar", nullable: false, default: "ACTIVE" })
  slotStatus: string;

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
