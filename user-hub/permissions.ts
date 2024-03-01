import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@Index(["module"], { unique: true })
export class Permissions extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  permissionId!: string;

  @PrimaryColumn()
  id: number;

  @Column("varchar")
  module: string;

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
