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
@Index(["organizationId", "organizationType"])
export class GoogleAccount extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  googleAccountId: string;

  @Column({ type: "uuid" })
  organizationId: string;

  @Column({ type: "varchar" })
  organizationType: string;

  @Column({ type: "varchar", unique: true })
  gmailId: string;

  @Column({ type: "varchar", nullable: true })
  accessToken?: string;

  @Column({ type: "varchar", nullable: true })
  idToken?: string;

  @Column({ type: "varchar", nullable: true })
  refreshToken?: string;

  @Column({ type: "varchar", nullable: true })
  scope?: string;

  @Column({ type: "varchar", nullable: true })
  tokenType?: string;

  @Column({ type: "bigint", nullable: true })
  expiryTime?: number;

  @Column({ type: "boolean", default: false })
  accountExpired?: boolean;

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
