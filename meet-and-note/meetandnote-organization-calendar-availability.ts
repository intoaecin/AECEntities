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
@Index(["ocaId", "organizationId", "organizationType"], {
  unique: true,
})
export class OrganizationCalendarAvailability extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  ocaId!: string;

  @Column({ nullable: false, type: "uuid" })
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  organizationType: string;

  @Column({ type: "varchar", nullable: false })
  day: string;

  @Column({ type: "varchar", nullable: false })
  startHour: string;

  @Column({ type: "varchar", nullable: false })
  startMinutes: string;

  @Column({ type: "varchar", nullable: false })
  endHour: string;

  @Column({ type: "varchar", nullable: false })
  endMinutes: string;

  @Column({ type: "varchar", nullable: false })
  timeZone: string;

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
