import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class LeadStatus extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  leadStatusId!: string;

  @Column({ type: "varchar" })
  leadStatusValue: string;

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
