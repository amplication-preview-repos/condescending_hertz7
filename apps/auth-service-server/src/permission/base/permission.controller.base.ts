/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PermissionService } from "../permission.service";
import { PermissionCreateInput } from "./PermissionCreateInput";
import { Permission } from "./Permission";
import { PermissionFindManyArgs } from "./PermissionFindManyArgs";
import { PermissionWhereUniqueInput } from "./PermissionWhereUniqueInput";
import { PermissionUpdateInput } from "./PermissionUpdateInput";

export class PermissionControllerBase {
  constructor(protected readonly service: PermissionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Permission })
  async createPermission(
    @common.Body() data: PermissionCreateInput
  ): Promise<Permission> {
    return await this.service.createPermission({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Permission] })
  @ApiNestedQuery(PermissionFindManyArgs)
  async permissions(@common.Req() request: Request): Promise<Permission[]> {
    const args = plainToClass(PermissionFindManyArgs, request.query);
    return this.service.permissions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Permission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async permission(
    @common.Param() params: PermissionWhereUniqueInput
  ): Promise<Permission | null> {
    const result = await this.service.permission({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Permission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePermission(
    @common.Param() params: PermissionWhereUniqueInput,
    @common.Body() data: PermissionUpdateInput
  ): Promise<Permission | null> {
    try {
      return await this.service.updatePermission({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Permission })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePermission(
    @common.Param() params: PermissionWhereUniqueInput
  ): Promise<Permission | null> {
    try {
      return await this.service.deletePermission({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
