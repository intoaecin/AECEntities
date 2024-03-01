import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class PreferedContactTypes extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  preferedContactTypeId!: string;

  @Column({ type: "varchar", unique: true })
  preferedContactTypeValue: string;

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
