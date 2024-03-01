import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryColumn,
} from "typeorm";

@Entity()
@Index(["emailId"], { unique: true })
@Index(["mobileNumber"], { unique: true })
export class Users extends BaseEntity {
  @PrimaryColumn("uuid", { name: "userId" })
  userId!: string;

  @Column("varchar")
  firstName: string;

  @Column("varchar")
  lastName: string;

  @Column("varchar", { nullable: true, default: null })
  mobileNumber?: string;

  @Column("varchar", { nullable: false })
  emailId: string;

  @Column("boolean", { default: false })
  isSupportUser: boolean;

  @Column("varchar", { nullable: true, default: null })
  profileImageUrl?: string;

  @Column("varchar", { nullable: true, default: null })
  password?: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "varchar", nullable: true })
  addressLine1: string;

  @Column({ type: "varchar", nullable: true })
  addressLine2: string;

  @Column({ type: "varchar", nullable: true })
  city: string;

  @Column({ type: "varchar", nullable: true })
  state: string;

  @Column({ type: "varchar", nullable: true })
  country: string;

  @Column({ type: "varchar", nullable: true })
  zipCode: string;

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
