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
@Index(["settingid"])
@Index(["settingName"], { unique: true })
export class AecSettings extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  settingid!: string;

  @Column("varchar")
  settingName: string;

  @Column("varchar")
  settingCode: string;

  @Column("varchar", { nullable: true })
  description: string;

  @Column("varchar", { nullable: false })
  settingValue: string;

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
