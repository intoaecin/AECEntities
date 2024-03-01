import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  DeleteDateColumn,
  Entity,
  EntitySubscriberInterface,
  EventSubscriber,
  Index,
  InsertEvent,
  PrimaryGeneratedColumn,
  UpdateEvent,
} from "typeorm";
import { sendMessageToAccounts } from "../handlers";

@Entity()
@Index(["accountId"], { unique: true })
export class OrganizationUsers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn("uuid")
  organizationUsersId: string;

  @Column({ nullable: true, default: null })
  accountId: string;

  @Column("uuid")
  organizationId: string;

  @Column("varchar")
  organizationType: string;

  @Column("uuid")
  userId: string;

  @Column("boolean")
  isSuperAdmin: boolean;

  @Column("text", { array: true, default: null, nullable: true })
  permissions: string[];

  @Column({ type: "varchar", default: "PENDING" })
  userStatus: string;

  @Column("varchar", { default: "Admin", nullable: false })
  designation: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @Column({ type: "bigint", nullable: true, default: null })
  userStatusUpdatedAt: number;

  @DeleteDateColumn({
    name: "deletedAt",
    type: "bigint",
    default: null,
    nullable: true,
  })
  deletedAt: number;

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

@EventSubscriber()
export class OrganizationUsersSubscriber
  implements EntitySubscriberInterface<OrganizationUsers>
{
  listenTo() {
    return OrganizationUsers;
  }
  async afterInsert(event: InsertEvent<OrganizationUsers>) {
    const id = event.entity.id + 1000;
    event.entity.accountId = "AEC-" + id;
    await event.manager.getRepository(OrganizationUsers).save(event.entity);
  }
  async beforeUpdate(event: UpdateEvent<OrganizationUsers>) {
    if (
      JSON.stringify(event.databaseEntity.permissions) !==
      JSON.stringify(event.entity.permissions)
    ) {
      sendMessageToAccounts(event.entity.organizationUsersId, {
        ACTION: "REFRESH_PERMISSIONS",
      });
    }
    if (event.entity.userStatus !== "ACCEPTED") {
      sendMessageToAccounts(event.entity.organizationUsersId, {
        ACTION: "SIGNOUT",
      });
    }
  }
}
