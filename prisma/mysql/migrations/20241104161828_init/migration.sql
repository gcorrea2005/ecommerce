-- AlterTable
ALTER TABLE `tblcategory` MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `tblgroup` MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `tblproduct` ADD COLUMN `description` TEXT NULL;

-- AlterTable
ALTER TABLE `tblsubgroup` MODIFY `description` TEXT NULL;
