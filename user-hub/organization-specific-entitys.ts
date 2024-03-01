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
export class OrganizationDetails extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  organizationId!: string;

  @Column({ type: "varchar", default: null, nullable: true })
  summary: string;

  @Column({ type: "varchar", default: null, nullable: true })
  licenseNumber: string;

  @Column("text", { array: true, default: [], nullable: true })
  languageSpoken: string[];

  @Column("text", { array: true, default: [], nullable: true })
  areaOfExpertise: string[];

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

@Entity()
export class OrganizationAwards extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  organizationId!: string;

  @Column({ type: "varchar", nullable: false })
  title: string;

  @Column({ type: "varchar", default: null, nullable: true })
  issuer: string;

  @Column({ type: "bigint", nullable: false })
  issuedOn: number;

  @Column({ type: "varchar", default: null, nullable: true })
  description: string;

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

@Entity()
export class OrganizationCertifications extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  title: string;

  @Column({ type: "varchar", default: null, nullable: true })
  issuer: string;

  @Column({ type: "bigint", nullable: false })
  issuedOn: number;

  @Column({ type: "bigint", nullable: false })
  expiresOn: number;

  @Column({ type: "varchar", default: null, nullable: true })
  credentialId: string;

  @Column({ type: "varchar", default: null, nullable: true })
  credentialUrl: string;

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

@Entity()
export class OrganizationPublications extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  title: string;

  @Column({ type: "varchar", default: null, nullable: true })
  publisher: string;

  @Column({ type: "bigint", nullable: false })
  publishedDate: number;

  @Column({ type: "varchar", default: null, nullable: true })
  author: string;

  @Column({ type: "varchar", default: null, nullable: true })
  publicationUrl: string;

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

@Entity()
export class OrganizationPresentationsOrEvents extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  organizationId: string;

  @Column({ type: "varchar", nullable: false })
  eventName: string;

  @Column({ type: "varchar", nullable: false })
  location: string;

  @Column({ type: "bigint", nullable: false })
  startDate: number;

  @Column({ type: "bigint", nullable: false })
  endDate: number;

  @Column({ type: "varchar", default: null, nullable: true })
  venueDetail: string;

  @Column({ type: "boolean", default: false })
  isPublicVisible: boolean;

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

@Entity()
export class OrganizationPortfolio extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  organizationId: string;

  @Column({ type: "varchar", nullable: true })
  projectName: string;

  @Column({ type: "varchar", nullable: true })
  projectType: string;

  @Column({ type: "varchar", default: null, nullable: true })
  description: string;

  @Column({ type: "varchar", default: null, nullable: true })
  projectDuration: string;

  @Column({ type: "varchar", default: null, nullable: true })
  location: string;

  @Column({ type: "boolean", default: false })
  isPublicVisible: boolean;

  @Column("text", { array: true, default: [] })
  assets: Array<{ type: "video" | "image"; url: string }> | null;

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
