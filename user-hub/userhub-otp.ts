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
@Index(["otpId"])
@Index(["createdBy"])
export class UserHubOtp extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  otpId!: string;

  @Column("varchar", { nullable: false })
  otpValue: string;

  @Column("enum", { nullable: false, enum: ["email", "mobile"] })
  otpType: "email" | "mobile";

  @Column("int", { nullable: false })
  retries: number;

  @Column("boolean", { default: false })
  isVerified: boolean;

  @Column("varchar", { nullable: false })
  eventType: string;

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
