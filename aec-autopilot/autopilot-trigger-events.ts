import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class AutopilotTriggerEvents extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  ateId!: string;

  @Column({ type: "varchar", nullable: false })
  eventSource: string;

  @Column({ type: "varchar", nullable: false })
  eventDesc: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @UpdateDateColumn({ type: "bigint", default: new Date().getTime() })
  updatedAt: number;

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = new Date().getTime();
  }

  @BeforeInsert()
  updateTimestampsOnInsert() {
    const now = Date.now();
    this.createdAt = now;
    this.updatedAt = now;
  }
}
