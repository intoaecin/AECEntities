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
@Index(["organizationId", "organizationName"], { unique: true })
export class Organizations extends BaseEntity {
  @PrimaryColumn("uuid")
  organizationId!: string;

  @Column("varchar")
  organizationName: string;

  @Column("boolean", { default: true })
  isActive: boolean;

  @Column("boolean", { default: true })
  automationEnabled: boolean;

  @Column({ type: "varchar", nullable: true })
  facebook: string;

  @Column({ type: "varchar", nullable: true })
  twitter: string;

  @Column({ type: "varchar", nullable: true })
  linkedIn: string;

  @Column({ type: "varchar", nullable: true })
  websiteOrBlog: string;

  @Column({ type: "varchar", nullable: true })
  instagram: string;

  @Column({ type: "varchar", nullable: true })
  publicProfile: string;

  @Column({ type: "varchar", nullable: true })
  eSignUrl: string;

  @Column({ type: "varchar", nullable: true })
  logoUrl: string;

  @Column("varchar", { unique: true, nullable: true, default: null })
  domainName: string;

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
