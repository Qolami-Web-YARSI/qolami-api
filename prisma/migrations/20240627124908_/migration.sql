-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `profileUrl` VARCHAR(191) NOT NULL DEFAULT 'https://tl.vhv.rs/dpng/s/541-5413387_log-in-sign-up-micro-environment-diagram-hd.png',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson_One` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hurufHijaiyah` VARCHAR(191) NOT NULL,
    `colorCard` VARCHAR(191) NOT NULL,
    `hoverCard` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson_Two` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hurufBerharakatFathah` VARCHAR(191) NOT NULL,
    `colorCard` VARCHAR(191) NOT NULL,
    `hoverCard` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson_One_Content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hurufName` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `video` VARCHAR(191) NOT NULL,
    `lessonOneId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson_Two_Content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hurufName` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `video` VARCHAR(191) NOT NULL,
    `lessonTwoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activityName` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lesson_One_Content` ADD CONSTRAINT `Lesson_One_Content_lessonOneId_fkey` FOREIGN KEY (`lessonOneId`) REFERENCES `Lesson_One`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson_Two_Content` ADD CONSTRAINT `Lesson_Two_Content_lessonTwoId_fkey` FOREIGN KEY (`lessonTwoId`) REFERENCES `Lesson_Two`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
