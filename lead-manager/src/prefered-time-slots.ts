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
@Index(["preferedTimeSlotValue", "preferedTimeSlotLabel"], { unique: true })
export class PreferedTimeSlots extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  preferedTimeSlotId!: string;

  @Column({ type: "varchar" })
  preferedTimeSlotValue: string;

  @Column({ type: "varchar" })
  preferedTimeSlotLabel: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @BeforeInsert()
  updateTimestampsOnInsert() {
    const now = Date.now();
    this.createdAt = now;
    this.updatedAt = now;
  }

  @BeforeUpdate()
  updateTimestampsOnUpdate() {
    const now = Date.now();
    this.updatedAt = now;
  }
}
