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
@Index(["settingName", "organizationId", "organizationType"], { unique: true })
export class Settings extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  settingId!: string;

  @Column("uuid")
  organizationId: string;

  @Column("varchar")
  organizationType: string;

  @Column("varchar")
  settingName: string;

  @Column("varchar", { nullable: true })
  settingDescription?: string;

  @Column("varchar")
  settingValue1: string;

  @Column("varchar", { nullable: true })
  settingValue2?: string;

  @Column("varchar", { nullable: true })
  settingValue3?: string;

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
