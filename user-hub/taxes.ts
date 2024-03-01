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
@Index(["taxName", "organizationId", "organizationType"])
export class Taxes extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  taxId!: string;

  @Column("varchar")
  taxName: string;

  @Column("float")
  taxRate: number;

  @Column("uuid")
  organizationId: string;

  @Column("varchar")
  organizationType: string;

  @Column("boolean", { default: true })
  isActive: boolean;

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
