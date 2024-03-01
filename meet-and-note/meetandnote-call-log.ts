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
@Index(["callLogId"], {
  unique: true,
})
@Index(["sourceId"])
export class CallLog extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  callLogId!: string;

  @Column({ nullable: false, type: "uuid" })
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  organizationType: string;

  @Column("uuid")
  sourceId: string;

  @Column("uuid")
  entityId: string;

  @Column({ type: "varchar", nullable: true })
  entityName: string;

  @Column({ type: "varchar", nullable: false })
  callLogStatus: string;

  @Column({ type: "varchar", nullable: false })
  callPurpose: string;

  @Column({ type: "varchar", nullable: true })
  callLogContent: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = new Date().getTime();
  }

  @BeforeInsert()
  insertManagedAt(): void {
    this.updatedAt = new Date().getTime();
    this.createdAt = new Date().getTime();
  }
}
