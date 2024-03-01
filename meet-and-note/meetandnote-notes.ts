import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
@Index(["notesId"], {
  unique: true,
})
@Index(["sourceId"])
export class Notes extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  notesId!: string;

  @Column("uuid")
  sourceId: string;

  @Column("uuid")
  entityId: string;

  @Column("uuid")
  organizationId: string;

  @Column({ type: "varchar", nullable: true })
  organizationType: string;

  @Column({ type: "varchar", nullable: true })
  entityName: string;

  @Column({ type: "varchar", nullable: false })
  notesContent: string;

  @Column({ type: "varchar", nullable: true })
  notesTitle: string;

  @Column({ type: "varchar", nullable: true })
  notesAttachments: string;

  @Column({ type: "bigint", nullable: true, default: null })
  notesUpdatedAt?: number | null;

  @Column({ type: "varchar", nullable: true })
  attachmentsSize: string;

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
