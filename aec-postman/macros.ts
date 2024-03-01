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
@Index(
  [
    "macroTableName",
    "macroColumnName",
    "macroColumnType",
    "macroCategory",
    "macroSubCategory",
  ],
  {
    unique: true,
  },
)
export class Macros extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  macrosId: string;

  @Column("varchar")
  macroSource: string;

  @Column("varchar")
  macroCategory: string;

  @Column("varchar", { nullable: true })
  macroSubCategory?: string;

  @Column("varchar", { nullable: true })
  macroDatabaseName: string;

  @Column("varchar", { nullable: true })
  macroTableName: string;

  @Column("varchar", { nullable: true })
  macroColumnName: string;

  @Column("varchar", { nullable: true })
  entityColumnName: string;

  @Column("boolean", { default: false })
  staticMacro?: boolean;

  @Column("boolean", { default: false })
  selectable?: boolean;

  @Column("varchar", { nullable: true })
  macroColumnType: "string" | "array" | "date";

  @Column("varchar", { unique: false })
  macroLabel: string;

  @Column("varchar")
  macroParam: string;

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
